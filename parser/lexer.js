(function(){

// $stream: plain old JS string with ruby source code
function Lexer ($stream)
{

// the yylex() method and all public data sit here
var lexer = this;
// the end of stream had been reached
lexer.eofp = false;
// the string to be parsed in the nex lex() call
lexer.lex_strterm = null;
// the main point of interaction with the parser out there
lexer.lex_state = 0;
// to store the main state
lexer.last_state = 0;
// have the lexer seen a space somewhere before the current char
lexer.space_seen = false;
// have no idea TODO
lexer.command_start = false;
lexer.cmd_state = false;
// have no idea TODO
lexer.cond_stack = 0;
// have no idea TODO
lexer.cmdarg_stack = 0;
// controls level of nesting in `()` or `[]`
lexer.paren_nest = 0;
lexer.lpar_beg = 0;
// controls level of nesting in `{}`
lexer.brace_nest = 0;
// controls the nesting of states of condition-ness and cmdarg-ness
lexer.cond_stack = 0;
lexer.cmdarg_stack = 0;
// how deep in in singleton definition are we?
lexer.in_single = 0;
// are we in def …
lexer.in_def = 0;
// current method id/name (while in def …)
lexer.cur_mid = '';
// defined? … has its own roles of lexing
lexer.in_defined = false;
// have we seen `__END__` already in lexer?
lexer.ruby__end__seen = false;
// TODO: check out list of stateful variables with the original

// all lexer states codes had been moved to parse.y prologue

// the shortcut for checking `lexer.lex_state` over and over again
function IS_lex_state (ls)
{
  return lexer.lex_state & ls;
}
function IS_lex_state_for (state, ls)
{
  return state & ls;
}

# define BITSTACK_PUSH(stack, n)	((stack) = ((stack)<<1)|((n)&1))
# define BITSTACK_POP(stack)	((stack) = (stack) >> 1)
# define BITSTACK_LEXPOP(stack)	((stack) = ((stack) >> 1) | ((stack) & 1))
# define BITSTACK_SET_P(stack)	((stack)&1)

// interface to lexer.cond_stack
// void
lexer.COND_PUSH = function (n)
{
  // was: BITSTACK_PUSH(cond_stack, n)
  lexer.cond_stack = (lexer.cond_stack << 1) | (n & 1);
}
// void
lexer.COND_POP = function ()
{
  // was: BITSTACK_POP(cond_stack)
  lexer.cond_stack >>= 1;
}
// void
lexer.COND_LEXPOP = function ()
{
  // was: BITSTACK_LEXPOP(cond_stack)
  var stack = lexer.cond_stack;
  lexer.cond_stack = (stack >> 1) | (stack & 1);
}
// int
lexer.COND_P = function ()
{
  // was: BITSTACK_SET_P(cond_stack)
  return lexer.cond_stack & 1;
}

// interface to lexer.cmdarg_stack
// void
lexer.CMDARG_PUSH = function (n)
{
  // was: BITSTACK_PUSH(cmdarg_stack, n)
  lexer.cmdarg_stack = (lexer.cmdarg_stack << 1) | (n & 1);
}
// void
lexer.CMDARG_POP = function ()
{
  // was: BITSTACK_POP(cmdarg_stack)
  lexer.cmdarg_stack >>= 1;
}
// void
lexer.CMDARG_LEXPOP = function ()
{
  // was: BITSTACK_LEXPOP(cmdarg_stack)
  var stack = lexer.cmdarg_stack;
  lexer.cmdarg_stack = (stack >> 1) | (stack & 1);
}
// int
lexer.CMDARG_P = function ()
{
  // was: BITSTACK_SET_P(cmdarg_stack)
  return lexer.cmdarg_stack & 1;
}



// few more shortcuts
function IS_ARG () { return lexer.lex_state & EXPR_ARG_ANY }
function IS_END () { return lexer.lex_state & EXPR_END_ANY }
function IS_BEG () { return lexer.lex_state & EXPR_BEG_ANY }
function IS_LABEL_POSSIBLE ()
{
  return (IS_lex_state(EXPR_BEG) && !lexer.cmd_state) || IS_ARG();
}
function IS_LABEL_SUFFIX (n)
{
  return peek_n(':', n) && !peek_n(':', n + 1);
}

// em…
function IS_SPCARG (c)
{
  return IS_ARG() &&
         lexer.space_seen &&
         !ISSPACE(c);
}

function IS_AFTER_OPERATOR () { return IS_lex_state(EXPR_FNAME | EXPR_DOT) }

function ambiguous_operator (op, syn)
{
  warning("`"+op+"' after local variable is interpreted as binary operator");
  warning("even though it seems like "+syn);
}
// very specific warning function :)
function warn_balanced (op, syn, c)
{
    if
    (
      !IS_lex_state_for
      (
        lexer.last_state,
        EXPR_CLASS | EXPR_DOT | EXPR_FNAME | EXPR_ENDFN | EXPR_ENDARG
      )
      && lexer.space_seen
      && !ISSPACE(c)
    )
    {
      ambiguous_operator(op, syn);
    }
}

var STR_FUNC_ESCAPE = 0x01;
var STR_FUNC_EXPAND = 0x02;
var STR_FUNC_REGEXP = 0x04;
var STR_FUNC_QWORDS = 0x08;
var STR_FUNC_SYMBOL = 0x10;
var STR_FUNC_INDENT = 0x20;

// enum string_type
var str_squote = 0;
var str_dquote = STR_FUNC_EXPAND;
var str_xquote = STR_FUNC_EXPAND;
var str_regexp = STR_FUNC_REGEXP | STR_FUNC_ESCAPE | STR_FUNC_EXPAND;
var str_sword = STR_FUNC_QWORDS;
var str_dword = STR_FUNC_QWORDS | STR_FUNC_EXPAND;
var str_ssym = STR_FUNC_SYMBOL;
var str_dsym = STR_FUNC_SYMBOL | STR_FUNC_EXPAND;





// here go all $strem related functions

function ISUPPER (c)
{
  return 'A' <= c && c <= 'Z';
}
function ISSPACE (c)
{
  return (
    // the most common checked first
    c === ' '  || c === '\n' || c === '\t' ||
    c === '\f' || c === '\v'
  )
}
// our own modification, does not match `\n`
// used to avoid crossing end of line on white space search
function ISSPACE_NOT_N (c)
{
  return (
    // the most common checked first
    c === ' '  || c === '\t' ||
    c === '\f' || c === '\v'
  )
}

var $streamLength = $stream.length;
var $pos = 0;

// just an emulation of pos[i] from C
function nthchar (i)
{
  return $stream[$pos + i];
}

// search for `\n` and stop right after it,
// if the position of `\n` been found at 3: "abc|\n"
// then `$pos` will be 4: "abc\n|"
function lex_goto_eol ()
{
  do
  {
    var c = nextc();
  }
  while (c != '\n' && c != '');
}

// forecast, if the nextc() will return character `c`
function peek (c)
{
  return $pos < $streamLength && c == $stream[$pos];
}

// forecast, if the nextc() will return character `c`
// after n calls
function peek_n (c, n)
{
  var pos = $pos + n;
  return pos < $streamLength && c == $stream[pos];
}

// returns next character from the `$stream`,
// or an empty string '' if there is no more characters
function nextc ()
{
  if ($pos >= $streamLength)
  {
    lexer.eofp = true;
    return '';
  }
  
  return $stream[$pos++];
}
// our addition
function what_nextc ()
{
  if ($pos >= $streamLength)
  {
    return '';
  }
  
  return $stream[$pos];
}
function what_nextc_n (n)
{
  var pos = $pos + n;
  if (pos >= $streamLength)
  {
    return '';
  }
  
  return $stream[pos];
}
// expects rex in this form: `/blablabla|/g`
// that means `blablabla` or empty string (to prevent deep search)
function match_grex (rex)
{
  rex.lastIndex = $pos;
  // there is always a match for empty string
  return rex.exec($stream)[0];
}
// step back for one character and check
// if the current character is equal to `c`
function pushback (c)
{
  if (c == '')
  {
    if ($pos != $streamLength)
      throw 'lexer error: pushing back wrong EOF char';
    return;
  }
  
  $pos--;
  if ($stream[$pos] != c)
    throw 'lexer error: pushing back wrong "'+c+'" char';
}

// was begin af a line (`^` in terms of regexps) before last `nextc()`,
// that true if we're here "a|bc" of here "abc\na|bc"
function was_bol ()
{
  return $pos === 1 || $stream[$pos-2] === '\n'
}
// out own addition
// is begin af a line (`^` in terms of regexps) at the `$pos`,
// that true if we're here "|abc" of here "abc\n|abc"
function is_bol ()
{
  return $pos === 0 || $stream[$pos-1] === '\n'
}


// token related stuff

var tokenbuf = ''
function newtok ()
{
  tokenbuf = '';
  return tokenbuf;
}
function tokadd (c)
{
  tokenbuf += c;
  return c;
}
var tokadd_mbchar = tokadd;
function tokfix () { /* was: tokenbuf[tokidx]='\0'*/ }
function tok () { return tokenbuf; }
function toklen () { return tokenbuf.length; }
function toklast ()
{
  return tokenbuf.substr(-1)
  // was: tokidx>0?tokenbuf[tokidx-1]:0)
}


// TODO
this.getStartPos = function () { return $pos; }
this.getEndPos = function () { return $pos + 1; }
this.getLVal = function () { return tokenbuf; }



// other stuff

function parser_is_identchar (c)
{
  // \w = [A-Za-z0-9_]
  return /^\w/.test(c)
}

function NEW_STRTERM (func, term, paren)
{
  return {
    type: 'NODE_STRTERM',
    func: func,
    tok: term,
    paren: paren,
    pos_after_eos: 0, // to be calculated in `here_document()`
    heredoc_end_found_last_time: false,
    line: 0 // TODO: `ruby_sourceline`
  };
}
// our addition
function NEW_HEREDOCTERM (func, term)
{
  return {
    type: 'NODE_HEREDOC',
    func: func,
    tok: term,
    paren: '',
    pos_after_eos: 0, // to be calculated in `here_document()`
    heredoc_end_found_last_time: false,
    line: 0 // TODO: `ruby_sourceline`
  };
}

// char to code shortcut
function $ (c) { return c.charCodeAt(0) }
function $$ (code) { return String.fromCharCode(code) }

function ISASCII (c)
{
  return $(c) < 128;
}

function ISDIGIT (c)
{
  return /^\d$/.test(c);
}
function ISALNUM (c)
{
  return /^\w$/.test(c);
}

// TODO: get rid of such a piece of junk :)
function arg_ambiguous ()
{
  warning("ambiguous first argument; put parentheses or even spaces");
  return true;
}






this.yylex = function yylex ()
{
  var c = '';
  lexer.space_seen = false;
  
  if (false) // TODO
  // if (lexer.lex_strterm)
  {
    var token = 0;
    if (lexer.lex_strterm.type == 'NODE_HEREDOC')
    {
      token = here_document(lexer.lex_strterm);
      if (token == tSTRING_END)
      {
        lexer.lex_strterm = null;
        lexer.lex_state = EXPR_END;
      }
    }
    else
    {
      token = parse_string(lexer.lex_strterm);
      if (token == tSTRING_END || token == tREGEXP_END)
      {
        lexer.lex_strterm = null;
        lex_state = EXPR_END;
      }
    }
    return token;
  }
  
  lexer.cmd_state = lexer.command_start;
  lexer.command_start = false;
  
  retry: for (;;)
  {
  lexer.last_state = lexer.lex_state;
  the_giant_switch:
  switch (c = nextc())
  {
    // different signs of the input end
    case '\0':    // NUL
    case '\x04':  // ^D
    case '\x1a':  // ^Z
    case '':      // end of script.
    {
      return 0;
    }
    
    // white spaces
    case ' ':
    case '\t':
    case '\f':
    case '\r': // TODO: cream on `\r` everywhere, or clear it out
    case '\v':    // '\13'
    {
      lexer.space_seen = true;
      continue retry;
    }
    
    // it's a comment
    case '#':
    {
      lex_goto_eol();
      // fall throug to '\n'
    }
    case '\n':
    {
      if (IS_lex_state(EXPR_BEG | EXPR_VALUE | EXPR_CLASS | EXPR_FNAME | EXPR_DOT))
      {
        continue retry;
      }
      after_backslash_n: while ((c = nextc()))
      {
        switch (c)
        {
          case ' ':
          case '\t':
          case '\f':
          case '\r':
          case '\v':    // '\13'
            lexer.space_seen = true;
            break;
          case '.':
          {
            if ((c = nextc()) != '.')
            {
              pushback(c);
              pushback('.');
              continue retry; // was: goto retry;
            }
          }
          default:
            // --ruby_sourceline; TODO
            // lex_nextline = lex_lastline; TODO
            
          // EOF no decrement
          case '':
            lex_goto_eol();
            break after_backslash_n;
        }
      }
      // lands: break after_backslash_n;
      lexer.command_start = true;
      lexer.lex_state = EXPR_BEG;
      return $('\n');
    }
  
    case '*':
    {
      var token = 0
      if ((c = nextc()) == '*')
      {
        if ((c = nextc()) == '=')
        {
          // set_yylval_id(tPOW); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        if (IS_SPCARG(c))
        {
          warning("`**' interpreted as argument prefix");
          token = tDSTAR;
        }
        else if (IS_BEG())
        {
          token = tDSTAR;
        }
        else
        {
          warn_balanced("**", "argument prefix", c);
          token = tPOW;
        }
      }
      else
      {
        if (c == '=')
        {
          // set_yylval_id('*'); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        if (IS_SPCARG(c))
        {
          warning("`*' interpreted as argument prefix");
          token = tSTAR;
        }
        else if (IS_BEG())
        {
          token = tSTAR;
        }
        else
        {
          warn_balanced("*", "argument prefix", c);
          token = $('*');
        }
      }
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      return token;
    }
    
    case '!':
    {
      c = nextc();
      if (IS_AFTER_OPERATOR())
      {
        lexer.lex_state = EXPR_ARG;
        if (c == '@')
        {
          return $('!');
        }
      }
      else
      {
        lexer.lex_state = EXPR_BEG;
      }
      if (c == '=')
      {
        return tNEQ;
      }
      if (c == '~')
      {
        return tNMATCH;
      }
      pushback(c);
      return $('!');
    }
    
    case '=':
    {
      // TODO: skip embedded rd document */

      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      if ((c = nextc()) == '=')
      {
        if ((c = nextc()) == '=')
        {
          return tEQQ;
        }
        pushback(c);
        return tEQ;
      }
      if (c == '~')
      {
        return tMATCH;
      }
      else if (c == '>')
      {
        return tASSOC;
      }
      pushback(c);
      return $('=');
    }
    
    case '<':
    {
      lexer.last_state = lexer.lex_state;
      c = nextc();
      if (c == '<' &&
          !IS_lex_state(EXPR_DOT | EXPR_CLASS) &&
          !IS_END() && (!IS_ARG() || lexer.space_seen))
      {
        var token = heredoc_identifier();
        if (token)
          return token;
      }
      if (IS_AFTER_OPERATOR())
      {
        lexer.lex_state = EXPR_ARG;
      }
      else
      {
        if (IS_lex_state(EXPR_CLASS))
          lexer.command_start = true;
        lexer.lex_state = EXPR_BEG;
      }
      if (c == '=')
      {
        if ((c = nextc()) == '>')
        {
          return tCMP;
        }
        pushback(c);
        return tLEQ;
      }
      if (c == '<')
      {
        if ((c = nextc()) == '=')
        {
          // set_yylval_id(tLSHFT); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        warn_balanced("<<", "here document", c);
        return tLSHFT;
      }
      pushback(c);
      return $('<');
    }
    
    case '>':
    {
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      if ((c = nextc()) == '=')
      {
        return tGEQ;
      }
      if (c == '>')
      {
        if ((c = nextc()) == '=')
        {
          // set_yylval_id(tRSHFT); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        return tRSHFT;
      }
      pushback(c);
      return $('>');
    }
    
    case '"':
    {
      lexer.lex_strterm = NEW_STRTERM(str_dquote, '"', '')
      return tSTRING_BEG;
    }
    
    case '`':
    {
      if (IS_lex_state(EXPR_FNAME))
      {
        lexer.lex_state = EXPR_ENDFN;
        return $(c);
      }
      if (IS_lex_state(EXPR_DOT))
      {
        if (lexer.cmd_state)
          lexer.lex_state = EXPR_CMDARG;
        else
          lexer.lex_state = EXPR_ARG;
        return $(c);
      }
      lexer.lex_strterm = NEW_STRTERM(str_xquote, '`', '');
      return tXSTRING_BEG;
    }
    
    case '\'':
    {
      lexer.lex_strterm = NEW_STRTERM(str_squote, '\'', '');
      return tSTRING_BEG;
    }
    
    case '?':
    {
      // trying to catch ternary operator
      if (IS_END())
      {
        lexer.lex_state = EXPR_VALUE;
        return $('?');
      }
      c = nextc();
      if (c == '')
      {
        compile_error("incomplete character syntax");
        return 0;
      }
      if (ISSPACE(c))
      {
        if (!IS_ARG())
        {
          var c2 = '';
          switch (c)
          {
            case ' ':
              c2 = 's';
              break;
            case '\n':
              c2 = 'n';
              break;
            case '\t':
              c2 = 't';
              break;
            case '\v':
              c2 = 'v';
              break;
            case '\r':
              c2 = 'r';
              break;
            case '\f':
              c2 = 'f';
              break;
          }
          if (c2)
          {
            warning("invalid character syntax; use ?\\" + c2);
          }
        }
        pushback(c);
        lexer.lex_state = EXPR_VALUE;
        return $('?');
      }
      
      // the `?ab` construction
      if (parser_is_identchar(c) && parser_is_identchar(what_nextc()))
      {
        pushback(c);
        lex_state = EXPR_VALUE;
        return $('?');
      }
      
      // definitely it's a character
      
      newtok();
      if (c == '\\')
      {
        c = nextc();
        if (c === 'u')
        {
          c = parser_tokadd_utf8(false, false, false);
          tokadd(c);
        }
        else if (!(ISASCII(c)))
        {
          if (tokadd(c) == '')
            return 0;
        }
        else
        {
          pushback(c);
          // TODO:
          // c = read_escape(0, &enc);
          // tokadd(c);
        }
      }
      else
      {
        tokadd(c);
      }
      tokfix();
      // set_yylval_str(STR_NEW3(tok(), toklen(), enc, 0)); TODO
      lexer.lex_state = EXPR_END;
      return tCHAR;
    }
    
    case '&':
    {
      if ((c = nextc()) == '&')
      {
        lexer.lex_state = EXPR_BEG;
        if ((c = nextc()) == '=')
        {
          // set_yylval_id(tANDOP); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        return tANDOP;
      }
      else if (c == '=')
      {
        // set_yylval_id('&'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      pushback(c);
      var t = $(c);
      if (IS_SPCARG(c))
      {
        warning("`&' interpreted as argument prefix");
        t = tAMPER;
      }
      else if (IS_BEG())
      {
        t = tAMPER;
      }
      else
      {
        warn_balanced("&", "argument prefix", c);
        t = $('&');
      }
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      return t;
    }
    
    case '|':
    {
      if ((c = nextc()) == '|')
      {
        lexer.lex_state = EXPR_BEG;
        if ((c = nextc()) == '=')
        {
          // set_yylval_id(tOROP); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        pushback(c);
        return tOROP;
      }
      if (c == '=')
      {
        // set_yylval_id('|'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      pushback(c);
      return $('|');
    }
    
    case '+':
    {
      c = nextc();
      if (IS_AFTER_OPERATOR())
      {
        lexer.lex_state = EXPR_ARG;
        if (c == '@')
        {
          return tUPLUS;
        }
        pushback(c);
        return $('+');
      }
      if (c == '=')
      {
        // set_yylval_id('+'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      if (IS_BEG() || (IS_SPCARG(c) && arg_ambiguous()))
      {
        lexer.lex_state = EXPR_BEG;
        pushback(c);
        if (c != '' && ISDIGIT(c))
        {
          c = '+';
          return start_num(c); // was: goto start_num;
        }
        return tUPLUS;
      }
      lexer.lex_state = EXPR_BEG;
      pushback(c);
      warn_balanced("+", "unary operator", c);
      return $('+');
    }
    
    case '-':
    {
      c = nextc();
      if (IS_AFTER_OPERATOR())
      {
        lexer.lex_state = EXPR_ARG;
        if (c == '@')
        {
          return tUMINUS;
        }
        pushback(c);
        return $('-');
      }
      if (c == '=')
      {
        // set_yylval_id('-'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      if (c == '>')
      {
        lexer.lex_state = EXPR_ENDFN;
        return tLAMBDA;
      }
      if (IS_BEG() || (IS_SPCARG(c) && arg_ambiguous()))
      {
        lexer.lex_state = EXPR_BEG;
        pushback(c);
        if (c != '' && ISDIGIT(c))
        {
          return tUMINUS_NUM;
        }
        return tUMINUS;
      }
      lexer.lex_state = EXPR_BEG;
      pushback(c);
      warn_balanced("-", "unary operator", c);
      return $('-');
    }
    
    case '.':
    {
      lexer.lex_state = EXPR_BEG;
      if ((c = nextc()) == '.')
      {
        if ((c = nextc()) == '.')
        {
          return tDOT3;
        }
        pushback(c);
        return tDOT2;
      }
      pushback(c);
      if (c != '' && ISDIGIT(c))
      {
        yyerror("no .<digit> floating literal anymore; put 0 before dot");
      }
      lexer.lex_state = EXPR_DOT;
      return $('.');
    }
    
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    {
      return start_num(c);
    }
    
    case ')':
    case ']':
      lexer.paren_nest--;
    case '}':
    {
      var t = $(c);
      lexer.COND_LEXPOP();
      lexer.CMDARG_LEXPOP();
      if (c == ')')
        lexer.lex_state = EXPR_ENDFN;
      else
        lexer.lex_state = EXPR_ENDARG;
      if (c == '}')
      {
        if (!lexer.brace_nest--)
          t = tSTRING_DEND;
      }
      return t;
    }
    
    case ':':
    {
      c = nextc();
      if (c == ':')
      {
        if (IS_BEG() || IS_lex_state(EXPR_CLASS) || IS_SPCARG(''))
        {
          lexer.lex_state = EXPR_BEG;
          return tCOLON3;
        }
        lexer.lex_state = EXPR_DOT;
        return tCOLON2;
      }
      if (IS_END() || ISSPACE(c))
      {
        pushback(c);
        warn_balanced(":", "symbol literal", c);
        lexer.lex_state = EXPR_BEG;
        return $(':');
      }
      switch (c)
      {
        case '\'':
          lexer.lex_strterm = NEW_STRTERM(str_ssym, c, '');
          break;
        case '"':
          lexer.lex_strterm = NEW_STRTERM(str_dsym, c, '');
          break;
        default:
          pushback(c);
          break;
      }
      lexer.lex_state = EXPR_FNAME;
      return tSYMBEG;
    }
    
    case '/':
    {
      if (IS_lex_state(EXPR_BEG_ANY))
      {
        lexer.lex_strterm = NEW_STRTERM(str_regexp, '/', '');
        return tREGEXP_BEG;
      }
      if ((c = nextc()) == '=')
      {
        // set_yylval_id('/'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      pushback(c);
      if (IS_SPCARG(c))
      {
        arg_ambiguous();
        lexer.lex_strterm = NEW_STRTERM(str_regexp, '/', '');
        return tREGEXP_BEG;
      }
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      warn_balanced("/", "regexp literal", c);
      return $('/');
    }
    
    case '^':
    {
      if ((c = nextc()) == '=')
      {
        // set_yylval_id('^'); TODO
        lexer.lex_state = EXPR_BEG;
        return tOP_ASGN;
      }
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      pushback(c);
      return $('^');
    }
    
    case ';':
    {
      lexer.lex_state = EXPR_BEG;
      lexer.command_start = true;
      return $(';');
    }
    
    case ',':
    {
      lexer.lex_state = EXPR_BEG;
      return $(',');
    }
    
    case '~':
    {
      if (IS_AFTER_OPERATOR())
      {
        if ((c = nextc()) != '@')
        {
          pushback(c);
        }
        lexer.lex_state = EXPR_ARG;
      }
      else
      {
        lexer.lex_state = EXPR_BEG;
      }
      return $('~');
    }
    
    case '(':
    {
      var t = $(c);
      if (IS_BEG())
      {
        t = tLPAREN;
      }
      else if (IS_SPCARG(''))
      {
        t = tLPAREN_ARG;
      }
      lexer.paren_nest++;
      lexer.COND_PUSH(0);
      lexer.CMDARG_PUSH(0);
      lexer.lex_state = EXPR_BEG;
      return t;
    }
    
    case '[':
    {
      var t = $(c);
      lexer.paren_nest++;
      if (IS_AFTER_OPERATOR())
      {
        lexer.lex_state = EXPR_ARG;
        if ((c = nextc()) == ']')
        {
          if ((c = nextc()) == '=')
          {
            return tASET;
          }
          pushback(c);
          return tAREF;
        }
        pushback(c);
        return $('[');
      }
      else if (IS_BEG())
      {
        t = tLBRACK;
      }
      else if (IS_ARG() && lexer.space_seen)
      {
        t = tLBRACK;
      }
      lexer.lex_state = EXPR_BEG;
      lexer.COND_PUSH(0);
      lexer.CMDARG_PUSH(0);
      return t;
    }
    
    case '{':
    {
      var t = $(c);
      ++lexer.brace_nest;
      if (lexer.lpar_beg && lexer.lpar_beg == lexer.paren_nest)
      {
        lexer.lex_state = EXPR_BEG;
        lexer.lpar_beg = 0;
        --lexer.paren_nest;
        lexer.COND_PUSH(0);
        lexer.CMDARG_PUSH(0);
        return tLAMBEG;
      }
      if (IS_ARG() || IS_lex_state(EXPR_END | EXPR_ENDFN))
        t = $('{');                /* block (primary) */
      else if (IS_lex_state(EXPR_ENDARG))
        t = tLBRACE_ARG;        /* block (expr) */
      else
        t = tLBRACE;            /* hash */
      lexer.COND_PUSH(0);
      lexer.CMDARG_PUSH(0);
      lexer.lex_state = EXPR_BEG;
      if (t != tLBRACE)
        lexer.command_start = true;
      return t;
    }
    
    case '\\':
    {
      c = nextc();
      if (c == '\n')
      {
        lexer.space_seen = true;
        // skip \\n
        continue retry; // was: goto retry;
      }
      pushback(c);
      return $('\\');
    }
    
    case '%':
    {
      var term = '';
      var paren = '';
      
      quotation:
      for (;;) // a label
      {
        // this label enulating loop expects the lex_state
        // to be constant within its boudaries
        if (IS_lex_state(EXPR_BEG_ANY))
        {
          c = nextc();
          // was: quotation:
          if (c == '' || !ISALNUM(c))
          {
            term = c;
            c = 'Q';
          }
          else
          {
            term = nextc();
            if (ISALNUM(term) || !ISASCII(term))
            {
              yyerror("unknown type of %string");
              return 0;
            }
          }
          if (c == '' || term == '')
          {
            compile_error("unterminated quoted string meets end of file");
            return 0;
          }
          paren = term;
          if (term == '(')
            term = ')';
          else if (term == '[')
            term = ']';
          else if (term == '{')
            term = '}';
          else if (term == '<')
            term = '>';
          else
            paren = '';

          switch (c)
          {
            case 'Q':
              lexer.lex_strterm = NEW_STRTERM(str_dquote, term, paren);
              return tSTRING_BEG;

            case 'q':
              lexer.lex_strterm = NEW_STRTERM(str_squote, term, paren);
              return tSTRING_BEG;

            case 'W':
              lexer.lex_strterm = NEW_STRTERM(str_dword, term, paren);
              do
              {
                c = nextc();
              }
              while (ISSPACE(c));
              pushback(c);
              return tWORDS_BEG;

            case 'w':
              lexer.lex_strterm = NEW_STRTERM(str_sword, term, paren);
              do
              {
                c = nextc();
              }
              while (ISSPACE(c));
              pushback(c);
              return tQWORDS_BEG;

            case 'I':
              lexer.lex_strterm = NEW_STRTERM(str_dword, term, paren);
              do
              {
                c = nextc();
              }
              while (ISSPACE(c));
              pushback(c);
              return tSYMBOLS_BEG;

            case 'i':
              lexer.lex_strterm = NEW_STRTERM(str_sword, term, paren);
              do
              {
                c = nextc();
              }
              while (ISSPACE(c));
              pushback(c);
              return tQSYMBOLS_BEG;

            case 'x':
              lexer.lex_strterm = NEW_STRTERM(str_xquote, term, paren);
              return tXSTRING_BEG;

            case 'r':
              lexer.lex_strterm = NEW_STRTERM(str_regexp, term, paren);
              return tREGEXP_BEG;

            case 's':
              lexer.lex_strterm = NEW_STRTERM(str_ssym, term, paren);
              lexer.lex_state = EXPR_FNAME;
              return tSYMBEG;

            default:
              yyerror("unknown type of %string");
              return 0;
          }
        }
        if ((c = nextc()) == '=')
        {
          // set_yylval_id('%'); TODO
          lexer.lex_state = EXPR_BEG;
          return tOP_ASGN;
        }
        if (IS_SPCARG(c))
        {
          pushback(c); // added to jump to top
          continue quotation; // was: goto quotation;
        }
        break; // the for (;;) label-loop
      } // for (;;) quotation
      lexer.lex_state = IS_AFTER_OPERATOR()? EXPR_ARG : EXPR_BEG;
      pushback(c);
      warn_balanced("%%", "string literal", c);
      return $('%');
    }
    
    // add before here :)
    
    default:
    {
      if (!parser_is_identchar(c))
      {
        compile_error("Invalid char `"+c+"' in expression");
        continue retry; // was: goto retry;
      }

      newtok();
      break the_giant_switch;
    }
  }
  
  do
  {
    if (tokadd(c) == '')
      return 0;
    c = nextc();
  }
  while (parser_is_identchar(c));
  switch (tok()[0])
  {
    case '@':
    case '$':
      pushback(c);
      break;
    default:
      if ((c == '!' || c == '?') && !peek('='))
      {
        tokadd(c);
      }
      else
      {
        pushback(c);
      }
  }
  tokfix();
  
  {
    var result = 0;

    lexer.last_state = lexer.lex_state;
    switch (tok()[0])
    {
      case '$':
        lexer.lex_state = EXPR_END;
        result = tGVAR;
        break;
      case '@':
        lexer.lex_state = EXPR_END;
        if (tok()[1] == '@')
          result = tCVAR;
        else
          result = tIVAR;
        break;

      default:
        if (toklast() == '!' || toklast() == '?')
        {
          result = tFID;
        }
        else
        {
          if (IS_lex_state(EXPR_FNAME))
          {
            if ((c = nextc()) == '=' && !peek('~') && !peek('>') &&
                (!peek('=') || (peek_n('>', 1))))
            {
              result = tIDENTIFIER;
              tokadd(c);
              tokfix();
            }
            else
            {
              pushback(c);
            }
          }
          if (result == 0 && ISUPPER(tok()[0]))
          {
            result = tCONSTANT;
          }
          else
          {
            result = tIDENTIFIER;
          }
        }

        if (IS_LABEL_POSSIBLE())
        {
          if (IS_LABEL_SUFFIX(0))
          {
            lexer.lex_state = EXPR_BEG;
            nextc();
            // set_yylval_name(TOK_INTERN(!ENC_SINGLE(mb))); TODO
            return tLABEL;
          }
        }
        if (!IS_lex_state(EXPR_DOT))
        {
          // const struct kwtable *kw;

          // See if it is a reserved word.
          var kw = rb_reserved_word[tok()];
          if (kw)
          {
            var state = lexer.lex_state;
            lexer.lex_state = kw.state;
            if (state == EXPR_FNAME)
            {
              // set_yylval_name(rb_intern(kw->name)); TODO
              return kw.id0;
            }
            if (lexer.lex_state == EXPR_BEG)
            {
              lexer.command_start = true;
            }
            if (kw.id0 == keyword_do)
            {
              if (lexer.lpar_beg && lexer.lpar_beg == lexer.paren_nest)
              {
                lexer.lpar_beg = 0;
                --lexer.paren_nest;
                return keyword_do_LAMBDA;
              }
              if (lexer.COND_P())
                return keyword_do_cond;
              if (lexer.CMDARG_P() && state != EXPR_CMDARG)
                return keyword_do_block;
              if (state & (EXPR_BEG | EXPR_ENDARG))
                return keyword_do_block;
              return keyword_do;
            }
            if (state & (EXPR_BEG | EXPR_VALUE))
              return kw.id0;
            else
            {
              if (kw.id0 != kw.id1)
                lexer.lex_state = EXPR_BEG;
              return kw.id1;
            }
          }
        }

        if (IS_lex_state(EXPR_BEG_ANY | EXPR_ARG_ANY | EXPR_DOT))
        {
          if (lexer.cmd_state)
          {
            lexer.lex_state = EXPR_CMDARG;
          }
          else
          {
            lexer.lex_state = EXPR_ARG;
          }
        }
        else if (lexer.lex_state == EXPR_FNAME)
        {
          lexer.lex_state = EXPR_ENDFN;
        }
        else
        {
          lexer.lex_state = EXPR_END;
        }
    }
    {
      // just take a plain string for now,
      // do not convert to a symbol, leave it to JS engine
      var ident = tok();

      // set_yylval_name(ident); TODO
      if (!IS_lex_state_for(lexer.last_state, EXPR_DOT | EXPR_FNAME) &&
          is_local_id(ident) && lvar_defined(ident))
      {
        lexer.lex_state = EXPR_END;
      }
    }
    return result;
  }
  
  // return c == '' ? 0 : 9999 // EOF or $undefined
  
  } // retry for loop
}

function heredoc_identifier ()
{
  var term = 0, func = 0, len = 0;
  
  var c = nextc()
  if (c == '-')
  {
    c = nextc();
    func = STR_FUNC_INDENT;
  }
  defaultt:
  {
    quoted:
    {
      switch (c)
      {
        case '\'':
          func |= str_squote;
          break; // was: goto quoted;
        case '"':
          func |= str_dquote;
          break; // was: goto quoted;
        case '`':
          func |= str_xquote;
          break; // was: goto quoted;
        default:
          break quoted
      }
      // was: quoted:
      newtok();
      // tokadd($$(func)); add it to the `strterm` property
      term = c;
      while ((c = nextc()) != '' && c != term)
      {
        if (tokadd_mbchar(c) == '')
          return 0;
      }
      if (c == '')
      {
        compile_error("unterminated here document identifier");
        return 0;
      }
      break defaultt;
    } // quoted:

    // was: default:
    if (!parser_is_identchar(c))
    {
      pushback(c);
      if (func & STR_FUNC_INDENT)
      {
        pushback('-');
      }
      return 0;
    }
    // TODO: create token with $stream.substring(start, end)
    newtok();
    term = '"';
    tokadd(func |= str_dquote);
    do
    {
      if (tokadd_mbchar(c) == '')
        return 0;
    }
    while ((c = nextc()) != '' && parser_is_identchar(c));
    pushback(c);
  } // defaultt:

  tokfix();
  lex_goto_eol();
  lexer.lex_strterm = NEW_HEREDOCTERM(func, tok());
  return term == '`' ? tXSTRING_BEG : tSTRING_BEG;
}

function here_document_error (eos)
{
  // was: error:
    compile_error("can't find string \""+eos+"\" anywhere before EOF");
  // was: restore:
    heredoc_restore(lexer.lex_strterm);
    lexer.lex_strterm = null;
    return 0;
}
function here_document (here)
{
  // instead of repeating the work just check the flag
  if (lexer.lex_strterm.heredoc_end_found_last_time)
  {
    // was: dispatch_heredoc_end(); a noop out of ripper
    heredoc_restore(lexer.lex_strterm);
    return tSTRING_END; // will erase `lexer.lex_strterm`
  }

  // we're at the heredoc content start
  var func = here.func,
      eos  = here.tok,
      indent = func & STR_FUNC_INDENT;

  var c = ''
  // // do not look for `#{}` stuff here
  // if (!(func & STR_FUNC_EXPAND))
  {
    // mark a start of the string token
    var start = $pos, end = 0;
    scaning: // the heredoc body
    for (;;)
    {
      c = nextc();
      // EOF reached in the middle of the heredoc
      if (c === '')
      {
        return here_document_error(eos);
      }
      
      // end of line here
      if (c === '\n')
      {
        // try to match the end of heredoc
        // and get the position right after it
        var match_end = lookahead_whole_match_pos(eos, indent, $pos);
        if (match_end !== -1)
        {
          end = $pos;
          lexer.lex_strterm.heredoc_end_found_last_time = true;
          lexer.lex_strterm.pos_after_eos = match_end;
          break scaning; // the heredoc body
        }
        continue scaning; // the heredoc body
      }
    }
  }
  // // try to find all the `#{}` stuff here
  // else
  // {
  //   /*      int mb = ENC_CODERANGE_7BIT, *mbp = &mb; */
  //   newtok();
  //   if (c == '#')
  //   {
  //     switch (c = nextc())
  //     {
  //       case '$':
  //       case '@':
  //         pushback(c);
  //         return tSTRING_DVAR;
  //       case '{':
  //         lexer.command_start = TRUE;
  //         return tSTRING_DBEG;
  //     }
  //     tokadd('#');
  //   }
  //   do
  //   {
  //     pushback(c);
  //     if ((c = tokadd_string(func, '\n', 0, NULL, &enc)) == -1)
  //     {
  //       if (parser->eofp)
  //         goto error;
  //       goto restore;
  //     }
  //     if (c != '\n')
  //     {
  //       set_yylval_str(STR_NEW3(tok(), toklen(), enc, func));
  //       flush_string_content(enc);
  //       return tSTRING_CONTENT;
  //     }
  //     tokadd(nextc());
  //     /*      if (mbp && mb == ENC_CODERANGE_UNKNOWN) mbp = 0; */
  //     if ((c = nextc()) == -1)
  //       goto error;
  //   }
  //   while (!lookahead_whole_match_pos(eos, indent, $pos-1));
  //   str = STR_NEW3(tok(), toklen(), enc, func);
  // }
  // was: dispatch_heredoc_end(); a noop out of ripper
  heredoc_restore(lexer.lex_strterm);
  // lex_strterm = NEW_STRTERM(-1, 0, 0);
  // set_yylval_str(str); TODO:
  return tSTRING_CONTENT;
}

// checks if the current line matches `/\s*#{eos}\n/`;
// `pos` tell us when the start point is:
// for `pos` = 2 "ab|c".
// Returns the position after the trailing `\n\:
//   "…\n    EOS\n|"
function lookahead_whole_match_pos (eos, indent, pos)
{
  // skip all white spaces if in `indent` mode
  if (indent)
  {
    while (ISSPACE_NOT_N($stream[pos]))
      pos++;
  }
  
  var len = eos.length;
  // check first if the `eos` fits the rest of the line
  if ($stream[pos + len] !== '\n')
    return -1;
  
  return $stream.substr(pos, len) === eos ? (pos + len + 1) : -1;
}

function heredoc_restore (here)
{
  $pos = here.pos_after_eos;
}

/* return value is for ?\u3042 */
function parser_tokadd_utf8(string_literal, symbol_literal, regexp_literal)
{
  /*
   * If string_literal is true, then we allow multiple codepoints
   * in \u{}, and add the codepoints to the current token.
   * Otherwise we're parsing a character literal and return a single
   * codepoint without adding it
   */

  if (regexp_literal)
  {
    tokadd('\\u');
  }
  
  var c = nextc();
  // handle \u{...} form
  if (c === '{')
  {
    if (regexp_literal)
    {
      tokadd('{'); // was: tokadd(*lex_p);
    }
    for (;;)
    {
      // match hex digits or empty string
      var hex = match_grex(/[0-9a-fA-F]{1,6}|/g);
      if (hex == '')
      {
        yyerror("invalid Unicode escape");
        return '';
      }
      var codepoint = parseInt(hex, 16);
      var the_char = $$(codepoint);
      if (codepoint > 0x10ffff)
      {
        yyerror("invalid Unicode codepoint "+codepoint+" (too large)");
        return '';
      }
      
      $pos += hex.length;
      if (regexp_literal)
      {
        tokadd(hex);
      }
      else if (string_literal)
      {
        tokadd(the_char);
      }
      
      c = nextc();
      if (!string_literal)
        break;
      if (c !== ' ' && c !== '\t')
        break;
    }

    if (c !== '}')
    {
      yyerror("unterminated Unicode escape");
      return '';
    }

    if (regexp_literal)
    {
      tokadd('}');
    }
    
    // return the last found codepoint/char
    return the_char;
  }
  // handle \uxxxx form
  else
  {
    // match 4 hex digits or empty string
    var hex = match_grex(/[0-9a-fA-F]{4}|/g);
    if (hex === '')
    {
      yyerror("invalid Unicode escape");
      return '';
    }
    var codepoint = parseInt(hex, 16);
    var the_char = $$(codepoint);
    $pos += 4;
    if (regexp_literal)
    {
      tokadd(hex);
    }
    else if (string_literal)
    {
      tokadd(the_char);
    }
    
    // return the only found codepoint/char
    return the_char;
  }
}

// here `c` matches [0-9\+\-]
function start_num (c)
{
  var is_float = false,
      seen_point = false,
      seen_e = false,
      nondigit = '';
  
  lexer.lex_state = EXPR_END;
  newtok();
  if (c == '-' || c == '+')
  {
    tokadd(c);
    c = nextc();
  }
  if (c == '0')
  {
    // TODO
    warning('0-leading digits to be supported soon');
  }

  scan_loop:
  for (;;)
  {
    switch (c)
    {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        nondigit = '';
        tokadd(c);
        break;

      case '.':
        if (nondigit)
          break scan_loop; // was: goto trailing_uc;
        if (seen_point || seen_e)
        {
          break scan_loop; // was: goto decode_num;
        }
        else
        {
          var c0 = nextc();
          if (c0 == '' || !ISDIGIT(c0))
          {
            pushback(c0);
            break scan_loop; // was: goto decode_num;
          }
          c = c0;
        }
        tokadd('.');
        tokadd(c);
        is_float = true;
        seen_point = true;
        nondigit = '';
        break;

      case 'e':
      case 'E':
        if (nondigit)
        {
          pushback(c);
          c = nondigit;
          break scan_loop; // was: goto decode_num;
        }
        if (seen_e)
        {
          break scan_loop; // was: goto decode_num;
        }
        tokadd(c);
        seen_e = true;
        is_float = true;
        nondigit = c;
        c = nextc();
        if (c != '-' && c != '+')
          continue;
        tokadd(c);
        nondigit = c;
        break;

      // `_' in number just ignored
      case '_':
        if (nondigit)
          break scan_loop; // was: goto decode_num;
        nondigit = c;
        break;

      default:
        break scan_loop; // was: goto decode_num;
    }
    c = nextc();
  }

  // was: decode_num:
  pushback(c);
  if (nondigit)
  {
    // was: trailing_uc:
    yyerror("trailing `"+nondigit+"' in number");
  }
  tokfix();
  if (is_float)
  {
    var d = parseFloat(tok());
    if (isNaN(d))
    {
      // TODO: add real range check
      warning("Float "+tok()+" out of range");
    }
    // set_yylval_literal(DBL2NUM(d)); TODO
    return tFLOAT;
  }
  // set_yylval_literal(rb_cstr_to_inum(tok(), 10, FALSE)); TODO
  return tINTEGER;
}


// struct kwtable {const char *name; int id[2]; enum lex_state_e state;};

function is_local_id (ident)
{
  // TODO :)
  return true;
}
function lvar_defined (ident)
{
  // TODO :)
  return true;
}

var rb_reserved_word =
{
'__ENCODING__': {id0: keyword__ENCODING__, id1: keyword__ENCODING__, state: EXPR_END},
'__LINE__': {id0: keyword__LINE__, id1: keyword__LINE__, state: EXPR_END},
'__FILE__': {id0: keyword__FILE__, id1: keyword__FILE__, state: EXPR_END},
'BEGIN': {id0: keyword_BEGIN, id1: keyword_BEGIN, state: EXPR_END},
'END': {id0: keyword_END, id1: keyword_END, state: EXPR_END},
'alias': {id0: keyword_alias, id1: keyword_alias, state: EXPR_FNAME},
'and': {id0: keyword_and, id1: keyword_and, state: EXPR_VALUE},
'begin': {id0: keyword_begin, id1: keyword_begin, state: EXPR_BEG},
'break': {id0: keyword_break, id1: keyword_break, state: EXPR_MID},
'case': {id0: keyword_case, id1: keyword_case, state: EXPR_VALUE},
'class': {id0: keyword_class, id1: keyword_class, state: EXPR_CLASS},
'def': {id0: keyword_def, id1: keyword_def, state: EXPR_FNAME},
'defined?': {id0: keyword_defined, id1: keyword_defined, state: EXPR_ARG},
'do': {id0: keyword_do, id1: keyword_do, state: EXPR_BEG},
'else': {id0: keyword_else, id1: keyword_else, state: EXPR_BEG},
'elsif': {id0: keyword_elsif, id1: keyword_elsif, state: EXPR_VALUE},
'end': {id0: keyword_end, id1: keyword_end, state: EXPR_END},
'ensure': {id0: keyword_ensure, id1: keyword_ensure, state: EXPR_BEG},
'false': {id0: keyword_false, id1: keyword_false, state: EXPR_END},
'for': {id0: keyword_for, id1: keyword_for, state: EXPR_VALUE},
'if': {id0: keyword_if, id1: modifier_if, state: EXPR_VALUE},
'in': {id0: keyword_in, id1: keyword_in, state: EXPR_VALUE},
'module': {id0: keyword_module, id1: keyword_module, state: EXPR_VALUE},
'next': {id0: keyword_next, id1: keyword_next, state: EXPR_MID},
'nil': {id0: keyword_nil, id1: keyword_nil, state: EXPR_END},
'not': {id0: keyword_not, id1: keyword_not, state: EXPR_ARG},
'or': {id0: keyword_or, id1: keyword_or, state: EXPR_VALUE},
'redo': {id0: keyword_redo, id1: keyword_redo, state: EXPR_END},
'rescue': {id0: keyword_rescue, id1: modifier_rescue, state: EXPR_MID},
'retry': {id0: keyword_retry, id1: keyword_retry, state: EXPR_END},
'return': {id0: keyword_return, id1: keyword_return, state: EXPR_MID},
'self': {id0: keyword_self, id1: keyword_self, state: EXPR_END},
'super': {id0: keyword_super, id1: keyword_super, state: EXPR_ARG},
'then': {id0: keyword_then, id1: keyword_then, state: EXPR_BEG},
'true': {id0: keyword_true, id1: keyword_true, state: EXPR_END},
'undef': {id0: keyword_undef, id1: keyword_undef, state: EXPR_FNAME},
'unless': {id0: keyword_unless, id1: modifier_unless, state: EXPR_VALUE},
'until': {id0: keyword_until, id1: modifier_until, state: EXPR_VALUE},
'when': {id0: keyword_when, id1: keyword_when, state: EXPR_VALUE},
'while': {id0: keyword_while, id1: modifier_while, state: EXPR_VALUE},
'yield': {id0: keyword_yield, id1: keyword_yield, state: EXPR_ARG}
};

lexer.debugPosition = function ()
{
  return (
    $stream.substring($pos - 25, $pos) +
    '>>here<<' +
    $stream.substring($pos, $pos + 25)
  );
}

function debug (msg)
{
  puts('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  puts(msg)
  puts(lexer.debugPosition())
  puts('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}
function warning (msg) { debug('WARNING: ' + msg) }
function compile_error (msg) { debug('COMPILE ERROR: ' + msg) }
function yyerror (msg) { debug('YYERROR: ' + msg) }
this.yyerror = yyerror;

} // function Lexer

return Lexer;

})();
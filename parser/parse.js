

/* A Bison parser, made by GNU Bison 2.7.12-4996.  */

/* Skeleton implementation for Bison LALR(1) parsers in JavaScript
   
      Copyright (C) 2007-2013 Free Software Foundation, Inc.
   
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.  */

/* As a special exception, you may create a larger work that contains
   part or all of the Bison parser skeleton and distribute that work
   under terms of your choice, so long as that work isn't itself a
   parser generator using the skeleton or a modified version thereof
   as a parser skeleton.  Alternatively, if you modify or redistribute
   the parser skeleton itself, you may (at your option) remove this
   special exception, which will cause the skeleton and the resulting
   Bison output files to be licensed under the GNU General Public
   License without this special exception.
   
   This special exception was added by the Free Software Foundation in
   version 2.2 of Bison.  */



;(function(){ // start of the whole parser+lexer namespase
/* First part of user declarations.  */

// Tokens.
// Token numbers, to be returned by the scanner.
var
  END_OF_INPUT = 0,
  keyword_class = 258,
  keyword_module = 259,
  keyword_def = 260,
  keyword_undef = 261,
  keyword_begin = 262,
  keyword_rescue = 263,
  keyword_ensure = 264,
  keyword_end = 265,
  keyword_if = 266,
  keyword_unless = 267,
  keyword_then = 268,
  keyword_elsif = 269,
  keyword_else = 270,
  keyword_case = 271,
  keyword_when = 272,
  keyword_while = 273,
  keyword_until = 274,
  keyword_for = 275,
  keyword_break = 276,
  keyword_next = 277,
  keyword_redo = 278,
  keyword_retry = 279,
  keyword_in = 280,
  keyword_do = 281,
  keyword_do_cond = 282,
  keyword_do_block = 283,
  keyword_do_LAMBDA = 284,
  keyword_return = 285,
  keyword_yield = 286,
  keyword_super = 287,
  keyword_self = 288,
  keyword_nil = 289,
  keyword_true = 290,
  keyword_false = 291,
  keyword_and = 292,
  keyword_or = 293,
  keyword_not = 294,
  modifier_if = 295,
  modifier_unless = 296,
  modifier_while = 297,
  modifier_until = 298,
  modifier_rescue = 299,
  keyword_alias = 300,
  keyword_defined = 301,
  keyword_BEGIN = 302,
  keyword_END = 303,
  keyword__LINE__ = 304,
  keyword__FILE__ = 305,
  keyword__ENCODING__ = 306,
  tIDENTIFIER = 307,
  tFID = 308,
  tGVAR = 309,
  tIVAR = 310,
  tCONSTANT = 311,
  tCVAR = 312,
  tLABEL = 313,
  tINTEGER = 314,
  tFLOAT = 315,
  tSTRING_CONTENT = 316,
  tCHAR = 317,
  tNTH_REF = 318,
  tBACK_REF = 319,
  tREGEXP_END = 320,
  tUPLUS = 321,
  tUMINUS = 322,
  tPOW = 323,
  tCMP = 324,
  tEQ = 325,
  tEQQ = 326,
  tNEQ = 327,
  tGEQ = 328,
  tLEQ = 329,
  tANDOP = 330,
  tOROP = 331,
  tMATCH = 332,
  tNMATCH = 333,
  tDOT2 = 334,
  tDOT3 = 335,
  tAREF = 336,
  tASET = 337,
  tLSHFT = 338,
  tRSHFT = 339,
  tCOLON2 = 340,
  tCOLON3 = 341,
  tOP_ASGN = 342,
  tASSOC = 343,
  tLPAREN = 344,
  tLPAREN_ARG = 345,
  tRPAREN = 346,
  tLBRACK = 347,
  tLBRACE = 348,
  tLBRACE_ARG = 349,
  tSTAR = 350,
  tDSTAR = 351,
  tAMPER = 352,
  tLAMBDA = 353,
  tSYMBEG = 354,
  tSTRING_BEG = 355,
  tXSTRING_BEG = 356,
  tREGEXP_BEG = 357,
  tWORDS_BEG = 358,
  tQWORDS_BEG = 359,
  tSYMBOLS_BEG = 360,
  tQSYMBOLS_BEG = 361,
  tSTRING_DBEG = 362,
  tSTRING_DEND = 363,
  tSTRING_DVAR = 364,
  tSTRING_END = 365,
  tLAMBEG = 366,
  tLOWEST = 367,
  tUMINUS_NUM = 368,
  tLAST_TOKEN = 369;




"use strict";

// lexer states from lexer.js

// ignore newline, +/- is a sign.
var EXPR_BEG    = 1 << 0;
// newline significant, +/- is an operator.
var EXPR_END    = 1 << 1;
// ditto, and unbound braces.
var EXPR_ENDARG = 1 << 2;
// ditto, and unbound braces.
var EXPR_ENDFN  = 1 << 3;
// newline significant, +/- is an operator.
var EXPR_ARG    = 1 << 4;
// newline significant, +/- is an operator.
var EXPR_CMDARG = 1 << 5;
// newline significant, +/- is an operator.
var EXPR_MID    = 1 << 6;
// ignore newline, no reserved words.
var EXPR_FNAME  = 1 << 7;
// right after `.' or `::', no reserved words.
var EXPR_DOT    = 1 << 8;
// immediate after `class', no here document.
var EXPR_CLASS  = 1 << 9;
// alike EXPR_BEG but label is disallowed.
var EXPR_VALUE  = 1 << 10;

var EXPR_BEG_ANY = EXPR_BEG | EXPR_VALUE | EXPR_MID | EXPR_CLASS;
var EXPR_ARG_ANY = EXPR_ARG | EXPR_CMDARG;
var EXPR_END_ANY = EXPR_END | EXPR_ENDARG | EXPR_ENDFN;




/**
 * A Bison parser, automatically generated from <tt>parse.y</tt>.
 *
 * @author LALR (1) parser skeleton written by Paolo Bonzini.
 * @author Java skeleton ported by Peter Leonov.
 */

var YYParser = (function(){ // start of the Parser very own namespase

function YYStack ()
{
  var stateStack = this.stateStack = [];
  var valueStack = this.valueStack = [];

  this.push = function push (state, value)
  {
    stateStack.push(state);
    valueStack.push(value);
  }

  this.pop = function pop (num)
  {
    if (num <= 0)
      return;

    valueStack.length -= num;
    stateStack.length -= num; // TODO: original code lacks this line
  }

  this.stateAt = function stateAt (i)
  {
    return stateStack[stateStack.length-1 - i];
  }

  this.valueAt = function valueAt (i)
  {
    return valueStack[valueStack.length-1 - i];
  }

  // used in debug mode or in an error recovery mode only
  this.height = function height ()
  {
    return stateStack.length-1;
  }
}

// Instantiates the Bison-generated parser.
function YYParser (yylexer)
{
  // self
  var yyparser = this;
  
  // The scanner that will supply tokens to the parser.
  this.yylexer = yylexer;

  // True if verbose error messages are enabled.
  this.errorVerbose = true;


  var debug_reduce_print = this.debug_reduce_print.bind(this);
  var debug_symbol_print = this.debug_symbol_print.bind(this);
  var debug_stack_print  = this.debug_stack_print.bind(this);
  var debug_print        = this.debug_print.bind(this);






  

  // Token returned by the scanner to signal the end of its input.
  var EOF = 0;

  // Returned by a Bison action in order to stop the parsing process
  // and return success (<tt>true</tt>).
  var YYACCEPT = 0;

  // Returned by a Bison action in order to stop the parsing process
  // and return failure (<tt>false</tt>).  */
  var YYABORT = 1;

  // Returned by a Bison action in order to start error recovery
  // without printing an error message.
  var YYERROR = 2;

  // Internal return codes that are not supported for user semantic
  // actions.
  var YYERRLAB = 3;
  var YYNEWSTATE = 4;
  var YYDEFAULT = 5;
  var YYREDUCE = 6;
  var YYERRLAB1 = 7;
  var YYRETURN = 8;

  var yyntokens_ = this.yyntokens_ = 142;
  
  var yyerrstatus_ = 0;
  function yyerrok () {yyerrstatus_ = 0;}
  
  // Return whether error recovery is being done.
  // In this state, the parser reads token until it reaches a known state,
  // and then restarts normal operation.
  this.isRecovering = function isRecovering ()
  {
    return yyerrstatus_ == 0;
  }

  var yyval, yystack;

  /**
   * Parse input from the scanner that was specified at object construction
   * time.  Return whether the end of the input was reached successfully.
   *
   * @return <tt>true</tt> if the parsing succeeds.  Note that this does not
   *          imply that there were no syntax errors.
   */
  this.parse = function parse ()
  {
    // Lookahead and lookahead in internal form.
    var yychar = yyempty_;
    var yytoken = 0;

    /* State.  */
    var yyn = 0;
    var yylen = 0;
    var yystate = 0;

    // the only place yystack value is changed
    yystack = this.yystack = new YYStack();

    /* Error handling.  */
    var yynerrs_ = 0;

    // Semantic value of the lookahead.
    var yylval = null;

    debug_print("Starting parse\n");
    yyerrstatus_ = 0;


    // Initialize the stack.
    yystack.push(yystate, yylval);

    // have tried: recursive closures, breaking blocks - switch is faster,
    // next step: asm.js for the whole `parse()` function
    var label = YYNEWSTATE;
    goto_loop: for (;;)
    switch (label)
    {
      //----------------.
      // New state.     |
      //---------------/
      case YYNEWSTATE:
        // Unlike in the C/C++ skeletons, the state is already pushed when we come here.

        debug_print("Entering state " + yystate + "\n");

        // Accept?
        if (yystate == yyfinal_)
          return true;

        // Take a decision.
        // First try without lookahead.
        yyn = yypact_[yystate];
        if (yyn == yypact_ninf_) // yyn pact value is default
        {
          // goto
          label = YYDEFAULT;
          continue goto_loop;
        }

        // Read a lookahead token.
        if (yychar == yyempty_)
        {
          debug_print("Reading a token: ");
          yychar = yylexer.yylex();

          yylval = yylexer.getLVal();
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          debug_print("Now at end of input.\n");
        }
        else
        {
          if (yychar >= 0 && yychar <= yyuser_token_number_max_)
            yytoken = yytranslate_table_[yychar];
          else
            yytoken = yyundef_token_;

          debug_symbol_print("Next token is", yytoken, yylval);
        }

        // If the proper action on seeing token YYTOKEN
        // is to reduce or to detect an error, take that action.
        yyn += yytoken;
        if (yyn < 0 || yylast_ < yyn || yycheck_[yyn] != yytoken)
        {
          // goto
          label = YYDEFAULT;
          continue goto_loop;
        }
        // <= 0 means reduce or error.
        else if ((yyn = yytable_[yyn]) <= 0)
        {
          if (yyn == yytable_ninf_) // yyn's value is an error
          {
            // goto
            label = YYERRLAB;
            continue goto_loop;
          }
          else
          {
            yyn = -yyn;

            // goto
            label = YYREDUCE;
            continue goto_loop;
          }
        }

        else
        {
          // Shift the lookahead token.
          debug_symbol_print("Shifting", yytoken, yylval);

          // Discard the token being shifted.
          yychar = yyempty_;

          // Count tokens shifted since error;
          // after three, turn off error status.
          if (yyerrstatus_ > 0)
            --yyerrstatus_;

          yystate = yyn;
          yystack.push(yystate, yylval);

          //goto
          label = YYNEWSTATE;
          continue goto_loop;
        }

        // won't reach here
        return false;

      //-----------------------------------------------------------.
      // yydefault -- do the default action for the current state. |
      //----------------------------------------------------------/
      case YYDEFAULT:
        yyn = yydefact_[yystate];
        if (yyn == 0)
        {
          // goto
          label = YYERRLAB;
          continue goto_loop;
        }
        else
        {
          // goto
          label = YYREDUCE;
          continue goto_loop;
        }

      // won't reach here
      return false;

      //------------------------------------.
      //  yyreduce -- Do a reduction.       |
      //-----------------------------------/
      case YYREDUCE:
        yylen = yyr2_[yyn];
        yyaction(yyn, yylen);
        yystate = yystack.stateAt(0);
        // goto
        label = YYNEWSTATE;
        continue goto_loop;

      //-------------------------------------.
      // yyerrlab -- here on detecting error |
      //------------------------------------/
      case YYERRLAB:
        // If not already recovering from an error, report this error.
        if (yyerrstatus_ == 0)
        {
          ++yynerrs_;
          if (yychar == yyempty_)
            yytoken = yyempty_;
          yylexer.yyerror(this.yysyntax_error(yystate, yytoken));
        }

        if (yyerrstatus_ == 3)
        {
          // If just tried and failed to reuse lookahead token
          // after an error, discard it.

          if (yychar <= EOF)
          {
            // Return failure if at end of input.
            if (yychar == EOF)
              return false;
          }
          else
            yychar = yyempty_;
        }

        // Else will try to reuse lookahead token
        // after shifting the error token.

        // goto
        label = YYERRLAB1;
        continue goto_loop;

      //--------------------------------------------------.
      // errorlab -- error raised explicitly by YYERROR.  |
      //-------------------------------------------------/
      case YYERROR:

        // Do not reclaim the symbols of the rule
        // which action triggered this YYERROR.
        yystack.pop(yylen);
        yylen = 0;
        debug_stack_print(yystack);
        yystate = yystack.stateAt(0);
        // goto
        label = YYERRLAB1;
        continue goto_loop;

      //--------------------------------------------------------------.
      // yyerrlab1 -- common code for both syntax error and YYERROR.  |
      //-------------------------------------------------------------/
      case YYERRLAB1:
        yyerrstatus_ = 3; // Each real token shifted decrements this.

        for (;;)
        {
          yyn = yypact_[yystate];
          if (yyn != yypact_ninf_) // yyn pact value isn't default
          {
            yyn += yyterror_;
            if (0 <= yyn && yyn <= yylast_ && yycheck_[yyn] == yyterror_)
            {
              yyn = yytable_[yyn];
              if (0 < yyn)
                break;
            }
          }

          // Pop the current state because it cannot handle the error token.
          if (yystack.height() == 0)
          {
            label = YYABORT;
            continue goto_loop;
          }

          yystack.pop(1);
          yystate = yystack.stateAt(0);
          debug_stack_print(yystack);
        }


        // Shift the error token.
        debug_symbol_print("Shifting", yystos_[yyn], yylval);

        yystate = yyn;
        yystack.push(yyn, yylval);
        // goto
        label = YYNEWSTATE;
        continue goto_loop;

      //--------------------------.
      // Accept.                  |
      //-------------------------/
      case YYACCEPT:
        return true;

      //----------------------.
      // Abort.               |
      //---------------------/
      case YYABORT:
        // debug_symbol_print("Error: popping", yystos_[yyn], yylval);
        // yystack.pop(1);
        // yystate = yystack.stateAt(0);
        // debug_stack_print(yystack);
        return false;

      default:
        // won't reach here
        return false;
    } // for (;;) and switch (label)

    // won't reach here
    return false
  }

  var actionsTable; // defined lated in tables section

  function yyaction (yyn, yylen)
  {
    /* If YYLEN is nonzero, implement the default value of the action:
       `$$ = $1'.  Otherwise, use the top of the stack.

       Otherwise, the following line sets YYVAL to garbage.
       This behavior is undocumented and Bison
       users should not rely upon it.  */
    // var yyval; moved up in scope chain to share with actions
    if (yylen > 0)
      yyval = yystack.valueAt(yylen - 1);
    else
      yyval = yystack.valueAt(0);

    debug_reduce_print(yyn);

    var actionClosure = actionsTable[yyn]
    if (actionClosure)
      actionClosure(yystack)

    debug_symbol_print("-> $$ =", yyr1_[yyn], yyval);

    yystack.pop(yylen);
    yylen = 0;
    debug_stack_print(yystack);

    // Shift the result of the reduction.
    yyn = yyr1_[yyn];
    var yystate = yypgoto_[yyn - yyntokens_] + yystack.stateAt(0);
    if (0 <= yystate && yystate <= yylast_ && yycheck_[yystate] == yystack.stateAt(0))
      yystate = yytable_[yystate];
    else
      yystate = yydefgoto_[yyn - yyntokens_];

    yystack.push(yystate, yyval);
    // was: usless: return YYNEWSTATE;
  }

  // declared erlier, before `action()`
  actionsTable =
  {
      2: function ()
    
    {
      yylexer.lex_state = EXPR_BEG;
    },
  3: function ()
    
    {},
  4: function ()
    
    {},
  5: function ()
    
    {},
  6: function ()
    
    {},
  7: function ()
    
    {},
  8: function ()
    
    {},
  10: function ()
    
    {},
  11: function ()
    
    {},
  12: function ()
    
    {},
  13: function ()
    
    {},
  14: function ()
    
    {},
  15: function ()
    
    {},
  16: function ()
    
    {},
  17: function ()
    
    {},
  18: function ()
    
    {},
  19: function ()
    
    {
      yylexer.yyerror("BEGIN is permitted only at toplevel");
    },
  20: function ()
    
    {},
  21: function ()
    
    {
      yylexer.lex_state = EXPR_FNAME;
    },
  22: function ()
    
    {},
  23: function ()
    
    {},
  24: function ()
    
    {},
  25: function ()
    
    {
      yylexer.yyerror("can't make alias for the number variables");
    },
  26: function ()
    
    {},
  27: function ()
    
    {},
  28: function ()
    
    {},
  29: function ()
    
    {},
  30: function ()
    
    {},
  31: function ()
    
    {},
  32: function ()
    
    {
      if (yylexer.in_def || yylexer.in_single)
        rb_warn("END in method; use at_exit");
    },
  34: function ()
    
    {},
  35: function ()
    
    {},
  36: function ()
    
    {},
  37: function ()
    
    {},
  38: function ()
    
    {},
  39: function ()
    
    {},
  40: function ()
    
    {},
  41: function ()
    
    {},
  42: function ()
    
    {},
  43: function ()
    
    {},
  44: function ()
    
    {},
  46: function ()
    
    {},
  47: function ()
    
    {},
  49: function ()
    
    {},
  50: function ()
    
    {},
  51: function ()
    
    {},
  52: function ()
    
    {},
  54: function ()
    
    {},
  58: function ()
    
    {},
  59: function ()
    
    {},
  60: function ()
    
    {
      // touching this alters the parse.output
      yystack.valueStack[yystack.valueStack.length-1-((5-(2)))];
    },
  61: function ()
    
    {},
  62: function ()
    
    {},
  63: function ()
    
    {},
  64: function ()
    
    {},
  65: function ()
    
    {},
  66: function ()
    
    {},
  67: function ()
    
    {},
  68: function ()
    
    {},
  69: function ()
    
    {},
  70: function ()
    
    {},
  71: function ()
    
    {},
  72: function ()
    
    {},
  74: function ()
    
    {},
  76: function ()
    
    {},
  77: function ()
    
    {},
  78: function ()
    
    {},
  79: function ()
    
    {},
  80: function ()
    
    {},
  81: function ()
    
    {},
  82: function ()
    
    {},
  83: function ()
    
    {},
  84: function ()
    
    {},
  85: function ()
    
    {},
  86: function ()
    
    {},
  88: function ()
    
    {},
  89: function ()
    
    {},
  90: function ()
    
    {},
  91: function ()
    
    {},
  92: function ()
    
    {},
  93: function ()
    
    {},
  94: function ()
    
    {},
  95: function ()
    
    {},
  96: function ()
    
    {},
  97: function ()
    
    {},
  98: function ()
    
    {},
  99: function ()
    
    {
      if (yylexer.in_def || yylexer.in_single)
        yylexer.yyerror("dynamic constant assignment");
    },
  100: function ()
    
    {
      if (yylexer.in_def || yylexer.in_single)
        yylexer.yyerror("dynamic constant assignment");
    },
  101: function ()
    
    {},
  102: function ()
    
    {},
  103: function ()
    
    {},
  104: function ()
    
    {},
  105: function ()
    
    {},
  106: function ()
    
    {},
  107: function ()
    
    {},
  108: function ()
    
    {
      if (yylexer.in_def || yylexer.in_single)
        yylexer.yyerror("dynamic constant assignment");
    },
  109: function ()
    
    {
      if (yylexer.in_def || yylexer.in_single)
        yylexer.yyerror("dynamic constant assignment");
    },
  110: function ()
    
    {},
  111: function ()
    
    {
      yylexer.yyerror("class/module name must be CONSTANT");
    },
  113: function ()
    
    {},
  114: function ()
    
    {},
  115: function ()
    
    {},
  119: function ()
    
    {
      yylexer.lex_state = EXPR_ENDFN;
    },
  120: function ()
    
    {
      yylexer.lex_state = EXPR_ENDFN;
    },
  123: function ()
    
    {},
  125: function ()
    
    {},
  126: function ()
    
    {
      yylexer.lex_state = EXPR_FNAME;
    },
  127: function ()
    
    {},
  128: function ()
    
    {},
  129: function ()
    
    {},
  130: function ()
    
    {},
  131: function ()
    
    {},
  132: function ()
    
    {},
  133: function ()
    
    {},
  134: function ()
    
    {},
  135: function ()
    
    {},
  136: function ()
    
    {},
  137: function ()
    
    {},
  138: function ()
    
    {},
  139: function ()
    
    {},
  140: function ()
    
    {},
  141: function ()
    
    {},
  142: function ()
    
    {},
  143: function ()
    
    {},
  144: function ()
    
    {},
  145: function ()
    
    {},
  146: function ()
    
    {},
  147: function ()
    
    {},
  148: function ()
    
    {},
  149: function ()
    
    {},
  150: function ()
    
    {},
  151: function ()
    
    {},
  152: function ()
    
    {},
  153: function ()
    
    {},
  154: function ()
    
    {},
  155: function ()
    
    {},
  156: function ()
    
    {},
  157: function ()
    
    {},
  199: function ()
    
    {},
  200: function ()
    
    {},
  201: function ()
    
    {},
  202: function ()
    
    {},
  203: function ()
    
    {},
  204: function ()
    
    {},
  205: function ()
    
    {},
  206: function ()
    
    {},
  207: function ()
    
    {},
  208: function ()
    
    {},
  209: function ()
    
    {},
  210: function ()
    
    {},
  211: function ()
    
    {},
  212: function ()
    
    {},
  213: function ()
    
    {},
  214: function ()
    
    {},
  215: function ()
    
    {},
  216: function ()
    
    {},
  217: function ()
    
    {},
  218: function ()
    
    {},
  219: function ()
    
    {},
  220: function ()
    
    {},
  221: function ()
    
    {},
  222: function ()
    
    {},
  223: function ()
    
    {},
  224: function ()
    
    {},
  225: function ()
    
    {},
  226: function ()
    
    {},
  227: function ()
    
    {},
  228: function ()
    
    {},
  229: function ()
    
    {},
  230: function ()
    
    {},
  231: function ()
    
    {},
  232: function ()
    
    {},
  233: function ()
    
    {},
  234: function ()
    
    {},
  235: function ()
    
    {},
  236: function ()
    
    {},
  237: function ()
    
    {},
  238: function ()
    
    {},
  239: function ()
    
    {},
  240: function ()
    
    {},
  241: function ()
    
    { yylexer.in_defined = true;},
  242: function ()
    
    {
      yylexer.in_defined = false;
    },
  243: function ()
    
    {},
  244: function ()
    
    {},
  245: function ()
    
    {},
  247: function ()
    
    {},
  248: function ()
    
    {},
  249: function ()
    
    {},
  250: function ()
    
    {},
  255: function ()
    
    {},
  256: function ()
    
    {},
  257: function ()
    
    {},
  258: function ()
    
    {},
  259: function ()
    
    {},
  260: function ()
    
    {},
  261: function ()
    
    {},
  263: function ()
    
    {
      yyval = yylexer.cmdarg_stack;
      yylexer.CMDARG_PUSH(1);
    },
  264: function ()
    
    {
      // CMDARG_POP()
      yylexer.cmdarg_stack = yystack.valueStack[yystack.valueStack.length-1-((2-(1)))];
    },
  265: function ()
    
    {},
  266: function ()
    
    {},
  267: function ()
    
    {},
  268: function ()
    
    {},
  269: function ()
    
    {},
  270: function ()
    
    {},
  271: function ()
    
    {},
  272: function ()
    
    {},
  273: function ()
    
    {},
  274: function ()
    
    {},
  285: function ()
    
    {},
  286: function ()
    
    {
		      yystack.valueStack[yystack.valueStack.length-1-((1-(1)))] = yylexer.cmdarg_stack;
		      yylexer.cmdarg_stack = 0;
		    },
  287: function ()
    
    {
		      yylexer.cmdarg_stack = yystack.valueStack[yystack.valueStack.length-1-((4-(1)))];
		      // touching this alters the parse.output
          yystack.valueStack[yystack.valueStack.length-1-((4-(2)))];
		    },
  288: function ()
    
    {
		  yylexer.lex_state = EXPR_ENDARG;
		},
  289: function ()
    
    {},
  290: function ()
    
    {
		  yylexer.lex_state = EXPR_ENDARG;
		},
  291: function ()
    
    {},
  292: function ()
    
    {},
  293: function ()
    
    {},
  294: function ()
    
    {},
  295: function ()
    
    {},
  296: function ()
    
    {},
  297: function ()
    
    {},
  298: function ()
    
    {},
  299: function ()
    
    {},
  300: function ()
    
    {},
  301: function ()
    
    { yylexer.in_defined = true;},
  302: function ()
    
    {
		      yylexer.in_defined = false;
		    },
  303: function ()
    
    {},
  304: function ()
    
    {},
  305: function ()
    
    {},
  307: function ()
    
    {},
  308: function ()
    
    {},
  309: function ()
    
    {},
  310: function ()
    
    {},
  311: function ()
    
    {
		    yylexer.COND_PUSH(1);
		  },
  312: function ()
    
    {
		    yylexer.COND_POP();
		  },
  313: function ()
    
    {},
  314: function ()
    
    {
		  yylexer.COND_PUSH(1);
		},
  315: function ()
    
    {
		  yylexer.COND_POP();
		},
  316: function ()
    
    {},
  317: function ()
    
    {},
  318: function ()
    
    {},
  319: function ()
    
    {
		    yylexer.COND_PUSH(1);
		  },
  320: function ()
    
    {
		    yylexer.COND_POP();
		  },
  321: function ()
    
    {},
  322: function ()
    
    {
          if (yylexer.in_def || yylexer.in_single)
            yylexer.yyerror("class definition in method body");
    			
		    },
  323: function ()
    
    {
		      // touching this alters the parse.output
			    yystack.valueStack[yystack.valueStack.length-1-((6-(4)))];
		    },
  324: function ()
    
    {
          yyval = yylexer.in_def;
          yylexer.in_def = 0;
		    },
  325: function ()
    
    {
		      yyval = yylexer.in_single;
		      yylexer.in_single = 0;
		    },
  326: function ()
    
    {
          yylexer.in_def = yystack.valueStack[yystack.valueStack.length-1-((8-(4)))];
          yylexer.in_single = yystack.valueStack[yystack.valueStack.length-1-((8-(6)))];
		    },
  327: function ()
    
    {
          if (yylexer.in_def || yylexer.in_single)
            yylexer.yyerror("module definition in method body");
    			
		    },
  328: function ()
    
    {
		      // touching this alters the parse.output
			    yystack.valueStack[yystack.valueStack.length-1-((5-(3)))];
		    },
  329: function ()
    
    {
		      yyval = yylexer.cur_mid; // TODO
    			yylexer.cur_mid = yystack.valueStack[yystack.valueStack.length-1-((2-(2)))];
    			
		      yylexer.in_def++;
		    },
  330: function ()
    
    {
		      // touching this alters the parse.output
			    yystack.valueStack[yystack.valueStack.length-1-((6-(1)))];
			    yylexer.in_def--;
			    yylexer.cur_mid = yystack.valueStack[yystack.valueStack.length-1-((6-(3)))];
		    },
  331: function ()
    
    {
      yylexer.lex_state = EXPR_FNAME;
    },
  332: function ()
    
    {
      yylexer.in_single++;
      yylexer.lex_state = EXPR_ENDFN; /* force for args */
    },
  333: function ()
    
    {
      yylexer.in_single--;
    },
  334: function ()
    
    {},
  335: function ()
    
    {},
  336: function ()
    
    {},
  337: function ()
    
    {},
  338: function ()
    
    {},
  339: function ()
    
    {},
  340: function ()
    
    {},
  341: function ()
    
    {},
  342: function ()
    
    {},
  343: function ()
    
    {},
  344: function ()
    
    {},
  345: function ()
    
    {},
  346: function ()
    
    {},
  347: function ()
    
    {},
  348: function ()
    
    {},
  349: function ()
    
    {},
  356: function ()
    
    {},
  358: function ()
    
    {},
  361: function ()
    
    {},
  362: function ()
    
    {},
  363: function ()
    
    {},
  364: function ()
    
    {},
  365: function ()
    
    {},
  366: function ()
    
    {},
  367: function ()
    
    {},
  368: function ()
    
    {},
  369: function ()
    
    {},
  370: function ()
    
    {},
  371: function ()
    
    {},
  372: function ()
    
    {},
  373: function ()
    
    {},
  374: function ()
    
    {},
  375: function ()
    
    {},
  376: function ()
    
    {},
  377: function ()
    
    {},
  378: function ()
    
    {},
  379: function ()
    
    {},
  380: function ()
    
    {},
  381: function ()
    
    {},
  382: function ()
    
    {},
  383: function ()
    
    {},
  384: function ()
    
    {},
  385: function ()
    
    {},
  386: function ()
    
    {},
  387: function ()
    
    {},
  388: function ()
    
    {},
  389: function ()
    
    {},
  390: function ()
    
    {},
  391: function ()
    
    {},
  392: function ()
    
    {},
  393: function ()
    
    {},
  394: function ()
    
    {},
  396: function ()
    
    {
			yylexer.command_start = true;
		    },
  397: function ()
    
    {},
  398: function ()
    
    {},
  399: function ()
    
    {},
  400: function ()
    
    {},
  401: function ()
    
    {},
  404: function ()
    
    {},
  405: function ()
    
    {},
  406: function ()
    
    {},
  407: function ()
    
    {
		      yyval = yylexer.lpar_beg;
		      yylexer.lpar_beg = ++yylexer.paren_nest;
		    },
  408: function ()
    
    {
          yylexer.lpar_beg = yystack.valueStack[yystack.valueStack.length-1-((4-(2)))];
          // touching this alters the parse.output
          yystack.valueStack[yystack.valueStack.length-1-((4-(1)))];
		    },
  409: function ()
    
    {},
  410: function ()
    
    {},
  411: function ()
    
    {},
  412: function ()
    
    {},
  413: function ()
    
    {},
  414: function ()
    
    {
	      // touching this alters the parse.output
        yystack.valueStack[yystack.valueStack.length-1-((5-(2)))];
			  yystack.valueStack[yystack.valueStack.length-1-((5-(1)))];
		    },
  415: function ()
    
    {},
  416: function ()
    
    {},
  417: function ()
    
    {},
  418: function ()
    
    {},
  419: function ()
    
    {},
  420: function ()
    
    {},
  421: function ()
    
    {
		      // touching this alters the parse.output
			    yystack.valueStack[yystack.valueStack.length-1-((5-(4)))];
		    },
  422: function ()
    
    {},
  423: function ()
    
    {
		      // touching this alters the parse.output
			    yystack.valueStack[yystack.valueStack.length-1-((5-(4)))]
		    },
  424: function ()
    
    {},
  425: function ()
    
    {},
  426: function ()
    
    {
          // touching this alters the parse.output
          nd_set_line(yyval, yystack.valueStack[yystack.valueStack.length-1-((4-(3)))]);
		    },
  427: function ()
    
    {},
  428: function ()
    
    {
          // touching this alters the parse.output
          yystack.valueStack[yystack.valueStack.length-1-((4-(3)))];
		    },
  429: function ()
    
    {},
  430: function ()
    
    {},
  431: function ()
    
    {},
  432: function ()
    
    {},
  433: function ()
    
    {
		      // touching this alters the parse.output
          yystack.valueStack[yystack.valueStack.length-1-((5-(2)))];
		    },
  434: function ()
    
    {},
  435: function ()
    
    {
          // touching this alters the parse.output
          yystack.valueStack[yystack.valueStack.length-1-((5-(2)))];
		    },
  436: function ()
    
    {},
  439: function ()
    
    {},
  441: function ()
    
    {},
  442: function ()
    
    {},
  444: function ()
    
    {},
  446: function ()
    
    {},
  449: function ()
    
    {},
  451: function ()
    
    {},
  454: function ()
    
    {},
  455: function ()
    
    {},
  456: function ()
    
    {},
  457: function ()
    
    {},
  458: function ()
    
    {},
  459: function ()
    
    {},
  460: function ()
    
    {},
  461: function ()
    
    {},
  463: function ()
    
    {},
  464: function ()
    
    {},
  465: function ()
    
    {},
  466: function ()
    
    {},
  467: function ()
    
    {},
  468: function ()
    
    {},
  469: function ()
    
    {},
  470: function ()
    
    {},
  471: function ()
    
    {},
  472: function ()
    
    {},
  473: function ()
    
    {},
  474: function ()
    
    {},
  475: function ()
    
    {},
  476: function ()
    
    {},
  477: function ()
    
    {},
  478: function ()
    
    {},
  479: function ()
    
    {},
  480: function ()
    
    {},
  481: function ()
    
    {},
  483: function ()
    
    {
			yyval = yylexer.lex_strterm;
			yylexer.lex_strterm = null;
			yylexer.lex_state = EXPR_BEG;
		    },
  484: function ()
    
    {
		    /*%%%*/
			yylexer.lex_strterm = yystack.valueStack[yystack.valueStack.length-1-((3-(2)))];
		    },
  485: function ()
    
    {
          yystack.valueStack[yystack.valueStack.length-1-((1-(1)))] = yylexer.cond_stack;
          yyval = yylexer.cmdarg_stack;
          yylexer.cond_stack = 0;
          yylexer.cmdarg_stack = 0;
		    },
  486: function ()
    
    {
			yyval = yylexer.lex_strterm;
			yylexer.lex_strterm = null;
			yylexer.lex_state = EXPR_BEG;
		    },
  487: function ()
    
    {
			yyval = yylexer.brace_nest;
			yylexer.brace_nest = 0;
		    },
  488: function ()
    
    {
          yylexer.cond_stack = yystack.valueStack[yystack.valueStack.length-1-((6-(1)))];
          yylexer.cmdarg_stack = yystack.valueStack[yystack.valueStack.length-1-((6-(2)))];
          yylexer.lex_strterm = yystack.valueStack[yystack.valueStack.length-1-((6-(3)))];
          yylexer.brace_nest = yystack.valueStack[yystack.valueStack.length-1-((6-(4)))];
		    },
  489: function ()
    
    {},
  490: function ()
    
    {},
  491: function ()
    
    {},
  493: function ()
    
    {
			yylexer.lex_state = EXPR_END;
		    },
  498: function ()
    
    {
			yylexer.lex_state = EXPR_END;
		    },
  501: function ()
    
    {
		    },
  502: function ()
    
    {
		    },
  508: function ()
    
    {},
  509: function ()
    
    {yyval = keyword_self;},
  510: function ()
    
    {yyval = keyword_true;},
  511: function ()
    
    {yyval = keyword_false;},
  512: function ()
    
    {yyval = keyword__FILE__;},
  513: function ()
    
    {yyval = keyword__LINE__;},
  514: function ()
    
    {yyval = keyword__ENCODING__;},
  515: function ()
    
    {
		    },
  516: function ()
    
    {},
  517: function ()
    
    {},
  518: function ()
    
    {},
  521: function ()
    
    {},
  522: function ()
    
    {
			yylexer.lex_state = EXPR_BEG;
			yylexer.command_start = true;
		    },
  523: function ()
    
    {},
  524: function ()
    
    {
		      yyerrok();
		    },
  525: function ()
    
    {
			yylexer.lex_state = EXPR_BEG;
			yylexer.command_start = true;
		    },
  526: function ()
    
    {
			yylexer.lex_state = EXPR_BEG;
			yylexer.command_start = true;
		    },
  527: function ()
    
    {},
  528: function ()
    
    {},
  529: function ()
    
    {},
  530: function ()
    
    {},
  531: function ()
    
    {},
  532: function ()
    
    {},
  533: function ()
    
    {},
  534: function ()
    
    {},
  535: function ()
    
    {},
  536: function ()
    
    {},
  537: function ()
    
    {},
  538: function ()
    
    {},
  539: function ()
    
    {},
  540: function ()
    
    {},
  541: function ()
    
    {},
  542: function ()
    
    {},
  543: function ()
    
    {},
  544: function ()
    
    {},
  545: function ()
    
    {},
  546: function ()
    
    {},
  547: function ()
    
    {},
  548: function ()
    
    {
		      yylexer.yyerror("formal argument cannot be a constant");
		    },
  549: function ()
    
    {
		      yylexer.yyerror("formal argument cannot be an instance variable");
		    },
  550: function ()
    
    {
		      yylexer.yyerror("formal argument cannot be a global variable");
		    },
  551: function ()
    
    {
		      yylexer.yyerror("formal argument cannot be a class variable");
		    },
  553: function ()
    
    {},
  554: function ()
    
    {},
  555: function ()
    
    {},
  557: function ()
    
    {},
  558: function ()
    
    {},
  559: function ()
    
    {},
  560: function ()
    
    {},
  561: function ()
    
    {},
  562: function ()
    
    {},
  563: function ()
    
    {},
  566: function ()
    
    {},
  567: function ()
    
    {},
  568: function ()
    
    {},
  569: function ()
    
    {},
  570: function ()
    
    {},
  571: function ()
    
    {},
  572: function ()
    
    {},
  573: function ()
    
    {},
  576: function ()
    
    {
          if (!yylexer.is_local_id(yystack.valueStack[yystack.valueStack.length-1-((2-(2)))])) // TODO
            yylexer.yyerror("rest argument must be local variable");
    			
		    },
  577: function ()
    
    {},
  580: function ()
    
    {
		      if (!yylexer.is_local_id(yystack.valueStack[yystack.valueStack.length-1-((2-(2)))]))
            yylexer.yyerror("block argument must be local variable");
    			else if (!dyna_in_block() && local_id(yystack.valueStack[yystack.valueStack.length-1-((2-(2)))]))
            yylexer.yyerror("duplicated block argument name");
    			
		    },
  581: function ()
    
    {},
  582: function ()
    
    {},
  583: function ()
    
    {},
  584: function ()
    
    {
		  yylexer.lex_state = EXPR_BEG;
		},
  585: function ()
    
    {
          if (yystack.valueStack[yystack.valueStack.length-1-((4-(3)))] == 0) {
            yylexer.yyerror("can't define singleton method for ().");
          }
          else {
            switch (nd_type(yystack.valueStack[yystack.valueStack.length-1-((4-(3)))])) { // TODO
              case NODE_STR:
              case NODE_DSTR:
              case NODE_XSTR:
              case NODE_DXSTR:
              case NODE_DREGX:
              case NODE_LIT:
              case NODE_ARRAY:
              case NODE_ZARRAY:
                yylexer.yyerror("can't define singleton method for literals");
              default:
                value_expr(yystack.valueStack[yystack.valueStack.length-1-((4-(3)))]); // TODO
                break;
            }
          }
		    },
  587: function ()
    
    {},
  589: function ()
    
    {},
  590: function ()
    
    {},
  591: function ()
    
    {},
  592: function ()
    
    {},
  614: function ()
    
    {yyerrok();},
  617: function ()
    
    {yyerrok();},
  618: function ()
    
    {}
  }

  // YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing STATE-NUM.
  var yypact_ninf_ = this.yypact_ninf_ = -804;
  var yypact_ = this.yypact_ =
  [
    //]
      -804,   112,  2751,  -804,  7365,  -804,  -804,  -804,  6888,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  7478,  7478,  -804,  -804,
    7478,  4073,  3668,  -804,  -804,  -804,  -804,   335,  6755,   -10,
    -804,    15,  -804,  -804,  -804,  2993,  3803,  -804,  -804,  3128,
    -804,  -804,  -804,  -804,  -804,  -804,  8834,  8834,    92,  5125,
    8947,  7817,  8156,  7147,  -804,  6622,  -804,  -804,  -804,    44,
      56,   182,   209,   544,  9060,  8834,  -804,    -9,  -804,   845,
    -804,   130,  -804,  -804,   138,   266,   238,  -804,   219,  9173,
    -804,   295,  2612,   398,   405,  -804,  8947,  8947,  -804,  -804,
    6012,  9282,  9391,  9500,  6488,    30,    62,  -804,  -804,   316,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
     564,   574,  -804,   356,   634,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,   315,  -804,  -804,  -804,  -804,
     360,  8834,   402,  5264,  8834,  8834,  8834,  8834,  -804,   388,
    2612,   430,  -804,  -804,   392,   422,   174,   185,   447,   291,
     408,  -804,  -804,  -804,  5899,  -804,  7478,  7478,  -804,  -804,
    6125,  -804,  8947,   596,  -804,   400,   420,  5403,  -804,  -804,
    -804,   423,   432,   138,  -804,   546,   515,   720,  7591,  -804,
    5125,   478,    -9,  -804,   845,   -10,   487,  -804,   130,   -10,
     479,   180,   247,  -804,   430,   491,   247,  -804,   -10,   582,
     577,  9609,   499,  -804,   573,   578,   600,   654,  -804,  -804,
    -804,  -804,  -804,  -804,   322,  -804,   463,   486,   401,   532,
     504,   545,    55,   563,   518,   566,    63,   625,   650,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  6238,  8947,  8947,  8947,
    8947,  7591,  8947,  8947,  -804,  -804,  -804,   608,  -804,  -804,
    -804,  8269,  -804,  5125,  7256,   588,  8269,  8834,  8834,  8834,
    8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,
    8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,  8834,
    8834,  8834,  8834,  9888,  7478,  9965,  4482,   130,   116,   116,
    8947,  8947,    -9,   707,   592,   678,  -804,  -804,   657,   711,
      65,    66,    69,   444,   571,  8947,   129,  -804,   257,   670,
    -804,  -804,  -804,  -804,   253,   334,   349,   370,   387,   458,
     477,   535,   539,  -804,  -804,  -804,    30,  -804,  -804, 10042,
    -804,  -804,  9060,  9060,  -804,  -804,   304,  -804,  -804,  -804,
    8834,  8834,  7704,  -804,  -804, 10119,  7478, 10196,  8834,  8834,
    7930,  -804,   -10,   604,  -804,  -804,   -10,  -804,   603,   609,
    -804,    89,  -804,  -804,  -804,  -804,  -804,  6888,  -804,  8834,
    5534,   617, 10119, 10196,  8834,   845,   621,   -10,  -804,  -804,
    6351,   618,   -10,  -804,  -804,  8043,  -804,  -804,  8156,  -804,
    -804,  -804,   400,   692,  -804,  -804,  -804,   619,  9609, 10273,
    7478, 10350,  1377,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,   283,  -804,  -804,   614,  -804,
    -804,  -804,   293,  -804,   638,  -804,  8834,  8834,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,    29,    29,  -804,
    -804,    29,  8834,  -804,   649,   662,  -804,   -10,  9609,   674,
    -804,  -804,  -804,   691,  2023,  -804,  -804,   515,  2149,  2149,
    2149,  2149,  1118,  1118,  2550,  1796,  2149,  2149,  2837,  2837,
     524,   524, 10841,  1118,  1118,  1095,  1095,  1178,    52,    52,
     515,   515,   515,  4208,  3263,  4343,  3398,   432,   685,  -804,
     -10,   722,  -804,   732,  -804,   432,  3938,   800,   804,  -804,
    4621,   801,  4899,    70,    70,   707,  8382,   800,    85, 10427,
    7478, 10504,  -804,   130,  -804,   692,  -804,    -9,  -804,  -804,
    -804, 10581,  7478, 10042,  4482,  8947,  1481,  -804,  -804,  -804,
    1147,  -804,  2365,  -804,  2612,  6888,  2484,  -804,  8834,   430,
    -804,   408,  2858,  3533,   -10,   328,   333,  -804,  -804,  -804,
    -804,  7704,  7930,  -804,  -804,  8947,  2612,   700,  -804,  -804,
    -804,  2612,  5534,   364,  -804,  -804,   247,  9609,   619,   643,
      23,   -10,   202,   323,   703,  -804,  -804,  -804,  -804,  8834,
    -804,   807,  -804,  -804,  -804,  -804,  -804,  1551,    75,  -804,
    -804,  -804,  -804,  -804,   689,  -804,   694,   780,   702,  -804,
     717,   806,   733,   817,  -804,  -804,   789,  -804,  -804,  -804,
    -804,  -804,   515,   515,  -804,  1086,  5673,  -804,  -804,  5403,
      29,  5673,   737,  8495,  -804,   619,  9609,  9060,  8834,   726,
    9060,  9060,  -804,   608,   432,   735,   747,  9060,  9060,  -804,
     608,   432,  -804,  -804,  8608,   859,  -804,   676,  -804,   859,
    -804,  -804,  -804,  -804,   800,    74,  -804,    57,    61,   -10,
     100,   108,  8947,    -9,  -804,  8947,  4482,   643,    23,  -804,
     -10,   800,    89,  1551,  4482,    -9,  7021,  -804,    62,   266,
    -804,  8834,  -804,  -804,  -804,  8834,  8834,   374,  8834,  8834,
     742,    89,  -804,   749,  -804,  -804,   428,  8834,  -804,  -804,
     807,   708,  -804,   744,   -10,  -804,   -10,  5673,  5403,  -804,
    1551,  -804,   395,  -804,  -804,  -804,    40,  -804,  1551,  -804,
    -804,   992,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
     769,  9718,  -804,   -10,   773,   760,  -804,   765,   702,  -804,
     766,   771,  -804,   764,   898,   778,  5403,   901,  8834,   781,
     619,  2612,  8834,  -804,  2612,  -804,  2612,  -804,  -804,  -804,
    9060,  -804,  2612,  -804,  2612,  -804,  -804,   649,  -804,   826,
    -804,  5012,   907,  -804,  8947,   800,  -804,   800,  5673,  5673,
    -804,  8721,  4760,   154,    70,  -804,    -9,   800,  -804,  -804,
    -804,   -10,   800,  -804,  -804,  -804,  -804,  2612,  8834,  7930,
    -804,  -804,  -804,   -10,   892,   784,   877,  -804,   783,   912,
     792,  -804,  -804,   791,   802,  -804,   702,  -804,   809,  -804,
     811,   809,  5786,  9718,   894,   697,   833,  -804,  1627,  -804,
     436,  -804,  -804,  1627,  -804,  1699,  -804,   883,  -804,  -804,
     821,  -804,   819,  2612,  -804,  2612,  9827,   116,  -804,  -804,
    5673,  -804,  -804,   116,  -804,  -804,   800,   800,  -804,   289,
    -804,  4482,  -804,  -804,  -804,  -804,  1481,  -804,   820,   892,
     743,  -804,  -804,  -804,  -804,  1551,  -804,   992,  -804,  -804,
     992,  -804,   992,  -804,  -804,   848,   697,  -804, 10658,  -804,
    -804,   823,   824,  -804,   702,   825,  -804,   829,   825,  -804,
     277,  -804,  -804,  -804,   904,  -804,   706,   578,   600,   654,
    4482,  -804,  4621,  -804,  -804,  -804,  -804,  -804,  5673,   800,
    4482,   892,   820,   892,   834,   809,   836,   809,   809,  -804,
     831,   837,  1627,  -804,  1699,  -804,  -804,  1699,  -804,  1699,
    -804,  -804,   883,  -804,   692, 10735,  7478, 10812,   804,   676,
     800,  -804,   800,   820,   892,  -804,   992,  -804,  -804,  -804,
     825,   841,   825,   825,  -804,   169,    23,   -10,   139,   170,
    -804,  -804,  -804,  -804,   820,   809,  -804,  1699,  -804,  -804,
    -804,   241,  -804,   825,  -804
    //[
  ];

  // YYDEFACT[S] -- default reduction number in state S.
  // Performed when YYTABLE doesn't specify something else to do.
  // Zero means the default is an error.  */
  var yydefact_ =
  [
    //]
         2,     0,     0,     1,     0,   346,   347,   348,     0,   339,
     340,   341,   344,   342,   343,   345,   334,   335,   336,   337,
     297,   263,   263,   509,   508,   510,   511,   607,     0,   607,
      10,     0,   513,   512,   514,   593,   595,   505,   504,   594,
     507,   499,   500,   452,   519,   520,     0,     0,     0,     0,
     288,   618,   618,    85,   406,   478,   476,   478,   480,   460,
     472,   466,   474,     0,     0,     0,     3,   605,     6,     9,
      33,    45,    48,    56,   263,    55,     0,    73,     0,    77,
      87,     0,    53,   244,     0,   286,     0,     0,   311,   314,
     605,     0,     0,     0,     0,    57,   306,   275,   276,   451,
     453,   277,   278,   279,   281,   280,   282,   449,   450,   448,
     515,   516,   283,     0,   284,    61,     5,     8,   168,   179,
     169,   192,   165,   185,   175,   174,   195,   196,   190,   173,
     172,   167,   193,   197,   198,   177,   166,   180,   184,   186,
     178,   171,   187,   194,   189,   188,   181,   191,   176,   164,
     183,   182,   163,   170,   161,   162,   158,   159,   160,   116,
     118,   117,   153,   154,   149,   131,   132,   133,   140,   137,
     139,   134,   135,   155,   156,   141,   142,   146,   150,   136,
     138,   128,   129,   130,   143,   144,   145,   147,   148,   151,
     152,   157,   121,   123,   125,    26,   119,   120,   122,   124,
       0,     0,     0,     0,     0,     0,     0,     0,   258,     0,
     245,   268,    71,   262,   618,     0,   515,   516,     0,   284,
     618,   588,    72,    70,   607,    69,     0,   618,   429,    68,
     607,   608,     0,     0,    21,   241,     0,     0,   334,   335,
     297,   300,   430,     0,   220,     0,   221,   294,     0,    19,
       0,     0,   605,    15,    18,   607,    75,    14,   290,   607,
       0,   611,   611,   246,     0,     0,   611,   586,   607,     0,
       0,     0,    83,   338,     0,    93,    94,   101,   308,   407,
     496,   495,   497,   494,     0,   493,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   501,   502,    52,
     235,   236,   614,   615,     4,   616,   606,     0,     0,     0,
       0,     0,     0,     0,   434,   432,   419,    62,   305,   413,
     415,     0,    89,     0,    81,    78,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   427,   618,   425,     0,    54,     0,     0,
       0,     0,   605,     0,   606,     0,   360,   359,     0,     0,
     515,   516,   284,   111,   112,     0,     0,   114,     0,     0,
     515,   516,   284,   327,   188,   181,   191,   176,   158,   159,
     160,   116,   117,   584,   329,   583,     0,   604,   603,     0,
     307,   454,     0,     0,   126,   591,   294,   269,   592,   265,
       0,     0,     0,   259,   267,   427,   618,   425,     0,     0,
       0,   260,   607,     0,   299,   264,   607,   254,   618,   618,
     253,   607,   304,    51,    23,    25,    24,     0,   301,     0,
       0,     0,   427,   425,     0,    17,     0,   607,   292,    13,
     606,    74,   607,   289,   295,   613,   612,   247,   613,   249,
     296,   587,     0,   100,   501,   502,    91,    86,     0,   427,
     618,   425,   547,   482,   485,   483,   498,   479,   455,   477,
     456,   457,   481,   458,   459,     0,   462,   468,     0,   469,
     464,   465,     0,   470,     0,   471,     0,     0,   617,     7,
      27,    28,    29,    30,    31,    49,    50,   618,   618,    59,
      63,   618,     0,    34,    43,     0,    44,   607,     0,    79,
      90,    47,    46,     0,   199,   268,    42,   217,   225,   230,
     231,   232,   227,   229,   239,   240,   233,   234,   210,   211,
     237,   238,   607,   226,   228,   222,   223,   224,   212,   213,
     214,   215,   216,   596,   598,   597,   599,     0,   263,   424,
     607,   596,   598,   597,   599,     0,   263,     0,   618,   351,
       0,   350,     0,     0,     0,     0,     0,     0,   294,   427,
     618,   425,   319,   324,   111,   112,   113,     0,   522,   322,
     521,   427,   618,   425,     0,     0,   547,   331,   596,   597,
     263,    35,   201,    41,   209,     0,   199,   590,     0,   270,
     266,   618,   596,   597,   607,   596,   597,   589,   298,   609,
     250,   255,   257,   303,    22,     0,   242,     0,    32,   422,
     420,   208,     0,    76,    16,   291,   611,     0,    84,    97,
      99,   607,   596,   597,   553,   550,   549,   548,   551,     0,
     564,     0,   575,   565,   579,   578,   574,   547,     0,   546,
     410,   552,   554,   556,   532,   562,   618,   567,   618,   572,
     532,   577,   532,     0,   530,   486,     0,   461,   463,   473,
     467,   475,   218,   219,   398,   607,     0,   396,   395,     0,
     618,     0,   274,     0,    88,    82,     0,     0,     0,     0,
       0,     0,   428,    66,     0,     0,   431,     0,     0,   426,
      64,   618,   349,   287,   618,   618,   440,   618,   352,   618,
     354,   312,   353,   315,     0,     0,   318,   600,   293,   607,
     596,   597,     0,     0,   524,     0,     0,   111,   112,   115,
     607,     0,   607,   547,     0,     0,     0,   252,   416,    58,
     251,     0,   127,   271,   261,     0,     0,   431,     0,     0,
     618,   607,    11,     0,   248,    92,    95,     0,   558,   553,
       0,   372,   363,   365,   607,   361,   607,     0,     0,   408,
       0,   539,     0,   528,   582,   566,     0,   529,     0,   542,
     576,     0,   544,   580,   487,   489,   490,   491,   484,   492,
     553,     0,   394,   607,     0,   379,   560,   618,   618,   570,
     379,   379,   377,   400,     0,     0,     0,     0,     0,   272,
      80,   200,     0,    40,   206,    39,   207,    67,   423,   610,
       0,    37,   204,    38,   205,    65,   421,   441,   442,   618,
     443,     0,   618,   357,     0,     0,   355,     0,     0,     0,
     317,     0,     0,   431,     0,   325,     0,     0,   431,   328,
     585,   607,     0,   526,   332,   417,   418,   202,     0,   256,
     302,    20,   568,   607,     0,   370,     0,   555,     0,     0,
       0,   531,   557,   532,   532,   563,   618,   581,   532,   573,
     532,   532,     0,     0,     0,   559,     0,   397,   385,   387,
       0,   375,   376,     0,   390,     0,   392,     0,   435,   433,
       0,   414,   273,   243,    36,   203,     0,     0,   445,   358,
       0,    12,   447,     0,   309,   310,     0,     0,   270,   618,
     320,     0,   523,   323,   525,   330,   547,   362,   373,     0,
     368,   364,   409,   412,   411,     0,   535,     0,   537,   527,
       0,   543,     0,   540,   545,     0,   569,   294,   427,   399,
     378,   379,   379,   561,   618,   379,   571,   379,   379,   404,
     607,   402,   405,    60,     0,   444,     0,   102,   103,   110,
       0,   446,     0,   313,   316,   437,   438,   436,     0,     0,
       0,     0,   371,     0,   366,   532,   532,   532,   532,   488,
     600,   293,     0,   382,     0,   384,   374,     0,   391,     0,
     388,   393,     0,   401,   109,   427,   618,   425,   618,   618,
       0,   326,     0,   369,     0,   536,     0,   533,   538,   541,
     379,   379,   379,   379,   403,   600,   108,   607,   596,   597,
     439,   356,   321,   333,   367,   532,   383,     0,   380,   386,
     389,   431,   534,   379,   381
    //[
  ];

  // YYPGOTO[NTERM-NUM].
  var yypgoto_ =
  [
    //]
      -804,  -804,  -804,  -386,  -804,    41,  -804,  -542,   285,  -804,
     527,  -804,    35,  -804,  -310,   -43,   -70,    19,  -804,  -187,
    -804,   680,     9,   887,  -154,    27,   -73,  -804,  -404,     6,
    1733,  -328,   886,   -52,  -804,   -24,  -804,  -804,    13,  -804,
    1007,  -804,   909,  -804,   -72,   271,  -336,   141,     5,  -804,
    -320,  -212,    58,  -313,   -21,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,    49,  -804,  -804,  -804,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,  -520,  -348,  -519,   -36,  -634,  -804,  -803,
    -773,   214,   300,    37,  -804,  -405,  -804,  -653,  -804,   -18,
    -804,  -804,  -804,  -804,  -804,   246,  -804,  -804,  -804,  -804,
    -804,  -804,  -804,   -95,  -804,  -804,  -535,  -804,   -22,  -804,
    -804,  -804,  -804,  -804,  -804,   908,  -804,  -804,  -804,  -804,
     714,  -804,  -804,  -804,  -804,  -804,  -804,  -804,   940,  -804,
    -116,  -804,  -804,  -804,  -804,  -804,     2,  -804,     7,  -804,
    1388,  1539,   906,  1901,  1724,  -804,  -804,    73,  -450,  -410,
    -412,  -769,  -627,  -718,  -134,   228,   111,  -804,  -804,  -804,
     -83,  -721,  -786,   114,   233,  -804,  -574,  -804,  -463,  -579,
    -804,  -804,  -804,   102,  -374,  -804,  -322,  -804,   622,   -29,
     -15,  -221,  -578,  -243,   -62,   -11,    -2
    //[
  ];

  // YYDEFGOTO[NTERM-NUM].
  var yydefgoto_ =
  [
    //]
        -1,     1,     2,    66,    67,    68,   236,   567,   568,   252,
     253,   446,   254,   437,    70,    71,   358,    72,    73,   510,
     690,   243,    75,    76,   255,    77,    78,    79,   467,    80,
     209,   377,   378,   192,   193,   194,   195,   605,   556,   197,
      82,   439,   211,   260,   228,   748,   426,   427,   225,   226,
     213,   413,   428,   516,    83,   356,   259,   452,   625,   360,
     848,   361,   849,   732,   988,   736,   733,   931,   594,   596,
     746,   936,   245,    85,    86,    87,    88,    89,    90,    91,
      92,    93,    94,   713,   570,   721,   845,   846,   369,   772,
     773,   774,   960,   899,   803,   686,   687,   804,   970,   971,
     278,   279,   472,   658,   779,   320,   511,    95,    96,   711,
     704,   565,   557,   318,   508,   507,   577,   987,   715,   839,
     917,   921,    97,    98,    99,   100,   101,   102,   103,   290,
     485,   104,   294,   105,   106,   292,   296,   286,   284,   288,
     477,   676,   675,   794,   892,   798,   107,   285,   108,   109,
     216,   217,   112,   218,   219,   589,   735,   744,   881,   781,
     745,   661,   662,   663,   664,   665,   806,   807,   666,   667,
     668,   669,   809,   810,   670,   671,   672,   673,   674,   783,
     396,   595,   265,   429,   221,   115,   629,   559,   399,   304,
     423,   424,   706,   457,   571,   364,   257
    //[
  ];

  // YYTABLE[YYPACT[STATE-NUM]]. What to do in state STATE-NUM.
  // If positive, shift that token.
  // If negative, reduce the rule which number is the opposite.
  // If yytable_NINF_, syntax error.
  var yytable_ninf_ = this.yytable_ninf_ = -619;
  var yytable_ = this.yytable_ =
  [
    //]
       116,   400,   316,   283,   234,   305,   325,   258,   421,   432,
     198,   572,   232,   526,   235,   199,   521,   359,   560,   459,
     362,   196,   659,   461,   775,   208,   208,   229,   305,   208,
     198,   558,   273,   566,   451,   199,   757,    69,   453,    69,
     724,   196,   394,   357,   357,   117,   617,   357,   586,   263,
     267,    84,   741,    84,   627,   723,   306,   726,   273,   272,
     660,   363,   882,   766,   638,   215,   215,   889,   196,   215,
     273,   273,   273,   941,   214,   214,   256,   600,   214,   317,
     614,   842,  -106,   299,   617,   847,  -108,   569,   314,   787,
    -102,  -103,   610,   558,  -110,   566,   447,   720,    84,   215,
     610,   938,   274,   689,   777,   684,   691,   196,  -293,   261,
    -109,   811,     3,   215,   695,   397,   488,   966,   220,   220,
     327,   630,   220,   878,   494,  -105,   312,   313,   274,   569,
     302,   231,   303,  -107,   641,   215,   215,   654,   972,   215,
     368,   379,   379,   775,   875,   237,   659,   685,   247,   630,
     896,   853,  -105,   262,   266,  -293,  -293,   212,   222,  -597,
     655,   223,   858,   398,   314,   489,   992,   312,   313,   517,
     479,   316,   482,   495,   486,   350,   351,   352,   486,  -104,
     882,   584,  -106,  -107,   289,   585,   778,   431,   941,   433,
     305,   -97,   315,  -596,   857,   -99,   291,  -597,   466,   -93,
     -94,   618,   862,  -101,   850,   620,   884,   659,   851,   302,
     623,   303,   414,   302,   890,   303,   966,   421,   414,  -100,
    1023,   859,   812,   449,   889,   430,   633,   -96,   901,   902,
     231,   635,   882,   208,   -96,   208,   208,   500,   501,   502,
     503,   450,   -98,   972,   729,   776,   763,   775,   617,   775,
     273,  1044,    84,   462,  -104,   302,   740,   303,   587,   630,
     789,  -517,   792,   739,   357,   357,   357,   357,   315,   505,
     506,   630,  -518,   215,   227,   215,   215,   256,  -105,   215,
    -105,   215,   214,   445,   214,   816,    84,  -102,   -95,   882,
     573,   574,   820,   659,   319,   985,   694,    84,  -103,    84,
     305,   610,   610,   273,   841,  -596,   576,   949,  -106,  -107,
    -106,  -107,   775,   994,   455,   -96,   590,   357,   357,   887,
     274,   456,   293,   887,   962,   924,   220,   925,   220,   967,
     519,   861,   583,   575,   251,   930,   -96,   933,  -509,   -96,
     513,    69,   935,   -96,   473,   522,   504,   499,   -98,   295,
     256,   321,   430,   322,   473,    84,   215,   215,   215,   215,
      84,   215,   215,   208,   775,   422,   775,   425,   564,   678,
     215,   996,    84,   274,   588,   215,   678,   852,   419,   515,
    -104,   458,  -104,   473,   515,  1006,  -509,   521,   456,   989,
     474,   444,   475,   764,   986,   466,   302,   775,   303,   754,
     474,   838,   475,   215,  -110,    84,   983,   984,   326,   215,
     215,  1012,   564,   624,   430,   758,    56,  -109,   231,  -508,
     759,   601,   603,   677,   215,   208,   414,   414,  1031,   474,
     564,   475,   476,   680,  -510,   812,   -98,   887,   116,   198,
     812,  -105,   812,   402,   199,   466,  -107,   273,  1022,   404,
     196,   215,   215,   649,  -431,  -511,   564,   -98,   406,  1051,
     -98,   868,   473,   650,   -98,   215,   481,  -508,   430,  1021,
    -593,   230,  -513,   946,   948,    69,   231,   -74,   951,   208,
     953,   954,  -510,  -338,   564,   702,   659,  -104,   251,    84,
     353,   653,   654,   709,   801,   617,   230,   273,   -88,    84,
    1042,   410,  1043,  -511,   650,   688,   688,   415,   474,   688,
     475,   722,   722,  -431,   611,   655,   827,   274,   411,   215,
    -513,   860,   441,   835,   473,   734,   412,   699,   747,  -503,
    -338,  -338,   653,   654,   418,   251,   438,   354,   355,   812,
     870,   812,   420,  -512,   812,   705,   812,   473,   754,   610,
     440,   805,   742,   877,   416,   417,   655,   636,  -431,   224,
    -431,  -431,  -514,   703,   765,   473,   716,   274,   227,   980,
     474,   710,   475,   478,  -593,   982,  -503,  -503,   430,   473,
    -593,   752,   761,   327,   812,  1025,  1027,  1028,  1029,   208,
     430,  -512,   327,   474,   564,   475,   480,  -594,   750,   705,
     -73,   208,   808,   297,   298,   749,   564,   198,   251,   414,
    -514,   474,   199,   475,   484,   448,   273,   454,   196,    84,
    -503,    84,   460,   466,  -506,   474,   705,   475,   491,   215,
     116,   442,   828,   468,   725,  1052,   464,   465,   463,   747,
     934,   215,   483,    84,   215,   348,   349,   350,   351,   352,
     434,  -517,   937,   865,   888,   487,  -506,   891,   469,   435,
     436,  -518,   854,  -515,   784,   856,   784,    69,  -503,  -600,
     813,   855,  -506,   490,   215,   273,   493,  -102,   416,   443,
    1037,    84,    74,   863,    74,  -516,   274,  -103,   688,   357,
     844,   841,   357,   496,   864,   630,    74,    74,   -93,   886,
      74,  -594,   509,  -506,  -506,   470,   471,  -594,   -94,   750,
    -515,  -515,   840,   843,   705,   843,   522,   843,   497,   823,
     825,   403,   520,   760,   576,   705,   831,   833,  -600,    74,
      74,   498,  -516,  -516,   578,    84,   582,   621,    84,  -284,
      84,   619,   579,   622,    74,   274,   215,  -110,   628,   215,
     215,   632,   -88,   637,   679,   591,   215,   215,   414,   196,
     769,   813,   645,   646,   647,   648,    74,    74,  -101,   965,
      74,   968,   515,  -600,   923,  -600,  -600,  -294,   681,  -596,
     273,   215,   958,  -268,   215,    84,  -284,  -284,   813,   580,
     581,  1015,   722,    84,   932,   769,   693,   645,   646,   647,
     648,   357,   592,   593,   697,   784,   784,   444,   696,   707,
     712,   995,   714,   997,   718,   808,   767,   964,   998,   708,
     808,  -422,   808,   780,  -294,  -294,    84,    84,   782,   592,
     593,   762,   785,  -109,   830,  -105,   786,   918,  1016,  1017,
     922,   822,   874,   795,   796,  -107,   797,   904,   906,   914,
     895,   788,    44,    45,  -100,   717,   -96,   719,   790,   769,
    -104,   645,   646,   647,   648,    84,   -98,   791,  1030,   793,
    1032,  -269,   273,   829,   841,  1033,   869,   993,   876,   215,
     871,   -95,   893,    74,   784,   307,   308,   309,   310,   311,
      84,   897,  1045,   215,   898,   273,   770,    84,    84,   900,
     903,    84,   771,   907,    74,   905,    74,    74,   908,   909,
      74,   911,    74,  1053,   916,  -270,   920,    74,   939,   808,
     942,   808,   943,   944,   808,   945,   808,   843,    74,   769,
      74,   645,   646,   647,   648,   969,   947,   645,   646,   647,
     648,    84,   956,   950,   769,   952,   645,   646,   647,   648,
     957,   959,   973,  -271,   991,  1013,   999,  1002,  1004,  1007,
    1014,   264,   784,  1009,   808,   976,   770,  -596,  1024,    84,
    1026,   814,   940,  -597,   815,  1047,   817,   634,   366,   383,
      84,   770,   836,  1041,   873,   802,    74,    74,    74,    74,
      74,    74,    74,    74,  1034,   866,  1040,   287,  1003,  1005,
     395,    74,  1008,    74,  1010,  1011,    74,   401,   492,   990,
     885,   963,   961,   883,   430,     0,   716,   843,   597,     0,
       0,     0,   705,   210,   210,   208,     0,   210,     0,    84,
     564,    84,     0,     0,    74,     0,    74,    84,     0,    84,
      74,    74,     0,     0,   769,     0,   645,   646,   647,   648,
     649,     0,     0,   244,   246,    74,     0,     0,   210,   210,
     650,     0,   879,   880,     0,   215,     0,  1046,  1048,  1049,
    1050,   300,   301,     0,     0,     0,     0,     0,     0,     0,
       0,   651,    74,    74,     0,     0,     0,     0,   653,   654,
    1054,     0,     0,     0,     0,     0,    74,     0,     0,     0,
       0,   910,     0,     0,     0,     0,     0,     0,     0,     0,
     405,     0,   655,   407,   408,   409,     0,     0,     0,     0,
      74,     0,     0,     0,     0,     0,   919,     0,     0,     0,
      74,     0,     0,   926,   927,     0,     0,   929,   800,     0,
     645,   646,   647,   648,   801,     0,     0,  -618,     0,     0,
      74,     0,     0,     0,   650,  -618,  -618,  -618,     0,     0,
    -618,  -618,  -618,   327,  -618,     0,     0,     0,     0,     0,
       0,     0,     0,  -618,  -618,   651,     0,   955,   340,   341,
       0,   652,   653,   654,  -618,  -618,   327,  -618,  -618,  -618,
    -618,  -618,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   340,   341,     0,     0,   981,   655,     0,   210,   656,
       0,   210,   210,   210,   300,   347,   348,   349,   350,   351,
     352,     0,     0,     0,     0,     0,     0,   231,     0,     0,
     514,   210,  -618,   210,   210,   525,   345,   346,   347,   348,
     349,   350,   351,   352,     0,     0,   327,     0,     0,     0,
      74,     0,    74,     0,     0,  -618,     0,     0,     0,     0,
      74,   340,   341,     0,     0,  1018,     0,  1019,     0,     0,
       0,     0,    74,  1020,    74,    74,     0,  -618,  -618,     0,
    -618,     0,     0,   227,  -618,     0,  -618,     0,  -618,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   348,
     349,   350,   351,   352,     0,    74,     0,     0,     0,     0,
       0,     0,    74,     0,     0,     0,     0,     0,     0,     0,
     607,   609,     0,     0,     0,     0,     0,     0,   210,   264,
       0,     0,     0,   524,   527,   528,   529,   530,   531,   532,
     533,   534,   535,   536,   537,   538,   539,   540,   541,   542,
     543,   544,   545,   546,   547,   548,   549,   550,   551,   552,
       0,   210,     0,     0,   609,     0,    74,   264,     0,    74,
       0,    74,     0,     0,     0,     0,     0,    74,     0,     0,
      74,    74,     0,     0,     0,     0,     0,    74,    74,     0,
     110,     0,   110,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   602,
     604,     0,    74,     0,     0,    74,    74,   606,   210,   210,
       0,   692,     0,   210,    74,   602,   604,   210,     0,   644,
       0,   645,   646,   647,   648,   649,     0,   110,     0,     0,
       0,   275,     0,     0,     0,   650,   626,     0,     0,     0,
       0,   631,     0,     0,     0,     0,     0,    74,    74,     0,
       0,     0,   210,     0,     0,   210,   651,   275,     0,     0,
       0,     0,   652,   653,   654,     0,     0,   210,     0,   370,
     380,   380,   380,     0,     0,   525,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    74,   655,     0,     0,
     656,     0,     0,   682,   683,     0,     0,     0,     0,     0,
      74,     0,     0,   657,     0,     0,     0,   753,     0,   210,
       0,    74,     0,     0,    74,     0,     0,     0,    74,    74,
     609,   264,    74,   644,     0,   645,   646,   647,   648,   649,
       0,   111,     0,   111,     0,     0,     0,     0,     0,   650,
       0,     0,     0,     0,     0,     0,     0,     0,   768,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     651,     0,    74,     0,     0,     0,   652,   653,   654,     0,
       0,     0,     0,   210,     0,     0,     0,   210,   111,     0,
       0,   110,   276,     0,     0,     0,     0,     0,     0,   210,
      74,   655,   819,   644,   656,   645,   646,   647,   648,   649,
       0,    74,     0,     0,     0,   210,     0,   743,   276,   650,
       0,     0,     0,   837,     0,   110,     0,     0,   210,   210,
     371,   381,   381,   381,     0,     0,   110,     0,   110,     0,
     651,     0,     0,     0,     0,     0,   652,   653,   654,     0,
       0,     0,     0,     0,     0,     0,   210,     0,     0,   275,
      74,     0,    74,     0,     0,     0,     0,     0,    74,     0,
      74,   655,     0,     0,   656,     0,   872,     0,     0,   800,
       0,   645,   646,   647,   648,   801,     0,     0,     0,     0,
       0,     0,     0,     0,   110,   650,    74,     0,     0,   110,
     210,     0,     0,     0,   606,   821,     0,   824,   826,     0,
       0,   110,   275,     0,   832,   834,   651,     0,     0,     0,
       0,   210,   652,   653,   654,     0,   114,   912,   114,     0,
       0,     0,     0,     0,     0,    81,     0,    81,     0,     0,
       0,     0,   111,     0,   110,     0,     0,   655,     0,     0,
     656,   769,     0,   645,   646,   647,   648,   801,   867,     0,
     928,     0,   824,   826,     0,   832,   834,   650,     0,     0,
       0,     0,     0,   114,   210,     0,   111,   277,   264,     0,
       0,     0,    81,     0,     0,     0,     0,   111,   651,   111,
       0,     0,     0,     0,     0,   653,   654,     0,     0,     0,
       0,     0,     0,   277,     0,     0,     0,     0,     0,     0,
     276,     0,     0,     0,     0,   372,   382,   382,     0,   655,
       0,     0,     0,     0,   367,   210,     0,     0,   110,   913,
       0,     0,     0,     0,     0,     0,     0,   915,   110,     0,
       0,     0,     0,     0,     0,   111,     0,     0,     0,     0,
     111,     0,     0,     0,     0,     0,   275,     0,   210,     0,
       0,     0,   111,   276,   327,   328,   329,   330,   331,   332,
     333,   334,     0,   336,   337,   915,   210,     0,     0,   340,
     341,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   111,     0,     0,     0,     0,
       0,     0,     0,   113,     0,   113,   275,     0,     0,     0,
       0,     0,   343,   344,   345,   346,   347,   348,   349,   350,
     351,   352,     0,     0,     0,     0,     0,   114,     0,     0,
       0,     0,     0,     0,     0,     0,    81,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     113,     0,     0,     0,     0,     0,     0,     0,   110,     0,
     110,   114,     0,     0,     0,     0,     0,     0,     0,     0,
      81,     0,   114,     0,   114,     0,     0,     0,     0,   111,
       0,    81,   110,    81,     0,     0,     0,     0,     0,   111,
       0,     0,     0,     0,     0,   277,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   276,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     110,     0,     0,   210,     0,   275,     0,     0,     0,     0,
     114,     0,     0,     0,     0,   114,     0,     0,     0,    81,
       0,     0,     0,     0,    81,     0,     0,   114,   277,     0,
       0,     0,     0,     0,     0,     0,    81,   276,     0,   523,
       0,     0,     0,     0,     0,     0,     0,   698,     0,     0,
       0,     0,     0,     0,   110,     0,     0,   110,     0,   110,
     114,     0,     0,     0,   275,     0,     0,     0,     0,    81,
       0,   327,   328,   329,   330,   331,   332,   333,   334,   335,
     336,   337,   338,   339,   113,     0,   340,   341,     0,   111,
       0,   111,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   110,     0,     0,     0,     0,     0,
       0,     0,   110,   111,     0,     0,     0,   342,   113,   343,
     344,   345,   346,   347,   348,   349,   350,   351,   352,   113,
       0,   113,     0,     0,     0,     0,     0,  -245,     0,     0,
       0,     0,     0,     0,   114,   110,   110,     0,     0,     0,
       0,   111,     0,    81,   114,     0,   276,     0,     0,     0,
       0,     0,     0,    81,     0,     0,     0,     0,     0,   380,
       0,     0,   277,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   110,     0,     0,   113,     0,     0,
       0,     0,   113,     0,     0,     0,     0,   327,  -619,  -619,
    -619,  -619,   332,   333,   113,   111,  -619,  -619,   111,   110,
     111,     0,   340,   341,     0,   276,   110,   110,     0,     0,
     110,     0,   277,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   113,     0,     0,
       0,     0,     0,     0,     0,   343,   344,   345,   346,   347,
     348,   349,   350,   351,   352,   111,     0,     0,     0,     0,
     110,   380,     0,   111,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   114,     0,   114,     0,     0,     0,
       0,     0,     0,    81,   977,    81,     0,     0,   110,     0,
       0,     0,     0,     0,     0,     0,   111,   111,   114,   110,
       0,     0,     0,     0,     0,     0,     0,    81,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     381,   113,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   113,     0,     0,     0,   111,   114,     0,     0,     0,
       0,   277,     0,     0,     0,    81,     0,     0,   110,     0,
     110,     0,     0,     0,     0,     0,   110,     0,   110,     0,
     111,     0,     0,     0,     0,     0,     0,   111,   111,     0,
       0,   111,     0,     0,     0,     0,     0,     0,     0,     0,
     799,     0,     0,     0,     0,     0,     0,     0,     0,   751,
     114,     0,     0,   114,     0,   114,     0,     0,     0,    81,
     277,     0,    81,     0,    81,     0,     0,     0,     0,     0,
     523,   111,   381,   327,   328,   329,   330,   331,   332,   333,
     334,   335,   336,   337,   338,   339,     0,     0,   340,   341,
       0,     0,     0,     0,     0,   978,     0,     0,     0,   111,
     114,     0,     0,     0,     0,     0,     0,     0,   114,    81,
     111,   113,     0,   113,     0,     0,     0,    81,     0,   342,
       0,   343,   344,   345,   346,   347,   348,   349,   350,   351,
     352,     0,     0,     0,     0,   113,     0,     0,     0,     0,
       0,   114,   114,     0,     0,     0,     0,     0,     0,     0,
      81,    81,     0,     0,     0,     0,     0,     0,     0,   111,
       0,   111,     0,     0,     0,   382,     0,   111,   698,   111,
       0,     0,     0,   113,     0,     0,     0,     0,     0,     0,
     114,     0,     0,     0,     0,     0,     0,     0,     0,    81,
       0,     0,   327,   328,   329,   330,   331,   332,   333,   334,
     335,   336,   337,   338,   339,   114,     0,   340,   341,     0,
       0,     0,   114,   114,    81,     0,   114,     0,     0,     0,
       0,    81,    81,     0,     0,    81,     0,   113,     0,     0,
     113,     0,   113,     0,     0,     0,     0,     0,   342,     0,
     343,   344,   345,   346,   347,   348,   349,   350,   351,   352,
       0,     0,     0,     0,     0,     0,   114,   382,   327,   328,
     329,   330,   331,   332,   333,    81,     0,   336,   337,     0,
       0,     0,     0,   340,   341,     0,     0,   113,     0,     0,
     979,     0,     0,     0,   114,   113,     0,     0,     0,   975,
       0,     0,     0,    81,     0,   114,     0,     0,     0,     0,
       0,     0,     0,     0,    81,     0,   343,   344,   345,   346,
     347,   348,   349,   350,   351,   352,     0,     0,   113,   113,
     327,   328,   329,   330,   331,   332,   333,   334,   335,   336,
     337,   338,   339,     0,     0,   340,   341,     0,     0,     0,
       0,     0,     0,     0,   114,     0,   114,     0,     0,     0,
       0,     0,   114,    81,   114,    81,     0,   113,     0,     0,
       0,    81,     0,    81,     0,     0,   342,     0,   343,   344,
     345,   346,   347,   348,   349,   350,   351,   352,     0,     0,
       0,     0,   113,     0,     0,     0,     0,     0,     0,   113,
     113,  -618,     4,   113,     5,     6,     7,     8,     9,     0,
       0,     0,    10,    11,     0,     0,     0,    12,     0,    13,
      14,    15,    16,    17,    18,    19,     0,     0,     0,     0,
       0,    20,    21,    22,    23,    24,    25,    26,     0,     0,
      27,     0,     0,   113,     0,     0,    28,    29,    30,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,    47,     0,
       0,   113,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   113,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,  -600,     0,
       0,     0,     0,     0,     0,     0,  -600,  -600,  -600,     0,
       0,  -600,  -600,  -600,     0,  -600,     0,    63,    64,    65,
       0,   113,     0,   113,  -600,  -600,  -600,  -600,     0,   113,
    -618,   113,  -618,     0,     0,  -600,  -600,     0,  -600,  -600,
    -600,  -600,  -600,     0,     0,   327,   328,   329,   330,   331,
     332,   333,   334,   335,   336,   337,  -619,  -619,     0,     0,
     340,   341,     0,     0,     0,     0,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,  -600,  -600,  -600,  -600,  -600,     0,
       0,  -600,  -600,  -600,     0,   755,  -600,     0,     0,     0,
       0,     0,  -600,   343,   344,   345,   346,   347,   348,   349,
     350,   351,   352,     0,     0,     0,  -600,     0,     0,  -600,
       0,  -106,  -600,  -600,  -600,  -600,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,     0,     0,     0,     0,  -600,  -600,
    -600,  -600,  -600,  -503,     0,  -600,  -600,  -600,     0,  -600,
       0,  -503,  -503,  -503,     0,     0,  -503,  -503,  -503,     0,
    -503,     0,     0,     0,     0,     0,     0,     0,  -503,     0,
    -503,  -503,  -503,     0,     0,     0,     0,     0,     0,     0,
    -503,  -503,     0,  -503,  -503,  -503,  -503,  -503,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -503,  -503,  -503,  -503,  -503,  -503,  -503,  -503,  -503,
    -503,  -503,  -503,  -503,     0,     0,  -503,  -503,  -503,     0,
    -503,  -503,     0,     0,     0,     0,     0,  -503,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -503,     0,     0,  -503,     0,  -503,  -503,  -503,  -503,
    -503,  -503,  -503,  -503,  -503,  -503,  -503,  -503,  -503,     0,
       0,     0,     0,     0,  -503,  -503,  -503,  -503,  -506,     0,
    -503,  -503,  -503,     0,  -503,     0,  -506,  -506,  -506,     0,
       0,  -506,  -506,  -506,     0,  -506,     0,     0,     0,     0,
       0,     0,     0,  -506,     0,  -506,  -506,  -506,     0,     0,
       0,     0,     0,     0,     0,  -506,  -506,     0,  -506,  -506,
    -506,  -506,  -506,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -506,  -506,  -506,  -506,
    -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,     0,
       0,  -506,  -506,  -506,     0,  -506,  -506,     0,     0,     0,
       0,     0,  -506,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -506,     0,     0,  -506,
       0,  -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,
    -506,  -506,  -506,  -506,     0,     0,     0,     0,     0,  -506,
    -506,  -506,  -506,  -601,     0,  -506,  -506,  -506,     0,  -506,
       0,  -601,  -601,  -601,     0,     0,  -601,  -601,  -601,     0,
    -601,     0,     0,     0,     0,     0,     0,     0,     0,  -601,
    -601,  -601,  -601,     0,     0,     0,     0,     0,     0,     0,
    -601,  -601,     0,  -601,  -601,  -601,  -601,  -601,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,
    -601,  -601,  -601,  -601,     0,     0,  -601,  -601,  -601,     0,
       0,  -601,     0,     0,     0,     0,     0,  -601,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -601,     0,     0,  -601,     0,     0,  -601,  -601,  -601,
    -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,     0,
       0,     0,     0,  -601,  -601,  -601,  -601,  -601,  -602,     0,
    -601,  -601,  -601,     0,  -601,     0,  -602,  -602,  -602,     0,
       0,  -602,  -602,  -602,     0,  -602,     0,     0,     0,     0,
       0,     0,     0,     0,  -602,  -602,  -602,  -602,     0,     0,
       0,     0,     0,     0,     0,  -602,  -602,     0,  -602,  -602,
    -602,  -602,  -602,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -602,  -602,  -602,  -602,
    -602,  -602,  -602,  -602,  -602,  -602,  -602,  -602,  -602,     0,
       0,  -602,  -602,  -602,     0,     0,  -602,     0,     0,     0,
       0,     0,  -602,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -602,     0,     0,  -602,
       0,     0,  -602,  -602,  -602,  -602,  -602,  -602,  -602,  -602,
    -602,  -602,  -602,  -602,     0,     0,     0,     0,  -602,  -602,
    -602,  -602,  -602,  -293,     0,  -602,  -602,  -602,     0,  -602,
       0,  -293,  -293,  -293,     0,     0,  -293,  -293,  -293,     0,
    -293,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -293,  -293,  -293,     0,     0,     0,     0,     0,     0,     0,
    -293,  -293,     0,  -293,  -293,  -293,  -293,  -293,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,
    -293,  -293,  -293,  -293,     0,     0,  -293,  -293,  -293,     0,
     756,  -293,     0,     0,     0,     0,     0,  -293,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -293,     0,     0,  -293,     0,  -108,  -293,  -293,  -293,
    -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,     0,
       0,     0,     0,     0,  -293,  -293,  -293,  -293,  -430,     0,
    -293,  -293,  -293,     0,  -293,     0,  -430,  -430,  -430,     0,
       0,  -430,  -430,  -430,     0,  -430,     0,     0,     0,     0,
       0,     0,     0,     0,  -430,  -430,  -430,     0,     0,     0,
       0,     0,     0,     0,     0,  -430,  -430,     0,  -430,  -430,
    -430,  -430,  -430,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -430,  -430,  -430,  -430,
    -430,  -430,  -430,  -430,  -430,  -430,  -430,  -430,  -430,     0,
       0,  -430,  -430,  -430,     0,     0,  -430,     0,     0,     0,
       0,     0,  -430,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -430,     0,     0,     0,
       0,     0,  -430,     0,  -430,  -430,  -430,  -430,  -430,  -430,
    -430,  -430,  -430,  -430,     0,     0,     0,     0,  -430,  -430,
    -430,  -430,  -430,  -285,   227,  -430,  -430,  -430,     0,  -430,
       0,  -285,  -285,  -285,     0,     0,  -285,  -285,  -285,     0,
    -285,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -285,  -285,  -285,     0,     0,     0,     0,     0,     0,     0,
    -285,  -285,     0,  -285,  -285,  -285,  -285,  -285,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -285,  -285,  -285,  -285,  -285,  -285,  -285,  -285,  -285,
    -285,  -285,  -285,  -285,     0,     0,  -285,  -285,  -285,     0,
       0,  -285,     0,     0,     0,     0,     0,  -285,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -285,     0,     0,  -285,     0,     0,  -285,  -285,  -285,
    -285,  -285,  -285,  -285,  -285,  -285,  -285,  -285,  -285,     0,
       0,     0,     0,     0,  -285,  -285,  -285,  -285,  -420,     0,
    -285,  -285,  -285,     0,  -285,     0,  -420,  -420,  -420,     0,
       0,  -420,  -420,  -420,     0,  -420,     0,     0,     0,     0,
       0,     0,     0,     0,  -420,  -420,  -420,     0,     0,     0,
       0,     0,     0,     0,     0,  -420,  -420,     0,  -420,  -420,
    -420,  -420,  -420,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -420,  -420,  -420,  -420,
    -420,  -420,  -420,  -420,  -420,  -420,  -420,  -420,  -420,     0,
       0,  -420,  -420,  -420,     0,     0,  -420,     0,     0,     0,
       0,     0,  -420,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -420,     0,     0,     0,
       0,     0,  -420,     0,  -420,  -420,  -420,  -420,  -420,  -420,
    -420,  -420,  -420,  -420,     0,     0,     0,     0,  -420,  -420,
    -420,  -420,  -420,  -300,  -420,  -420,  -420,  -420,     0,  -420,
       0,  -300,  -300,  -300,     0,     0,  -300,  -300,  -300,     0,
    -300,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -300,  -300,     0,     0,     0,     0,     0,     0,     0,     0,
    -300,  -300,     0,  -300,  -300,  -300,  -300,  -300,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -300,  -300,  -300,  -300,  -300,  -300,  -300,  -300,  -300,
    -300,  -300,  -300,  -300,     0,     0,  -300,  -300,  -300,     0,
       0,  -300,     0,     0,     0,     0,     0,  -300,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -300,     0,     0,     0,     0,     0,  -300,     0,  -300,
    -300,  -300,  -300,  -300,  -300,  -300,  -300,  -300,  -300,     0,
       0,     0,     0,     0,  -300,  -300,  -300,  -300,  -600,   224,
    -300,  -300,  -300,     0,  -300,     0,  -600,  -600,  -600,     0,
       0,     0,  -600,  -600,     0,  -600,     0,     0,     0,     0,
       0,     0,     0,     0,  -600,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,  -600,  -600,     0,  -600,  -600,
    -600,  -600,  -600,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,  -600,  -600,  -600,  -600,  -600,     0,
       0,  -600,  -600,  -600,     0,   700,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -600,     0,     0,     0,
       0,  -106,  -600,     0,  -600,  -600,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,     0,     0,     0,     0,  -600,  -600,
    -600,  -600,   -97,  -293,     0,  -600,     0,  -600,     0,  -600,
       0,  -293,  -293,  -293,     0,     0,     0,  -293,  -293,     0,
    -293,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -293,  -293,     0,  -293,  -293,  -293,  -293,  -293,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,
    -293,  -293,  -293,  -293,     0,     0,  -293,  -293,  -293,     0,
     701,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -293,     0,     0,     0,     0,  -108,  -293,     0,  -293,
    -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,  -293,     0,
       0,     0,     0,     0,  -293,  -293,  -293,   -99,     0,     0,
    -293,     0,  -293,   248,  -293,     5,     6,     7,     8,     9,
    -618,  -618,  -618,    10,    11,     0,     0,  -618,    12,     0,
      13,    14,    15,    16,    17,    18,    19,     0,     0,     0,
       0,     0,    20,    21,    22,    23,    24,    25,    26,     0,
       0,    27,     0,     0,     0,     0,     0,    28,    29,   249,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,    46,    47,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    48,     0,
       0,    49,    50,     0,    51,    52,     0,    53,     0,     0,
      54,    55,    56,    57,    58,    59,    60,    61,    62,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    63,    64,
      65,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -618,   248,  -618,     5,     6,     7,     8,     9,     0,
       0,  -618,    10,    11,     0,  -618,  -618,    12,     0,    13,
      14,    15,    16,    17,    18,    19,     0,     0,     0,     0,
       0,    20,    21,    22,    23,    24,    25,    26,     0,     0,
      27,     0,     0,     0,     0,     0,    28,    29,   249,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,    47,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    63,    64,    65,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -618,   248,  -618,     5,     6,     7,     8,     9,     0,     0,
    -618,    10,    11,     0,     0,  -618,    12,  -618,    13,    14,
      15,    16,    17,    18,    19,     0,     0,     0,     0,     0,
      20,    21,    22,    23,    24,    25,    26,     0,     0,    27,
       0,     0,     0,     0,     0,    28,    29,   249,    31,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,     0,    46,    47,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    48,     0,     0,    49,
      50,     0,    51,    52,     0,    53,     0,     0,    54,    55,
      56,    57,    58,    59,    60,    61,    62,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,    63,    64,    65,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -618,
     248,  -618,     5,     6,     7,     8,     9,     0,     0,  -618,
      10,    11,     0,     0,  -618,    12,     0,    13,    14,    15,
      16,    17,    18,    19,     0,     0,     0,     0,     0,    20,
      21,    22,    23,    24,    25,    26,     0,     0,    27,     0,
       0,     0,     0,     0,    28,    29,   249,    31,    32,    33,
      34,    35,    36,    37,    38,    39,    40,     0,    41,    42,
       0,    43,    44,    45,     0,    46,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    48,     0,     0,    49,    50,
       0,    51,    52,     0,    53,     0,     0,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     0,     0,   248,     0,     5,     6,     7,     8,     9,
       0,  -618,  -618,    10,    11,    63,    64,    65,    12,     0,
      13,    14,    15,    16,    17,    18,    19,     0,  -618,     0,
    -618,     0,    20,    21,    22,    23,    24,    25,    26,     0,
       0,    27,     0,     0,     0,     0,     0,    28,    29,   249,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,    46,    47,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,    48,     0,
       0,    49,    50,     0,    51,    52,     0,    53,     0,     0,
      54,    55,    56,    57,    58,    59,    60,    61,    62,     0,
       0,     0,     0,     0,     0,     0,   248,     0,     5,     6,
       7,     8,     9,     0,     0,     0,    10,    11,    63,    64,
      65,    12,     0,    13,    14,    15,    16,    17,    18,    19,
       0,  -618,     0,  -618,     0,    20,    21,    22,    23,    24,
      25,    26,     0,     0,    27,     0,     0,     0,     0,     0,
      28,    29,   249,    31,    32,    33,    34,    35,    36,    37,
      38,    39,    40,     0,    41,    42,     0,    43,    44,    45,
       0,    46,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    48,     0,     0,   250,    50,     0,    51,    52,     0,
      53,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    63,    64,    65,     0,     0,     0,     0,     0,     0,
       0,     0,  -618,     0,  -618,   248,  -618,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,     0,     0,     0,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,   249,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,    47,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      48,     0,     0,    49,    50,     0,    51,    52,     0,    53,
       0,     0,    54,    55,    56,    57,    58,    59,    60,    61,
      62,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      63,    64,    65,     0,     0,     0,     0,     0,     0,     0,
       0,  -618,     0,  -618,   248,  -618,     5,     6,     7,     8,
       9,     0,     0,     0,    10,    11,     0,     0,     0,    12,
       0,    13,    14,    15,    16,    17,    18,    19,     0,     0,
       0,     0,     0,    20,    21,    22,    23,    24,    25,    26,
       0,     0,    27,     0,     0,     0,     0,     0,    28,    29,
     249,    31,    32,    33,    34,    35,    36,    37,    38,    39,
      40,     0,    41,    42,     0,    43,    44,    45,     0,    46,
      47,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    48,
       0,     0,    49,    50,     0,    51,    52,     0,    53,     0,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    63,
      64,    65,     0,     0,  -618,     4,     0,     5,     6,     7,
       8,     9,  -618,     0,  -618,    10,    11,     0,     0,     0,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,    30,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,    47,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      48,     0,     0,    49,    50,     0,    51,    52,     0,    53,
       0,     0,    54,    55,    56,    57,    58,    59,    60,    61,
      62,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
      63,    64,    65,     0,     0,  -618,     0,     0,     0,     0,
       0,     0,     0,  -618,   248,  -618,     5,     6,     7,     8,
       9,     0,     0,  -618,    10,    11,     0,     0,     0,    12,
       0,    13,    14,    15,    16,    17,    18,    19,     0,     0,
       0,     0,     0,    20,    21,    22,    23,    24,    25,    26,
       0,     0,    27,     0,     0,     0,     0,     0,    28,    29,
     249,    31,    32,    33,    34,    35,    36,    37,    38,    39,
      40,     0,    41,    42,     0,    43,    44,    45,     0,    46,
      47,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    48,
       0,     0,    49,    50,     0,    51,    52,     0,    53,     0,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     0,     0,   248,     0,     5,
       6,     7,     8,     9,     0,     0,     0,    10,    11,    63,
      64,    65,    12,     0,    13,    14,    15,    16,    17,    18,
      19,     0,  -618,     0,  -618,     0,    20,    21,    22,    23,
      24,    25,    26,     0,     0,    27,     0,     0,     0,     0,
       0,    28,    29,   249,    31,    32,    33,    34,    35,    36,
      37,    38,    39,    40,     0,    41,    42,     0,    43,    44,
      45,     0,    46,    47,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,    48,     0,     0,    49,    50,     0,    51,    52,
       0,    53,     0,     0,    54,    55,    56,    57,    58,    59,
      60,    61,    62,     0,  -618,     0,     0,     0,     0,     0,
       0,     0,     5,     6,     7,     0,     9,     0,     0,     0,
      10,    11,    63,    64,    65,    12,     0,    13,    14,    15,
      16,    17,    18,    19,     0,  -618,     0,  -618,     0,    20,
      21,    22,    23,    24,    25,    26,     0,     0,   200,     0,
       0,     0,     0,     0,     0,    29,     0,     0,    32,    33,
      34,    35,    36,    37,    38,    39,    40,   201,    41,    42,
       0,    43,    44,    45,     0,    46,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   202,     0,     0,   203,    50,
       0,    51,    52,     0,   204,   205,   206,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     5,     6,     7,     0,     9,
       0,     0,     0,    10,    11,    63,   207,    65,    12,     0,
      13,    14,    15,    16,    17,    18,    19,     0,     0,     0,
     231,     0,    20,    21,    22,    23,    24,    25,    26,     0,
       0,    27,     0,     0,     0,     0,     0,     0,    29,     0,
       0,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,    46,    47,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   202,     0,
       0,   203,    50,     0,    51,    52,     0,     0,     0,     0,
      54,    55,    56,    57,    58,    59,    60,    61,    62,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     5,     6,
       7,     0,     9,     0,     0,     0,    10,    11,    63,    64,
      65,    12,     0,    13,    14,    15,    16,    17,    18,    19,
       0,   302,     0,   303,     0,    20,    21,    22,    23,    24,
      25,    26,     0,     0,    27,     0,     0,     0,     0,     0,
       0,    29,     0,     0,    32,    33,    34,    35,    36,    37,
      38,    39,    40,     0,    41,    42,     0,    43,    44,    45,
       0,    46,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   202,     0,     0,   203,    50,     0,    51,    52,     0,
       0,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     5,     6,     7,     8,     9,     0,     0,     0,    10,
      11,    63,    64,    65,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,     0,     0,   231,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,    27,     0,     0,
       0,     0,     0,    28,    29,    30,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,    47,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    48,     0,     0,    49,    50,     0,
      51,    52,     0,    53,     0,     0,    54,    55,    56,    57,
      58,    59,    60,    61,    62,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     5,     6,     7,     8,     9,     0,
       0,     0,    10,    11,    63,    64,    65,    12,     0,    13,
      14,    15,    16,    17,    18,    19,     0,   498,     0,     0,
       0,    20,    21,    22,    23,    24,    25,    26,     0,     0,
      27,     0,     0,     0,     0,     0,    28,    29,   249,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,    47,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    63,    64,    65,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     498,   118,   119,   120,   121,   122,   123,   124,   125,   126,
     127,   128,   129,   130,   131,   132,   133,   134,   135,   136,
     137,   138,   139,   140,   141,     0,     0,     0,   142,   143,
     144,   384,   385,   386,   387,   149,   150,   151,     0,     0,
       0,     0,     0,   152,   153,   154,   155,   388,   389,   390,
     391,   160,    37,    38,   392,    40,     0,     0,     0,     0,
       0,     0,     0,     0,   162,   163,   164,   165,   166,   167,
     168,   169,   170,     0,     0,   171,   172,     0,     0,   173,
     174,   175,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   177,   178,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   179,   180,   181,   182,   183,   184,
     185,   186,   187,   188,     0,   189,   190,     0,     0,     0,
       0,     0,     0,   191,   393,   118,   119,   120,   121,   122,
     123,   124,   125,   126,   127,   128,   129,   130,   131,   132,
     133,   134,   135,   136,   137,   138,   139,   140,   141,     0,
       0,     0,   142,   143,   144,   145,   146,   147,   148,   149,
     150,   151,     0,     0,     0,     0,     0,   152,   153,   154,
     155,   156,   157,   158,   159,   160,   280,   281,   161,   282,
       0,     0,     0,     0,     0,     0,     0,     0,   162,   163,
     164,   165,   166,   167,   168,   169,   170,     0,     0,   171,
     172,     0,     0,   173,   174,   175,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   177,   178,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   179,   180,
     181,   182,   183,   184,   185,   186,   187,   188,     0,   189,
     190,     0,     0,     0,     0,     0,     0,   191,   118,   119,
     120,   121,   122,   123,   124,   125,   126,   127,   128,   129,
     130,   131,   132,   133,   134,   135,   136,   137,   138,   139,
     140,   141,     0,     0,     0,   142,   143,   144,   145,   146,
     147,   148,   149,   150,   151,     0,     0,     0,     0,     0,
     152,   153,   154,   155,   156,   157,   158,   159,   160,   233,
       0,   161,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   162,   163,   164,   165,   166,   167,   168,   169,   170,
       0,     0,   171,   172,     0,     0,   173,   174,   175,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,    55,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,     0,     0,     0,     0,     0,     0,
     191,   118,   119,   120,   121,   122,   123,   124,   125,   126,
     127,   128,   129,   130,   131,   132,   133,   134,   135,   136,
     137,   138,   139,   140,   141,     0,     0,     0,   142,   143,
     144,   145,   146,   147,   148,   149,   150,   151,     0,     0,
       0,     0,     0,   152,   153,   154,   155,   156,   157,   158,
     159,   160,     0,     0,   161,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   162,   163,   164,   165,   166,   167,
     168,   169,   170,     0,     0,   171,   172,     0,     0,   173,
     174,   175,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   177,   178,     0,     0,    55,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   179,   180,   181,   182,   183,   184,
     185,   186,   187,   188,     0,   189,   190,     0,     0,     0,
       0,     0,     0,   191,   118,   119,   120,   121,   122,   123,
     124,   125,   126,   127,   128,   129,   130,   131,   132,   133,
     134,   135,   136,   137,   138,   139,   140,   141,     0,     0,
       0,   142,   143,   144,   145,   146,   147,   148,   149,   150,
     151,     0,     0,     0,     0,     0,   152,   153,   154,   155,
     156,   157,   158,   159,   160,     0,     0,   161,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   162,   163,   164,
     165,   166,   167,   168,   169,   170,     0,     0,   171,   172,
       0,     0,   173,   174,   175,   176,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   177,   178,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   179,   180,   181,
     182,   183,   184,   185,   186,   187,   188,     0,   189,   190,
       5,     6,     7,     0,     9,     0,   191,     0,    10,    11,
       0,     0,     0,    12,     0,    13,    14,    15,   238,   239,
      18,    19,     0,     0,     0,     0,     0,   240,   241,   242,
      23,    24,    25,    26,     0,     0,   200,     0,     0,     0,
       0,     0,     0,   268,     0,     0,    32,    33,    34,    35,
      36,    37,    38,    39,    40,     0,    41,    42,     0,    43,
      44,    45,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   269,     0,     0,   203,    50,     0,    51,
      52,     0,     0,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     5,
       6,     7,     0,     9,     0,     0,     0,    10,    11,     0,
       0,     0,    12,   270,    13,    14,    15,   238,   239,    18,
      19,   271,     0,     0,     0,     0,   240,   241,   242,    23,
      24,    25,    26,     0,     0,   200,     0,     0,     0,     0,
       0,     0,   268,     0,     0,    32,    33,    34,    35,    36,
      37,    38,    39,    40,     0,    41,    42,     0,    43,    44,
      45,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   269,     0,     0,   203,    50,     0,    51,    52,
       0,     0,     0,     0,    54,    55,    56,    57,    58,    59,
      60,    61,    62,     0,     0,     0,     0,     0,     5,     6,
       7,     8,     9,     0,     0,     0,    10,    11,     0,     0,
       0,    12,   270,    13,    14,    15,    16,    17,    18,    19,
     518,     0,     0,     0,     0,    20,    21,    22,    23,    24,
      25,    26,     0,     0,    27,     0,     0,     0,     0,     0,
      28,    29,    30,    31,    32,    33,    34,    35,    36,    37,
      38,    39,    40,     0,    41,    42,     0,    43,    44,    45,
       0,    46,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    48,     0,     0,    49,    50,     0,    51,    52,     0,
      53,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     5,     6,     7,     0,     9,     0,     0,     0,    10,
      11,    63,    64,    65,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,     0,     0,     0,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,   200,     0,     0,
       0,     0,     0,     0,    29,     0,     0,    32,    33,    34,
      35,    36,    37,    38,    39,    40,   201,    41,    42,     0,
      43,    44,    45,     0,    46,    47,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   202,     0,     0,   203,    50,     0,
      51,    52,     0,   204,   205,   206,    54,    55,    56,    57,
      58,    59,    60,    61,    62,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     5,     6,     7,     8,     9,     0,
       0,     0,    10,    11,    63,   207,    65,    12,     0,    13,
      14,    15,    16,    17,    18,    19,     0,     0,     0,     0,
       0,    20,    21,    22,    23,    24,    25,    26,     0,     0,
      27,     0,     0,     0,     0,     0,    28,    29,     0,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,    47,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,    47,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     202,     0,     0,   203,    50,     0,    51,    52,     0,   608,
     205,   206,    54,    55,    56,    57,    58,    59,    60,    61,
      62,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       5,     6,     7,     0,     9,     0,     0,     0,    10,    11,
      63,   207,    65,    12,     0,    13,    14,    15,   238,   239,
      18,    19,     0,     0,     0,     0,     0,   240,   241,   242,
      23,    24,    25,    26,     0,     0,   200,     0,     0,     0,
       0,     0,     0,    29,     0,     0,    32,    33,    34,    35,
      36,    37,    38,    39,    40,   201,    41,    42,     0,    43,
      44,    45,     0,    46,    47,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   202,     0,     0,   203,    50,     0,    51,
      52,     0,   204,   205,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     5,     6,     7,     0,     9,     0,     0,
       0,    10,    11,    63,   207,    65,    12,     0,    13,    14,
      15,   238,   239,    18,    19,     0,     0,     0,     0,     0,
     240,   241,   242,    23,    24,    25,    26,     0,     0,   200,
       0,     0,     0,     0,     0,     0,    29,     0,     0,    32,
      33,    34,    35,    36,    37,    38,    39,    40,   201,    41,
      42,     0,    43,    44,    45,     0,    46,    47,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   202,     0,     0,   203,
      50,     0,    51,    52,     0,     0,   205,   206,    54,    55,
      56,    57,    58,    59,    60,    61,    62,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     5,     6,     7,     0,
       9,     0,     0,     0,    10,    11,    63,   207,    65,    12,
       0,    13,    14,    15,   238,   239,    18,    19,     0,     0,
       0,     0,     0,   240,   241,   242,    23,    24,    25,    26,
       0,     0,   200,     0,     0,     0,     0,     0,     0,    29,
       0,     0,    32,    33,    34,    35,    36,    37,    38,    39,
      40,   201,    41,    42,     0,    43,    44,    45,     0,    46,
      47,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   202,
       0,     0,   203,    50,     0,    51,    52,     0,   608,   205,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     5,
       6,     7,     0,     9,     0,     0,     0,    10,    11,    63,
     207,    65,    12,     0,    13,    14,    15,   238,   239,    18,
      19,     0,     0,     0,     0,     0,   240,   241,   242,    23,
      24,    25,    26,     0,     0,   200,     0,     0,     0,     0,
       0,     0,    29,     0,     0,    32,    33,    34,    35,    36,
      37,    38,    39,    40,   201,    41,    42,     0,    43,    44,
      45,     0,    46,    47,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   202,     0,     0,   203,    50,     0,    51,    52,
       0,     0,   205,     0,    54,    55,    56,    57,    58,    59,
      60,    61,    62,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     5,     6,     7,     0,     9,     0,     0,     0,
      10,    11,    63,   207,    65,    12,     0,    13,    14,    15,
      16,    17,    18,    19,     0,     0,     0,     0,     0,    20,
      21,    22,    23,    24,    25,    26,     0,     0,   200,     0,
       0,     0,     0,     0,     0,    29,     0,     0,    32,    33,
      34,    35,    36,    37,    38,    39,    40,     0,    41,    42,
       0,    43,    44,    45,     0,    46,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   202,     0,     0,   203,    50,
       0,    51,    52,     0,   512,     0,     0,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     5,     6,     7,     0,     9,
       0,     0,     0,    10,    11,    63,   207,    65,    12,     0,
      13,    14,    15,   238,   239,    18,    19,     0,     0,     0,
       0,     0,   240,   241,   242,    23,    24,    25,    26,     0,
       0,   200,     0,     0,     0,     0,     0,     0,    29,     0,
       0,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,    46,    47,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   202,     0,
       0,   203,    50,     0,    51,    52,     0,   204,     0,     0,
      54,    55,    56,    57,    58,    59,    60,    61,    62,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     5,     6,
       7,     0,     9,     0,     0,     0,    10,    11,    63,   207,
      65,    12,     0,    13,    14,    15,   238,   239,    18,    19,
       0,     0,     0,     0,     0,   240,   241,   242,    23,    24,
      25,    26,     0,     0,   200,     0,     0,     0,     0,     0,
       0,    29,     0,     0,    32,    33,    34,    35,    36,    37,
      38,    39,    40,     0,    41,    42,     0,    43,    44,    45,
       0,    46,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   202,     0,     0,   203,    50,     0,    51,    52,     0,
     818,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     5,     6,     7,     0,     9,     0,     0,     0,    10,
      11,    63,   207,    65,    12,     0,    13,    14,    15,   238,
     239,    18,    19,     0,     0,     0,     0,     0,   240,   241,
     242,    23,    24,    25,    26,     0,     0,   200,     0,     0,
       0,     0,     0,     0,    29,     0,     0,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,    47,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   202,     0,     0,   203,    50,     0,
      51,    52,     0,   512,     0,     0,    54,    55,    56,    57,
      58,    59,    60,    61,    62,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     5,     6,     7,     0,     9,     0,
       0,     0,    10,    11,    63,   207,    65,    12,     0,    13,
      14,    15,   238,   239,    18,    19,     0,     0,     0,     0,
       0,   240,   241,   242,    23,    24,    25,    26,     0,     0,
     200,     0,     0,     0,     0,     0,     0,    29,     0,     0,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,    47,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   608,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,    47,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     202,     0,     0,   203,    50,     0,    51,    52,     0,     0,
       0,     0,    54,    55,    56,    57,    58,    59,    60,    61,
      62,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       5,     6,     7,     0,     9,     0,     0,     0,    10,    11,
      63,   207,    65,    12,     0,    13,    14,    15,    16,    17,
      18,    19,     0,     0,     0,     0,     0,    20,    21,    22,
      23,    24,    25,    26,     0,     0,    27,     0,     0,     0,
       0,     0,     0,    29,     0,     0,    32,    33,    34,    35,
      36,    37,    38,    39,    40,     0,    41,    42,     0,    43,
      44,    45,     0,    46,    47,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   202,     0,     0,   203,    50,     0,    51,
      52,     0,     0,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     5,     6,     7,     0,     9,     0,     0,
       0,    10,    11,    63,    64,    65,    12,     0,    13,    14,
      15,    16,    17,    18,    19,     0,     0,     0,     0,     0,
      20,    21,    22,    23,    24,    25,    26,     0,     0,   200,
       0,     0,     0,     0,     0,     0,    29,     0,     0,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,     0,    46,    47,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   202,     0,     0,   203,
      50,     0,    51,    52,     0,     0,     0,     0,    54,    55,
      56,    57,    58,    59,    60,    61,    62,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     5,     6,     7,     0,
       9,     0,     0,     0,    10,    11,    63,   207,    65,    12,
       0,    13,    14,    15,   238,   239,    18,    19,     0,     0,
       0,     0,     0,   240,   241,   242,    23,    24,    25,    26,
       0,     0,   200,     0,     0,     0,     0,     0,     0,   268,
       0,     0,    32,    33,    34,    35,    36,    37,    38,    39,
      40,     0,    41,    42,     0,    43,    44,    45,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   269,
       0,     0,   323,    50,     0,    51,    52,     0,   324,     0,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     5,     6,     7,     0,     9,
       0,     0,     0,    10,    11,     0,     0,     0,    12,   270,
      13,    14,    15,   238,   239,    18,    19,     0,     0,     0,
       0,     0,   240,   241,   242,    23,    24,    25,    26,     0,
       0,   200,     0,     0,     0,     0,     0,     0,   268,     0,
       0,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   365,     0,
       0,    49,    50,     0,    51,    52,     0,    53,     0,     0,
      54,    55,    56,    57,    58,    59,    60,    61,    62,     0,
       0,     0,     0,     0,     5,     6,     7,     0,     9,     0,
       0,     0,    10,    11,     0,     0,     0,    12,   270,    13,
      14,    15,   238,   239,    18,    19,     0,     0,     0,     0,
       0,   240,   241,   242,    23,    24,    25,    26,     0,     0,
     200,     0,     0,     0,     0,     0,     0,   268,     0,     0,
      32,    33,    34,   373,    36,    37,    38,   374,    40,     0,
      41,    42,     0,    43,    44,    45,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   375,     0,     0,   376,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     5,     6,     7,     0,     9,     0,     0,
       0,    10,    11,     0,     0,     0,    12,   270,    13,    14,
      15,   238,   239,    18,    19,     0,     0,     0,     0,     0,
     240,   241,   242,    23,    24,    25,    26,     0,     0,   200,
       0,     0,     0,     0,     0,     0,   268,     0,     0,    32,
      33,    34,   373,    36,    37,    38,   374,    40,     0,    41,
      42,     0,    43,    44,    45,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   376,     0,     0,   203,
      50,     0,    51,    52,     0,     0,     0,     0,    54,    55,
      56,    57,    58,    59,    60,    61,    62,     0,     0,     0,
       0,     0,     5,     6,     7,     0,     9,     0,     0,     0,
      10,    11,     0,     0,     0,    12,   270,    13,    14,    15,
     238,   239,    18,    19,     0,     0,     0,     0,     0,   240,
     241,   242,    23,    24,    25,    26,     0,     0,   200,     0,
       0,     0,     0,     0,     0,   268,     0,     0,    32,    33,
      34,    35,    36,    37,    38,    39,    40,     0,    41,    42,
       0,    43,    44,    45,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   269,     0,     0,   323,    50,
       0,    51,    52,     0,     0,     0,     0,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     5,     6,     7,     0,     9,     0,     0,     0,    10,
      11,     0,     0,     0,    12,   270,    13,    14,    15,   238,
     239,    18,    19,     0,     0,     0,     0,     0,   240,   241,
     242,    23,    24,    25,    26,     0,     0,   200,     0,     0,
       0,     0,     0,     0,   268,     0,     0,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   894,     0,     0,   203,    50,     0,
      51,    52,     0,     0,     0,     0,    54,    55,    56,    57,
      58,    59,    60,    61,    62,     0,     0,     0,     0,     0,
       5,     6,     7,     0,     9,     0,     0,     0,    10,    11,
       0,     0,     0,    12,   270,    13,    14,    15,   238,   239,
      18,    19,     0,     0,     0,     0,     0,   240,   241,   242,
      23,    24,    25,    26,     0,     0,   200,     0,     0,     0,
       0,     0,     0,   268,     0,     0,    32,    33,    34,    35,
      36,    37,    38,    39,    40,     0,    41,    42,     0,    43,
      44,    45,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   974,     0,     0,   203,    50,     0,    51,
      52,     0,     0,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     0,
     553,   554,     0,     0,   555,     0,     0,     0,     0,     0,
       0,     0,     0,   270,   162,   163,   164,   165,   166,   167,
     168,   169,   170,     0,     0,   171,   172,     0,     0,   173,
     174,   175,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   177,   178,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   179,   180,   181,   182,   183,   184,
     185,   186,   187,   188,     0,   189,   190,   561,   562,     0,
       0,   563,     0,   191,     0,     0,     0,     0,     0,     0,
       0,   162,   163,   164,   165,   166,   167,   168,   169,   170,
       0,     0,   171,   172,     0,     0,   173,   174,   175,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,   598,   562,     0,     0,   599,     0,
     191,     0,     0,     0,     0,     0,     0,     0,   162,   163,
     164,   165,   166,   167,   168,   169,   170,     0,     0,   171,
     172,     0,     0,   173,   174,   175,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   177,   178,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   179,   180,
     181,   182,   183,   184,   185,   186,   187,   188,     0,   189,
     190,   612,   554,     0,     0,   613,     0,   191,     0,     0,
       0,     0,     0,     0,     0,   162,   163,   164,   165,   166,
     167,   168,   169,   170,     0,     0,   171,   172,     0,     0,
     173,   174,   175,   176,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   177,   178,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   179,   180,   181,   182,   183,
     184,   185,   186,   187,   188,     0,   189,   190,   615,   562,
       0,     0,   616,     0,   191,     0,     0,     0,     0,     0,
       0,     0,   162,   163,   164,   165,   166,   167,   168,   169,
     170,     0,     0,   171,   172,     0,     0,   173,   174,   175,
     176,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   177,   178,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   179,   180,   181,   182,   183,   184,   185,   186,
     187,   188,     0,   189,   190,   639,   554,     0,     0,   640,
       0,   191,     0,     0,     0,     0,     0,     0,     0,   162,
     163,   164,   165,   166,   167,   168,   169,   170,     0,     0,
     171,   172,     0,     0,   173,   174,   175,   176,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   177,   178,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   179,
     180,   181,   182,   183,   184,   185,   186,   187,   188,     0,
     189,   190,   642,   562,     0,     0,   643,     0,   191,     0,
       0,     0,     0,     0,     0,     0,   162,   163,   164,   165,
     166,   167,   168,   169,   170,     0,     0,   171,   172,     0,
       0,   173,   174,   175,   176,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   177,   178,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   179,   180,   181,   182,
     183,   184,   185,   186,   187,   188,     0,   189,   190,   727,
     554,     0,     0,   728,     0,   191,     0,     0,     0,     0,
       0,     0,     0,   162,   163,   164,   165,   166,   167,   168,
     169,   170,     0,     0,   171,   172,     0,     0,   173,   174,
     175,   176,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   177,   178,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   179,   180,   181,   182,   183,   184,   185,
     186,   187,   188,     0,   189,   190,   730,   562,     0,     0,
     731,     0,   191,     0,     0,     0,     0,     0,     0,     0,
     162,   163,   164,   165,   166,   167,   168,   169,   170,     0,
       0,   171,   172,     0,     0,   173,   174,   175,   176,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   177,
     178,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     179,   180,   181,   182,   183,   184,   185,   186,   187,   188,
       0,   189,   190,   737,   554,     0,     0,   738,     0,   191,
       0,     0,     0,     0,     0,     0,     0,   162,   163,   164,
     165,   166,   167,   168,   169,   170,     0,     0,   171,   172,
       0,     0,   173,   174,   175,   176,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   177,   178,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   179,   180,   181,
     182,   183,   184,   185,   186,   187,   188,     0,   189,   190,
    1000,   554,     0,     0,  1001,     0,   191,     0,     0,     0,
       0,     0,     0,     0,   162,   163,   164,   165,   166,   167,
     168,   169,   170,     0,     0,   171,   172,     0,     0,   173,
     174,   175,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   177,   178,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   179,   180,   181,   182,   183,   184,
     185,   186,   187,   188,     0,   189,   190,  1035,   554,     0,
       0,  1036,     0,   191,     0,     0,     0,     0,     0,     0,
       0,   162,   163,   164,   165,   166,   167,   168,   169,   170,
       0,     0,   171,   172,     0,     0,   173,   174,   175,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,  1038,   562,     0,     0,  1039,     0,
     191,     0,     0,     0,     0,     0,     0,     0,   162,   163,
     164,   165,   166,   167,   168,   169,   170,     0,     0,   171,
     172,     0,     0,   173,   174,   175,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   177,   178,   327,
     328,   329,   330,   331,   332,   333,   334,   335,   336,   337,
     338,   339,     0,     0,   340,   341,     0,     0,   179,   180,
     181,   182,   183,   184,   185,   186,   187,   188,     0,   189,
     190,     0,     0,     0,     0,     0,     0,   191,     0,     0,
       0,     0,     0,     0,     0,   342,     0,   343,   344,   345,
     346,   347,   348,   349,   350,   351,   352,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   231
    //[
  ];

  // YYCHECK.
  var yycheck_ = this.yycheck_ =
  [
    //]
         2,    96,    74,    55,    28,    67,    79,    50,   220,   230,
       8,   359,    27,   326,    29,     8,   326,    87,   354,   262,
      90,     8,   472,   266,   651,    16,    17,    22,    90,    20,
      28,   353,    53,   355,   255,    28,   614,     2,   259,     4,
     575,    28,    94,    86,    87,     4,   420,    90,   376,    51,
      52,     2,   594,     4,   440,   574,    67,   577,    79,    53,
     472,    90,   780,   641,   468,    16,    17,   788,    55,    20,
      91,    92,    93,   876,    16,    17,    49,   399,    20,    74,
     416,   715,    25,    64,   458,   719,    25,    13,    26,   668,
      25,    25,   412,   415,    25,   417,   250,    27,    49,    50,
     420,   874,    53,   508,    29,    76,   511,    94,    85,    51,
      25,   685,     0,    64,   518,    85,    61,   903,    16,    17,
      68,   443,    20,   776,    61,    25,    37,    38,    79,    13,
     139,   141,   141,    25,   470,    86,    87,    97,   907,    90,
      91,    92,    93,   770,   771,   130,   596,   118,    56,   471,
     803,   729,    13,    51,    52,   132,   133,    16,    17,   136,
     120,    20,   740,   133,    26,   110,   939,    37,    38,   323,
     286,   243,   288,   110,   290,   123,   124,   125,   294,    25,
     898,    52,    13,    13,   140,    56,   111,   230,   991,   232,
     252,   134,   130,   136,   736,   134,   140,   136,   271,   134,
     134,   422,   744,   134,   724,   426,   780,   657,   134,   139,
     431,   141,   214,   139,   788,   141,  1002,   429,   220,   134,
     993,   741,   685,   252,   945,   227,   447,    25,   807,   808,
     141,   452,   950,   224,   134,   226,   227,   307,   308,   309,
     310,   252,   134,  1012,   580,   657,   632,   874,   622,   876,
     271,  1024,   203,   268,    13,   139,   592,   141,     1,   581,
     670,    87,   672,   591,   307,   308,   309,   310,   130,   312,
     313,   593,    87,   224,   136,   226,   227,   250,   139,   230,
     141,   232,   224,   248,   226,   690,   237,   113,   134,  1007,
     360,   361,   696,   743,    28,   929,   517,   248,   113,   250,
     362,   621,   622,   324,    15,   136,    17,   886,   139,   139,
     141,   141,   939,   940,   134,   113,   378,   360,   361,   782,
     271,   141,   140,   786,   898,   845,   224,   847,   226,   903,
     324,   743,   375,   362,    49,   854,   134,   857,    85,   137,
     321,   306,   862,   141,    61,   326,   311,   306,    25,   140,
     323,   113,   354,   134,    61,   306,   307,   308,   309,   310,
     311,   312,   313,   354,   991,   224,   993,   226,   355,   485,
     321,   945,   323,   324,   117,   326,   492,   725,    87,   321,
     139,   134,   141,    61,   326,   964,   133,   697,   141,   931,
     107,    87,   109,   636,   929,   468,   139,  1024,   141,   611,
     107,   714,   109,   354,   113,   356,   926,   927,   113,   360,
     361,   134,   399,   437,   416,    87,   100,   113,   141,    85,
      87,   402,   403,   140,   375,   416,   428,   429,  1002,   107,
     417,   109,   110,   140,    85,   898,   113,   900,   440,   437,
     903,   113,   905,    87,   437,   518,   113,   468,   990,   134,
     437,   402,   403,    58,    26,    85,   443,   134,    56,  1037,
     137,    87,    61,    68,   141,   416,    65,   133,   470,   989,
      26,   136,    85,   883,   884,   440,   141,   113,   888,   470,
     890,   891,   133,    85,   471,   557,   936,   113,   203,   440,
      85,    96,    97,   565,    58,   869,   136,   518,   134,   450,
    1020,   113,  1022,   133,    68,   507,   508,    85,   107,   511,
     109,   573,   574,    85,   412,   120,   703,   468,    88,   470,
     133,   742,   237,   710,    61,   587,   134,   542,   600,    85,
     132,   133,    96,    97,    87,   250,   136,   132,   133,  1002,
     761,  1004,   134,    85,  1007,   560,  1009,    61,   760,   869,
     130,   685,   595,   774,   132,   133,   120,   455,   130,   136,
     132,   133,    85,   558,   637,    61,   568,   518,   136,   917,
     107,   566,   109,   110,   130,   923,   132,   133,   580,    61,
     136,   605,   625,    68,  1047,   995,   996,   997,   998,   580,
     592,   133,    68,   107,   581,   109,   110,    26,   600,   614,
     113,   592,   685,    59,    60,   600,   593,   605,   323,   611,
     133,   107,   605,   109,   110,   137,   637,   138,   605,   570,
      85,   572,   131,   696,    85,   107,   641,   109,   110,   580,
     632,    85,   704,   134,   576,  1045,    59,    60,    56,   711,
     861,   592,   110,   594,   595,   121,   122,   123,   124,   125,
      54,    87,   873,   748,   788,   110,    85,   791,    85,    63,
      64,    87,   732,    85,   666,   735,   668,   632,   133,    26,
     685,   733,   133,   110,   625,   696,   110,   113,   132,   133,
    1016,   632,     2,   745,     4,    85,   637,   113,   690,   732,
      14,    15,   735,    68,   746,  1017,    16,    17,   134,   782,
      20,   130,    94,   132,   133,   132,   133,   136,   134,   711,
     132,   133,   714,   715,   729,   717,   697,   719,    68,   700,
     701,    87,   134,   621,    17,   740,   707,   708,    85,    49,
      50,   139,   132,   133,    56,   686,    25,   134,   689,    85,
     691,   137,    85,   134,    64,   696,   697,   113,   131,   700,
     701,   130,   134,   134,   140,    85,   707,   708,   760,   746,
      52,   776,    54,    55,    56,    57,    86,    87,   134,   903,
      90,   905,   714,   130,   844,   132,   133,    85,   140,   136,
     801,   732,    85,   134,   735,   736,   132,   133,   803,   132,
     133,    85,   854,   744,   856,    52,   134,    54,    55,    56,
      57,   844,   132,   133,   113,   807,   808,    87,   134,    87,
      10,   945,     8,   947,    13,   898,   113,   900,   952,    87,
     903,   136,   905,   134,   132,   133,   777,   778,   134,   132,
     133,   131,    52,   113,    87,   113,   134,   839,   132,   133,
     842,   115,   134,    54,    55,   113,    57,   810,   811,   830,
     801,   134,    63,    64,   134,   570,   134,   572,    52,    52,
     113,    54,    55,    56,    57,   816,   134,   134,  1002,    52,
    1004,   134,   893,   138,    15,  1009,   134,   134,   134,   830,
     131,   134,   113,   203,   886,    40,    41,    42,    43,    44,
     841,   118,  1026,   844,   134,   916,    89,   848,   849,   134,
     134,   852,    95,   139,   224,   134,   226,   227,    10,   131,
     230,    10,   232,  1047,    88,   134,     9,   237,   134,  1002,
     137,  1004,    10,   131,  1007,   134,  1009,   929,   248,    52,
     250,    54,    55,    56,    57,    52,   134,    54,    55,    56,
      57,   892,   893,   134,    52,   134,    54,    55,    56,    57,
      56,   118,   131,   134,   134,   970,   108,   134,   134,   134,
      56,    52,   964,   134,  1047,   916,    89,   136,   134,   920,
     134,   686,    95,   136,   689,   134,   691,   450,    91,    93,
     931,    89,   711,  1019,   770,   685,   306,   307,   308,   309,
     310,   311,   312,   313,  1012,   749,  1018,    57,   961,   962,
      94,   321,   965,   323,   967,   968,   326,    99,   294,   936,
     782,   900,   898,   780,  1016,    -1,  1018,  1019,   396,    -1,
      -1,    -1,  1037,    16,    17,  1016,    -1,    20,    -1,   980,
    1017,   982,    -1,    -1,   354,    -1,   356,   988,    -1,   990,
     360,   361,    -1,    -1,    52,    -1,    54,    55,    56,    57,
      58,    -1,    -1,    46,    47,   375,    -1,    -1,    51,    52,
      68,    -1,   777,   778,    -1,  1016,    -1,  1030,  1031,  1032,
    1033,    64,    65,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    89,   402,   403,    -1,    -1,    -1,    -1,    96,    97,
    1053,    -1,    -1,    -1,    -1,    -1,   416,    -1,    -1,    -1,
      -1,   816,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     201,    -1,   120,   204,   205,   206,    -1,    -1,    -1,    -1,
     440,    -1,    -1,    -1,    -1,    -1,   841,    -1,    -1,    -1,
     450,    -1,    -1,   848,   849,    -1,    -1,   852,    52,    -1,
      54,    55,    56,    57,    58,    -1,    -1,     0,    -1,    -1,
     470,    -1,    -1,    -1,    68,     8,     9,    10,    -1,    -1,
      13,    14,    15,    68,    17,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    26,    27,    89,    -1,   892,    83,    84,
      -1,    95,    96,    97,    37,    38,    68,    40,    41,    42,
      43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    83,    84,    -1,    -1,   920,   120,    -1,   201,   123,
      -1,   204,   205,   206,   207,   120,   121,   122,   123,   124,
     125,    -1,    -1,    -1,    -1,    -1,    -1,   141,    -1,    -1,
     321,   224,    85,   226,   227,   326,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    68,    -1,    -1,    -1,
     570,    -1,   572,    -1,    -1,   108,    -1,    -1,    -1,    -1,
     580,    83,    84,    -1,    -1,   980,    -1,   982,    -1,    -1,
      -1,    -1,   592,   988,   594,   595,    -1,   130,   131,    -1,
     133,    -1,    -1,   136,   137,    -1,   139,    -1,   141,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   121,
     122,   123,   124,   125,    -1,   625,    -1,    -1,    -1,    -1,
      -1,    -1,   632,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     411,   412,    -1,    -1,    -1,    -1,    -1,    -1,   321,   420,
      -1,    -1,    -1,   326,   327,   328,   329,   330,   331,   332,
     333,   334,   335,   336,   337,   338,   339,   340,   341,   342,
     343,   344,   345,   346,   347,   348,   349,   350,   351,   352,
      -1,   354,    -1,    -1,   455,    -1,   686,   458,    -1,   689,
      -1,   691,    -1,    -1,    -1,    -1,    -1,   697,    -1,    -1,
     700,   701,    -1,    -1,    -1,    -1,    -1,   707,   708,    -1,
       2,    -1,     4,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   402,
     403,    -1,   732,    -1,    -1,   735,   736,   410,   411,   412,
      -1,   512,    -1,   416,   744,   418,   419,   420,    -1,    52,
      -1,    54,    55,    56,    57,    58,    -1,    49,    -1,    -1,
      -1,    53,    -1,    -1,    -1,    68,   439,    -1,    -1,    -1,
      -1,   444,    -1,    -1,    -1,    -1,    -1,   777,   778,    -1,
      -1,    -1,   455,    -1,    -1,   458,    89,    79,    -1,    -1,
      -1,    -1,    95,    96,    97,    -1,    -1,   470,    -1,    91,
      92,    93,    94,    -1,    -1,   576,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   816,   120,    -1,    -1,
     123,    -1,    -1,   496,   497,    -1,    -1,    -1,    -1,    -1,
     830,    -1,    -1,   136,    -1,    -1,    -1,   608,    -1,   512,
      -1,   841,    -1,    -1,   844,    -1,    -1,    -1,   848,   849,
     621,   622,   852,    52,    -1,    54,    55,    56,    57,    58,
      -1,     2,    -1,     4,    -1,    -1,    -1,    -1,    -1,    68,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   649,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      89,    -1,   892,    -1,    -1,    -1,    95,    96,    97,    -1,
      -1,    -1,    -1,   576,    -1,    -1,    -1,   580,    49,    -1,
      -1,   203,    53,    -1,    -1,    -1,    -1,    -1,    -1,   592,
     920,   120,   693,    52,   123,    54,    55,    56,    57,    58,
      -1,   931,    -1,    -1,    -1,   608,    -1,   136,    79,    68,
      -1,    -1,    -1,   714,    -1,   237,    -1,    -1,   621,   622,
      91,    92,    93,    94,    -1,    -1,   248,    -1,   250,    -1,
      89,    -1,    -1,    -1,    -1,    -1,    95,    96,    97,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   649,    -1,    -1,   271,
     980,    -1,   982,    -1,    -1,    -1,    -1,    -1,   988,    -1,
     990,   120,    -1,    -1,   123,    -1,   767,    -1,    -1,    52,
      -1,    54,    55,    56,    57,    58,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   306,    68,  1016,    -1,    -1,   311,
     693,    -1,    -1,    -1,   697,   698,    -1,   700,   701,    -1,
      -1,   323,   324,    -1,   707,   708,    89,    -1,    -1,    -1,
      -1,   714,    95,    96,    97,    -1,     2,   818,     4,    -1,
      -1,    -1,    -1,    -1,    -1,     2,    -1,     4,    -1,    -1,
      -1,    -1,   203,    -1,   356,    -1,    -1,   120,    -1,    -1,
     123,    52,    -1,    54,    55,    56,    57,    58,   751,    -1,
     851,    -1,   755,   756,    -1,   758,   759,    68,    -1,    -1,
      -1,    -1,    -1,    49,   767,    -1,   237,    53,   869,    -1,
      -1,    -1,    49,    -1,    -1,    -1,    -1,   248,    89,   250,
      -1,    -1,    -1,    -1,    -1,    96,    97,    -1,    -1,    -1,
      -1,    -1,    -1,    79,    -1,    -1,    -1,    -1,    -1,    -1,
     271,    -1,    -1,    -1,    -1,    91,    92,    93,    -1,   120,
      -1,    -1,    -1,    -1,    91,   818,    -1,    -1,   440,   822,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   830,   450,    -1,
      -1,    -1,    -1,    -1,    -1,   306,    -1,    -1,    -1,    -1,
     311,    -1,    -1,    -1,    -1,    -1,   468,    -1,   851,    -1,
      -1,    -1,   323,   324,    68,    69,    70,    71,    72,    73,
      74,    75,    -1,    77,    78,   868,   869,    -1,    -1,    83,
      84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   356,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,     2,    -1,     4,   518,    -1,    -1,    -1,
      -1,    -1,   116,   117,   118,   119,   120,   121,   122,   123,
     124,   125,    -1,    -1,    -1,    -1,    -1,   203,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   203,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      49,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   570,    -1,
     572,   237,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     237,    -1,   248,    -1,   250,    -1,    -1,    -1,    -1,   440,
      -1,   248,   594,   250,    -1,    -1,    -1,    -1,    -1,   450,
      -1,    -1,    -1,    -1,    -1,   271,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   468,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     632,    -1,    -1,  1016,    -1,   637,    -1,    -1,    -1,    -1,
     306,    -1,    -1,    -1,    -1,   311,    -1,    -1,    -1,   306,
      -1,    -1,    -1,    -1,   311,    -1,    -1,   323,   324,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   323,   518,    -1,   326,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,    -1,    -1,
      -1,    -1,    -1,    -1,   686,    -1,    -1,   689,    -1,   691,
     356,    -1,    -1,    -1,   696,    -1,    -1,    -1,    -1,   356,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,   203,    -1,    83,    84,    -1,   570,
      -1,   572,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   736,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   744,   594,    -1,    -1,    -1,   114,   237,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,   248,
      -1,   250,    -1,    -1,    -1,    -1,    -1,   134,    -1,    -1,
      -1,    -1,    -1,    -1,   440,   777,   778,    -1,    -1,    -1,
      -1,   632,    -1,   440,   450,    -1,   637,    -1,    -1,    -1,
      -1,    -1,    -1,   450,    -1,    -1,    -1,    -1,    -1,   801,
      -1,    -1,   468,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   816,    -1,    -1,   306,    -1,    -1,
      -1,    -1,   311,    -1,    -1,    -1,    -1,    68,    69,    70,
      71,    72,    73,    74,   323,   686,    77,    78,   689,   841,
     691,    -1,    83,    84,    -1,   696,   848,   849,    -1,    -1,
     852,    -1,   518,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   356,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,
     121,   122,   123,   124,   125,   736,    -1,    -1,    -1,    -1,
     892,   893,    -1,   744,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   570,    -1,   572,    -1,    -1,    -1,
      -1,    -1,    -1,   570,   916,   572,    -1,    -1,   920,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   777,   778,   594,   931,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   594,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     801,   440,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   450,    -1,    -1,    -1,   816,   632,    -1,    -1,    -1,
      -1,   637,    -1,    -1,    -1,   632,    -1,    -1,   980,    -1,
     982,    -1,    -1,    -1,    -1,    -1,   988,    -1,   990,    -1,
     841,    -1,    -1,    -1,    -1,    -1,    -1,   848,   849,    -1,
      -1,   852,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     676,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    44,
     686,    -1,    -1,   689,    -1,   691,    -1,    -1,    -1,   686,
     696,    -1,   689,    -1,   691,    -1,    -1,    -1,    -1,    -1,
     697,   892,   893,    68,    69,    70,    71,    72,    73,    74,
      75,    76,    77,    78,    79,    80,    -1,    -1,    83,    84,
      -1,    -1,    -1,    -1,    -1,   916,    -1,    -1,    -1,   920,
     736,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   744,   736,
     931,   570,    -1,   572,    -1,    -1,    -1,   744,    -1,   114,
      -1,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,    -1,    -1,    -1,    -1,   594,    -1,    -1,    -1,    -1,
      -1,   777,   778,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     777,   778,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   980,
      -1,   982,    -1,    -1,    -1,   801,    -1,   988,    44,   990,
      -1,    -1,    -1,   632,    -1,    -1,    -1,    -1,    -1,    -1,
     816,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   816,
      -1,    -1,    68,    69,    70,    71,    72,    73,    74,    75,
      76,    77,    78,    79,    80,   841,    -1,    83,    84,    -1,
      -1,    -1,   848,   849,   841,    -1,   852,    -1,    -1,    -1,
      -1,   848,   849,    -1,    -1,   852,    -1,   686,    -1,    -1,
     689,    -1,   691,    -1,    -1,    -1,    -1,    -1,   114,    -1,
     116,   117,   118,   119,   120,   121,   122,   123,   124,   125,
      -1,    -1,    -1,    -1,    -1,    -1,   892,   893,    68,    69,
      70,    71,    72,    73,    74,   892,    -1,    77,    78,    -1,
      -1,    -1,    -1,    83,    84,    -1,    -1,   736,    -1,    -1,
     916,    -1,    -1,    -1,   920,   744,    -1,    -1,    -1,   916,
      -1,    -1,    -1,   920,    -1,   931,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   931,    -1,   116,   117,   118,   119,
     120,   121,   122,   123,   124,   125,    -1,    -1,   777,   778,
      68,    69,    70,    71,    72,    73,    74,    75,    76,    77,
      78,    79,    80,    -1,    -1,    83,    84,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   980,    -1,   982,    -1,    -1,    -1,
      -1,    -1,   988,   980,   990,   982,    -1,   816,    -1,    -1,
      -1,   988,    -1,   990,    -1,    -1,   114,    -1,   116,   117,
     118,   119,   120,   121,   122,   123,   124,   125,    -1,    -1,
      -1,    -1,   841,    -1,    -1,    -1,    -1,    -1,    -1,   848,
     849,     0,     1,   852,     3,     4,     5,     6,     7,    -1,
      -1,    -1,    11,    12,    -1,    -1,    -1,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,   892,    -1,    -1,    45,    46,    47,    48,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    67,    -1,
      -1,   920,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   931,    -1,    -1,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,     0,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,   126,   127,   128,
      -1,   980,    -1,   982,    26,    27,    28,    29,    -1,   988,
     139,   990,   141,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    68,    69,    70,    71,    72,
      73,    74,    75,    76,    77,    78,    79,    80,    -1,    -1,
      83,    84,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    87,    88,    -1,    -1,    -1,
      -1,    -1,    94,   116,   117,   118,   119,   120,   121,   122,
     123,   124,   125,    -1,    -1,    -1,   108,    -1,    -1,   111,
      -1,   113,   114,   115,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,   130,   131,
     132,   133,   134,     0,    -1,   137,   138,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    13,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    25,    -1,
      27,    28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      87,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,   111,    -1,   113,   114,   115,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,    -1,   131,   132,   133,   134,     0,    -1,
     137,   138,   139,    -1,   141,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    25,    -1,    27,    28,    29,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    87,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   108,    -1,    -1,   111,
      -1,   113,   114,   115,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,    -1,   131,
     132,   133,   134,     0,    -1,   137,   138,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    13,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    26,
      27,    28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      -1,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,   111,    -1,    -1,   114,   115,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,   130,   131,   132,   133,   134,     0,    -1,
     137,   138,   139,    -1,   141,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    26,    27,    28,    29,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   108,    -1,    -1,   111,
      -1,    -1,   114,   115,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,   130,   131,
     132,   133,   134,     0,    -1,   137,   138,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    13,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      27,    28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      87,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,   111,    -1,   113,   114,   115,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,    -1,   131,   132,   133,   134,     0,    -1,
     137,   138,   139,    -1,   141,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    26,    27,    28,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   108,    -1,    -1,    -1,
      -1,    -1,   114,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,   130,   131,
     132,   133,   134,     0,   136,   137,   138,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    13,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      27,    28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      -1,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,   111,    -1,    -1,   114,   115,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,    -1,   131,   132,   133,   134,     0,    -1,
     137,   138,   139,    -1,   141,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    26,    27,    28,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   108,    -1,    -1,    -1,
      -1,    -1,   114,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,   130,   131,
     132,   133,   134,     0,   136,   137,   138,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    13,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      27,    28,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      -1,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,    -1,    -1,    -1,   114,    -1,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,    -1,   131,   132,   133,   134,     0,   136,
     137,   138,   139,    -1,   141,    -1,     8,     9,    10,    -1,
      -1,    -1,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    26,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    68,    69,    70,    71,
      72,    73,    74,    75,    76,    77,    78,    79,    80,    -1,
      -1,    83,    84,    85,    -1,    87,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   108,    -1,    -1,    -1,
      -1,   113,   114,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,    -1,    -1,    -1,   130,   131,
     132,   133,   134,     0,    -1,   137,    -1,   139,    -1,   141,
      -1,     8,     9,    10,    -1,    -1,    -1,    14,    15,    -1,
      17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      37,    38,    -1,    40,    41,    42,    43,    44,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    68,    69,    70,    71,    72,    73,    74,    75,    76,
      77,    78,    79,    80,    -1,    -1,    83,    84,    85,    -1,
      87,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   108,    -1,    -1,    -1,    -1,   113,   114,    -1,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
      -1,    -1,    -1,    -1,   131,   132,   133,   134,    -1,    -1,
     137,    -1,   139,     1,   141,     3,     4,     5,     6,     7,
       8,     9,    10,    11,    12,    -1,    -1,    15,    16,    -1,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,
      48,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    66,    67,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,
      -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,
      98,    99,   100,   101,   102,   103,   104,   105,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   126,   127,
     128,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   139,     1,   141,     3,     4,     5,     6,     7,    -1,
      -1,    10,    11,    12,    -1,    14,    15,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    67,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   126,   127,   128,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     139,     1,   141,     3,     4,     5,     6,     7,    -1,    -1,
      10,    11,    12,    -1,    -1,    15,    16,    17,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,
      90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,    99,
     100,   101,   102,   103,   104,   105,   106,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   126,   127,   128,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   139,
       1,   141,     3,     4,     5,     6,     7,    -1,    -1,    10,
      11,    12,    -1,    -1,    15,    16,    -1,    18,    19,    20,
      21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    -1,    -1,    39,    -1,
      -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,    50,
      51,    52,    53,    54,    55,    56,    57,    -1,    59,    60,
      -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,
      -1,    92,    93,    -1,    95,    -1,    -1,    98,    99,   100,
     101,   102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,     1,    -1,     3,     4,     5,     6,     7,
      -1,     9,    10,    11,    12,   126,   127,   128,    16,    -1,
      18,    19,    20,    21,    22,    23,    24,    -1,   139,    -1,
     141,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,
      48,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    66,    67,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,
      -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,
      98,    99,   100,   101,   102,   103,   104,   105,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,     1,    -1,     3,     4,
       5,     6,     7,    -1,    -1,    -1,    11,    12,   126,   127,
     128,    16,    -1,    18,    19,    20,    21,    22,    23,    24,
      -1,   139,    -1,   141,    -1,    30,    31,    32,    33,    34,
      35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,
      45,    46,    47,    48,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    -1,    59,    60,    -1,    62,    63,    64,
      -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,
      95,    -1,    -1,    98,    99,   100,   101,   102,   103,   104,
     105,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   126,   127,   128,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   137,    -1,   139,     1,   141,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,    -1,    -1,    -1,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,
      -1,    -1,    98,    99,   100,   101,   102,   103,   104,   105,
     106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     126,   127,   128,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   137,    -1,   139,     1,   141,     3,     4,     5,     6,
       7,    -1,    -1,    -1,    11,    12,    -1,    -1,    -1,    16,
      -1,    18,    19,    20,    21,    22,    23,    24,    -1,    -1,
      -1,    -1,    -1,    30,    31,    32,    33,    34,    35,    36,
      -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,
      47,    48,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    -1,    59,    60,    -1,    62,    63,    64,    -1,    66,
      67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,
      -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,
      -1,    98,    99,   100,   101,   102,   103,   104,   105,   106,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   126,
     127,   128,    -1,    -1,   131,     1,    -1,     3,     4,     5,
       6,     7,   139,    -1,   141,    11,    12,    -1,    -1,    -1,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,
      -1,    -1,    98,    99,   100,   101,   102,   103,   104,   105,
     106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     126,   127,   128,    -1,    -1,   131,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   139,     1,   141,     3,     4,     5,     6,
       7,    -1,    -1,    10,    11,    12,    -1,    -1,    -1,    16,
      -1,    18,    19,    20,    21,    22,    23,    24,    -1,    -1,
      -1,    -1,    -1,    30,    31,    32,    33,    34,    35,    36,
      -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,
      47,    48,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    -1,    59,    60,    -1,    62,    63,    64,    -1,    66,
      67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,
      -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,
      -1,    98,    99,   100,   101,   102,   103,   104,   105,   106,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     1,    -1,     3,
       4,     5,     6,     7,    -1,    -1,    -1,    11,    12,   126,
     127,   128,    16,    -1,    18,    19,    20,    21,    22,    23,
      24,    -1,   139,    -1,   141,    -1,    30,    31,    32,    33,
      34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,
      -1,    45,    46,    47,    48,    49,    50,    51,    52,    53,
      54,    55,    56,    57,    -1,    59,    60,    -1,    62,    63,
      64,    -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,
      -1,    95,    -1,    -1,    98,    99,   100,   101,   102,   103,
     104,   105,   106,    -1,   108,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,
      11,    12,   126,   127,   128,    16,    -1,    18,    19,    20,
      21,    22,    23,    24,    -1,   139,    -1,   141,    -1,    30,
      31,    32,    33,    34,    35,    36,    -1,    -1,    39,    -1,
      -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,
      51,    52,    53,    54,    55,    56,    57,    58,    59,    60,
      -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,
      -1,    92,    93,    -1,    95,    96,    97,    98,    99,   100,
     101,   102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,
      -1,    -1,    -1,    11,    12,   126,   127,   128,    16,    -1,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
     141,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,
      -1,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    66,    67,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,
      -1,    89,    90,    -1,    92,    93,    -1,    -1,    -1,    -1,
      98,    99,   100,   101,   102,   103,   104,   105,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,
       5,    -1,     7,    -1,    -1,    -1,    11,    12,   126,   127,
     128,    16,    -1,    18,    19,    20,    21,    22,    23,    24,
      -1,   139,    -1,   141,    -1,    30,    31,    32,    33,    34,
      35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,
      -1,    46,    -1,    -1,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    -1,    59,    60,    -1,    62,    63,    64,
      -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,
      -1,    -1,    -1,    98,    99,   100,   101,   102,   103,   104,
     105,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,     6,     7,    -1,    -1,    -1,    11,
      12,   126,   127,   128,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,   141,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,
      92,    93,    -1,    95,    -1,    -1,    98,    99,   100,   101,
     102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,     3,     4,     5,     6,     7,    -1,
      -1,    -1,    11,    12,   126,   127,   128,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,   139,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    67,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   126,   127,   128,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     139,     3,     4,     5,     6,     7,     8,     9,    10,    11,
      12,    13,    14,    15,    16,    17,    18,    19,    20,    21,
      22,    23,    24,    25,    26,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    67,    68,    69,    70,    71,
      72,    73,    74,    -1,    -1,    77,    78,    -1,    -1,    81,
      82,    83,    84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    95,    96,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,   127,   128,    -1,    -1,    -1,
      -1,    -1,    -1,   135,   136,     3,     4,     5,     6,     7,
       8,     9,    10,    11,    12,    13,    14,    15,    16,    17,
      18,    19,    20,    21,    22,    23,    24,    25,    26,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    37,
      38,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,
      48,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    -1,    -1,    77,
      78,    -1,    -1,    81,    82,    83,    84,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    95,    96,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,   117,
     118,   119,   120,   121,   122,   123,   124,   125,    -1,   127,
     128,    -1,    -1,    -1,    -1,    -1,    -1,   135,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    -1,    -1,    -1,    30,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    -1,    -1,    -1,    -1,    -1,
      45,    46,    47,    48,    49,    50,    51,    52,    53,    54,
      -1,    56,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      -1,    -1,    77,    78,    -1,    -1,    81,    82,    83,    84,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      95,    96,    -1,    -1,    99,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,    -1,   127,   128,    -1,    -1,    -1,    -1,    -1,    -1,
     135,     3,     4,     5,     6,     7,     8,     9,    10,    11,
      12,    13,    14,    15,    16,    17,    18,    19,    20,    21,
      22,    23,    24,    25,    26,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    -1,    -1,    56,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    67,    68,    69,    70,    71,
      72,    73,    74,    -1,    -1,    77,    78,    -1,    -1,    81,
      82,    83,    84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    95,    96,    -1,    -1,    99,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,   127,   128,    -1,    -1,    -1,
      -1,    -1,    -1,   135,     3,     4,     5,     6,     7,     8,
       9,    10,    11,    12,    13,    14,    15,    16,    17,    18,
      19,    20,    21,    22,    23,    24,    25,    26,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,
      49,    50,    51,    52,    53,    -1,    -1,    56,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    67,    68,
      69,    70,    71,    72,    73,    74,    -1,    -1,    77,    78,
      -1,    -1,    81,    82,    83,    84,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    95,    96,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,   117,   118,
     119,   120,   121,   122,   123,   124,   125,    -1,   127,   128,
       3,     4,     5,    -1,     7,    -1,   135,    -1,    11,    12,
      -1,    -1,    -1,    16,    -1,    18,    19,    20,    21,    22,
      23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,
      33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,
      -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,
      53,    54,    55,    56,    57,    -1,    59,    60,    -1,    62,
      63,    64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,
      93,    -1,    -1,    -1,    -1,    98,    99,   100,   101,   102,
     103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,     3,
       4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,    -1,
      -1,    -1,    16,   126,    18,    19,    20,    21,    22,    23,
      24,   134,    -1,    -1,    -1,    -1,    30,    31,    32,    33,
      34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,
      -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,    53,
      54,    55,    56,    57,    -1,    59,    60,    -1,    62,    63,
      64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,
      -1,    -1,    -1,    -1,    98,    99,   100,   101,   102,   103,
     104,   105,   106,    -1,    -1,    -1,    -1,    -1,     3,     4,
       5,     6,     7,    -1,    -1,    -1,    11,    12,    -1,    -1,
      -1,    16,   126,    18,    19,    20,    21,    22,    23,    24,
     134,    -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,
      35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,
      45,    46,    47,    48,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    -1,    59,    60,    -1,    62,    63,    64,
      -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,
      95,    -1,    -1,    98,    99,   100,   101,   102,   103,   104,
     105,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,
      12,   126,   127,   128,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    58,    59,    60,    -1,
      62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,
      92,    93,    -1,    95,    96,    97,    98,    99,   100,   101,
     102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,     3,     4,     5,     6,     7,    -1,
      -1,    -1,    11,    12,   126,   127,   128,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,    -1,    -1,    -1,    45,    46,    -1,    48,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    67,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   126,   127,   128,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,
      96,    97,    98,    99,   100,   101,   102,   103,   104,   105,
     106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
       3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,
     126,   127,   128,    16,    -1,    18,    19,    20,    21,    22,
      23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,
      33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,
      -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,
      53,    54,    55,    56,    57,    58,    59,    60,    -1,    62,
      63,    64,    -1,    66,    67,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,
      93,    -1,    95,    96,    -1,    98,    99,   100,   101,   102,
     103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,
      -1,    11,    12,   126,   127,   128,    16,    -1,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    58,    59,
      60,    -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,
      90,    -1,    92,    93,    -1,    -1,    96,    97,    98,    99,
     100,   101,   102,   103,   104,   105,   106,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,
       7,    -1,    -1,    -1,    11,    12,   126,   127,   128,    16,
      -1,    18,    19,    20,    21,    22,    23,    24,    -1,    -1,
      -1,    -1,    -1,    30,    31,    32,    33,    34,    35,    36,
      -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,
      -1,    -1,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    58,    59,    60,    -1,    62,    63,    64,    -1,    66,
      67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,
      -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,    96,
      -1,    98,    99,   100,   101,   102,   103,   104,   105,   106,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,
       4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,   126,
     127,   128,    16,    -1,    18,    19,    20,    21,    22,    23,
      24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,    33,
      34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,
      -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,    53,
      54,    55,    56,    57,    58,    59,    60,    -1,    62,    63,
      64,    -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,
      -1,    -1,    96,    -1,    98,    99,   100,   101,   102,   103,
     104,   105,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,
      11,    12,   126,   127,   128,    16,    -1,    18,    19,    20,
      21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    -1,    -1,    39,    -1,
      -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,
      51,    52,    53,    54,    55,    56,    57,    -1,    59,    60,
      -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,
      -1,    92,    93,    -1,    95,    -1,    -1,    98,    99,   100,
     101,   102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,
      -1,    -1,    -1,    11,    12,   126,   127,   128,    16,    -1,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,
      -1,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    66,    67,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,
      -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,
      98,    99,   100,   101,   102,   103,   104,   105,   106,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,
       5,    -1,     7,    -1,    -1,    -1,    11,    12,   126,   127,
     128,    16,    -1,    18,    19,    20,    21,    22,    23,    24,
      -1,    -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,
      35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,
      -1,    46,    -1,    -1,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    -1,    59,    60,    -1,    62,    63,    64,
      -1,    66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,
      95,    -1,    -1,    98,    99,   100,   101,   102,   103,   104,
     105,   106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,
      12,   126,   127,   128,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    67,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,
      92,    93,    -1,    95,    -1,    -1,    98,    99,   100,   101,
     102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,
      -1,    -1,    11,    12,   126,   127,   128,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    67,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   126,   127,   128,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    67,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      86,    -1,    -1,    89,    90,    -1,    92,    93,    -1,    -1,
      -1,    -1,    98,    99,   100,   101,   102,   103,   104,   105,
     106,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
       3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,
     126,   127,   128,    16,    -1,    18,    19,    20,    21,    22,
      23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,
      33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,
      -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,
      53,    54,    55,    56,    57,    -1,    59,    60,    -1,    62,
      63,    64,    -1,    66,    67,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,
      93,    -1,    -1,    -1,    -1,    98,    99,   100,   101,   102,
     103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,
      -1,    11,    12,   126,   127,   128,    16,    -1,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    66,    67,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,
      90,    -1,    92,    93,    -1,    -1,    -1,    -1,    98,    99,
     100,   101,   102,   103,   104,   105,   106,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,
       7,    -1,    -1,    -1,    11,    12,   126,   127,   128,    16,
      -1,    18,    19,    20,    21,    22,    23,    24,    -1,    -1,
      -1,    -1,    -1,    30,    31,    32,    33,    34,    35,    36,
      -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,
      -1,    -1,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    -1,    59,    60,    -1,    62,    63,    64,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,
      -1,    -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,
      -1,    98,    99,   100,   101,   102,   103,   104,   105,   106,
      -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,
      -1,    -1,    -1,    11,    12,    -1,    -1,    -1,    16,   126,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,
      -1,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,
      -1,    89,    90,    -1,    92,    93,    -1,    95,    -1,    -1,
      98,    99,   100,   101,   102,   103,   104,   105,   106,    -1,
      -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,
      -1,    -1,    11,    12,    -1,    -1,    -1,    16,   126,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    83,    -1,    -1,    86,    -1,    -1,
      89,    90,    -1,    92,    93,    -1,    -1,    -1,    -1,    98,
      99,   100,   101,   102,   103,   104,   105,   106,    -1,    -1,
      -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,
      -1,    11,    12,    -1,    -1,    -1,    16,   126,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,
      90,    -1,    92,    93,    -1,    -1,    -1,    -1,    98,    99,
     100,   101,   102,   103,   104,   105,   106,    -1,    -1,    -1,
      -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,
      11,    12,    -1,    -1,    -1,    16,   126,    18,    19,    20,
      21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    -1,    -1,    39,    -1,
      -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,
      51,    52,    53,    54,    55,    56,    57,    -1,    59,    60,
      -1,    62,    63,    64,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,
      -1,    92,    93,    -1,    -1,    -1,    -1,    98,    99,   100,
     101,   102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,
      12,    -1,    -1,    -1,    16,   126,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,
      92,    93,    -1,    -1,    -1,    -1,    98,    99,   100,   101,
     102,   103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,
       3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,
      -1,    -1,    -1,    16,   126,    18,    19,    20,    21,    22,
      23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,
      33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,
      -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,
      53,    54,    55,    56,    57,    -1,    59,    60,    -1,    62,
      63,    64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    86,    -1,    -1,    89,    90,    -1,    92,
      93,    -1,    -1,    -1,    -1,    98,    99,   100,   101,   102,
     103,   104,   105,   106,    -1,    -1,    -1,    -1,    -1,    -1,
      52,    53,    -1,    -1,    56,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   126,    66,    67,    68,    69,    70,    71,
      72,    73,    74,    -1,    -1,    77,    78,    -1,    -1,    81,
      82,    83,    84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    95,    96,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,   127,   128,    52,    53,    -1,
      -1,    56,    -1,   135,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      -1,    -1,    77,    78,    -1,    -1,    81,    82,    83,    84,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      95,    96,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,    -1,   127,   128,    52,    53,    -1,    -1,    56,    -1,
     135,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    -1,    -1,    77,
      78,    -1,    -1,    81,    82,    83,    84,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    95,    96,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,   117,
     118,   119,   120,   121,   122,   123,   124,   125,    -1,   127,
     128,    52,    53,    -1,    -1,    56,    -1,   135,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    66,    67,    68,    69,    70,
      71,    72,    73,    74,    -1,    -1,    77,    78,    -1,    -1,
      81,    82,    83,    84,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    95,    96,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,
     121,   122,   123,   124,   125,    -1,   127,   128,    52,    53,
      -1,    -1,    56,    -1,   135,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    66,    67,    68,    69,    70,    71,    72,    73,
      74,    -1,    -1,    77,    78,    -1,    -1,    81,    82,    83,
      84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    95,    96,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   116,   117,   118,   119,   120,   121,   122,   123,
     124,   125,    -1,   127,   128,    52,    53,    -1,    -1,    56,
      -1,   135,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,
      67,    68,    69,    70,    71,    72,    73,    74,    -1,    -1,
      77,    78,    -1,    -1,    81,    82,    83,    84,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    95,    96,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,    -1,
     127,   128,    52,    53,    -1,    -1,    56,    -1,   135,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    66,    67,    68,    69,
      70,    71,    72,    73,    74,    -1,    -1,    77,    78,    -1,
      -1,    81,    82,    83,    84,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    95,    96,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   116,   117,   118,   119,
     120,   121,   122,   123,   124,   125,    -1,   127,   128,    52,
      53,    -1,    -1,    56,    -1,   135,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    66,    67,    68,    69,    70,    71,    72,
      73,    74,    -1,    -1,    77,    78,    -1,    -1,    81,    82,
      83,    84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    95,    96,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   116,   117,   118,   119,   120,   121,   122,
     123,   124,   125,    -1,   127,   128,    52,    53,    -1,    -1,
      56,    -1,   135,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      66,    67,    68,    69,    70,    71,    72,    73,    74,    -1,
      -1,    77,    78,    -1,    -1,    81,    82,    83,    84,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    95,
      96,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     116,   117,   118,   119,   120,   121,   122,   123,   124,   125,
      -1,   127,   128,    52,    53,    -1,    -1,    56,    -1,   135,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    67,    68,
      69,    70,    71,    72,    73,    74,    -1,    -1,    77,    78,
      -1,    -1,    81,    82,    83,    84,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    95,    96,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   116,   117,   118,
     119,   120,   121,   122,   123,   124,   125,    -1,   127,   128,
      52,    53,    -1,    -1,    56,    -1,   135,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    67,    68,    69,    70,    71,
      72,    73,    74,    -1,    -1,    77,    78,    -1,    -1,    81,
      82,    83,    84,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    95,    96,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   116,   117,   118,   119,   120,   121,
     122,   123,   124,   125,    -1,   127,   128,    52,    53,    -1,
      -1,    56,    -1,   135,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      -1,    -1,    77,    78,    -1,    -1,    81,    82,    83,    84,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      95,    96,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,    -1,   127,   128,    52,    53,    -1,    -1,    56,    -1,
     135,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    67,
      68,    69,    70,    71,    72,    73,    74,    -1,    -1,    77,
      78,    -1,    -1,    81,    82,    83,    84,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    95,    96,    68,
      69,    70,    71,    72,    73,    74,    75,    76,    77,    78,
      79,    80,    -1,    -1,    83,    84,    -1,    -1,   116,   117,
     118,   119,   120,   121,   122,   123,   124,   125,    -1,   127,
     128,    -1,    -1,    -1,    -1,    -1,    -1,   135,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   114,    -1,   116,   117,   118,
     119,   120,   121,   122,   123,   124,   125,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   141
    //[
  ];

  // STOS_[STATE-NUM]
  // The (internal number of the) accessing symbol of state STATE-NUM.
  var yystos_ =
  [
    //]
         0,   143,   144,     0,     1,     3,     4,     5,     6,     7,
      11,    12,    16,    18,    19,    20,    21,    22,    23,    24,
      30,    31,    32,    33,    34,    35,    36,    39,    45,    46,
      47,    48,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    59,    60,    62,    63,    64,    66,    67,    86,    89,
      90,    92,    93,    95,    98,    99,   100,   101,   102,   103,
     104,   105,   106,   126,   127,   128,   145,   146,   147,   154,
     156,   157,   159,   160,   163,   164,   165,   167,   168,   169,
     171,   172,   182,   196,   214,   215,   216,   217,   218,   219,
     220,   221,   222,   223,   224,   249,   250,   264,   265,   266,
     267,   268,   269,   270,   273,   275,   276,   288,   290,   291,
     292,   293,   294,   295,   296,   327,   338,   147,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    30,    31,    32,    33,    34,    35,    36,    37,
      38,    39,    45,    46,    47,    48,    49,    50,    51,    52,
      53,    56,    66,    67,    68,    69,    70,    71,    72,    73,
      74,    77,    78,    81,    82,    83,    84,    95,    96,   116,
     117,   118,   119,   120,   121,   122,   123,   124,   125,   127,
     128,   135,   175,   176,   177,   178,   180,   181,   288,   290,
      39,    58,    86,    89,    95,    96,    97,   127,   164,   172,
     182,   184,   189,   192,   194,   214,   292,   293,   295,   296,
     325,   326,   189,   189,   136,   190,   191,   136,   186,   190,
     136,   141,   332,    54,   177,   332,   148,   130,    21,    22,
      30,    31,    32,   163,   182,   214,   182,    56,     1,    47,
      89,   150,   151,   152,   154,   166,   167,   338,   157,   198,
     185,   194,   325,   338,   184,   324,   325,   338,    46,    86,
     126,   134,   171,   196,   214,   292,   293,   296,   242,   243,
      54,    55,    57,   175,   280,   289,   279,   280,   281,   140,
     271,   140,   277,   140,   274,   140,   278,    59,    60,   159,
     182,   182,   139,   141,   331,   336,   337,    40,    41,    42,
      43,    44,    37,    38,    26,   130,   186,   190,   255,    28,
     247,   113,   134,    89,    95,   168,   113,    68,    69,    70,
      71,    72,    73,    74,    75,    76,    77,    78,    79,    80,
      83,    84,   114,   116,   117,   118,   119,   120,   121,   122,
     123,   124,   125,    85,   132,   133,   197,   157,   158,   158,
     201,   203,   158,   331,   337,    86,   165,   172,   214,   230,
     292,   293,   296,    52,    56,    83,    86,   173,   174,   214,
     292,   293,   296,   174,    33,    34,    35,    36,    49,    50,
      51,    52,    56,   136,   175,   294,   322,    85,   133,   330,
     255,   267,    87,    87,   134,   184,    56,   184,   184,   184,
     113,    88,   134,   193,   338,    85,   132,   133,    87,    87,
     134,   193,   189,   332,   333,   189,   188,   189,   194,   325,
     338,   157,   333,   157,    54,    63,    64,   155,   136,   183,
     130,   150,    85,   133,    87,   154,   153,   166,   137,   331,
     337,   333,   199,   333,   138,   134,   141,   335,   134,   335,
     131,   335,   332,    56,    59,    60,   168,   170,   134,    85,
     132,   133,   244,    61,   107,   109,   110,   282,   110,   282,
     110,    65,   282,   110,   110,   272,   282,   110,    61,   110,
     110,   110,   272,   110,    61,   110,    68,    68,   139,   147,
     158,   158,   158,   158,   154,   157,   157,   257,   256,    94,
     161,   248,    95,   159,   184,   194,   195,   166,   134,   171,
     134,   156,   159,   172,   182,   184,   195,   182,   182,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   182,   182,    52,    53,    56,   180,   254,   328,   329,
     188,    52,    53,    56,   180,   253,   328,   149,   150,    13,
     226,   336,   226,   158,   158,   331,    17,   258,    56,    85,
     132,   133,    25,   157,    52,    56,   173,     1,   117,   297,
     336,    85,   132,   133,   210,   323,   211,   330,    52,    56,
     328,   159,   182,   159,   182,   179,   182,   184,    95,   184,
     192,   325,    52,    56,   188,    52,    56,   326,   333,   137,
     333,   134,   134,   333,   177,   200,   182,   145,   131,   328,
     328,   182,   130,   333,   152,   333,   325,   134,   170,    52,
      56,   188,    52,    56,    52,    54,    55,    56,    57,    58,
      68,    89,    95,    96,    97,   120,   123,   136,   245,   300,
     302,   303,   304,   305,   306,   307,   310,   311,   312,   313,
     316,   317,   318,   319,   320,   284,   283,   140,   282,   140,
     140,   140,   182,   182,    76,   118,   237,   238,   338,   237,
     162,   237,   184,   134,   333,   170,   134,   113,    44,   332,
      87,    87,   186,   190,   252,   332,   334,    87,    87,   186,
     190,   251,    10,   225,     8,   260,   338,   150,    13,   150,
      27,   227,   336,   227,   258,   194,   225,    52,    56,   188,
      52,    56,   205,   208,   336,   298,   207,    52,    56,   173,
     188,   149,   157,   136,   299,   302,   212,   186,   187,   190,
     338,    44,   177,   184,   193,    87,    87,   334,    87,    87,
     325,   157,   131,   145,   335,   168,   334,   113,   184,    52,
      89,    95,   231,   232,   233,   304,   302,    29,   111,   246,
     134,   301,   134,   321,   338,    52,   134,   321,   134,   301,
      52,   134,   301,    52,   285,    54,    55,    57,   287,   296,
      52,    58,   234,   236,   239,   306,   308,   309,   312,   314,
     315,   318,   320,   332,   150,   150,   237,   150,    95,   184,
     170,   182,   115,   159,   182,   159,   182,   161,   186,   138,
      87,   159,   182,   159,   182,   161,   187,   184,   195,   261,
     338,    15,   229,   338,    14,   228,   229,   229,   202,   204,
     225,   134,   226,   334,   158,   336,   158,   149,   334,   225,
     333,   302,   149,   336,   175,   255,   247,   182,    87,   134,
     333,   131,   184,   233,   134,   304,   134,   333,   239,   150,
     150,   300,   305,   316,   318,   307,   312,   320,   306,   313,
     318,   306,   286,   113,    86,   214,   239,   118,   134,   235,
     134,   321,   321,   134,   235,   134,   235,   139,    10,   131,
     150,    10,   184,   182,   159,   182,    88,   262,   338,   150,
       9,   263,   338,   158,   225,   225,   150,   150,   184,   150,
     227,   209,   336,   225,   333,   225,   213,   333,   232,   134,
      95,   231,   137,    10,   131,   134,   301,   134,   301,   321,
     134,   301,   134,   301,   301,   150,   214,    56,    85,   118,
     234,   315,   318,   308,   312,   306,   314,   318,   306,    52,
     240,   241,   303,   131,    86,   172,   214,   292,   293,   296,
     226,   150,   226,   225,   225,   229,   258,   259,   206,   149,
     299,   134,   232,   134,   304,   306,   318,   306,   306,   108,
      52,    56,   134,   235,   134,   235,   321,   134,   235,   134,
     235,   235,   134,   332,    56,    85,   132,   133,   150,   150,
     150,   225,   149,   232,   134,   301,   134,   301,   301,   301,
     306,   318,   306,   306,   241,    52,    56,   188,    52,    56,
     260,   228,   225,   225,   232,   306,   235,   134,   235,   235,
     235,   334,   301,   306,   235
    //[
  ];

  // TOKEN_NUMBER_[YYLEX-NUM]
  // Internal symbol number corresponding to YYLEX-NUM.
  var yytoken_number_ =
  [
    //]
         0,   256,   257,   258,   259,   260,   261,   262,   263,   264,
     265,   266,   267,   268,   269,   270,   271,   272,   273,   274,
     275,   276,   277,   278,   279,   280,   281,   282,   283,   284,
     285,   286,   287,   288,   289,   290,   291,   292,   293,   294,
     295,   296,   297,   298,   299,   300,   301,   302,   303,   304,
     305,   306,   307,   308,   309,   310,   311,   312,   313,   314,
     315,   316,   317,   318,   319,   320,   321,   322,   323,   324,
     325,   326,   327,   328,   329,   330,   331,   332,   333,   334,
     335,   336,   337,   338,   339,   340,   341,   342,   343,   344,
     345,   346,   347,   348,   349,   350,   351,   352,   353,   354,
     355,   356,   357,   358,   359,   360,   361,   362,   363,   364,
     365,   366,   367,    61,    63,    58,    62,    60,   124,    94,
      38,    43,    45,    42,    47,    37,   368,    33,   126,   369,
     123,   125,    91,    46,    44,    96,    40,    41,    93,    59,
      32,    10
    //[
  ];

  // YYR1[YYN] -- Symbol number of symbol that rule YYN derives.
  var yyr1_ =
  [
    //]
         0,   142,   144,   143,   145,   146,   146,   146,   146,   147,
     148,   147,   149,   150,   151,   151,   151,   151,   152,   153,
     152,   155,   154,   154,   154,   154,   154,   154,   154,   154,
     154,   154,   154,   154,   154,   154,   154,   154,   154,   154,
     154,   154,   154,   154,   154,   154,   156,   156,   157,   157,
     157,   157,   157,   157,   158,   159,   159,   160,   160,   162,
     161,   163,   164,   164,   164,   164,   164,   164,   164,   164,
     164,   164,   164,   165,   165,   166,   166,   167,   167,   167,
     167,   167,   167,   167,   167,   167,   167,   168,   168,   169,
     169,   170,   170,   171,   171,   171,   171,   171,   171,   171,
     171,   171,   172,   172,   172,   172,   172,   172,   172,   172,
     172,   173,   173,   174,   174,   174,   175,   175,   175,   175,
     175,   176,   176,   177,   177,   178,   179,   178,   180,   180,
     180,   180,   180,   180,   180,   180,   180,   180,   180,   180,
     180,   180,   180,   180,   180,   180,   180,   180,   180,   180,
     180,   180,   180,   180,   180,   180,   180,   180,   181,   181,
     181,   181,   181,   181,   181,   181,   181,   181,   181,   181,
     181,   181,   181,   181,   181,   181,   181,   181,   181,   181,
     181,   181,   181,   181,   181,   181,   181,   181,   181,   181,
     181,   181,   181,   181,   181,   181,   181,   181,   181,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   182,   182,   182,   182,   182,   182,   182,   182,   182,
     182,   183,   182,   182,   182,   184,   185,   185,   185,   185,
     186,   187,   187,   188,   188,   188,   188,   188,   189,   189,
     189,   189,   189,   191,   190,   192,   193,   193,   194,   194,
     194,   194,   195,   195,   195,   196,   196,   196,   196,   196,
     196,   196,   196,   196,   196,   196,   197,   196,   198,   196,
     199,   196,   196,   196,   196,   196,   196,   196,   196,   196,
     196,   200,   196,   196,   196,   196,   196,   196,   196,   196,
     196,   201,   202,   196,   203,   204,   196,   196,   196,   205,
     206,   196,   207,   196,   208,   209,   196,   210,   196,   211,
     196,   212,   213,   196,   196,   196,   196,   196,   214,   215,
     216,   217,   218,   219,   220,   221,   222,   223,   224,   225,
     226,   226,   226,   227,   227,   228,   228,   229,   229,   230,
     230,   231,   231,   232,   232,   233,   233,   233,   233,   233,
     233,   233,   233,   233,   234,   234,   234,   234,   235,   235,
     236,   236,   236,   236,   236,   236,   236,   236,   236,   236,
     236,   236,   236,   236,   236,   237,   237,   238,   238,   238,
     239,   239,   240,   240,   241,   241,   243,   244,   242,   245,
     245,   246,   246,   248,   247,   249,   249,   249,   249,   250,
     251,   250,   252,   250,   250,   253,   250,   254,   250,   250,
     250,   250,   256,   255,   257,   255,   258,   259,   259,   260,
     260,   261,   261,   261,   262,   262,   263,   263,   264,   264,
     264,   265,   266,   266,   266,   267,   268,   269,   270,   270,
     271,   271,   272,   272,   273,   273,   274,   274,   275,   275,
     276,   276,   277,   277,   278,   278,   279,   279,   280,   280,
     281,   281,   282,   283,   282,   284,   285,   286,   282,   287,
     287,   287,   287,   288,   289,   289,   289,   289,   290,   291,
     291,   291,   291,   292,   292,   292,   292,   292,   293,   293,
     293,   293,   293,   293,   293,   294,   294,   295,   295,   296,
     296,   297,   298,   297,   297,   299,   299,   300,   300,   300,
     300,   301,   301,   302,   302,   302,   302,   302,   302,   302,
     302,   302,   302,   302,   302,   302,   302,   302,   303,   303,
     303,   303,   304,   304,   305,   305,   306,   306,   307,   308,
     309,   309,   310,   310,   311,   311,   312,   312,   313,   314,
     315,   315,   316,   316,   317,   317,   318,   318,   319,   319,
     320,   321,   321,   322,   323,   322,   324,   324,   325,   325,
     326,   326,   326,   327,   327,   327,   328,   328,   328,   328,
     329,   329,   329,   330,   330,   331,   331,   332,   332,   333,
     334,   335,   335,   335,   336,   336,   337,   337,   338
    //[
  ];

  // YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.
  var yyr2_ = this.yyr2_ =
  [
    //]
         0,     2,     0,     2,     2,     1,     1,     3,     2,     1,
       0,     5,     4,     2,     1,     1,     3,     2,     1,     0,
       5,     0,     4,     3,     3,     3,     2,     3,     3,     3,
       3,     3,     4,     1,     3,     3,     6,     5,     5,     5,
       5,     3,     3,     3,     3,     1,     3,     3,     1,     3,
       3,     3,     2,     1,     1,     1,     1,     1,     4,     0,
       5,     1,     2,     3,     4,     5,     4,     5,     2,     2,
       2,     2,     2,     1,     3,     1,     3,     1,     2,     3,
       5,     2,     4,     2,     4,     1,     3,     1,     3,     2,
       3,     1,     3,     1,     1,     4,     3,     3,     3,     3,
       2,     1,     1,     1,     4,     3,     3,     3,     3,     2,
       1,     1,     1,     2,     1,     3,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     0,     4,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     3,
       5,     3,     5,     6,     5,     5,     5,     5,     4,     3,
       3,     3,     3,     3,     3,     3,     3,     3,     4,     4,
       2,     2,     3,     3,     3,     3,     3,     3,     3,     3,
       3,     3,     3,     3,     3,     2,     2,     3,     3,     3,
       3,     0,     4,     6,     1,     1,     1,     2,     4,     2,
       3,     1,     1,     1,     1,     2,     4,     2,     1,     2,
       2,     4,     1,     0,     2,     2,     2,     1,     1,     2,
       3,     4,     3,     4,     2,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     0,     4,     0,     3,
       0,     4,     3,     3,     2,     3,     3,     1,     4,     3,
       1,     0,     6,     4,     3,     2,     1,     2,     2,     6,
       6,     0,     0,     7,     0,     0,     7,     5,     4,     0,
       0,     9,     0,     6,     0,     0,     8,     0,     5,     0,
       6,     0,     0,     9,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     2,     1,     1,     1,     5,     1,     2,     1,
       1,     1,     3,     1,     3,     1,     4,     6,     3,     5,
       2,     4,     1,     3,     4,     2,     2,     1,     2,     0,
       6,     8,     4,     6,     4,     2,     6,     2,     4,     6,
       2,     4,     2,     4,     1,     1,     1,     3,     1,     4,
       1,     4,     1,     3,     1,     1,     0,     0,     4,     4,
       1,     3,     3,     0,     5,     2,     4,     5,     5,     2,
       0,     5,     0,     5,     3,     0,     4,     0,     4,     2,
       1,     4,     0,     5,     0,     5,     5,     1,     1,     6,
       1,     1,     1,     1,     2,     1,     2,     1,     1,     1,
       1,     1,     1,     1,     2,     3,     3,     3,     3,     3,
       0,     3,     1,     2,     3,     3,     0,     3,     3,     3,
       3,     3,     0,     3,     0,     3,     0,     2,     0,     2,
       0,     2,     1,     0,     3,     0,     0,     0,     6,     1,
       1,     1,     1,     2,     1,     1,     1,     1,     3,     1,
       1,     2,     2,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     0,     4,     2,     3,     2,     4,     2,     2,
       1,     2,     0,     6,     8,     4,     6,     4,     6,     2,
       4,     6,     2,     4,     2,     4,     1,     0,     1,     1,
       1,     1,     1,     1,     1,     3,     1,     3,     2,     2,
       1,     3,     1,     3,     1,     1,     2,     1,     3,     3,
       1,     3,     1,     3,     1,     1,     2,     1,     1,     1,
       2,     2,     1,     1,     0,     4,     1,     2,     1,     3,
       3,     2,     2,     1,     1,     1,     1,     1,     1,     1,
       1,     1,     1,     1,     1,     0,     1,     0,     1,     2,
       2,     0,     1,     1,     1,     1,     1,     2,     0
    //[
  ];

  // YYTNAME[SYMBOL-NUM] -- String name of the symbol SYMBOL-NUM.
  // First, the terminals, then, starting at \a yyntokens_, nonterminals.
  var yytname_ = this.yytname_ =
  [
    //]
    "\"end-of-input\"", "error", "$undefined", "keyword_class",
  "keyword_module", "keyword_def", "keyword_undef", "keyword_begin",
  "keyword_rescue", "keyword_ensure", "keyword_end", "keyword_if",
  "keyword_unless", "keyword_then", "keyword_elsif", "keyword_else",
  "keyword_case", "keyword_when", "keyword_while", "keyword_until",
  "keyword_for", "keyword_break", "keyword_next", "keyword_redo",
  "keyword_retry", "keyword_in", "keyword_do", "keyword_do_cond",
  "keyword_do_block", "keyword_do_LAMBDA", "keyword_return",
  "keyword_yield", "keyword_super", "keyword_self", "keyword_nil",
  "keyword_true", "keyword_false", "keyword_and", "keyword_or",
  "keyword_not", "modifier_if", "modifier_unless", "modifier_while",
  "modifier_until", "modifier_rescue", "keyword_alias", "keyword_defined",
  "keyword_BEGIN", "keyword_END", "keyword__LINE__", "keyword__FILE__",
  "keyword__ENCODING__", "tIDENTIFIER", "tFID", "tGVAR", "tIVAR",
  "tCONSTANT", "tCVAR", "tLABEL", "tINTEGER", "tFLOAT", "tSTRING_CONTENT",
  "tCHAR", "tNTH_REF", "tBACK_REF", "tREGEXP_END", "\"unary+\"",
  "\"unary-\"", "\"**\"", "\"<=>\"", "\"==\"", "\"===\"", "\"!=\"",
  "\">=\"", "\"<=\"", "\"&&\"", "\"||\"", "\"=~\"", "\"!~\"", "\"..\"",
  "\"...\"", "\"[]\"", "\"[]=\"", "\"<<\"", "\">>\"", "\"::\"",
  "\":: at EXPR_BEG\"", "tOP_ASGN", "\"=>\"", "\"(\"", "\"( arg\"",
  "\")\"", "\"[\"", "\"{\"", "\"{ arg\"", "\"*\"", "\"**arg\"", "\"&\"",
  "\"->\"", "tSYMBEG", "tSTRING_BEG", "tXSTRING_BEG", "tREGEXP_BEG",
  "tWORDS_BEG", "tQWORDS_BEG", "tSYMBOLS_BEG", "tQSYMBOLS_BEG",
  "tSTRING_DBEG", "tSTRING_DEND", "tSTRING_DVAR", "tSTRING_END", "tLAMBEG",
  "tLOWEST", "'='", "'?'", "':'", "'>'", "'<'", "'|'", "'^'", "'&'", "'+'",
  "'-'", "'*'", "'/'", "'%'", "tUMINUS_NUM", "'!'", "'~'", "tLAST_TOKEN",
  "'{'", "'}'", "'['", "'.'", "','", "'`'", "'('", "')'", "']'", "';'",
  "' '", "'\\n'", "$accept", "program", "$@1", "top_compstmt", "top_stmts",
  "top_stmt", "$@2", "bodystmt", "compstmt", "stmts", "stmt_or_begin",
  "$@3", "stmt", "$@4", "command_asgn", "expr", "expr_value",
  "command_call", "block_command", "cmd_brace_block", "@5", "fcall",
  "command", "mlhs", "mlhs_inner", "mlhs_basic", "mlhs_item", "mlhs_head",
  "mlhs_post", "mlhs_node", "lhs", "cname", "cpath", "fname", "fsym",
  "fitem", "undef_list", "$@6", "op", "reswords", "arg", "$@7",
  "arg_value", "aref_args", "paren_args", "opt_paren_args",
  "opt_call_args", "call_args", "command_args", "@8", "block_arg",
  "opt_block_arg", "args", "mrhs", "primary", "@9", "$@10", "$@11", "$@12",
  "$@13", "$@14", "$@15", "$@16", "$@17", "$@18", "@19", "@20", "@21",
  "@22", "@23", "$@24", "$@25", "primary_value", "k_begin", "k_if",
  "k_unless", "k_while", "k_until", "k_case", "k_for", "k_class",
  "k_module", "k_def", "k_end", "then", "do", "if_tail", "opt_else",
  "for_var", "f_marg", "f_marg_list", "f_margs", "block_args_tail",
  "opt_block_args_tail", "block_param", "opt_block_param",
  "block_param_def", "opt_bv_decl", "bv_decls", "bvar", "lambda", "@26",
  "@27", "f_larglist", "lambda_body", "do_block", "@28", "block_call",
  "method_call", "@29", "@30", "@31", "@32", "brace_block", "@33", "@34",
  "case_body", "cases", "opt_rescue", "exc_list", "exc_var", "opt_ensure",
  "literal", "strings", "string", "string1", "xstring", "regexp", "words",
  "word_list", "word", "symbols", "symbol_list", "qwords", "qsymbols",
  "qword_list", "qsym_list", "string_contents", "xstring_contents",
  "regexp_contents", "string_content", "@35", "@36", "@37", "@38",
  "string_dvar", "symbol", "sym", "dsym", "numeric", "user_variable",
  "keyword_variable", "var_ref", "var_lhs", "backref", "superclass",
  "$@39", "f_arglist", "args_tail", "opt_args_tail", "f_args", "f_bad_arg",
  "f_norm_arg", "f_arg_item", "f_arg", "f_kw", "f_block_kw",
  "f_block_kwarg", "f_kwarg", "kwrest_mark", "f_kwrest", "f_opt",
  "f_block_opt", "f_block_optarg", "f_optarg", "restarg_mark",
  "f_rest_arg", "blkarg_mark", "f_block_arg", "opt_f_block_arg",
  "singleton", "$@40", "assoc_list", "assocs", "assoc", "operation",
  "operation2", "operation3", "dot_or_colon", "opt_terms", "opt_nl",
  "rparen", "rbracket", "trailer", "term", "terms", "none", null
    //[
  ];

  // YYRHS -- A `-1'-separated list of the rules' RHS.
  var yyrhs_ = this.yyrhs_ =
  [
    //]
       143,     0,    -1,    -1,   144,   145,    -1,   146,   331,    -1,
     338,    -1,   147,    -1,   146,   337,   147,    -1,     1,   147,
      -1,   154,    -1,    -1,    47,   148,   130,   145,   131,    -1,
     150,   260,   229,   263,    -1,   151,   331,    -1,   338,    -1,
     152,    -1,   151,   337,   152,    -1,     1,   154,    -1,   154,
      -1,    -1,    47,   153,   130,   145,   131,    -1,    -1,    45,
     177,   155,   177,    -1,    45,    54,    54,    -1,    45,    54,
      64,    -1,    45,    54,    63,    -1,     6,   178,    -1,   154,
      40,   158,    -1,   154,    41,   158,    -1,   154,    42,   158,
      -1,   154,    43,   158,    -1,   154,    44,   154,    -1,    48,
     130,   150,   131,    -1,   156,    -1,   165,   113,   159,    -1,
     295,    87,   159,    -1,   214,   132,   188,   334,    87,   159,
      -1,   214,   133,    52,    87,   159,    -1,   214,   133,    56,
      87,   159,    -1,   214,    85,    56,    87,   159,    -1,   214,
      85,    52,    87,   159,    -1,   296,    87,   159,    -1,   172,
     113,   195,    -1,   165,   113,   184,    -1,   165,   113,   195,
      -1,   157,    -1,   172,   113,   159,    -1,   172,   113,   156,
      -1,   159,    -1,   157,    37,   157,    -1,   157,    38,   157,
      -1,    39,   332,   157,    -1,   127,   159,    -1,   182,    -1,
     157,    -1,   164,    -1,   160,    -1,   249,    -1,   249,   330,
     328,   190,    -1,    -1,    94,   162,   237,   150,   131,    -1,
     327,    -1,   163,   190,    -1,   163,   190,   161,    -1,   214,
     133,   328,   190,    -1,   214,   133,   328,   190,   161,    -1,
     214,    85,   328,   190,    -1,   214,    85,   328,   190,   161,
      -1,    32,   190,    -1,    31,   190,    -1,    30,   189,    -1,
      21,   189,    -1,    22,   189,    -1,   167,    -1,    89,   166,
     333,    -1,   167,    -1,    89,   166,   333,    -1,   169,    -1,
     169,   168,    -1,   169,    95,   171,    -1,   169,    95,   171,
     134,   170,    -1,   169,    95,    -1,   169,    95,   134,   170,
      -1,    95,   171,    -1,    95,   171,   134,   170,    -1,    95,
      -1,    95,   134,   170,    -1,   171,    -1,    89,   166,   333,
      -1,   168,   134,    -1,   169,   168,   134,    -1,   168,    -1,
     170,   134,   168,    -1,   292,    -1,   293,    -1,   214,   132,
     188,   334,    -1,   214,   133,    52,    -1,   214,    85,    52,
      -1,   214,   133,    56,    -1,   214,    85,    56,    -1,    86,
      56,    -1,   296,    -1,   292,    -1,   293,    -1,   214,   132,
     188,   334,    -1,   214,   133,    52,    -1,   214,    85,    52,
      -1,   214,   133,    56,    -1,   214,    85,    56,    -1,    86,
      56,    -1,   296,    -1,    52,    -1,    56,    -1,    86,   173,
      -1,   173,    -1,   214,    85,   173,    -1,    52,    -1,    56,
      -1,    53,    -1,   180,    -1,   181,    -1,   175,    -1,   288,
      -1,   176,    -1,   290,    -1,   177,    -1,    -1,   178,   134,
     179,   177,    -1,   118,    -1,   119,    -1,   120,    -1,    69,
      -1,    70,    -1,    71,    -1,    77,    -1,    78,    -1,   116,
      -1,    73,    -1,   117,    -1,    74,    -1,    72,    -1,    83,
      -1,    84,    -1,   121,    -1,   122,    -1,   123,    -1,    95,
      -1,   124,    -1,   125,    -1,    68,    -1,    96,    -1,   127,
      -1,   128,    -1,    66,    -1,    67,    -1,    81,    -1,    82,
      -1,   135,    -1,    49,    -1,    50,    -1,    51,    -1,    47,
      -1,    48,    -1,    45,    -1,    37,    -1,     7,    -1,    21,
      -1,    16,    -1,     3,    -1,     5,    -1,    46,    -1,    26,
      -1,    15,    -1,    14,    -1,    10,    -1,     9,    -1,    36,
      -1,    20,    -1,    25,    -1,     4,    -1,    22,    -1,    34,
      -1,    39,    -1,    38,    -1,    23,    -1,     8,    -1,    24,
      -1,    30,    -1,    33,    -1,    32,    -1,    13,    -1,    35,
      -1,     6,    -1,    17,    -1,    31,    -1,    11,    -1,    12,
      -1,    18,    -1,    19,    -1,   172,   113,   182,    -1,   172,
     113,   182,    44,   182,    -1,   295,    87,   182,    -1,   295,
      87,   182,    44,   182,    -1,   214,   132,   188,   334,    87,
     182,    -1,   214,   133,    52,    87,   182,    -1,   214,   133,
      56,    87,   182,    -1,   214,    85,    52,    87,   182,    -1,
     214,    85,    56,    87,   182,    -1,    86,    56,    87,   182,
      -1,   296,    87,   182,    -1,   182,    79,   182,    -1,   182,
      80,   182,    -1,   182,   121,   182,    -1,   182,   122,   182,
      -1,   182,   123,   182,    -1,   182,   124,   182,    -1,   182,
     125,   182,    -1,   182,    68,   182,    -1,   126,    59,    68,
     182,    -1,   126,    60,    68,   182,    -1,    66,   182,    -1,
      67,   182,    -1,   182,   118,   182,    -1,   182,   119,   182,
      -1,   182,   120,   182,    -1,   182,    69,   182,    -1,   182,
     116,   182,    -1,   182,    73,   182,    -1,   182,   117,   182,
      -1,   182,    74,   182,    -1,   182,    70,   182,    -1,   182,
      71,   182,    -1,   182,    72,   182,    -1,   182,    77,   182,
      -1,   182,    78,   182,    -1,   127,   182,    -1,   128,   182,
      -1,   182,    83,   182,    -1,   182,    84,   182,    -1,   182,
      75,   182,    -1,   182,    76,   182,    -1,    -1,    46,   332,
     183,   182,    -1,   182,   114,   182,   332,   115,   182,    -1,
     196,    -1,   182,    -1,   338,    -1,   194,   335,    -1,   194,
     134,   325,   335,    -1,   325,   335,    -1,   136,   188,   333,
      -1,   338,    -1,   186,    -1,   338,    -1,   189,    -1,   194,
     134,    -1,   194,   134,   325,   134,    -1,   325,   134,    -1,
     164,    -1,   194,   193,    -1,   325,   193,    -1,   194,   134,
     325,   193,    -1,   192,    -1,    -1,   191,   189,    -1,    97,
     184,    -1,   134,   192,    -1,   338,    -1,   184,    -1,    95,
     184,    -1,   194,   134,   184,    -1,   194,   134,    95,   184,
      -1,   194,   134,   184,    -1,   194,   134,    95,   184,    -1,
      95,   184,    -1,   264,    -1,   265,    -1,   268,    -1,   269,
      -1,   270,    -1,   275,    -1,   273,    -1,   276,    -1,   294,
      -1,   296,    -1,    53,    -1,    -1,   215,   197,   149,   225,
      -1,    -1,    90,   198,   333,    -1,    -1,    90,   157,   199,
     333,    -1,    89,   150,   137,    -1,   214,    85,    56,    -1,
      86,    56,    -1,    92,   185,   138,    -1,    93,   324,   131,
      -1,    30,    -1,    31,   136,   189,   333,    -1,    31,   136,
     333,    -1,    31,    -1,    -1,    46,   332,   136,   200,   157,
     333,    -1,    39,   136,   157,   333,    -1,    39,   136,   333,
      -1,   163,   255,    -1,   250,    -1,   250,   255,    -1,    98,
     242,    -1,   216,   158,   226,   150,   228,   225,    -1,   217,
     158,   226,   150,   229,   225,    -1,    -1,    -1,   218,   201,
     158,   227,   202,   150,   225,    -1,    -1,    -1,   219,   203,
     158,   227,   204,   150,   225,    -1,   220,   158,   331,   258,
     225,    -1,   220,   331,   258,   225,    -1,    -1,    -1,   221,
     230,    25,   205,   158,   227,   206,   150,   225,    -1,    -1,
     222,   174,   297,   207,   149,   225,    -1,    -1,    -1,   222,
      83,   157,   208,   336,   209,   149,   225,    -1,    -1,   223,
     174,   210,   149,   225,    -1,    -1,   224,   175,   211,   299,
     149,   225,    -1,    -1,    -1,   224,   322,   330,   212,   175,
     213,   299,   149,   225,    -1,    21,    -1,    22,    -1,    23,
      -1,    24,    -1,   196,    -1,     7,    -1,    11,    -1,    12,
      -1,    18,    -1,    19,    -1,    16,    -1,    20,    -1,     3,
      -1,     4,    -1,     5,    -1,    10,    -1,   336,    -1,    13,
      -1,   336,    13,    -1,   336,    -1,    27,    -1,   229,    -1,
      14,   158,   226,   150,   228,    -1,   338,    -1,    15,   150,
      -1,   172,    -1,   165,    -1,   304,    -1,    89,   233,   333,
      -1,   231,    -1,   232,   134,   231,    -1,   232,    -1,   232,
     134,    95,   304,    -1,   232,   134,    95,   304,   134,   232,
      -1,   232,   134,    95,    -1,   232,   134,    95,   134,   232,
      -1,    95,   304,    -1,    95,   304,   134,   232,    -1,    95,
      -1,    95,   134,   232,    -1,   309,   134,   312,   321,    -1,
     309,   321,    -1,   312,   321,    -1,   320,    -1,   134,   234,
      -1,    -1,   306,   134,   315,   134,   318,   235,    -1,   306,
     134,   315,   134,   318,   134,   306,   235,    -1,   306,   134,
     315,   235,    -1,   306,   134,   315,   134,   306,   235,    -1,
     306,   134,   318,   235,    -1,   306,   134,    -1,   306,   134,
     318,   134,   306,   235,    -1,   306,   235,    -1,   315,   134,
     318,   235,    -1,   315,   134,   318,   134,   306,   235,    -1,
     315,   235,    -1,   315,   134,   306,   235,    -1,   318,   235,
      -1,   318,   134,   306,   235,    -1,   234,    -1,   338,    -1,
     238,    -1,   118,   239,   118,    -1,    76,    -1,   118,   236,
     239,   118,    -1,   332,    -1,   332,   139,   240,   332,    -1,
     241,    -1,   240,   134,   241,    -1,    52,    -1,   303,    -1,
      -1,    -1,   243,   244,   245,   246,    -1,   136,   302,   239,
     137,    -1,   302,    -1,   111,   150,   131,    -1,    29,   150,
      10,    -1,    -1,    28,   248,   237,   150,    10,    -1,   164,
     247,    -1,   249,   330,   328,   187,    -1,   249,   330,   328,
     187,   255,    -1,   249,   330,   328,   190,   247,    -1,   163,
     186,    -1,    -1,   214,   133,   328,   251,   187,    -1,    -1,
     214,    85,   328,   252,   186,    -1,   214,    85,   329,    -1,
      -1,   214,   133,   253,   186,    -1,    -1,   214,    85,   254,
     186,    -1,    32,   186,    -1,    32,    -1,   214,   132,   188,
     334,    -1,    -1,   130,   256,   237,   150,   131,    -1,    -1,
      26,   257,   237,   150,    10,    -1,    17,   194,   226,   150,
     259,    -1,   229,    -1,   258,    -1,     8,   261,   262,   226,
     150,   260,    -1,   338,    -1,   184,    -1,   195,    -1,   338,
      -1,    88,   172,    -1,   338,    -1,     9,   150,    -1,   338,
      -1,   291,    -1,   288,    -1,   290,    -1,   266,    -1,    62,
      -1,   267,    -1,   266,   267,    -1,   100,   279,   110,    -1,
     101,   280,   110,    -1,   102,   281,    65,    -1,   103,   140,
     110,    -1,   103,   271,   110,    -1,    -1,   271,   272,   140,
      -1,   282,    -1,   272,   282,    -1,   105,   140,   110,    -1,
     105,   274,   110,    -1,    -1,   274,   272,   140,    -1,   104,
     140,   110,    -1,   104,   277,   110,    -1,   106,   140,   110,
      -1,   106,   278,   110,    -1,    -1,   277,    61,   140,    -1,
      -1,   278,    61,   140,    -1,    -1,   279,   282,    -1,    -1,
     280,   282,    -1,    -1,   281,   282,    -1,    61,    -1,    -1,
     109,   283,   287,    -1,    -1,    -1,    -1,   107,   284,   285,
     286,   150,   108,    -1,    54,    -1,    55,    -1,    57,    -1,
     296,    -1,    99,   289,    -1,   175,    -1,    55,    -1,    54,
      -1,    57,    -1,    99,   280,   110,    -1,    59,    -1,    60,
      -1,   126,    59,    -1,   126,    60,    -1,    52,    -1,    55,
      -1,    54,    -1,    56,    -1,    57,    -1,    34,    -1,    33,
      -1,    35,    -1,    36,    -1,    50,    -1,    49,    -1,    51,
      -1,   292,    -1,   293,    -1,   292,    -1,   293,    -1,    63,
      -1,    64,    -1,   336,    -1,    -1,   117,   298,   158,   336,
      -1,     1,   336,    -1,   136,   302,   333,    -1,   302,   336,
      -1,   310,   134,   312,   321,    -1,   310,   321,    -1,   312,
     321,    -1,   320,    -1,   134,   300,    -1,    -1,   306,   134,
     316,   134,   318,   301,    -1,   306,   134,   316,   134,   318,
     134,   306,   301,    -1,   306,   134,   316,   301,    -1,   306,
     134,   316,   134,   306,   301,    -1,   306,   134,   318,   301,
      -1,   306,   134,   318,   134,   306,   301,    -1,   306,   301,
      -1,   316,   134,   318,   301,    -1,   316,   134,   318,   134,
     306,   301,    -1,   316,   301,    -1,   316,   134,   306,   301,
      -1,   318,   301,    -1,   318,   134,   306,   301,    -1,   300,
      -1,    -1,    56,    -1,    55,    -1,    54,    -1,    57,    -1,
     303,    -1,    52,    -1,   304,    -1,    89,   233,   333,    -1,
     305,    -1,   306,   134,   305,    -1,    58,   184,    -1,    58,
     214,    -1,   308,    -1,   309,   134,   308,    -1,   307,    -1,
     310,   134,   307,    -1,    68,    -1,    96,    -1,   311,    52,
      -1,   311,    -1,    52,   113,   184,    -1,    52,   113,   214,
      -1,   314,    -1,   315,   134,   314,    -1,   313,    -1,   316,
     134,   313,    -1,   123,    -1,    95,    -1,   317,    52,    -1,
     317,    -1,   120,    -1,    97,    -1,   319,    52,    -1,   134,
     320,    -1,   338,    -1,   294,    -1,    -1,   136,   323,   157,
     333,    -1,   338,    -1,   325,   335,    -1,   326,    -1,   325,
     134,   326,    -1,   184,    88,   184,    -1,    58,   184,    -1,
      96,   184,    -1,    52,    -1,    56,    -1,    53,    -1,    52,
      -1,    56,    -1,    53,    -1,   180,    -1,    52,    -1,    53,
      -1,   180,    -1,   133,    -1,    85,    -1,    -1,   337,    -1,
      -1,   141,    -1,   332,   137,    -1,   332,   138,    -1,    -1,
     141,    -1,   134,    -1,   139,    -1,   141,    -1,   336,    -1,
     337,   139,    -1,    -1
    //[
  ];

  // YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in YYRHS.
  var yyprhs_= this.yyprhs_ =
  [
    //]
         0,     0,     3,     4,     7,    10,    12,    14,    18,    21,
      23,    24,    30,    35,    38,    40,    42,    46,    49,    51,
      52,    58,    59,    64,    68,    72,    76,    79,    83,    87,
      91,    95,    99,   104,   106,   110,   114,   121,   127,   133,
     139,   145,   149,   153,   157,   161,   163,   167,   171,   173,
     177,   181,   185,   188,   190,   192,   194,   196,   198,   203,
     204,   210,   212,   215,   219,   224,   230,   235,   241,   244,
     247,   250,   253,   256,   258,   262,   264,   268,   270,   273,
     277,   283,   286,   291,   294,   299,   301,   305,   307,   311,
     314,   318,   320,   324,   326,   328,   333,   337,   341,   345,
     349,   352,   354,   356,   358,   363,   367,   371,   375,   379,
     382,   384,   386,   388,   391,   393,   397,   399,   401,   403,
     405,   407,   409,   411,   413,   415,   417,   418,   423,   425,
     427,   429,   431,   433,   435,   437,   439,   441,   443,   445,
     447,   449,   451,   453,   455,   457,   459,   461,   463,   465,
     467,   469,   471,   473,   475,   477,   479,   481,   483,   485,
     487,   489,   491,   493,   495,   497,   499,   501,   503,   505,
     507,   509,   511,   513,   515,   517,   519,   521,   523,   525,
     527,   529,   531,   533,   535,   537,   539,   541,   543,   545,
     547,   549,   551,   553,   555,   557,   559,   561,   563,   565,
     569,   575,   579,   585,   592,   598,   604,   610,   616,   621,
     625,   629,   633,   637,   641,   645,   649,   653,   657,   662,
     667,   670,   673,   677,   681,   685,   689,   693,   697,   701,
     705,   709,   713,   717,   721,   725,   728,   731,   735,   739,
     743,   747,   748,   753,   760,   762,   764,   766,   769,   774,
     777,   781,   783,   785,   787,   789,   792,   797,   800,   802,
     805,   808,   813,   815,   816,   819,   822,   825,   827,   829,
     832,   836,   841,   845,   850,   853,   855,   857,   859,   861,
     863,   865,   867,   869,   871,   873,   875,   876,   881,   882,
     886,   887,   892,   896,   900,   903,   907,   911,   913,   918,
     922,   924,   925,   932,   937,   941,   944,   946,   949,   952,
     959,   966,   967,   968,   976,   977,   978,   986,   992,   997,
     998,   999,  1009,  1010,  1017,  1018,  1019,  1028,  1029,  1035,
    1036,  1043,  1044,  1045,  1055,  1057,  1059,  1061,  1063,  1065,
    1067,  1069,  1071,  1073,  1075,  1077,  1079,  1081,  1083,  1085,
    1087,  1089,  1091,  1094,  1096,  1098,  1100,  1106,  1108,  1111,
    1113,  1115,  1117,  1121,  1123,  1127,  1129,  1134,  1141,  1145,
    1151,  1154,  1159,  1161,  1165,  1170,  1173,  1176,  1178,  1181,
    1182,  1189,  1198,  1203,  1210,  1215,  1218,  1225,  1228,  1233,
    1240,  1243,  1248,  1251,  1256,  1258,  1260,  1262,  1266,  1268,
    1273,  1275,  1280,  1282,  1286,  1288,  1290,  1291,  1292,  1297,
    1302,  1304,  1308,  1312,  1313,  1319,  1322,  1327,  1333,  1339,
    1342,  1343,  1349,  1350,  1356,  1360,  1361,  1366,  1367,  1372,
    1375,  1377,  1382,  1383,  1389,  1390,  1396,  1402,  1404,  1406,
    1413,  1415,  1417,  1419,  1421,  1424,  1426,  1429,  1431,  1433,
    1435,  1437,  1439,  1441,  1443,  1446,  1450,  1454,  1458,  1462,
    1466,  1467,  1471,  1473,  1476,  1480,  1484,  1485,  1489,  1493,
    1497,  1501,  1505,  1506,  1510,  1511,  1515,  1516,  1519,  1520,
    1523,  1524,  1527,  1529,  1530,  1534,  1535,  1536,  1537,  1544,
    1546,  1548,  1550,  1552,  1555,  1557,  1559,  1561,  1563,  1567,
    1569,  1571,  1574,  1577,  1579,  1581,  1583,  1585,  1587,  1589,
    1591,  1593,  1595,  1597,  1599,  1601,  1603,  1605,  1607,  1609,
    1611,  1613,  1615,  1616,  1621,  1624,  1628,  1631,  1636,  1639,
    1642,  1644,  1647,  1648,  1655,  1664,  1669,  1676,  1681,  1688,
    1691,  1696,  1703,  1706,  1711,  1714,  1719,  1721,  1722,  1724,
    1726,  1728,  1730,  1732,  1734,  1736,  1740,  1742,  1746,  1749,
    1752,  1754,  1758,  1760,  1764,  1766,  1768,  1771,  1773,  1777,
    1781,  1783,  1787,  1789,  1793,  1795,  1797,  1800,  1802,  1804,
    1806,  1809,  1812,  1814,  1816,  1817,  1822,  1824,  1827,  1829,
    1833,  1837,  1840,  1843,  1845,  1847,  1849,  1851,  1853,  1855,
    1857,  1859,  1861,  1863,  1865,  1867,  1868,  1870,  1871,  1873,
    1876,  1879,  1880,  1882,  1884,  1886,  1888,  1890,  1893
    //[
  ];

  // YYRLINE[YYN] -- Source line where rule number YYN was defined.
  var yyrline_ = this.yyrline_ =
  [
    //]
         0,   143,   143,   143,   152,   158,   161,   164,   167,   173,
     176,   175,   183,   192,   198,   201,   204,   207,   213,   217,
     216,   227,   226,   233,   236,   239,   244,   247,   250,   253,
     256,   259,   262,   268,   270,   273,   276,   279,   282,   285,
     288,   291,   294,   297,   300,   303,   308,   311,   318,   320,
     322,   325,   328,   331,   336,   342,   344,   349,   351,   358,
     357,   368,   374,   377,   380,   383,   386,   389,   392,   395,
     398,   401,   404,   410,   412,   418,   420,   426,   429,   432,
     435,   438,   441,   444,   447,   450,   452,   458,   460,   466,
     469,   475,   478,   484,   487,   490,   493,   496,   499,   502,
     508,   514,   520,   523,   526,   529,   532,   535,   538,   544,
     550,   556,   561,   566,   569,   572,   578,   580,   582,   584,
     589,   597,   599,   604,   607,   612,   616,   615,   624,   625,
     626,   627,   628,   629,   630,   631,   632,   633,   634,   635,
     636,   637,   638,   639,   640,   641,   642,   643,   644,   645,
     646,   647,   648,   649,   650,   651,   652,   653,   657,   657,
     657,   658,   658,   659,   659,   659,   660,   660,   660,   660,
     661,   661,   661,   661,   662,   662,   662,   663,   663,   663,
     663,   664,   664,   664,   664,   665,   665,   665,   665,   666,
     666,   666,   666,   667,   667,   667,   667,   668,   668,   673,
     676,   679,   682,   685,   688,   691,   694,   697,   700,   703,
     706,   709,   712,   715,   718,   721,   724,   727,   730,   733,
     736,   739,   742,   745,   748,   751,   754,   757,   760,   763,
     766,   769,   772,   775,   778,   781,   784,   787,   790,   793,
     796,   799,   799,   804,   807,   813,   817,   818,   820,   822,
     826,   830,   831,   834,   835,   836,   838,   840,   844,   846,
     848,   850,   852,   857,   857,   868,   872,   874,   878,   880,
     882,   884,   888,   890,   892,   896,   897,   898,   899,   900,
     901,   902,   903,   904,   905,   906,   909,   908,   921,   920,
     927,   926,   932,   934,   936,   938,   940,   942,   944,   946,
     948,   950,   950,   954,   956,   958,   960,   961,   963,   965,
     970,   976,   980,   975,   987,   991,   986,   997,  1001,  1004,
    1008,  1003,  1015,  1014,  1027,  1032,  1026,  1043,  1042,  1055,
    1054,  1072,  1076,  1071,  1086,  1088,  1090,  1092,  1096,  1100,
    1104,  1108,  1112,  1116,  1120,  1124,  1128,  1132,  1136,  1140,
    1144,  1145,  1146,  1149,  1150,  1153,  1154,  1160,  1161,  1165,
    1166,  1169,  1171,  1175,  1177,  1181,  1183,  1185,  1187,  1189,
    1191,  1193,  1195,  1197,  1202,  1204,  1206,  1208,  1212,  1215,
    1218,  1220,  1222,  1224,  1226,  1228,  1230,  1232,  1234,  1236,
    1238,  1240,  1242,  1244,  1246,  1250,  1251,  1257,  1259,  1261,
    1266,  1268,  1272,  1273,  1276,  1278,  1282,  1283,  1282,  1296,
    1298,  1302,  1304,  1309,  1308,  1320,  1322,  1324,  1326,  1330,
    1333,  1332,  1340,  1339,  1346,  1349,  1348,  1356,  1355,  1362,
    1364,  1366,  1371,  1370,  1379,  1378,  1388,  1394,  1395,  1398,
    1402,  1405,  1407,  1409,  1412,  1414,  1417,  1419,  1422,  1423,
    1425,  1428,  1432,  1433,  1434,  1438,  1442,  1446,  1450,  1452,
    1457,  1458,  1462,  1463,  1467,  1469,  1474,  1475,  1479,  1481,
    1485,  1487,  1492,  1493,  1498,  1499,  1504,  1505,  1510,  1511,
    1516,  1517,  1521,  1523,  1522,  1534,  1540,  1545,  1533,  1558,
    1560,  1562,  1564,  1567,  1573,  1574,  1575,  1576,  1579,  1585,
    1586,  1587,  1590,  1595,  1596,  1597,  1598,  1599,  1602,  1603,
    1604,  1605,  1606,  1607,  1608,  1611,  1614,  1618,  1620,  1624,
    1625,  1628,  1631,  1630,  1637,  1643,  1648,  1655,  1657,  1659,
    1661,  1665,  1668,  1671,  1673,  1675,  1677,  1679,  1681,  1683,
    1685,  1687,  1689,  1691,  1693,  1695,  1697,  1700,  1703,  1707,
    1711,  1715,  1721,  1722,  1726,  1728,  1732,  1733,  1737,  1741,
    1745,  1747,  1752,  1754,  1758,  1759,  1762,  1764,  1768,  1772,
    1776,  1778,  1782,  1784,  1788,  1789,  1792,  1798,  1802,  1803,
    1806,  1816,  1818,  1822,  1825,  1824,  1852,  1853,  1857,  1858,
    1862,  1864,  1866,  1872,  1873,  1874,  1877,  1878,  1879,  1880,
    1883,  1884,  1885,  1888,  1889,  1892,  1893,  1896,  1897,  1900,
    1903,  1906,  1907,  1908,  1911,  1912,  1915,  1916,  1920
    //[
  ];

  // YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.
  var yytranslate_table_ =
  [
    //]
         0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
     141,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,   140,   127,     2,     2,     2,   125,   120,     2,
     136,   137,   123,   121,   134,   122,   133,   124,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,   115,   139,
     117,   113,   116,   114,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,   132,     2,   138,   119,     2,   135,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,   130,   118,   131,   128,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     1,     2,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    27,    28,    29,    30,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,    41,    42,    43,    44,
      45,    46,    47,    48,    49,    50,    51,    52,    53,    54,
      55,    56,    57,    58,    59,    60,    61,    62,    63,    64,
      65,    66,    67,    68,    69,    70,    71,    72,    73,    74,
      75,    76,    77,    78,    79,    80,    81,    82,    83,    84,
      85,    86,    87,    88,    89,    90,    91,    92,    93,    94,
      95,    96,    97,    98,    99,   100,   101,   102,   103,   104,
     105,   106,   107,   108,   109,   110,   111,   112,   126,   129
    //[
  ];

  var yylast_ = this.yylast_ = 10982;
  var yynnts_ = 197;
  var yyempty_ = this.yyempty_ = -2;
  var yyfinal_ = 3;
  var yyterror_ = this.yyterror_ = 1;
  var yyerrcode_ = 256;

  var yyuser_token_number_max_ = 369;
  var yyundef_token_ = 2;
}

// rare used functions
YYParser.prototype =
{
  // Report on the debug stream that the rule yyrule is going to be reduced.

  debug_reduce_print: function debug_reduce_print (yyrule)
  {
    var yystack = this.yystack;

    var yylno = this.yyrline_[yyrule];



    var yynrhs = this.yyr2_[yyrule];
    // Print the symbols being reduced, and their result.
    this.debug_print("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "):\n");

    // The symbols being reduced.
    for (var yyi = 0; yyi < yynrhs; yyi++)
    {
      this.debug_symbol_print(
        "   $" + (yyi + 1) + " =",
        this.yyrhs_[this.yyprhs_[yyrule] + yyi],
        yystack.valueStack[yystack.valueStack.length-1-((yynrhs-(yyi + 1)))]
      );
    }
  },

  debug_symbol_print: function debug_symbol_print (message, yytype, yyvaluep)
  {
    this.debug_print
    (
      message
      + (yytype < this.yyntokens_ ? " token " : " nterm ")
      + this.yytname_[yytype]
      + " ("
      // + (yyvaluep == null ? "(null)" : JSON.stringify(yyvaluep))
      + ")\n"
    );
  },

  debug_stack_print: function debug_stack_print ()
  {
    puts("Stack now " + this.yystack.stateStack.join(' '));
  },

  debug_print: function debug_print (message)
  {
    write(message);
  },


  // Generate an error message.
  yysyntax_error: function yysyntax_error (yystate, tok)
  {
    if (!this.errorVerbose)
      return "syntax error";

    /*
    There are many possibilities here to consider:
     - Assume YYFAIL is not used.  It's too flawed to consider.
       See
       <http://lists.gnu.org/archive/html/bison-patches/2009-12/msg00024.html>
       for details.  YYERROR is fine as it does not invoke this
       function.
     - If this state is a consistent state with a default action,
       then the only way this function was invoked is if the
       default action is an error action.  In that case, don't
       check for expected tokens because there are none.
     - The only way there can be no lookahead present (in tok) is
       if this state is a consistent state with a default action.
       Thus, detecting the absence of a lookahead is sufficient to
       determine that there is no unexpected or expected token to
       report.  In that case, just report a simple "syntax error".
     - Don't assume there isn't a lookahead just because this
       state is a consistent state with a default action.  There
       might have been a previous inconsistent state, consistent
       state with a non-default action, or user semantic action
       that manipulated yychar.  (However, yychar is currently out
       of scope during semantic actions.)
     - Of course, the expected token list depends on states to
       have correct lookahead information, and it depends on the
       parser not to perform extra reductions after fetching a
       lookahead from the scanner and before detecting a syntax
       error.  Thus, state merging (from LALR or IELR) and default
       reductions corrupt the expected token list.  However, the
       list is correct for canonical LR with one exception: it
       will still contain any token that will not be accepted due
       to an error action in a later state.
    */

    if (tok == this.yyempty_)
      return "syntax error (empty token)";

    // FIXME: This method of building the message is not compatible
    // with internationalization.
    var res = "syntax error, unexpected ";
    res += yytnamerr_(this.yytname_[tok]);
    var yyn = this.yypact_[yystate];
    if (yyn != this.yypact_ninf_) // yyn pact value isn't default
    {
      // Start YYX at -YYN if negative to avoid negative indexes in YYCHECK.
      // In other words, skip the first -YYN actions for this state
      // because they are default actions.
      var yyxbegin = yyn < 0 ? -yyn : 0;
      // Stay within bounds of both yycheck and yytname.
      var yychecklim = this.yylast_ - yyn + 1;
      var yyxend = yychecklim < this.yyntokens_ ? yychecklim : this.yyntokens_;
      var count = 0;
      for (var x = yyxbegin; x < yyxend; ++x)
      {
        if
        (
          this.yycheck_[x + yyn] == x
          && x != this.yyterror_
          && this.yytable_[x + yyn] != this.yytable_ninf_ // yytable_[x + yyn] isn't an error
        )
        {    
          ++count;
        }
      }
      if (count < 5)
      {
        count = 0;
        for (var x = yyxbegin; x < yyxend; ++x)
        {
          if
          (
            this.yycheck_[x + yyn] == x
            && x != this.yyterror_
            && this.yytable_[x + yyn] != this.yytable_ninf_ // yytable_[x + yyn] isn't an error
          )
          {
            res += (count++ == 0 ? ", expecting " : " or ");
            res += yytnamerr_(this.yytname_[x]);
          }
        }
      }
    }
    return res;

    /* Return YYSTR after stripping away unnecessary quotes and
       backslashes, so that it's suitable for yyerror.  The heuristic is
       that double-quoting is unnecessary unless the string contains an
       apostrophe, a comma, or backslash (other than backslash-backslash).
       YYSTR is taken from yytname.  */
    function yytnamerr_ (yystr)
    {
      if (yystr[0] == '"')
      {
        var yyr = '';
        strip_quotes:
        for (var i = 1; i < yystr.length; i++)
        {
          switch (yystr[i])
          {
            case '\'':
            case ',':
              break strip_quotes;

            case '\\':
              if (yystr[++i] != '\\')
                break strip_quotes;
                // Fall through.

            case '"':
              return yyr;

            default:
              yyr += yystr[i];
              break;
          }
        }
      }
      else if (yystr == "$end")
        return "end of input";

      return yystr;
    }
  }
}

// Version number for the Bison executable that generated this parser.
YYParser.bisonVersion = "2.7.12-4996";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = "./lalr1.js";

return YYParser;

})(); // end of the Parser very own namespase

;(function(){ // epilogue namespace




var YYLexer = 
(function(){

// at first, read this: http://whitequark.org/blog/2013/04/01/ruby-hacking-guide-ch-11-finite-state-lexer/

function Lexer ()
{
// the yylex() method and all public data sit here
var lexer = this;

// $text: plain old JS string with ruby source code,
// to be set later in `setText()`
var $text = '';
lexer.setText = function (text) { $text = text; }

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
// parser and lexer set this for lexer,
// becomes `true` after `\n`, `;` or `(` is met
lexer.command_start = false;
// temp var for command_start during single run of `yylex`
lexer.cmd_state = false;
// used in `COND_*` macro-methods,
// another spot of interlacing parser and lexer
lexer.cond_stack = 0;
// used in `CMDARG_*` macro-methods,
// another spot of interlacing parser and lexer
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
// parser needs access to the line number,
// AFAICT, parser never changes it, only sets nd_line on nodes
lexer.ruby_sourceline = 0;
// file name for meningfull error reporting
lexer.filename = '(eval)';
// parser doesn't touch it, but what is it?
lexer.heredoc_end = 0;
lexer.line_count = 0;
// errors count
lexer.nerr = 0;
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


// interface to lexer.cond_stack
// void
lexer.COND_PUSH = function (n)
{
  // was: ((cond_stack) = ((cond_stack)<<1)|(( n)&1))
  lexer.cond_stack = (lexer.cond_stack << 1) | (n & 1);
}
// void
lexer.COND_POP = function ()
{
  // was: ((cond_stack) = (cond_stack) >> 1)
  lexer.cond_stack >>= 1;
}
// void
lexer.COND_LEXPOP = function ()
{
  // was: ((cond_stack) = ((cond_stack) >> 1) | ((cond_stack) & 1))
  var stack = lexer.cond_stack;
  lexer.cond_stack = (stack >> 1) | (stack & 1);
}
// int
lexer.COND_P = function ()
{
  // was: ((cond_stack)&1)
  return lexer.cond_stack & 1;
}

// interface to lexer.cmdarg_stack
// void
lexer.CMDARG_PUSH = function (n)
{
  // was: ((cmdarg_stack) = ((cmdarg_stack)<<1)|(( n)&1))
  lexer.cmdarg_stack = (lexer.cmdarg_stack << 1) | (n & 1);
}
// void
lexer.CMDARG_POP = function ()
{
  // was: ((cmdarg_stack) = (cmdarg_stack) >> 1)
  lexer.cmdarg_stack >>= 1;
}
// void
lexer.CMDARG_LEXPOP = function ()
{
  // was: ((cmdarg_stack) = ((cmdarg_stack) >> 1) | ((cmdarg_stack) & 1))
  var stack = lexer.cmdarg_stack;
  lexer.cmdarg_stack = (stack >> 1) | (stack & 1);
}
// int
lexer.CMDARG_P = function ()
{
  // was: ((cmdarg_stack)&1)
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


var lex_pbeg = 0, // lex_pbeg never changes
    lex_p = 0,
    lex_pend = 0;

var $text_pos = 0;
// returns empty line as EOF
function lex_getline ()
{
  var i = $text.indexOf('\n', $text_pos);
  // didn't get any more newlines
  if (i === -1)
  {
    // the rest of the line
    // e.g. match the `$`
    i = $text.length;
  }
  else
  {
    i++; // include the `\n` char
  }
  
  var line = $text.substring($text_pos, i);
  $text_pos = i;
  return line;
}


var lex_nextline = '',
    lex_lastline = '';

// lex_lastline reader for error reporting
lexer.get_lex_lastline = function () { return lex_lastline; }

function nextc ()
{
  if (lex_p == lex_pend)
  {
    var v = lex_nextline;
    lex_nextline = '';
    if (!v)
    {
      if (lexer.eofp)
        return '';

      if (!(v = lex_getline()))
      {
        lexer.eofp = true;
        lex_goto_eol();
        return '';
      }
    }
    {
      if (lexer.heredoc_end > 0)
      {
        lexer.ruby_sourceline = lexer.heredoc_end;
        lexer.heredoc_end = 0;
      }
      lexer.ruby_sourceline++;
      lexer.line_count++;
      lex_pbeg = lex_p = 0;
      lex_pend = v.length;
      lex_lastline = v;
    }
  }
  
  return lex_lastline[lex_p++];
}
// jump right to the end of current buffered line,
// here: "abc\n|" or here "abc|"
function lex_goto_eol ()
{
  lex_p = lex_pend;
}
function lex_eol_p ()
{
  return lex_p >= lex_pend;
}

// just an emulation of lex_p[i] from C
function nthchar (i)
{
  return lex_lastline[lex_p+i];
}
// just an emulation of *lex_p from C
function lex_pv ()
{
  return lex_lastline[lex_p];
}
// emulation of `strncmp(lex_p, "begin", 5)`,
// but you better use a precompiled regexp if `str` is a constant
function strncmp_lex_p (str)
{
  return $test.substring(lex_p, lex_p + str.length) == str;
}

// forecast, if the nextc() will return character `c`
function peek (c)
{
  return lex_p < lex_pend && c === lex_lastline[lex_p];
}

// forecast, if the nextc() will return character `c`
// after n calls
function peek_n (c, n)
{
  var pos = lex_p + n;
  return pos < lex_pend && c === lex_lastline[pos];
}

// expects rex in this form: `/blablabla|/g`
// that means `blablabla` or empty string (to prevent deep search)
function match_grex (rex)
{
  // check if the rex is in proper form
  if (!rex.global)
  {
    lexer.yyerror('match_grex() allows only global regexps: `…|/g`');
    throw 'DEBUG';
  }
  if (rex.source.substr(-1) != '|')
  {
    lexer.yyerror('match_grex() need trailing empty string match: `…|/g`');
    throw 'DEBUG';
  }
  rex.lastIndex = lex_p;
  // there is always a match or an empty string in [0]
  return rex.exec(lex_lastline);
}
// the same as `match_grex()` but does'n return the match,
// treats the empty match as a `false`
function test_grex (rex)
{
  // check if the rex is in proper form
  if (!rex.global)
  {
    lexer.yyerror('test_grex() allows only global regexps: `…|/g`');
    throw 'DEBUG';
  }
  if (rex.source.substr(-1) != '|')
  {
    lexer.yyerror('test_grex() need trailing empty string match: `…|/g`');
    throw 'DEBUG';
  }
  rex.lastIndex = lex_p;
  // there is always a match for an empty string
  rex.test(lex_lastline);
  // and on the actual match there coud be a change in `lastIndex`
  return rex.lastIndex != lex_p;
}
// step back for one character and check
// if the current character is equal to `c`
function pushback (c)
{
  if (c == '')
  {
    if (lex_p != lex_pend)
      throw 'lexer error: pushing back wrong EOF char';
    return;
  }
  
  lex_p--;
  if (lex_lastline[lex_p] != c)
    throw 'lexer error: pushing back wrong "'+c+'" char';
}

// was begin af a line (`^` in terms of regexps) before last `nextc()`,
// that true if we're here "a|bc" of here "abc\na|bc"
function was_bol ()
{
  return lex_p === /*lex_pbeg +*/ 1; // lex_pbeg never changes
}


// token related stuff

var $tokenbuf = '',
    $tok_start = 0,
    $tok_end = 0;
    
function newtok ()
{
  $tok_start = $text_pos;
  $tokenbuf = '';
}
function tokadd (c)
{
  $tokenbuf += c;
  return c;
}
function tokcopy (n)
{
  $tokenbuf += $text.substring($text_pos - n, $text_pos);
}

function tokfix ()
{
  $tok_end = $text_pos;
  /* was: tokenbuf[tokidx]='\0'*/
}
function tok () { return $tokenbuf; }
function toklen () { return $tokenbuf.length; }
function toklast ()
{
  return $tokenbuf.substr(-1)
  // was: tokidx>0?tokenbuf[tokidx-1]:0)
}

// TODO
this.getLVal = function () { return $tokenbuf; }



// other stuff

function parser_is_identchar (c)
{
  return !lexer.eofp && is_identchar(c);
  
}
function is_identchar (c)
{
  // \w = [A-Za-z0-9_] = (isalnum(c) || c == '_')
  return /^\w/.test(c) || !ISASCII(c);
}

function NEW_STRTERM (func, term, paren)
{
  return {
    type: 'NODE_STRTERM',
    nd_func: func,
    nd_orig: '', // stub
    nd_nth: 0, // stub
    nd_line: lexer.ruby_sourceline,
    nd_nest: 0, // for tokadd_string() and parse_string()
    term: term,
    paren: paren
  };
}
// our addition
function NEW_HEREDOCTERM (func, term)
{
  return {
    type: 'NODE_HEREDOC',
    nd_func: func,
    nd_orig: lex_lastline,
    nd_nth: lex_p,
    nd_line: lexer.ruby_sourceline,
    nd_nest: 0,
    term: term,
    paren: ''
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
  
  if (lexer.lex_strterm)
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
        lexer.lex_state = EXPR_END;
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
    case '\r': // TODO: scream on `\r` everywhere, or clear it out
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
            --lexer.ruby_sourceline;
            lex_nextline = lex_lastline;
            
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
      if (was_bol())
      {
        /* skip embedded rd document */
        if (match_grex(/begin[\n \t]|/g)[0])
        {
          for (;;)
          {
            lex_goto_eol();
            c = nextc();
            if (c == '')
            {
              compile_error("embedded document meets end of file");
              return 0;
            }
            if (c != '=')
              continue;
            if (match_grex(/end(?:[\n \t]|$)|/gm)[0])
            {
              break;
            }
          }
          lex_goto_eol();
          continue retry; // was: goto retry;
        }
      }

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
      newtok();
      if (!ISASCII(c))
      {
        if (tokadd(c) == '')
          return 0;
      }
      else if (is_identchar(c) && lex_p < lex_pend && is_identchar(lex_pv()))
      {
        pushback(c);
        lexer.lex_state = EXPR_VALUE;
        return $('?');
      }
      else if (c == '\\')
      {
        if (peek('u'))
        {
          nextc();
          c = parser_tokadd_utf8(false, false, false);
          tokadd(c);
        }
        else if (!lex_eol_p() && !(c = lex_pv(), ISASCII(c)))
        {
          nextc();
          if (tokadd(c) == '')
            return 0;
        }
        else
        {
          c = read_escape(0);
          tokadd(c);
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
        pushback(c); // pushing back char after `+`
        if (c != '' && ISDIGIT(c))
        {
          // c = '+';
          // return start_num(c); // was: goto start_num;
          tokadd(c);
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
        lexer.yyerror("no .<digit> floating literal anymore; put 0 before dot");
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
      pushback(c);
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
              lexer.yyerror("unknown type of %string");
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
              lexer.yyerror("unknown type of %string");
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
    
    case '$':
    {
      lexer.lex_state = EXPR_END;
      newtok();
      c = nextc();
      switch (c)
      {
        case '_':              /* $_: last read line string */
          c = nextc();
          if (parser_is_identchar(c))
          {
            tokadd('$');
            tokadd('_');
            break;
          }
          pushback(c);
          c = '_';
          /* fall through */
        case '~':              /* $~: match-data */
        case '*':              /* $*: argv */
        case '$':              /* $$: pid */
        case '?':              /* $?: last status */
        case '!':              /* $!: error string */
        case '@':              /* $@: error position */
        case '/':              /* $/: input record separator */
        case '\\':             /* $\: output record separator */
        case ';':              /* $;: field separator */
        case ',':              /* $,: output field separator */
        case '.':              /* $.: last read line number */
        case '=':              /* $=: ignorecase */
        case ':':              /* $:: load path */
        case '<':              /* $<: reading filename */
        case '>':              /* $>: default output handle */
        case '\"':             /* $": already loaded files */
          tokadd('$');
          tokadd(c);
          tokfix();
          // set_yylval_name(rb_intern(tok())); TODO
          return tGVAR;

        case '-':
          tokadd('$');
          tokadd(c);
          c = nextc();
          if (parser_is_identchar(c))
          {
            if (tokadd(c) == '')
              return 0;
          }
          else
          {
            pushback(c);
          }
        // was: gvar:
          tokfix();
          // set_yylval_name(rb_intern(tok())); TODO
          return tGVAR;

        case '&':              /* $&: last match */
        case '`':              /* $`: string before last match */
        case '\'':             /* $': string after last match */
        case '+':              /* $+: string matches last paren. */
          if (IS_lex_state_for(lexer.last_state, EXPR_FNAME))
          {
            tokadd('$');
            tokadd(c);
            // was: goto gvar;
            tokfix();
            // set_yylval_name(rb_intern(tok())); TODO
            return tGVAR;
          }
          // set_yylval_node(NEW_BACK_REF(c)); TODO
          return tBACK_REF;

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          tokadd('$');
          do
          {
            tokadd(c);
            c = nextc();
          }
          while (c != '' && ISDIGIT(c));
          pushback(c);
          if (IS_lex_state_for(lexer.last_state, EXPR_FNAME))
          {
            // was: goto gvar;
            tokfix();
            // set_yylval_name(rb_intern(tok())); TODO
            return tGVAR;
          }
          tokfix();
          // set_yylval_node(NEW_NTH_REF(atoi(tok() + 1))); TODO
          return tNTH_REF;

        default:
          if (!parser_is_identchar(c))
          {
            pushback(c);
            return $('$');
          }
        case '0':
          tokadd('$');
      }
      break;
    }
    
    case '@':
    {
      c = nextc();
      newtok();
      tokadd('@');
      if (c == '@')
      {
        tokadd('@');
        c = nextc();
      }
      if (c != '' && ISDIGIT(c))
      {
        if (toklen() == 1)
        {
          compile_error("`@"+c+"' is not allowed as an instance variable name");
        }
        else
        {
          compile_error("`@@"+c+"' is not allowed as a class variable name");
        }
        return 0;
      }
      if (!parser_is_identchar(c))
      {
        pushback(c);
        return $('@');
      }
      break;
    }
    
    case '_':
    {
      if (was_bol() && whole_match_p("__END__", false))
      {
        lexer.ruby__end__seen = true;
        lexer.eofp = true;
        return 0; // was: return -1;
      }
      newtok();
      break;
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
  var term = '', func = 0;
  
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
        if (tokadd(c) == '')
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
    // TODO: create token with $text.substring(start, end)
    // TODO: or remove all the function with a regexp ;)
    newtok();
    term = '"';
    func |= str_dquote;
    do
    {
      if (tokadd(c) == '')
        return 0;
    }
    while ((c = nextc()) != '' && parser_is_identchar(c));
    pushback(c);
  } // defaultt:

  tokfix();
  lexer.lex_strterm = NEW_HEREDOCTERM(func, tok());
  lex_goto_eol();
  return term == '`' ? tXSTRING_BEG : tSTRING_BEG;
}

function here_document_error (eos)
{
  // was: error:
    compile_error("can't find string \""+eos+"\" anywhere before EOF");
    return here_document_restore(eos);
}
function here_document_restore (eos)
{
  // was: restore:
    heredoc_restore(lexer.lex_strterm);
    lexer.lex_strterm = null;
    return 0;
}
function here_document (here)
{
  // we're at the heredoc content start
  var func = here.nd_func,
      eos = here.term,
      indent = !!(func & STR_FUNC_INDENT);
  
  var str = ''; // accumulate string content here
  
  var c = nextc();
  if (c == '')
  {
    here_document_error(eos);
    return 0;
  }
  
  if (was_bol() && whole_match_p(eos, indent))
  {
    heredoc_restore(lexer.lex_strterm);
    return tSTRING_END;
  }
  
  // do not look for `#{}` stuff here
  if (!(func & STR_FUNC_EXPAND))
  {
    // mark a start of the string token
    do
    {
      str += lex_lastline;
      
      // EOF reached in the middle of the heredoc
      lex_goto_eol();
      if (nextc() === '')
      {
        here_document_error(eos); // was: goto error;
        return 0;
      }
    }
    while (!whole_match_p(eos, indent));
  }
  // try to find all the `#{}` stuff here
  else
  {
    /*      int mb = ENC_CODERANGE_7BIT, *mbp = &mb; */
    newtok();
    if (c == '#')
    {
      switch (c = nextc())
      {
        case '$':
        case '@':
          pushback(c);
          return tSTRING_DVAR;
        case '{':
          lexer.command_start = true;
          return tSTRING_DBEG;
      }
      tokadd('#');
    }
    do
    {
      pushback(c);
      if ((c = tokadd_string(func, '\n', '', null)) == '')
      {
        if (lexer.eofp)
        {
          here_document_error(eos); // was: goto error;
          return 0;
        }
        here_document_restore(); // was: goto restore;
        return 0;
      }
      if (c != '\n')
      {
        // set_yylval_str(STR_NEW3(tok(), toklen(), enc, func)); TODO
        return tSTRING_CONTENT;
      }
      tokadd(nextc());
      
      if ((c = nextc()) == '')
      {
        here_document_error(eos); // was: goto error;
        return 0;
      }
    }
    while (!whole_match_p(eos, indent));
    // str = STR_NEW3(tok(), toklen(), enc, func); TODO
  }
  heredoc_restore(lexer.lex_strterm);
  lexer.lex_strterm = NEW_STRTERM(-1, '', '');
  // set_yylval_str(str); TODO:
  return tSTRING_CONTENT;
}

function parse_string (quote)
{
  var func = quote.nd_func,
      term = quote.term,
      paren = quote.paren;
  
  var space = false;

  if (func == -1)
    return tSTRING_END;
  var c = nextc();
  if ((func & STR_FUNC_QWORDS) && ISSPACE(c))
  {
    do
    {
      c = nextc();
    }
    while (ISSPACE(c));
    space = true;
  }
  // quote.nd_nest is increased in tokadd_string()
  // once for every `paren` char met
  if (c == term && !quote.nd_nest)
  {
    if (func & STR_FUNC_QWORDS)
    {
      quote.nd_func = -1;
      return $(' ');
    }
    if (!(func & STR_FUNC_REGEXP))
      return tSTRING_END;
    // set_yylval_num(regx_options()); TODO
    return tREGEXP_END;
  }
  if (space)
  {
    pushback(c);
    return $(' ');
  }
  newtok();
  if ((func & STR_FUNC_EXPAND) && c == '#')
  {
    switch (c = nextc())
    {
      case '$':
      case '@':
        pushback(c);
        return tSTRING_DVAR;
      case '{':
        lexer.command_start = true;
        return tSTRING_DBEG;
    }
    tokadd('#');
  }
  pushback(c);
  if (tokadd_string(func, term, paren, quote) == '')
  {
    lexer.ruby_sourceline = quote.nd_line;
    if (func & STR_FUNC_REGEXP)
    {
      if (lexer.eofp)
        compile_error("unterminated regexp meets end of file");
      return tREGEXP_END;
    }
    else
    {
      if (lexer.eofp)
        compile_error("unterminated string meets end of file");
      return tSTRING_END;
    }
  }

  tokfix();
  // set_yylval_str(STR_NEW3(tok(), toklen(), enc, func)); TODO

  return tSTRING_CONTENT;
}


function tokadd_string (func, term, paren, str_term)
{
  var c = '';
  while ((c = nextc()) != '')
  {
    if (paren && c == paren)
    {
      ++str_term.nd_nest;
    }
    else if (c == term)
    {
      if (!str_term || !str_term.nd_nest)
      {
        pushback(c);
        break;
      }
      --str_term.nd_nest;
    }
    else if ((func & STR_FUNC_EXPAND) && c == '#' && lex_p < lex_pend)
    {
      var c2 = lex_pv();
      if (c2 == '$' || c2 == '@' || c2 == '{')
      {
        // push the '#' back
        pushback(c);
        // and leave it for the caller to process
        break;
      }
    }
    else if (c == '\\')
    {
      c = nextc();
      switch (c)
      {
        case '\n':
          if (func & STR_FUNC_QWORDS)
            break;
          if (func & STR_FUNC_EXPAND)
            continue;
          tokadd('\\');
          break;

        case '\\':
          if (func & STR_FUNC_ESCAPE)
            tokadd(c);
          break;

        case 'u':
          if ((func & STR_FUNC_EXPAND) == 0)
          {
            tokadd('\\');
            break;
          }
          parser_tokadd_utf8(true, !!(func & STR_FUNC_SYMBOL), !!(func & STR_FUNC_REGEXP));
          continue;

        default:
          if (c == '')
            return '';
          if (!ISASCII(c))
          {
            if ((func & STR_FUNC_EXPAND) == 0)
              tokadd('\\');
            // was: goto non_ascii;
            if (tokadd(c) == '')
              return '';
            continue;
          }
          if (func & STR_FUNC_REGEXP)
          {
            if (c == term && !simple_re_meta(c))
            {
              tokadd(c);
              continue;
            }
            pushback(c);
            if (!tokadd_escape()) // useless `c = ` was here
              return '';
            continue;
          }
          else if (func & STR_FUNC_EXPAND)
          {
            pushback(c);
            if (func & STR_FUNC_ESCAPE)
              tokadd('\\');
            c = read_escape(0);
          }
          else if ((func & STR_FUNC_QWORDS) && ISSPACE(c))
          {
            /* ignore backslashed spaces in %w */
          }
          else if (c != term && !(paren && c == paren))
          {
            tokadd('\\');
            pushback(c);
            continue;
          }
      }
    }
    else if ((func & STR_FUNC_QWORDS) && ISSPACE(c))
    {
      pushback(c);
      break;
    }
    tokadd(c);
  }
  return c;
}

function simple_re_meta (c)
{
  // TODO: optimize!
  switch (c)
  {
    case '$':
    case '*':
    case '+':
    case '.':
    case '?':
    case '^':
    case '|':
    case ')':
      return true;
    default:
      return false;
  }
}


function tokadd_escape_eof ()
{
  lexer.yyerror("Invalid escape character syntax");
}
// return `true` on success and `false` on failure,
// it is quite different from original source,
// however the returning value is a flag only there too;
function tokadd_escape ()
{
  var c = '';
  var flags = 0;

  switch (c = nextc())
  {
    case '\n':
      return true;                 /* just ignore */

    case '0':
    case '1':
    case '2':
    case '3':                  /* octal constant */
    case '4':
    case '5':
    case '6':
    case '7':
    {
      // was: scan_oct(lex_p, 3, &numlen);
      
      // we're here: "\|012",
      // so just match one or two more digits
      var oct = match_grex(/[0-7]{1,2}|/g);
      if (!oct)
      {
        // was: goto eof;
        tokadd_escape_eof();
        return false;
      }
      lex_p += oct.length;
      tokadd('\\' + c + oct);
    }
    return true;

    case 'x':                  /* hex constant */
      {
        // was: tok_hex(&numlen);
        
        // we're here: "\x|AB",
        // so just match one or two more digits
        var hex = match_grex(/[0-9a-fA-F]{1,2}|/g);
        if (!hex)
        {
          yyerror("invalid hex escape");
          return false;
        }
        lex_p += hex.length;
        tokadd('\\x' + hex);
      }
      return true;
    
    case '':
      tokadd_escape_eof();
      return false;
    
    case 'c':
      tokadd("\\c");
      return true;
    
    case 'M':
    case 'C':
      lexer.yyerror("JavaScript doesn't support `\\"+c+"-' in regexp");
      if ((c = nextc()) != '-')
      {
        pushback(c);
        tokadd_escape_eof();
        return false;
      }
      tokcopy(3); // add though
      return true;
    
    default:
      tokadd("\\"+c);
  }
  return true;
}

// checks if the current line matches `/^\s*#{eos}\n?$/`;
function whole_match_p (eos, indent)
{
  if (!indent)
  {
    return lex_lastline == eos + '\n' || lex_lastline == eos;
  }
  
  // `eos` is an identifier and doesn't need to be escaped
  var rex = new RegExp('^[ \\t]*' + eos + '$', 'm'); // TODO: cache
  return rex.test(lex_lastline);
}

function heredoc_restore (here)
{
  // restores the line from where the heredoc occured to begin
  lex_lastline = here.nd_orig;
  lex_pbeg = 0;
  lex_pend = lex_lastline.length;
  // restores the position in the line, right after heredoc token
  lex_p = here.nd_nth;
  // have no ideas yet :)
  lexer.heredoc_end = lexer.ruby_sourceline;
  lexer.ruby_sourceline = here.nd_line;
}

var ESCAPE_CONTROL = 1,
    ESCAPE_META = 2;

function read_escape_eof ()
{
  lexer.yyerror("Invalid escape character syntax");
  return '\0';
}
function read_escape (flags)
{
  var c = nextc();
  switch (c)
  {
    case '\\':                 /* Backslash */
      return c;

    case 'n':                  /* newline */
      return '\n';

    case 't':                  /* horizontal tab */
      return '\t';

    case 'r':                  /* carriage-return */
      return '\r';

    case 'f':                  /* form-feed */
      return '\f';

    case 'v':                  /* vertical tab */
      return '\v'; // \13

    case 'a':                  /* alarm(bell) */
      return '\a'; // \007

    case 'e':                  /* escape */
      return '\x1b'; // 033

    case '0':
    case '1':
    case '2':
    case '3':                  /* octal constant */
    case '4':
    case '5':
    case '6':
    case '7':
      pushback(c);
      // was: c = scan_oct(lex_p, 3, &numlen);
      var oct = match_grex(/[0-7]{1,3}|/g)[0];
      c = $$(parseInt(oct, 8));
      lex_p += oct.length;
      return c;

    case 'x':                  /* hex constant */
      // was: c = tok_hex(&numlen);
      var hex = match_grex(/[0-9a-fA-F]{1,2}|/g)[0];
      if (!hex)
      {
        lexer.yyerror("invalid hex escape");
        return '';
      }
      lex_p += hex.length;
      c = $$(parseInt(hex, 16));
      return c;

    case 'b':                  /* backspace */
      return '\x08'; // \010

    case 's':                  /* space */
      return ' ';

    case 'M':
      if (flags & ESCAPE_META)
      {
        // was: goto eof;
        return read_escape_eof();
      }
      if ((c = nextc()) != '-')
      {
        pushback(c);
        // was: goto eof;
        return read_escape_eof();
      }
      if ((c = nextc()) == '\\')
      {
        if (peek('u'))
        {
          // was: goto eof;
          return read_escape_eof();
        }
        return $$($(read_escape(flags | ESCAPE_META)) | 0x80);
      }
      else if (c == '' || !ISASCII(c))
      {
        // was: goto eof;
        return read_escape_eof();
      }
      else
      {
        return $$(($(c) & 0xff) | 0x80);
      }

    case 'C':
      if ((c = nextc()) != '-')
      {
        pushback(c);
        // was: goto eof;
        return read_escape_eof();
      }
    case 'c':
      if (flags & ESCAPE_CONTROL)
      {
        // was: goto eof;
        return read_escape_eof();
      }
      if ((c = nextc()) == '\\')
      {
        if (peek('u'))
        {
          // was: goto eof;
          return read_escape_eof();
        }
        c = read_escape(flags | ESCAPE_CONTROL);
      }
      else if (c == '?')
        return '\x7f'; // 0177;
      else if (c == '' || !ISASCII(c))
      {
        // was: goto eof;
        return read_escape_eof();
      }
      return $$($(c) & 0x9f);

    // was: eof:
    case -1:
      return read_escape_eof();

    default:
      return c;
  }
}

/* return value is for \u3042 */
function parser_tokadd_utf8 (string_literal, symbol_literal, regexp_literal)
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
      var hex = match_grex(/[0-9a-fA-F]{1,6}|/g)[0];
      if (hex == '')
      {
        lexer.yyerror("invalid Unicode escape");
        return '';
      }
      var codepoint = parseInt(hex, 16);
      var the_char = $$(codepoint);
      if (codepoint > 0x10ffff)
      {
        lexer.yyerror("invalid Unicode codepoint "+codepoint+" (too large)");
        return '';
      }
      
      lex_p += hex.length;
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
      lexer.yyerror("unterminated Unicode escape");
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
    var hex = match_grex(/[0-9a-fA-F]{4}|/g)[0];
    if (hex === '')
    {
      lexer.yyerror("invalid Unicode escape");
      return '';
    }
    var codepoint = parseInt(hex, 16);
    var the_char = $$(codepoint);
    lex_p += 4;
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

// here `c` matches [0-9],
// `c` is the first char of the future number,
// as of Ruby 2.0 we don't expect to be called from leading '-' match,
// the `c` has been pushed back by caller
function start_num (c)
{
  var is_float = false,
      seen_point = false,
      seen_e = false,
      nondigit = '';
  
  lexer.lex_state = EXPR_END;
  newtok();
  // `c` has been pushed back by the caller
  if (c == '0')
  {
    // hex
    
    
    // TODO: implement all the bestiary
    if (match_grex(/0[xX0-9bBdD_oO]|/g)[0])
      warning('0-leading digits to be supported soon');
  }
  
  // as far as we know the first char is a digit, there is no need
  // for any `\d[\d_]*` trickery to avoid error with leading `_` char.
  // that means:
  // 
  //   \d+(_\d+)*                 000_000_000…
  // 
  // optionally followed by:
  // 
  //   \.\d+(?:_\d+)*            .000_000_000…
  // 
  // optionally followed by:
  // 
  //   [eE][+\-]?\d+(_\d+)*      e000_000_000…
  // 
  // so we could parse: `10_0.0_0e+0_0` as `100.0`
  var drex = /\d+(?:_\d+)*(?:(\.)\d+(?:_\d+)*)?(?:([eE])[+\-]?\d+(?:_\d+)*)?(\w)?|/g;
  var m = match_grex(drex);
  var decimal = m[0];
  if (!drex)
  {
    lexer.yyerror("broken decimal number");
    return tINTEGER;
  }
  lex_p += decimal.length;
  var nondigit = m[3];
  if (nondigit)
  {
    if (peek('.'))
      lex_p++;
    else
      lex_p--;
    lexer.yyerror("trailing `"+nondigit+"' in number");
  }

  if (m[1] || m[2]) // matched `.` or `e`
  {
    // set_yylval_literal(rb_cstr_to_inum(tok(), 10, FALSE)); TODO
    return tFLOAT;
  }
  else
  {
    // set_yylval_literal(rb_cstr_to_inum(tok(), 10, FALSE)); TODO
    return tINTEGER;
  }
}


// struct kwtable {const char *name; int id[2]; enum lex_state_e state;};

function is_local_id (ident)
{
  // TODO :)
  return false;
}
lexer.is_local_id = is_local_id;
function lvar_defined (ident)
{
  // TODO :)
  return false;
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

lexer.cursorPosition = function ()
{
  return (
    lex_lastline.substring(0, lex_p) +
    '>>here<<' +
    lex_lastline.substring(lex_p)
  );
}

function debug ()
{
  puts('\n\n')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts.apply(null, arguments)
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(lexer.cursorPosition())
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts(':::::::::::::::::::::::::::::::::::::::::::')
  puts('\n\n')
}
lexer.debug = debug;

function print_error ()
{
  puts('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  puts.apply(null, arguments)
  puts(lexer.cursorPosition())
  puts('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
}
function warning (msg) { print_error('WARNING: ' + msg) }

function compile_error (msg)
{
  lexer.nerr++;

  puts
  (
    lexer.filename +
    ':' +
    lexer.ruby_sourceline +
    ': ' +
    msg
  );
}

lexer.yyerror = function yyerror (msg)
{
  compile_error(msg);

  // to clean up \n \t and others
  var line = lexer.get_lex_lastline();
  var begin = line.substring(0, lex_p)
                  .replace(/[\n\r]+/g, '')
                  .replace(/\s+/g, ' ');
  var end =   line.substring(lex_p)
                  .replace(/[\n\r]+/g, '')
                  .replace(/\s+/g, ' ');
  var arrow = [];
  arrow[begin.length] = '^';
  puts(begin + end);
  puts(arrow.join(' '));
}

} // function Lexer

return Lexer;

})();

global.parse = function (text)
{
  var lexer = new YYLexer();
  lexer.filename = 'ruby.rb';
  lexer.setText(text);

  var parser = new YYParser(lexer);
  
  var begin = new Date();
  var res = parser.parse();
  // print('time: ' + (new Date - begin));
  return res;
}


})(); // end of epilogue namespace

}).call(this); // end of the whole parser+lexer namespase


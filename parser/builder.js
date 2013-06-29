// port of the Builder class from https://github.com/whitequark/parser

#include "builder-scope.js"
#include "builder-node.js"

// TODO: yyerror("Can't change the value of self");
// TODO: parser_warning(node, "regex literal in condition");
// TODO: "string literal in condition"
// TODO: multiple assignment in conditional
// TODO: multiple assignment in conditional
// TODO: "possibly useless use of "+useless+" in void context"
// TODO: unused literal ignored
// TODO: statement not reached
// TODO: void_expr void_stmts
// TODO: check_cond assign_in_cond is_static_content
// TODO: range_op
// TODO: warn_unused_var
// TODO: compile_for_eval
// check all the ruby_sourceline pushing and poping, and nd_set_line
// and much more had been deleted in 037f36d283a52c580dd1eef6e9cd0576ce81e902


function Builder (lexer)
{
  this.lexer = lexer;
}

Builder.prototype =
{
  //
  // VERIFICATION
  //

  // TODO: port the full version from parse.y check_cond()
  check_condition: function (cond)
  {
    switch (cond.type)
    {
      case 'masgn':
        // TODO
        // diagnostic :error, ERRORS[:masgn_as_condition], cond.loc.expression
        return null;

      case 'begin':
        var children = cond.children;
        if (children.length == 1)
        {
          var last = children[0];
          return n('begin', [this.check_condition(last)])
        }
        else
        {
          return cond;
        }

      case 'and': case 'or':
        var children = cond.children;
        children[0] = this.check_condition(children[0]); // lhs
        children[1] = this.check_condition(children[1]); // rhs

        return cond;

      case 'irange': case 'erange':
        var children = cond.children;
        children[0] = this.check_condition(children[0]); // lhs
        children[1] = this.check_condition(children[1]); // rhs

        // irange => iflipflop
        // erange => eflipflop
        var type = cond.type == 'irange' ? 'iflipflop' : 'eflipflop'

        return n(type, children);

      case 'regexp':
        return n('match_current_line', [ cond ], null)

      default:
        return cond;
    }
  },
  
  
  
  // compound statement
  compstmt: function (statements)
  {
    switch (statements.length)
    {
      case 0:
        return null;
      case 1:
        return statements[0];
      default:
        var begin = n('begin', statements);
        begin.begin_from_compstmt = true;
        return begin;
    }
  },
  
  // BEGIN
  preexe: function (compstmt)
  {
    return n('preexe', [ compstmt ])
  },
  
  ident: function (identifier)
  {
    return n('ident', [ identifier ])
  },
  
  const_: function (name_t)
  {
    return n('const', [ null, name_t ]);
  },
  
  accessible: function (node)
  {
    switch (node.type)
    {
      case 'ident':
        var name = node.children[0];
        if (this.scope.is_declared(name))
        {
          return n('lvar', [ name ]);
        }
        else
        {
          return n('send', [ null, name ]);
        }

      case '__FILE__':
        return n('str', [ lexer.ruby_filename ]);

      case '__LINE__':
        // TODO: use line from node value
        return n('int', [ lexer.ruby_sourceline ]); 

      case '__ENCODING__':
        return n('const', [ 'UTF-16' ]);

      default:
        return node;
    }
  },

  integer: function (number, negate)
  {
    return n('int', [ negate ? -number : number ]);
  },

  float_: function (number, negate)
  {
    return n('float', [ negate ? -number : number ]);
  },

  assignable: function (node)
  {
    var children = node.children;
    switch (node.type)
    {
      case 'ident':
        this.scope.declare(children[0]); // var name
        return n('lvasgn', children);

      case 'ivar':
        return n('ivasgn', children);

      case 'cvar':
        return n('cvasgn', children);

      case 'const':
        if (lexer.in_def)
        {
          this.lexer.compile_error('TODO: dynamic_const');
        }

        return n('casgn', children);

      case 'gvar':
        return n('gvasgn', children);

      case 'nil': case 'self': case 'true': case 'false':
      case '__FILE__': case '__LINE__': case '__ENCODING__':
        this.lexer.compile_error('TODO: invalid_assignment');
      break;

      case 'back_ref': case 'nth_ref':
        this.lexer.compile_error('TODO: backref_assignment');
      break;
    }
    
    return null;
  },
  
  // 
  // Literals
  // 

  // Singletons

  nil: function ()
  {
    return n0('nil');
  },

  true_: function ()
  {
    return n0('true');
  },

  false_: function ()
  {
    return n0('false');
  },
  
  //
  // Access
  //
  
  self: function ()
  {
    return n0('self');
  },
  
  attr_asgn: function (receiver, op_t, selector_t)
  {
    var method_name = selector_t + '=';

    // Incomplete method call.
    var node = n('send', [ receiver, method_name ]);
    // to distinguish `a.b` from `a::b`
    node.op = op_t;
    return node;
  },
  
  begin_body: function (compound_stmt, rescue_bodies /*=[]*/, else_, ensure)
  {
    if (rescue_bodies.length)
    {
      var body = [compound_stmt];
      Array_push.apply(body, rescue_bodies);
      body.push(else_);
      
      compound_stmt = n('rescue', body);
    }

    if (ensure)
    {
      compound_stmt = n('ensure', [ compound_stmt, ensure ]);
    }

    return compound_stmt;
  },
  
  rescue_body: function (exc_list, exc_var, compound_stmt)
  {
    return n('resbody', [ exc_list, exc_var, compound_stmt ]);
  },
  
  array: function (elements)
  {
    return n('array', elements);
  },
  
  begin_keyword: function (body)
  {
    if (!body)
    {
      // A nil expression: `begin end`.
      return n0('kwbegin');
    }
    
    if (body.begin_from_compstmt)
    {
      // Synthesized (begin) from compstmt "a; b".
      return n('kwbegin', body.children);
    }
    
    return n('kwbegin', [ body ])
  },
  
  assign: function (lhs, rhs)
  {
    lhs.push(rhs);
    return lhs;
  },
  
  _LINE_: function (ruby_sourceline)
  {
    return n('__LINE__', [ ruby_sourceline ]);
  },
  
  _FILE_: function (filename)
  {
    return n('__FILE__', [ filename ]);
  },
  
  __ENCODING__: function ()
  {
    return n0('__ENCODING__');
  },
  
  ivar: function (name)
  {
    return n('ivar', [ name ]);
  },
  
  gvar: function (name)
  {
    return n('gvar', [ name ]);
  },
  
  cvar: function (name)
  {
    return n('cvar', [ name ]);
  },
  
  back_ref: function (name)
  {
    return n('back_ref', [ name ]);
  },
  
  nth_ref: function (name)
  {
    return n('nth_ref', [ name ]);
  },
  
  alias: function (to, from)
  {
    return n('alias', [ to, from ]);
  },
  
  alias_gvar_gvar: function (gvar1, gvar2)
  {
    var to   = this.gvar(gvar1);
    var from = this.gvar(gvar2);
    
    // the same as in `this.alias()`
    return n('alias', [ to, from ]);
  },
  
  alias_gvar_backref: function (gvar, backref)
  {
    var to   = this.gvar(gvar1);
    var from = this.back_ref(gvar2);
    
    // the same as in `this.alias()`
    return n('alias', [ to, from ]);
  },
  
  symbol: function (sym)
  {
    return n('sym', [ sym ]);
  },
  
  undef_method: function (names)
  {
    return n('undef', names.slice()); // TODO: check if slice() is needed
  },
  
  condition_mod: function (if_true, if_false, cond)
  {
    return n('if', [ this.check_condition(cond), if_true, if_false ])
  },
  
  // Ranges

  range_inclusive: function (lhs, rhs)
  {
    return n('irange', [ lhs, rhs ]);
  },
  
  range_exclusive: function (lhs, rhs)
  {
    return n('erange', [ lhs, rhs ]);
  },
  
  loop: function (type, cond, body)
  {
    return n(type, [ this.check_condition(cond), body ]);
  },
  
  loop_mod: function (type, body, cond)
  {
    // begin … end while …
    if (body.type == 'kwbegin')
    {
      type += "_post"
    }

    return n(type, [ this.check_condition(cond), body ]);
  },
  
  postexe: function (compstmt)
  {
    return n('postexe', [ compstmt ]);
  },
  
  multi_assign: function (lhs, rhs)
  {
    return n('masgn', [ lhs, rhs ]);
  },
  
  multi_lhs: function (items)
  {
    return n('mlhs', items.slice()); // TODO: check if `slice()` is nessry
  },
  
  splat: function (arg)
  {
    return n('splat', [ arg ]);
  },
  
  splat_empty: function ()
  {
    return n0('splat');
  },
  
  op_assign: function (lhs, operator, rhs)
  {
    switch (lhs.type)
    {
      case 'send':
      case 'lvasgn': case 'ivasgn': case 'gvasgn':
      case 'cvasgn': case 'casgn':

        switch (operator)
        {
          case "&&":
            return n('and_asgn', [ lhs, rhs ]);
          case "||":
            return n('or_asgn', [ lhs, rhs ]);
        }

        return n('op_asgn', [ lhs, operator, rhs ]);

      case 'back_ref': case 'nth_ref':
        this.lexer.compile_error('TODO: backref_assignment');
        return null;
    }
  },
  
  index: function (receiver, indexes)
  {
    // TODO: refactor all `concat()`s to avoid garbage arrays
    return n('send', [ receiver, "[]" ].concat(indexes));
  },
  
  call_method: function (receiver, dot_t, selector_t, args)
  {
    // empty `selector_t` indicates this call form: `a.()`,
    // transform it to `a.call()`
    var ary = [ receiver, selector_t || "call" ];
    var node = n('send', args ? ary.concat(args) : ary);
    
    // to distinguish `a.b` from `a::b`
    node.op = dot_t;
    
    return node;
  },
  
  keyword_cmd: function (type, args)
  {
    return n(type, args || []);
  },
  
  logical_op: function (type, lhs, rhs)
  {
    return n(type, [ lhs, rhs ]);
  },
  
  not_op: function (receiver)
  {
    // for `!()`
    if (receiver == null)
    {
      var nil_node = n0('begin');

      return n('send', [ nil_node, '!' ]);
    }
    else
    {
      return n('send', [ receiver, '!' ]);
    }
  },
  
  block: function (method_call, args, body) // body is an array
  {
    // method_call = _receiver, _selector, *call_args
    // check if there are arguments at all
    if (method_call.length >= 3)
    {
      var last_arg = method_call[method_call.length-1];
      if (last_arg && last_arg.type == 'block_pass')
      {
        lexer.compile_error('TODO: block_and_blockarg');
      }
    }
    
    return n('block', [ method_call, args, body ]);
  },
  
  args: function (args)
  {
    this.check_duplicate_args(args);
    return n('args', args.slice()); // expect not null `args`
  },
  
  arg: function (name_t)
  {
    return n('arg', [ name_t ]);
  },
  
  check_duplicate_args: function (args, map /*={}*/)
  {
    if (!map)
      map = {};
    
    for (var i = 0, il = args.length; i < il; i++)
    {
      var this_arg = args[i];
      
      switch (this_arg.type)
      {
        case 'arg':   case 'optarg':   case 'restarg':   case 'blockarg':
        case 'kwarg': case 'kwoptarg': case 'kwrestarg': case 'shadowarg':

          var this_name = this_arg[0];

          var that_arg = map[this_name];
          if (!that_arg)
          {
            map[this_name] = this_arg;
            continue;
          }
          
          var that_name  = that_arg[0];
          if (this.arg_name_collides(this_name, that_name))
          {
            
            lexer.compile_error('TODO: duplicate_argument');
            // diagnostic :error, ERRORS[:duplicate_argument],
                       // this_arg.loc.name, [ that_arg.loc.name ]
          }
          break;

        case 'mlhs':
          this.check_duplicate_args(this_arg.children, map);
      }
    }
  },
  
  shadowarg: function (ident)
  {
    return n('shadowarg', [ ident ]);
  },
  
  pair_keyword: function (key_t, value)
  {
    var key = n('sym', [ key_t ]);
    return n('pair', [ key, value ]);
  },
  
  kwsplat: function (arg)
  {
    return n('kwsplat', [ arg ]);
  },
  
  pair: function (key, value)
  {
    return n('pair', [ key, value ]);
  },
  
  associate: function (pairs)
  {
    return n('hash', pairs.slice()); // TODO: check all `slices()` are nessry
  },
  
  begin: function (body)
  {
    if (body == null)
    {
      // A nil expression: ()
      return n0('begin');
    }
    
    if (body.type == 'mlhs' || body.begin_from_compstmt)
    {
      // Synthesized (begin) from compstmt "a; b" or (mlhs)
      // from multi_lhs "(a, b) = *foo".
      return n(body.type, body.children);
    }
    
    return n('begin', [ body ]);
  },
  
  index_asgn: function (receiver, indexes)
  {
    // Incomplete method call.
    return n('send', [ receiver, '[]=' ].concat(indexes));
  },
  
  const_global: function (name_t)
  {
    var cbase = n0('cbase');
    return n('const', [ cbase, name_t ]);
  },
  
  const_fetch: function (scope, op_t, name_t)
  {
    var node = n('const', [ scope, name_t ]);
    // to distinguish `a.b` from `a::b`
    node.op = op_t;
    return node;
  },
  
  binary_op: function (receiver, operator_t, arg)
  {
    return n('send', [ receiver, operator_t, arg ]);
  },
  
  unary_op: function (op_t, receiver)
  {
    if (op_t == '+')
    {
      var method = '+@';
    }
    else if (op_t == '-')
    {
      method = '-@';
    }
    else
    {
      method = op_t;
    }
    
    return n('send', [ receiver, method ]);
  },
  
  ternary: function (cond, if_true, if_false)
  {
    var node = n('if', [ this.check_condition(cond), if_true, if_false ]);
    node.ternary = true;
    return node;
  },
  
  blockarg: function (name_t)
  {
    return n('blockarg', [ name_t ]);
  },
  
  call_lambda: function ()
  {
    return n('send', [ null, 'lambda' ]);
  },
  
  condition: function (cond, if_true, if_false)
  {
    return n('if', [ this.check_condition(cond), if_true, if_false ]);
  },
  
  case_: function (expr, when_bodies, else_body)
  {
    var children = [ expr ].concat(when_bodies);
    children.push(else_body);
    return n('case', children);
  },
  
  when: function (patterns, body)
  {
    var children = patterns;
    children.push(body);
    return n('when', children);
  },
  
  for_: function (iterator, iteratee, body)
  {
    return n('for', [ iterator, iteratee, body ]);
  },
  
  def_class: function (name, superclass, body)
  {
    return n('class', [ name, superclass, body ]);
  },
  
  def_sclass: function (expr, body)
  {
    return n('sclass', [ expr, body ]);
  },
  
  def_module: function (name, body)
  {
    return n('module', [ name, body ]);
  }
  
  
  
  
  
  
  
}

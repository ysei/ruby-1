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



;(function(){ // start of the parser namespase
/* First part of user declarations.  */
/* Line 77 of lalr1.js  */
/* Line 1 of "parse.y"  */

  // alert(123)


/**
 * A Bison parser, automatically generated from <tt>parse.y</tt>.
 *
 * @author LALR (1) parser skeleton written by Paolo Bonzini.
 * @author Java skeleton ported by Peter Leonov.
 */


/**
* A class defining a pair of positions.  Positions, defined by the
* <code>Position</code> class, denote a point in the input.
* Locations represent a part of the input through the beginning
* and ending positions.  */
function Location (begin, end) {
  /** The first, inclusive, position in the range.  */
  this.begin = begin;
  this.end = end;
}

Location.prototype.toString = function () {
  if (this.begin === this.end)
    return "" + begin;

  return this.begin + "-" + this.end;
}


function YYStack ()
{
  var stateStack = [];
  var locStack = [];
  var valueStack = [];

  this.push = function push (state, value, location)
  {
    stateStack.push(state);
    locStack.push(location);
    valueStack.push(value);
  }

  this.pop = function pop (num)
  {
    if (num <= 0)
      return;

    valueStack.length -= num;
    locStack.length -= num;
    stateStack.length -= num; // TODO: original code lacks this line
  }

  this.stateAt = function stateAt (i)
  {
    return stateStack[stateStack.length-1 - i];
  }

  this.locationAt = function locationAt (i)
  {
    return locStack[locStack.length-1 - i];
  }

  this.valueAt = function valueAt (i)
  {
    return valueStack[valueStack.length-1 - i];
  }
  
  this.height = function height ()
  {
    return stateStack.length-1;
  }

  // Print the state stack on the debug stream.
  this.print = function print ()
  {
    console.log("Stack now");

    for (var i = 0; i < stateStack.length; i++)
    {
      console.log(' ' + stateStack[i]);
    }
  }
  
  this.locationFromNthItemToCurrent = function locationFromNthItemToCurrent (n)
  {
    if (n > 0)
      return new Location(this.locationAt(n-1).begin, this.locationAt(0).end);
    
    var end = this.locationAt(0).end
    return new Location(end, end);
  }
}

// Instantiates the Bison-generated parser.
function YYParser (yylexer)
{
  // The scanner that will supply tokens to the parser.
  this.yylexer = yylexer;


  // True if verbose error messages are enabled.
  var errorVerbose = true;

  // Token returned by the scanner to signal the end of its input.
  var EOF = 0;

  var yydebug = true;


  function yyerror (location, message)
  {
    yylexer.yyerror(location, message);
  }

  function yycdebug (message)
  {
    if (yydebug)
      console.log(message);
  }


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

  var yyntokens_ = 159;
  
  var yyerrstatus_ = 0;
  
  // Return whether error recovery is being done.
  // In this state, the parser reads token until it reaches a known state,
  // and then restarts normal operation.
  function recovering ()
  {
    return yyerrstatus_ == 0;
  }

  var yyval;
  var actionsTable =
  {
      '2': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 114 of "parse.y"  */
    {
			lex_state = EXPR_BEG;
		    /*%%%*/
			local_push(compile_for_eval || rb_parse_in_main());
		    /*%
			local_push(0);
		    %*/
		    }; return yystack},
  '3': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 123 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(2-(2))) && !compile_for_eval) {
			    /* last expression should not be void */
			    if (nd_type((yystack.valueAt(2-(2)))) != NODE_BLOCK) void_expr((yystack.valueAt(2-(2))));
			    else {
				NODE *node = (yystack.valueAt(2-(2)));
				while (node->nd_next) {
				    node = node->nd_next;
				}
				void_expr(node->nd_head);
			    }
			}
			ruby_eval_tree = NEW_SCOPE(0, block_append(ruby_eval_tree, (yystack.valueAt(2-(2)))));
		    /*%
			$$ = $2;
			parser->result = dispatch1(program, $$);
		    %*/
			local_pop();
		    }; return yystack},
  '4': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 146 of "parse.y"  */
    {
		    /*%%%*/
			void_stmts((yystack.valueAt(2-(1))));
			fixup_nodes(&deferred_nodes);
		    /*%
		    %*/
			yyval = (yystack.valueAt(2-(1)));
		    }; return yystack},
  '5': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 157 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch2(stmts_add, dispatch0(stmts_new),
						  dispatch0(void_stmt));
		    %*/
		    }; return yystack},
  '6': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 166 of "parse.y"  */
    {
		    /*%%%*/
			yyval = newline_node((yystack.valueAt(1-(1))));
		    /*%
			$$ = dispatch2(stmts_add, dispatch0(stmts_new), $1);
		    %*/
		    }; return yystack},
  '7': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 174 of "parse.y"  */
    {
		    /*%%%*/
			yyval = block_append((yystack.valueAt(3-(1))), newline_node((yystack.valueAt(3-(3)))));
		    /*%
			$$ = dispatch2(stmts_add, $1, $3);
		    %*/
		    }; return yystack},
  '8': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 182 of "parse.y"  */
    {
			yyval = remove_begin((yystack.valueAt(2-(2))));
		    }; return yystack},
  '10': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 189 of "parse.y"  */
    {
		    /*%%%*/
			/* local_push(0); */
		    /*%
		    %*/
		    }; return yystack},
  '11': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 196 of "parse.y"  */
    {
		    /*%%%*/
			ruby_eval_tree_begin = block_append(ruby_eval_tree_begin,
							    (yystack.valueAt(5-(4))));
			/* NEW_PREEXE($4)); */
			/* local_pop(); */
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(BEGIN, $4);
		    %*/
		    }; return yystack},
  '12': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 213 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(4-(1)));
			if ((yystack.valueAt(4-(2)))) {
			    yyval = NEW_RESCUE((yystack.valueAt(4-(1))), (yystack.valueAt(4-(2))), (yystack.valueAt(4-(3))));
			}
			else if ((yystack.valueAt(4-(3)))) {
			    rb_warn0("else without rescue is useless");
			    yyval = block_append(yyval, (yystack.valueAt(4-(3))));
			}
			if ((yystack.valueAt(4-(4)))) {
			    if (yyval) {
				yyval = NEW_ENSURE(yyval, (yystack.valueAt(4-(4))));
			    }
			    else {
				yyval = block_append((yystack.valueAt(4-(4))), NEW_NIL());
			    }
			}
			fixpos(yyval, (yystack.valueAt(4-(1))));
		    /*%
			$$ = dispatch4(bodystmt,
				       escape_Qundef($1),
				       escape_Qundef($2),
				       escape_Qundef($3),
				       escape_Qundef($4));
		    %*/
		    }; return yystack},
  '13': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 243 of "parse.y"  */
    {
		    /*%%%*/
			void_stmts((yystack.valueAt(2-(1))));
			fixup_nodes(&deferred_nodes);
		    /*%
		    %*/
			yyval = (yystack.valueAt(2-(1)));
		    }; return yystack},
  '14': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 254 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch2(stmts_add, dispatch0(stmts_new),
						  dispatch0(void_stmt));
		    %*/
		    }; return yystack},
  '15': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 263 of "parse.y"  */
    {
		    /*%%%*/
			yyval = newline_node((yystack.valueAt(1-(1))));
		    /*%
			$$ = dispatch2(stmts_add, dispatch0(stmts_new), $1);
		    %*/
		    }; return yystack},
  '16': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 271 of "parse.y"  */
    {
		    /*%%%*/
			yyval = block_append((yystack.valueAt(3-(1))), newline_node((yystack.valueAt(3-(3)))));
		    /*%
			$$ = dispatch2(stmts_add, $1, $3);
		    %*/
		    }; return yystack},
  '17': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 279 of "parse.y"  */
    {
			yyval = remove_begin((yystack.valueAt(2-(2))));
		    }; return yystack},
  '18': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 285 of "parse.y"  */
    {
			yyval = (yystack.valueAt(1-(1)));
		    }; return yystack},
  '19': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 289 of "parse.y"  */
    {
			yyerror("BEGIN is permitted only at toplevel");
		    /*%%%*/
			/* local_push(0); */
		    /*%
		    %*/
		    }; return yystack},
  '20': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 297 of "parse.y"  */
    {
		    /*%%%*/
			ruby_eval_tree_begin = block_append(ruby_eval_tree_begin,
							    (yystack.valueAt(5-(4))));
			/* NEW_PREEXE($4)); */
			/* local_pop(); */
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(BEGIN, $4);
		    %*/
		    }; return yystack},
  '21': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 309 of "parse.y"  */
    {lex_state = EXPR_FNAME;}; return yystack},
  '22': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 310 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ALIAS((yystack.valueAt(4-(2))), (yystack.valueAt(4-(4))));
		    /*%
			$$ = dispatch2(alias, $2, $4);
		    %*/
		    }; return yystack},
  '23': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 318 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_VALIAS((yystack.valueAt(3-(2))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(var_alias, $2, $3);
		    %*/
		    }; return yystack},
  '24': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 326 of "parse.y"  */
    {
		    /*%%%*/
			char buf[2];
			buf[0] = '$';
			buf[1] = (char)(yystack.valueAt(3-(3)))->nd_nth;
			yyval = NEW_VALIAS((yystack.valueAt(3-(2))), rb_intern2(buf, 2));
		    /*%
			$$ = dispatch2(var_alias, $2, $3);
		    %*/
		    }; return yystack},
  '25': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 337 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("can't make alias for the number variables");
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch2(var_alias, $2, $3);
			$$ = dispatch1(alias_error, $$);
		    %*/
		    }; return yystack},
  '26': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 347 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(undef, $2);
		    %*/
		    }; return yystack},
  '27': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 355 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_IF(cond((yystack.valueAt(3-(3)))), remove_begin((yystack.valueAt(3-(1)))), 0);
			fixpos(yyval, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(if_mod, $3, $1);
		    %*/
		    }; return yystack},
  '28': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 364 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_UNLESS(cond((yystack.valueAt(3-(3)))), remove_begin((yystack.valueAt(3-(1)))), 0);
			fixpos(yyval, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(unless_mod, $3, $1);
		    %*/
		    }; return yystack},
  '29': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 373 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(3-(1))) && nd_type((yystack.valueAt(3-(1)))) == NODE_BEGIN) {
			    yyval = NEW_WHILE(cond((yystack.valueAt(3-(3)))), (yystack.valueAt(3-(1)))->nd_body, 0);
			}
			else {
			    yyval = NEW_WHILE(cond((yystack.valueAt(3-(3)))), (yystack.valueAt(3-(1))), 1);
			}
		    /*%
			$$ = dispatch2(while_mod, $3, $1);
		    %*/
		    }; return yystack},
  '30': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 386 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(3-(1))) && nd_type((yystack.valueAt(3-(1)))) == NODE_BEGIN) {
			    yyval = NEW_UNTIL(cond((yystack.valueAt(3-(3)))), (yystack.valueAt(3-(1)))->nd_body, 0);
			}
			else {
			    yyval = NEW_UNTIL(cond((yystack.valueAt(3-(3)))), (yystack.valueAt(3-(1))), 1);
			}
		    /*%
			$$ = dispatch2(until_mod, $3, $1);
		    %*/
		    }; return yystack},
  '31': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 399 of "parse.y"  */
    {
		    /*%%%*/
			NODE *resq = NEW_RESBODY(0, remove_begin((yystack.valueAt(3-(3)))), 0);
			yyval = NEW_RESCUE(remove_begin((yystack.valueAt(3-(1)))), resq, 0);
		    /*%
			$$ = dispatch2(rescue_mod, $1, $3);
		    %*/
		    }; return yystack},
  '32': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 408 of "parse.y"  */
    {
			if (in_def || in_single) {
			    rb_warn0("END in method; use at_exit");
			}
		    /*%%%*/
			yyval = NEW_POSTEXE(NEW_NODE(
			    NODE_SCOPE, 0 /* tbl */, (yystack.valueAt(4-(3))) /* body */, 0 /* args */));
		    /*%
			$$ = dispatch1(END, $3);
		    %*/
		    }; return yystack},
  '34': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 421 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(3))));
			(yystack.valueAt(3-(1)))->nd_value = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = dispatch2(massign, $1, $3);
		    %*/
		    }; return yystack},
  '35': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 431 of "parse.y"  */
    {
			value_expr((yystack.valueAt(3-(3))));
			yyval = new_op_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))), (yystack.valueAt(3-(3))));
		    }; return yystack},
  '36': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 436 of "parse.y"  */
    {
		    /*%%%*/
			NODE *args;

			value_expr((yystack.valueAt(6-(6))));
			if (!(yystack.valueAt(6-(3)))) (yystack.valueAt(6-(3))) = NEW_ZARRAY();
			args = arg_concat((yystack.valueAt(6-(3))), (yystack.valueAt(6-(6))));
			if ((yystack.valueAt(6-(5))) == tOROP) {
			    (yystack.valueAt(6-(5))) = 0;
			}
			else if ((yystack.valueAt(6-(5))) == tANDOP) {
			    (yystack.valueAt(6-(5))) = 1;
			}
			yyval = NEW_OP_ASGN1((yystack.valueAt(6-(1))), (yystack.valueAt(6-(5))), args);
			fixpos(yyval, (yystack.valueAt(6-(1))));
		    /*%
			$$ = dispatch2(aref_field, $1, escape_Qundef($3));
			$$ = dispatch3(opassign, $$, $5, $6);
		    %*/
		    }; return yystack},
  '37': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 457 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_id2sym('.'), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '38': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 462 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_id2sym('.'), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '39': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 467 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON2((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))));
			yyval = new_const_op_assign(yyval, (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    /*%
			$$ = dispatch2(const_path_field, $1, $3);
			$$ = dispatch3(opassign, $$, $4, $5);
		    %*/
		    }; return yystack},
  '40': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 477 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_intern("::"), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '41': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 482 of "parse.y"  */
    {
		    /*%%%*/
			rb_backref_error((yystack.valueAt(3-(1))));
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch2(assign, dispatch1(var_field, $1), $3);
			$$ = dispatch1(assign_error, $$);
		    %*/
		    }; return yystack},
  '42': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 492 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(3))));
			yyval = node_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(assign, $1, $3);
		    %*/
		    }; return yystack},
  '43': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 501 of "parse.y"  */
    {
		    /*%%%*/
			(yystack.valueAt(3-(1)))->nd_value = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = dispatch2(massign, $1, $3);
		    %*/
		    }; return yystack},
  '44': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 510 of "parse.y"  */
    {
		    /*%%%*/
			(yystack.valueAt(3-(1)))->nd_value = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = dispatch2(massign, $1, $3);
		    %*/
		    }; return yystack},
  '46': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 522 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(3))));
			yyval = node_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(assign, $1, $3);
		    %*/
		    }; return yystack},
  '47': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 531 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(3))));
			yyval = node_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(assign, $1, $3);
		    %*/
		    }; return yystack},
  '49': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 544 of "parse.y"  */
    {
		    /*%%%*/
			yyval = logop(NODE_AND, (yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("and"), $3);
		    %*/
		    }; return yystack},
  '50': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 552 of "parse.y"  */
    {
		    /*%%%*/
			yyval = logop(NODE_OR, (yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("or"), $3);
		    %*/
		    }; return yystack},
  '51': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 560 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op(cond((yystack.valueAt(3-(3)))), '!');
		    /*%
			$$ = dispatch2(unary, ripper_intern("not"), $3);
		    %*/
		    }; return yystack},
  '52': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 568 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op(cond((yystack.valueAt(2-(2)))), '!');
		    /*%
			$$ = dispatch2(unary, ripper_id2sym('!'), $2);
		    %*/
		    }; return yystack},
  '54': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 579 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(1-(1))));
			yyval = (yystack.valueAt(1-(1)));
		        if (!yyval) yyval = NEW_NIL();
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '58': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 596 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    /*%
			$$ = dispatch3(call, $1, $2, $3);
			$$ = method_arg($$, $4);
		    %*/
		    }; return yystack},
  '59': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 607 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = dyna_push();
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
		    %*/
		    }; return yystack},
  '60': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 617 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ITER((yystack.valueAt(5-(3))),(yystack.valueAt(5-(4))));
			nd_set_line(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch2(brace_block, escape_Qundef($3), $4);
		    %*/
			dyna_pop((yystack.valueAt(5-(1))));
		    }; return yystack},
  '61': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 629 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_FCALL((yystack.valueAt(1-(1))), 0);
			nd_set_line(yyval, tokline);
		    /*%
		    %*/
		    }; return yystack},
  '62': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 639 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(1)));
			yyval->nd_args = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch2(command, $1, $2);
		    %*/
		    }; return yystack},
  '63': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 648 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(3-(2))),(yystack.valueAt(3-(3))));
			(yystack.valueAt(3-(1)))->nd_args = (yystack.valueAt(3-(2)));
		        (yystack.valueAt(3-(3)))->nd_iter = (yystack.valueAt(3-(1)));
			yyval = (yystack.valueAt(3-(3)));
			fixpos(yyval, (yystack.valueAt(3-(1))));
		    /*%
			$$ = dispatch2(command, $1, $2);
			$$ = method_add_block($$, $3);
		    %*/
		    }; return yystack},
  '64': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 661 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
			fixpos(yyval, (yystack.valueAt(4-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, ripper_id2sym('.'), $3, $4);
		    %*/
		    }; return yystack},
  '65': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 670 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(5-(4))),(yystack.valueAt(5-(5))));
		        (yystack.valueAt(5-(5)))->nd_iter = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))));
			yyval = (yystack.valueAt(5-(5)));
			fixpos(yyval, (yystack.valueAt(5-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, ripper_id2sym('.'), $3, $4);
			$$ = method_add_block($$, $5);
		    %*/
		   }; return yystack},
  '66': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 682 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
			fixpos(yyval, (yystack.valueAt(4-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, ripper_intern("::"), $3, $4);
		    %*/
		    }; return yystack},
  '67': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 691 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(5-(4))),(yystack.valueAt(5-(5))));
		        (yystack.valueAt(5-(5)))->nd_iter = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))));
			yyval = (yystack.valueAt(5-(5)));
			fixpos(yyval, (yystack.valueAt(5-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, ripper_intern("::"), $3, $4);
			$$ = method_add_block($$, $5);
		    %*/
		   }; return yystack},
  '68': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 703 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_SUPER((yystack.valueAt(2-(2))));
			fixpos(yyval, (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(super, $2);
		    %*/
		    }; return yystack},
  '69': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 712 of "parse.y"  */
    {
		    /*%%%*/
			yyval = new_yield((yystack.valueAt(2-(2))));
			fixpos(yyval, (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(yield, $2);
		    %*/
		    }; return yystack},
  '70': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 721 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_RETURN(ret_args((yystack.valueAt(2-(2)))));
		    /*%
			$$ = dispatch1(return, $2);
		    %*/
		    }; return yystack},
  '71': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 729 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_BREAK(ret_args((yystack.valueAt(2-(2)))));
		    /*%
			$$ = dispatch1(break, $2);
		    %*/
		    }; return yystack},
  '72': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 737 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_NEXT(ret_args((yystack.valueAt(2-(2)))));
		    /*%
			$$ = dispatch1(next, $2);
		    %*/
		    }; return yystack},
  '74': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 748 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(mlhs_paren, $2);
		    %*/
		    }; return yystack},
  '76': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 759 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(NEW_LIST((yystack.valueAt(3-(2)))), 0);
		    /*%
			$$ = dispatch1(mlhs_paren, $2);
		    %*/
		    }; return yystack},
  '77': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 769 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(1-(1))), 0);
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '78': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 777 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(list_append((yystack.valueAt(2-(1))),(yystack.valueAt(2-(2)))), 0);
		    /*%
			$$ = mlhs_add($1, $2);
		    %*/
		    }; return yystack},
  '79': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 785 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = mlhs_add_star($1, $3);
		    %*/
		    }; return yystack},
  '80': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 793 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(5-(1))), NEW_POSTARG((yystack.valueAt(5-(3))),(yystack.valueAt(5-(5)))));
		    /*%
			$1 = mlhs_add_star($1, $3);
			$$ = mlhs_add($1, $5);
		    %*/
		    }; return yystack},
  '81': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 802 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(2-(1))), -1);
		    /*%
			$$ = mlhs_add_star($1, Qnil);
		    %*/
		    }; return yystack},
  '82': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 810 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(4-(1))), NEW_POSTARG(-1, (yystack.valueAt(4-(4)))));
		    /*%
			$1 = mlhs_add_star($1, Qnil);
			$$ = mlhs_add($1, $4);
		    %*/
		    }; return yystack},
  '83': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 819 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, (yystack.valueAt(2-(2))));
		    /*%
			$$ = mlhs_add_star(mlhs_new(), $2);
		    %*/
		    }; return yystack},
  '84': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 827 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, NEW_POSTARG((yystack.valueAt(4-(2))),(yystack.valueAt(4-(4)))));
		    /*%
			$2 = mlhs_add_star(mlhs_new(), $2);
			$$ = mlhs_add($2, $4);
		    %*/
		    }; return yystack},
  '85': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 836 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, -1);
		    /*%
			$$ = mlhs_add_star(mlhs_new(), Qnil);
		    %*/
		    }; return yystack},
  '86': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 844 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, NEW_POSTARG(-1, (yystack.valueAt(3-(3)))));
		    /*%
			$$ = mlhs_add_star(mlhs_new(), Qnil);
			$$ = mlhs_add($$, $3);
		    %*/
		    }; return yystack},
  '88': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 856 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(mlhs_paren, $2);
		    %*/
		    }; return yystack},
  '89': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 866 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST((yystack.valueAt(2-(1))));
		    /*%
			$$ = mlhs_add(mlhs_new(), $1);
		    %*/
		    }; return yystack},
  '90': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 874 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))));
		    /*%
			$$ = mlhs_add($1, $2);
		    %*/
		    }; return yystack},
  '91': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 884 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST((yystack.valueAt(1-(1))));
		    /*%
			$$ = mlhs_add(mlhs_new(), $1);
		    %*/
		    }; return yystack},
  '92': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 892 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = mlhs_add($1, $3);
		    %*/
		    }; return yystack},
  '93': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 902 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(1-(1))), 0);
		    }; return yystack},
  '94': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 906 of "parse.y"  */
    {
		        yyval = assignable((yystack.valueAt(1-(1))), 0);
		    }; return yystack},
  '95': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 910 of "parse.y"  */
    {
		    /*%%%*/
			yyval = aryset((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch2(aref_field, $1, escape_Qundef($3));
		    %*/
		    }; return yystack},
  '96': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 918 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(field, $1, ripper_id2sym('.'), $3);
		    %*/
		    }; return yystack},
  '97': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 926 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(const_path_field, $1, $3);
		    %*/
		    }; return yystack},
  '98': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 934 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(field, $1, ripper_id2sym('.'), $3);
		    %*/
		    }; return yystack},
  '99': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 942 of "parse.y"  */
    {
		    /*%%%*/
			if (in_def || in_single)
			    yyerror("dynamic constant assignment");
			yyval = NEW_CDECL(0, 0, NEW_COLON2((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3)))));
		    /*%
			if (in_def || in_single)
			    yyerror("dynamic constant assignment");
			$$ = dispatch2(const_path_field, $1, $3);
		    %*/
		    }; return yystack},
  '100': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 954 of "parse.y"  */
    {
		    /*%%%*/
			if (in_def || in_single)
			    yyerror("dynamic constant assignment");
			yyval = NEW_CDECL(0, 0, NEW_COLON3((yystack.valueAt(2-(2)))));
		    /*%
			$$ = dispatch1(top_const_field, $2);
		    %*/
		    }; return yystack},
  '101': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 964 of "parse.y"  */
    {
		    /*%%%*/
			rb_backref_error((yystack.valueAt(1-(1))));
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(var_field, $1);
			$$ = dispatch1(assign_error, $$);
		    %*/
		    }; return yystack},
  '102': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 976 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(1-(1))), 0);
		    /*%%%*/
			if (!yyval) yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(var_field, $$);
		    %*/
		    }; return yystack},
  '103': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 985 of "parse.y"  */
    {
		        yyval = assignable((yystack.valueAt(1-(1))), 0);
		    /*%%%*/
		        if (!yyval) yyval = NEW_BEGIN(0);
		    /*%
		        $$ = dispatch1(var_field, $$);
		    %*/
		    }; return yystack},
  '104': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 994 of "parse.y"  */
    {
		    /*%%%*/
			yyval = aryset((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch2(aref_field, $1, escape_Qundef($3));
		    %*/
		    }; return yystack},
  '105': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1002 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(field, $1, ripper_id2sym('.'), $3);
		    %*/
		    }; return yystack},
  '106': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1010 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(field, $1, ripper_intern("::"), $3);
		    %*/
		    }; return yystack},
  '107': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1018 of "parse.y"  */
    {
		    /*%%%*/
			yyval = attrset((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(field, $1, ripper_id2sym('.'), $3);
		    %*/
		    }; return yystack},
  '108': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1026 of "parse.y"  */
    {
		    /*%%%*/
			if (in_def || in_single)
			    yyerror("dynamic constant assignment");
			yyval = NEW_CDECL(0, 0, NEW_COLON2((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3)))));
		    /*%
			$$ = dispatch2(const_path_field, $1, $3);
			if (in_def || in_single) {
			    $$ = dispatch1(assign_error, $$);
			}
		    %*/
		    }; return yystack},
  '109': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1039 of "parse.y"  */
    {
		    /*%%%*/
			if (in_def || in_single)
			    yyerror("dynamic constant assignment");
			yyval = NEW_CDECL(0, 0, NEW_COLON3((yystack.valueAt(2-(2)))));
		    /*%
			$$ = dispatch1(top_const_field, $2);
			if (in_def || in_single) {
			    $$ = dispatch1(assign_error, $$);
			}
		    %*/
		    }; return yystack},
  '110': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1052 of "parse.y"  */
    {
		    /*%%%*/
			rb_backref_error((yystack.valueAt(1-(1))));
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(assign_error, $1);
		    %*/
		    }; return yystack},
  '111': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1063 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("class/module name must be CONSTANT");
		    /*%
			$$ = dispatch1(class_name_error, $1);
		    %*/
		    }; return yystack},
  '113': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1074 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON3((yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(top_const_ref, $2);
		    %*/
		    }; return yystack},
  '114': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1082 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON2(0, yyval);
		    /*%
			$$ = dispatch1(const_ref, $1);
		    %*/
		    }; return yystack},
  '115': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1090 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON2((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(const_path_ref, $1, $3);
		    %*/
		    }; return yystack},
  '119': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1103 of "parse.y"  */
    {
			lex_state = EXPR_ENDFN;
			yyval = (yystack.valueAt(1-(1)));
		    }; return yystack},
  '120': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1108 of "parse.y"  */
    {
			lex_state = EXPR_ENDFN;
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '123': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1123 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIT(ID2SYM((yystack.valueAt(1-(1)))));
		    /*%
			$$ = dispatch1(symbol_literal, $1);
		    %*/
		    }; return yystack},
  '125': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1134 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_UNDEF((yystack.valueAt(1-(1))));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '126': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1141 of "parse.y"  */
    {lex_state = EXPR_FNAME;}; return yystack},
  '127': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1142 of "parse.y"  */
    {
		    /*%%%*/
			yyval = block_append((yystack.valueAt(4-(1))), NEW_UNDEF((yystack.valueAt(4-(4)))));
		    /*%
			rb_ary_push($1, $4);
		    %*/
		    }; return yystack},
  '128': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1151 of "parse.y"  */
    { ifndef_ripper(yyval = '|'); }; return yystack},
  '129': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1152 of "parse.y"  */
    { ifndef_ripper(yyval = '^'); }; return yystack},
  '130': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1153 of "parse.y"  */
    { ifndef_ripper(yyval = '&'); }; return yystack},
  '131': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1154 of "parse.y"  */
    { ifndef_ripper(yyval = tCMP); }; return yystack},
  '132': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1155 of "parse.y"  */
    { ifndef_ripper(yyval = tEQ); }; return yystack},
  '133': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1156 of "parse.y"  */
    { ifndef_ripper(yyval = tEQQ); }; return yystack},
  '134': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1157 of "parse.y"  */
    { ifndef_ripper(yyval = tMATCH); }; return yystack},
  '135': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1158 of "parse.y"  */
    { ifndef_ripper(yyval = tNMATCH); }; return yystack},
  '136': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1159 of "parse.y"  */
    { ifndef_ripper(yyval = '>'); }; return yystack},
  '137': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1160 of "parse.y"  */
    { ifndef_ripper(yyval = tGEQ); }; return yystack},
  '138': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1161 of "parse.y"  */
    { ifndef_ripper(yyval = '<'); }; return yystack},
  '139': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1162 of "parse.y"  */
    { ifndef_ripper(yyval = tLEQ); }; return yystack},
  '140': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1163 of "parse.y"  */
    { ifndef_ripper(yyval = tNEQ); }; return yystack},
  '141': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1164 of "parse.y"  */
    { ifndef_ripper(yyval = tLSHFT); }; return yystack},
  '142': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1165 of "parse.y"  */
    { ifndef_ripper(yyval = tRSHFT); }; return yystack},
  '143': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1166 of "parse.y"  */
    { ifndef_ripper(yyval = '+'); }; return yystack},
  '144': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1167 of "parse.y"  */
    { ifndef_ripper(yyval = '-'); }; return yystack},
  '145': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1168 of "parse.y"  */
    { ifndef_ripper(yyval = '*'); }; return yystack},
  '146': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1169 of "parse.y"  */
    { ifndef_ripper(yyval = '*'); }; return yystack},
  '147': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1170 of "parse.y"  */
    { ifndef_ripper(yyval = '/'); }; return yystack},
  '148': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1171 of "parse.y"  */
    { ifndef_ripper(yyval = '%'); }; return yystack},
  '149': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1172 of "parse.y"  */
    { ifndef_ripper(yyval = tPOW); }; return yystack},
  '150': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1173 of "parse.y"  */
    { ifndef_ripper(yyval = tDSTAR); }; return yystack},
  '151': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1174 of "parse.y"  */
    { ifndef_ripper(yyval = '!'); }; return yystack},
  '152': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1175 of "parse.y"  */
    { ifndef_ripper(yyval = '~'); }; return yystack},
  '153': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1176 of "parse.y"  */
    { ifndef_ripper(yyval = tUPLUS); }; return yystack},
  '154': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1177 of "parse.y"  */
    { ifndef_ripper(yyval = tUMINUS); }; return yystack},
  '155': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1178 of "parse.y"  */
    { ifndef_ripper(yyval = tAREF); }; return yystack},
  '156': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1179 of "parse.y"  */
    { ifndef_ripper(yyval = tASET); }; return yystack},
  '157': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1180 of "parse.y"  */
    { ifndef_ripper(yyval = '`'); }; return yystack},
  '199': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1198 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(3))));
			yyval = node_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(assign, $1, $3);
		    %*/
		    }; return yystack},
  '200': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1207 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(5-(3))));
		        (yystack.valueAt(5-(3))) = NEW_RESCUE((yystack.valueAt(5-(3))), NEW_RESBODY(0,(yystack.valueAt(5-(5))),0), 0);
			yyval = node_assign((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))));
		    /*%
			$$ = dispatch2(assign, $1, dispatch2(rescue_mod, $3, $5));
		    %*/
		    }; return yystack},
  '201': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1217 of "parse.y"  */
    {
			value_expr((yystack.valueAt(3-(3))));
			yyval = new_op_assign((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))), (yystack.valueAt(3-(3))));
		    }; return yystack},
  '202': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1222 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(5-(3))));
		        (yystack.valueAt(5-(3))) = NEW_RESCUE((yystack.valueAt(5-(3))), NEW_RESBODY(0,(yystack.valueAt(5-(5))),0), 0);
		    /*%
			$3 = dispatch2(rescue_mod, $3, $5);
		    %*/
			yyval = new_op_assign((yystack.valueAt(5-(1))), (yystack.valueAt(5-(2))), (yystack.valueAt(5-(3))));
		    }; return yystack},
  '203': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1232 of "parse.y"  */
    {
		    /*%%%*/
			NODE *args;

			value_expr((yystack.valueAt(6-(6))));
			if (!(yystack.valueAt(6-(3)))) (yystack.valueAt(6-(3))) = NEW_ZARRAY();
			if (nd_type((yystack.valueAt(6-(3)))) == NODE_BLOCK_PASS) {
			    args = NEW_ARGSCAT((yystack.valueAt(6-(3))), (yystack.valueAt(6-(6))));
			}
		        else {
			    args = arg_concat((yystack.valueAt(6-(3))), (yystack.valueAt(6-(6))));
		        }
			if ((yystack.valueAt(6-(5))) == tOROP) {
			    (yystack.valueAt(6-(5))) = 0;
			}
			else if ((yystack.valueAt(6-(5))) == tANDOP) {
			    (yystack.valueAt(6-(5))) = 1;
			}
			yyval = NEW_OP_ASGN1((yystack.valueAt(6-(1))), (yystack.valueAt(6-(5))), args);
			fixpos(yyval, (yystack.valueAt(6-(1))));
		    /*%
			$1 = dispatch2(aref_field, $1, escape_Qundef($3));
			$$ = dispatch3(opassign, $1, $5, $6);
		    %*/
		    }; return yystack},
  '204': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1258 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_id2sym('.'), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '205': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1263 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_id2sym('.'), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '206': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1268 of "parse.y"  */
    {
			value_expr((yystack.valueAt(5-(5))));
			yyval = new_attr_op_assign((yystack.valueAt(5-(1))), ripper_intern("::"), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    }; return yystack},
  '207': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1273 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON2((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))));
			yyval = new_const_op_assign(yyval, (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    /*%
			$$ = dispatch2(const_path_field, $1, $3);
			$$ = dispatch3(opassign, $$, $4, $5);
		    %*/
		    }; return yystack},
  '208': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1283 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON3((yystack.valueAt(4-(2))));
			yyval = new_const_op_assign(yyval, (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    /*%
			$$ = dispatch1(top_const_field, $2);
			$$ = dispatch3(opassign, $$, $3, $4);
		    %*/
		    }; return yystack},
  '209': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1293 of "parse.y"  */
    {
		    /*%%%*/
			rb_backref_error((yystack.valueAt(3-(1))));
			yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(var_field, $1);
			$$ = dispatch3(opassign, $$, $2, $3);
			$$ = dispatch1(assign_error, $$);
		    %*/
		    }; return yystack},
  '210': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1304 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(1))));
			value_expr((yystack.valueAt(3-(3))));
			yyval = NEW_DOT2((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
			if (nd_type((yystack.valueAt(3-(1)))) == NODE_LIT && FIXNUM_P((yystack.valueAt(3-(1)))->nd_lit) &&
			    nd_type((yystack.valueAt(3-(3)))) == NODE_LIT && FIXNUM_P((yystack.valueAt(3-(3)))->nd_lit)) {
			    deferred_nodes = list_append(deferred_nodes, yyval);
			}
		    /*%
			$$ = dispatch2(dot2, $1, $3);
		    %*/
		    }; return yystack},
  '211': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1318 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(3-(1))));
			value_expr((yystack.valueAt(3-(3))));
			yyval = NEW_DOT3((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
			if (nd_type((yystack.valueAt(3-(1)))) == NODE_LIT && FIXNUM_P((yystack.valueAt(3-(1)))->nd_lit) &&
			    nd_type((yystack.valueAt(3-(3)))) == NODE_LIT && FIXNUM_P((yystack.valueAt(3-(3)))->nd_lit)) {
			    deferred_nodes = list_append(deferred_nodes, yyval);
			}
		    /*%
			$$ = dispatch2(dot3, $1, $3);
		    %*/
		    }; return yystack},
  '212': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1332 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '+', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('+'), $3);
		    %*/
		    }; return yystack},
  '213': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1340 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '-', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('-'), $3);
		    %*/
		    }; return yystack},
  '214': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1348 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '*', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('*'), $3);
		    %*/
		    }; return yystack},
  '215': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1356 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '/', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('/'), $3);
		    %*/
		    }; return yystack},
  '216': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1364 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '%', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('%'), $3);
		    %*/
		    }; return yystack},
  '217': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1372 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tPOW, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("**"), $3);
		    %*/
		    }; return yystack},
  '218': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1380 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL(call_bin_op((yystack.valueAt(4-(2))), tPOW, (yystack.valueAt(4-(4)))), tUMINUS, 0);
		    /*%
			$$ = dispatch3(binary, $2, ripper_intern("**"), $4);
			$$ = dispatch2(unary, ripper_intern("-@"), $$);
		    %*/
		    }; return yystack},
  '219': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1389 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL(call_bin_op((yystack.valueAt(4-(2))), tPOW, (yystack.valueAt(4-(4)))), tUMINUS, 0);
		    /*%
			$$ = dispatch3(binary, $2, ripper_intern("**"), $4);
			$$ = dispatch2(unary, ripper_intern("-@"), $$);
		    %*/
		    }; return yystack},
  '220': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1398 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op((yystack.valueAt(2-(2))), tUPLUS);
		    /*%
			$$ = dispatch2(unary, ripper_intern("+@"), $2);
		    %*/
		    }; return yystack},
  '221': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1406 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op((yystack.valueAt(2-(2))), tUMINUS);
		    /*%
			$$ = dispatch2(unary, ripper_intern("-@"), $2);
		    %*/
		    }; return yystack},
  '222': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1414 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '|', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('|'), $3);
		    %*/
		    }; return yystack},
  '223': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1422 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '^', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('^'), $3);
		    %*/
		    }; return yystack},
  '224': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1430 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '&', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('&'), $3);
		    %*/
		    }; return yystack},
  '225': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1438 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tCMP, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("<=>"), $3);
		    %*/
		    }; return yystack},
  '226': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1446 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '>', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('>'), $3);
		    %*/
		    }; return yystack},
  '227': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1454 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tGEQ, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern(">="), $3);
		    %*/
		    }; return yystack},
  '228': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1462 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), '<', (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ID2SYM('<'), $3);
		    %*/
		    }; return yystack},
  '229': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1470 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tLEQ, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("<="), $3);
		    %*/
		    }; return yystack},
  '230': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1478 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tEQ, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("=="), $3);
		    %*/
		    }; return yystack},
  '231': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1486 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tEQQ, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("==="), $3);
		    %*/
		    }; return yystack},
  '232': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1494 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tNEQ, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("!="), $3);
		    %*/
		    }; return yystack},
  '233': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1502 of "parse.y"  */
    {
		    /*%%%*/
			yyval = match_op((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
                        if (nd_type((yystack.valueAt(3-(1)))) == NODE_LIT && RB_TYPE_P((yystack.valueAt(3-(1)))->nd_lit, T_REGEXP)) {
                            yyval = reg_named_capture_assign((yystack.valueAt(3-(1)))->nd_lit, yyval);
                        }
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("=~"), $3);
		    %*/
		    }; return yystack},
  '234': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1513 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tNMATCH, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("!~"), $3);
		    %*/
		    }; return yystack},
  '235': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1521 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op(cond((yystack.valueAt(2-(2)))), '!');
		    /*%
			$$ = dispatch2(unary, ID2SYM('!'), $2);
		    %*/
		    }; return yystack},
  '236': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1529 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op((yystack.valueAt(2-(2))), '~');
		    /*%
			$$ = dispatch2(unary, ID2SYM('~'), $2);
		    %*/
		    }; return yystack},
  '237': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1537 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tLSHFT, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("<<"), $3);
		    %*/
		    }; return yystack},
  '238': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1545 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_bin_op((yystack.valueAt(3-(1))), tRSHFT, (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern(">>"), $3);
		    %*/
		    }; return yystack},
  '239': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1553 of "parse.y"  */
    {
		    /*%%%*/
			yyval = logop(NODE_AND, (yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("&&"), $3);
		    %*/
		    }; return yystack},
  '240': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1561 of "parse.y"  */
    {
		    /*%%%*/
			yyval = logop(NODE_OR, (yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch3(binary, $1, ripper_intern("||"), $3);
		    %*/
		    }; return yystack},
  '241': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1568 of "parse.y"  */
    {in_defined = 1;}; return yystack},
  '242': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1569 of "parse.y"  */
    {
		    /*%%%*/
			in_defined = 0;
			yyval = NEW_DEFINED((yystack.valueAt(4-(4))));
		    /*%
			in_defined = 0;
			$$ = dispatch1(defined, $4);
		    %*/
		    }; return yystack},
  '243': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1579 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(6-(1))));
			yyval = NEW_IF(cond((yystack.valueAt(6-(1)))), (yystack.valueAt(6-(3))), (yystack.valueAt(6-(6))));
			fixpos(yyval, (yystack.valueAt(6-(1))));
		    /*%
			$$ = dispatch3(ifop, $1, $3, $6);
		    %*/
		    }; return yystack},
  '244': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1589 of "parse.y"  */
    {
			yyval = (yystack.valueAt(1-(1)));
		    }; return yystack},
  '245': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1595 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(1-(1))));
			yyval = (yystack.valueAt(1-(1)));
		        if (!yyval) yyval = NEW_NIL();
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '247': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1608 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(1)));
		    }; return yystack},
  '248': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1612 of "parse.y"  */
    {
		    /*%%%*/
			yyval = arg_append((yystack.valueAt(4-(1))), NEW_HASH((yystack.valueAt(4-(3)))));
		    /*%
			$$ = arg_add_assocs($1, $3);
		    %*/
		    }; return yystack},
  '249': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1620 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST(NEW_HASH((yystack.valueAt(2-(1)))));
		    /*%
			$$ = arg_add_assocs(arg_new(), $1);
		    %*/
		    }; return yystack},
  '250': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1630 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(arg_paren, escape_Qundef($2));
		    %*/
		    }; return yystack},
  '255': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1646 of "parse.y"  */
    {
		      yyval = (yystack.valueAt(2-(1)));
		    }; return yystack},
  '256': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1650 of "parse.y"  */
    {
		    /*%%%*/
			yyval = arg_append((yystack.valueAt(4-(1))), NEW_HASH((yystack.valueAt(4-(3)))));
		    /*%
			$$ = arg_add_assocs($1, $3);
		    %*/
		    }; return yystack},
  '257': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1658 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST(NEW_HASH((yystack.valueAt(2-(1)))));
		    /*%
			$$ = arg_add_assocs(arg_new(), $1);
		    %*/
		    }; return yystack},
  '258': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1668 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(1-(1))));
			yyval = NEW_LIST((yystack.valueAt(1-(1))));
		    /*%
			$$ = arg_add(arg_new(), $1);
		    %*/
		    }; return yystack},
  '259': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1677 of "parse.y"  */
    {
		    /*%%%*/
			yyval = arg_blk_pass((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = arg_add_optblock($1, $2);
		    %*/
		    }; return yystack},
  '260': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1685 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST(NEW_HASH((yystack.valueAt(2-(1)))));
			yyval = arg_blk_pass(yyval, (yystack.valueAt(2-(2))));
		    /*%
			$$ = arg_add_assocs(arg_new(), $1);
			$$ = arg_add_optblock($$, $2);
		    %*/
		    }; return yystack},
  '261': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1695 of "parse.y"  */
    {
		    /*%%%*/
			yyval = arg_append((yystack.valueAt(4-(1))), NEW_HASH((yystack.valueAt(4-(3)))));
			yyval = arg_blk_pass(yyval, (yystack.valueAt(4-(4))));
		    /*%
			$$ = arg_add_optblock(arg_add_assocs($1, $3), $4);
		    %*/
		    }; return yystack},
  '263': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1712 of "parse.y"  */
    {
			yyval = cmdarg_stack;
			CMDARG_PUSH(1);
		    }; return yystack},
  '264': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1717 of "parse.y"  */
    {
			/* CMDARG_POP() */
			cmdarg_stack = (yystack.valueAt(2-(1)));
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '265': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1725 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_BLOCK_PASS((yystack.valueAt(2-(2))));
		    /*%
			$$ = $2;
		    %*/
		    }; return yystack},
  '266': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1735 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '267': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1739 of "parse.y"  */
    {
			yyval = 0;
		    }; return yystack},
  '268': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1745 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST((yystack.valueAt(1-(1))));
		    /*%
			$$ = arg_add(arg_new(), $1);
		    %*/
		    }; return yystack},
  '269': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1753 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_SPLAT((yystack.valueAt(2-(2))));
		    /*%
			$$ = arg_add_star(arg_new(), $2);
		    %*/
		    }; return yystack},
  '270': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1761 of "parse.y"  */
    {
		    /*%%%*/
			NODE *n1;
			if ((n1 = splat_array((yystack.valueAt(3-(1))))) != 0) {
			    yyval = list_append(n1, (yystack.valueAt(3-(3))));
			}
			else {
			    yyval = arg_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
			}
		    /*%
			$$ = arg_add($1, $3);
		    %*/
		    }; return yystack},
  '271': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1775 of "parse.y"  */
    {
		    /*%%%*/
			NODE *n1;
			if ((nd_type((yystack.valueAt(4-(4)))) == NODE_ARRAY) && (n1 = splat_array((yystack.valueAt(4-(1))))) != 0) {
			    yyval = list_concat(n1, (yystack.valueAt(4-(4))));
			}
			else {
			    yyval = arg_concat((yystack.valueAt(4-(1))), (yystack.valueAt(4-(4))));
			}
		    /*%
			$$ = arg_add_star($1, $4);
		    %*/
		    }; return yystack},
  '272': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1791 of "parse.y"  */
    {
		    /*%%%*/
			NODE *n1;
			if ((n1 = splat_array((yystack.valueAt(3-(1))))) != 0) {
			    yyval = list_append(n1, (yystack.valueAt(3-(3))));
			}
			else {
			    yyval = arg_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
			}
		    /*%
			$$ = mrhs_add(args2mrhs($1), $3);
		    %*/
		    }; return yystack},
  '273': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1805 of "parse.y"  */
    {
		    /*%%%*/
			NODE *n1;
			if (nd_type((yystack.valueAt(4-(4)))) == NODE_ARRAY &&
			    (n1 = splat_array((yystack.valueAt(4-(1))))) != 0) {
			    yyval = list_concat(n1, (yystack.valueAt(4-(4))));
			}
			else {
			    yyval = arg_concat((yystack.valueAt(4-(1))), (yystack.valueAt(4-(4))));
			}
		    /*%
			$$ = mrhs_add_star(args2mrhs($1), $4);
		    %*/
		    }; return yystack},
  '274': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1820 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_SPLAT((yystack.valueAt(2-(2))));
		    /*%
			$$ = mrhs_add_star(mrhs_new(), $2);
		    %*/
		    }; return yystack},
  '285': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1840 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_FCALL((yystack.valueAt(1-(1))), 0);
		    /*%
			$$ = method_arg(dispatch1(fcall, $1), arg_new());
		    %*/
		    }; return yystack},
  '286': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1848 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = cmdarg_stack;
			cmdarg_stack = 0;
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
		    %*/
		    }; return yystack},
  '287': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1858 of "parse.y"  */
    {
			cmdarg_stack = (yystack.valueAt(4-(1)));
		    /*%%%*/
			if ((yystack.valueAt(4-(3))) == NULL) {
			    yyval = NEW_NIL();
			}
			else {
			    if (nd_type((yystack.valueAt(4-(3)))) == NODE_RESCUE ||
				nd_type((yystack.valueAt(4-(3)))) == NODE_ENSURE)
				nd_set_line((yystack.valueAt(4-(3))), (yystack.valueAt(4-(2))));
			    yyval = NEW_BEGIN((yystack.valueAt(4-(3))));
			}
			nd_set_line(yyval, (yystack.valueAt(4-(2))));
		    /*%
			$$ = dispatch1(begin, $3);
		    %*/
		    }; return yystack},
  '288': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1875 of "parse.y"  */
    {lex_state = EXPR_ENDARG;}; return yystack},
  '289': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1876 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch1(paren, 0);
		    %*/
		    }; return yystack},
  '290': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1883 of "parse.y"  */
    {lex_state = EXPR_ENDARG;}; return yystack},
  '291': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1884 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(4-(2)));
		    /*%
			$$ = dispatch1(paren, $2);
		    %*/
		    }; return yystack},
  '292': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1892 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(paren, $2);
		    %*/
		    }; return yystack},
  '293': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1900 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON2((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(const_path_ref, $1, $3);
		    %*/
		    }; return yystack},
  '294': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1908 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_COLON3((yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(top_const_ref, $2);
		    %*/
		    }; return yystack},
  '295': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1916 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(3-(2))) == 0) {
			    yyval = NEW_ZARRAY(); /* zero length array*/
			}
			else {
			    yyval = (yystack.valueAt(3-(2)));
			}
		    /*%
			$$ = dispatch1(array, escape_Qundef($2));
		    %*/
		    }; return yystack},
  '296': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1929 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_HASH((yystack.valueAt(3-(2))));
		    /*%
			$$ = dispatch1(hash, escape_Qundef($2));
		    %*/
		    }; return yystack},
  '297': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1937 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_RETURN(0);
		    /*%
			$$ = dispatch0(return0);
		    %*/
		    }; return yystack},
  '298': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1945 of "parse.y"  */
    {
		    /*%%%*/
			yyval = new_yield((yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch1(yield, dispatch1(paren, $3));
		    %*/
		    }; return yystack},
  '299': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1953 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_YIELD(0);
		    /*%
			$$ = dispatch1(yield, dispatch1(paren, arg_new()));
		    %*/
		    }; return yystack},
  '300': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1961 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_YIELD(0);
		    /*%
			$$ = dispatch0(yield0);
		    %*/
		    }; return yystack},
  '301': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1968 of "parse.y"  */
    {in_defined = 1;}; return yystack},
  '302': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1969 of "parse.y"  */
    {
		    /*%%%*/
			in_defined = 0;
			yyval = NEW_DEFINED((yystack.valueAt(6-(5))));
		    /*%
			in_defined = 0;
			$$ = dispatch1(defined, $5);
		    %*/
		    }; return yystack},
  '303': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1979 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op(cond((yystack.valueAt(4-(3)))), '!');
		    /*%
			$$ = dispatch2(unary, ripper_intern("not"), $3);
		    %*/
		    }; return yystack},
  '304': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1987 of "parse.y"  */
    {
		    /*%%%*/
			yyval = call_uni_op(cond(NEW_NIL()), '!');
		    /*%
			$$ = dispatch2(unary, ripper_intern("not"), Qnil);
		    %*/
		    }; return yystack},
  '305': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 1995 of "parse.y"  */
    {
		    /*%%%*/
			(yystack.valueAt(2-(2)))->nd_iter = (yystack.valueAt(2-(1)));
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = method_arg(dispatch1(fcall, $1), arg_new());
			$$ = method_add_block($$, $2);
		    %*/
		    }; return yystack},
  '307': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2006 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(2-(1)))->nd_args, (yystack.valueAt(2-(2))));
			(yystack.valueAt(2-(2)))->nd_iter = (yystack.valueAt(2-(1)));
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = method_add_block($1, $2);
		    %*/
		    }; return yystack},
  '308': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2016 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '309': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2023 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_IF(cond((yystack.valueAt(6-(2)))), (yystack.valueAt(6-(4))), (yystack.valueAt(6-(5))));
			fixpos(yyval, (yystack.valueAt(6-(2))));
		    /*%
			$$ = dispatch3(if, $2, $4, escape_Qundef($5));
		    %*/
		    }; return yystack},
  '310': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2035 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_UNLESS(cond((yystack.valueAt(6-(2)))), (yystack.valueAt(6-(4))), (yystack.valueAt(6-(5))));
			fixpos(yyval, (yystack.valueAt(6-(2))));
		    /*%
			$$ = dispatch3(unless, $2, $4, escape_Qundef($5));
		    %*/
		    }; return yystack},
  '311': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2043 of "parse.y"  */
    {COND_PUSH(1);}; return yystack},
  '312': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2043 of "parse.y"  */
    {COND_POP();}; return yystack},
  '313': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2046 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_WHILE(cond((yystack.valueAt(7-(3)))), (yystack.valueAt(7-(6))), 1);
			fixpos(yyval, (yystack.valueAt(7-(3))));
		    /*%
			$$ = dispatch2(while, $3, $6);
		    %*/
		    }; return yystack},
  '314': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2054 of "parse.y"  */
    {COND_PUSH(1);}; return yystack},
  '315': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2054 of "parse.y"  */
    {COND_POP();}; return yystack},
  '316': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2057 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_UNTIL(cond((yystack.valueAt(7-(3)))), (yystack.valueAt(7-(6))), 1);
			fixpos(yyval, (yystack.valueAt(7-(3))));
		    /*%
			$$ = dispatch2(until, $3, $6);
		    %*/
		    }; return yystack},
  '317': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2068 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CASE((yystack.valueAt(5-(2))), (yystack.valueAt(5-(4))));
			fixpos(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch2(case, $2, $4);
		    %*/
		    }; return yystack},
  '318': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2077 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CASE(0, (yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch2(case, Qnil, $3);
		    %*/
		    }; return yystack},
  '319': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2085 of "parse.y"  */
    {COND_PUSH(1);}; return yystack},
  '320': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2087 of "parse.y"  */
    {COND_POP();}; return yystack},
  '321': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2090 of "parse.y"  */
    {
		    /*%%%*/
			/*
			 *  for a, b, c in e
			 *  #=>
			 *  e.each{|*x| a, b, c = x
			 *
			 *  for a in e
			 *  #=>
			 *  e.each{|x| a, = x}
			 */
			ID id = internal_id();
			ID *tbl = ALLOC_N(ID, 2);
			NODE *m = NEW_ARGS_AUX(0, 0);
			NODE *args, *scope;

			if (nd_type((yystack.valueAt(9-(2)))) == NODE_MASGN) {
			    /* if args.length == 1 && args[0].kind_of?(Array)
			     *   args = args[0]
			     * end
			     */
			    NODE *one = NEW_LIST(NEW_LIT(INT2FIX(1)));
			    NODE *zero = NEW_LIST(NEW_LIT(INT2FIX(0)));
			    m->nd_next = block_append(
				NEW_IF(
				    NEW_NODE(NODE_AND,
					     NEW_CALL(NEW_CALL(NEW_DVAR(id), idLength, 0),
						      idEq, one),
					     NEW_CALL(NEW_CALL(NEW_DVAR(id), idAREF, zero),
						      rb_intern("kind_of?"), NEW_LIST(NEW_LIT(rb_cArray))),
					     0),
				    NEW_DASGN_CURR(id,
						   NEW_CALL(NEW_DVAR(id), idAREF, zero)),
				    0),
				node_assign((yystack.valueAt(9-(2))), NEW_DVAR(id)));

			    args = new_args(m, 0, id, 0, new_args_tail(0, 0, 0));
			}
			else {
			    if (nd_type((yystack.valueAt(9-(2)))) == NODE_LASGN ||
				nd_type((yystack.valueAt(9-(2)))) == NODE_DASGN ||
				nd_type((yystack.valueAt(9-(2)))) == NODE_DASGN_CURR) {
				(yystack.valueAt(9-(2)))->nd_value = NEW_DVAR(id);
				m->nd_plen = 1;
				m->nd_next = (yystack.valueAt(9-(2)));
				args = new_args(m, 0, 0, 0, new_args_tail(0, 0, 0));
			    }
			    else {
				m->nd_next = node_assign(NEW_MASGN(NEW_LIST((yystack.valueAt(9-(2)))), 0), NEW_DVAR(id));
				args = new_args(m, 0, id, 0, new_args_tail(0, 0, 0));
			    }
			}
			scope = NEW_NODE(NODE_SCOPE, tbl, (yystack.valueAt(9-(8))), args);
			tbl[0] = 1; tbl[1] = id;
			yyval = NEW_FOR(0, (yystack.valueAt(9-(5))), scope);
			fixpos(yyval, (yystack.valueAt(9-(2))));
		    /*%
			$$ = dispatch3(for, $2, $5, $8);
		    %*/
		    }; return yystack},
  '322': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2151 of "parse.y"  */
    {
			if (in_def || in_single)
			    yyerror("class definition in method body");
			local_push(0);
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
		    %*/
		    }; return yystack},
  '323': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2162 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CLASS((yystack.valueAt(6-(2))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(3))));
			nd_set_line(yyval, (yystack.valueAt(6-(4))));
		    /*%
			$$ = dispatch3(class, $2, $3, $5);
		    %*/
			local_pop();
		    }; return yystack},
  '324': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2172 of "parse.y"  */
    {
			yyval = in_def;
			in_def = 0;
		    }; return yystack},
  '325': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2177 of "parse.y"  */
    {
			yyval = in_single;
			in_single = 0;
			local_push(0);
		    }; return yystack},
  '326': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2184 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_SCLASS((yystack.valueAt(8-(3))), (yystack.valueAt(8-(7))));
			fixpos(yyval, (yystack.valueAt(8-(3))));
		    /*%
			$$ = dispatch2(sclass, $3, $7);
		    %*/
			local_pop();
			in_def = (yystack.valueAt(8-(4)));
			in_single = (yystack.valueAt(8-(6)));
		    }; return yystack},
  '327': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2196 of "parse.y"  */
    {
			if (in_def || in_single)
			    yyerror("module definition in method body");
			local_push(0);
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
		    %*/
		    }; return yystack},
  '328': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2207 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MODULE((yystack.valueAt(5-(2))), (yystack.valueAt(5-(4))));
			nd_set_line(yyval, (yystack.valueAt(5-(3))));
		    /*%
			$$ = dispatch2(module, $2, $4);
		    %*/
			local_pop();
		    }; return yystack},
  '329': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2217 of "parse.y"  */
    {
			yyval = cur_mid;
			cur_mid = (yystack.valueAt(2-(2)));
			in_def++;
			local_push(0);
		    }; return yystack},
  '330': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2226 of "parse.y"  */
    {
		    /*%%%*/
			NODE *body = remove_begin((yystack.valueAt(6-(5))));
			reduce_nodes(&body);
			yyval = NEW_DEFN((yystack.valueAt(6-(2))), (yystack.valueAt(6-(4))), body, NOEX_PRIVATE);
			nd_set_line(yyval, (yystack.valueAt(6-(1))));
		    /*%
			$$ = dispatch3(def, $2, $4, $5);
		    %*/
			local_pop();
			in_def--;
			cur_mid = (yystack.valueAt(6-(3)));
		    }; return yystack},
  '331': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2239 of "parse.y"  */
    {lex_state = EXPR_FNAME;}; return yystack},
  '332': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2240 of "parse.y"  */
    {
			in_single++;
			lex_state = EXPR_ENDFN; /* force for args */
			local_push(0);
		    }; return yystack},
  '333': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2248 of "parse.y"  */
    {
		    /*%%%*/
			NODE *body = remove_begin((yystack.valueAt(9-(8))));
			reduce_nodes(&body);
			yyval = NEW_DEFS((yystack.valueAt(9-(2))), (yystack.valueAt(9-(5))), (yystack.valueAt(9-(7))), body);
			nd_set_line(yyval, (yystack.valueAt(9-(1))));
		    /*%
			$$ = dispatch5(defs, $2, $3, $5, $7, $8);
		    %*/
			local_pop();
			in_single--;
		    }; return yystack},
  '334': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2261 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_BREAK(0);
		    /*%
			$$ = dispatch1(break, arg_new());
		    %*/
		    }; return yystack},
  '335': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2269 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_NEXT(0);
		    /*%
			$$ = dispatch1(next, arg_new());
		    %*/
		    }; return yystack},
  '336': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2277 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_REDO();
		    /*%
			$$ = dispatch0(redo);
		    %*/
		    }; return yystack},
  '337': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2285 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_RETRY();
		    /*%
			$$ = dispatch0(retry);
		    %*/
		    }; return yystack},
  '338': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2295 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(1-(1))));
			yyval = (yystack.valueAt(1-(1)));
		        if (!yyval) yyval = NEW_NIL();
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '339': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2307 of "parse.y"  */
    {
			token_info_push("begin");
		    }; return yystack},
  '340': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2313 of "parse.y"  */
    {
			token_info_push("if");
		    }; return yystack},
  '341': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2319 of "parse.y"  */
    {
			token_info_push("unless");
		    }; return yystack},
  '342': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2325 of "parse.y"  */
    {
			token_info_push("while");
		    }; return yystack},
  '343': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2331 of "parse.y"  */
    {
			token_info_push("until");
		    }; return yystack},
  '344': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2337 of "parse.y"  */
    {
			token_info_push("case");
		    }; return yystack},
  '345': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2343 of "parse.y"  */
    {
			token_info_push("for");
		    }; return yystack},
  '346': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2349 of "parse.y"  */
    {
			token_info_push("class");
		    }; return yystack},
  '347': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2355 of "parse.y"  */
    {
			token_info_push("module");
		    }; return yystack},
  '348': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2361 of "parse.y"  */
    {
			token_info_push("def");
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
		    %*/
		    }; return yystack},
  '349': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2371 of "parse.y"  */
    {
			token_info_pop("end");
		    }; return yystack},
  '356': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2401 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_IF(cond((yystack.valueAt(5-(2)))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
			fixpos(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch3(elsif, $2, $4, escape_Qundef($5));
		    %*/
		    }; return yystack},
  '358': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2413 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(else, $2);
		    %*/
		    }; return yystack},
  '361': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2427 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(1-(1))), 0);
		    /*%%%*/
		    /*%
			$$ = dispatch1(mlhs_paren, $$);
		    %*/
		    }; return yystack},
  '362': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2435 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(mlhs_paren, $2);
		    %*/
		    }; return yystack},
  '363': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2445 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST((yystack.valueAt(1-(1))));
		    /*%
			$$ = mlhs_add(mlhs_new(), $1);
		    %*/
		    }; return yystack},
  '364': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2453 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = mlhs_add($1, $3);
		    %*/
		    }; return yystack},
  '365': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2463 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(1-(1))), 0);
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '366': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2471 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(4-(4))), 0);
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(4-(1))), yyval);
		    /*%
			$$ = mlhs_add_star($1, $$);
		    %*/
		    }; return yystack},
  '367': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2480 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(6-(4))), 0);
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(6-(1))), NEW_POSTARG(yyval, (yystack.valueAt(6-(6)))));
		    /*%
			$$ = mlhs_add_star($1, $$);
		    %*/
		    }; return yystack},
  '368': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2489 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(3-(1))), -1);
		    /*%
			$$ = mlhs_add_star($1, Qnil);
		    %*/
		    }; return yystack},
  '369': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2497 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN((yystack.valueAt(5-(1))), NEW_POSTARG(-1, (yystack.valueAt(5-(5)))));
		    /*%
			$$ = mlhs_add_star($1, $5);
		    %*/
		    }; return yystack},
  '370': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2505 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(2-(2))), 0);
		    /*%%%*/
			yyval = NEW_MASGN(0, yyval);
		    /*%
			$$ = mlhs_add_star(mlhs_new(), $$);
		    %*/
		    }; return yystack},
  '371': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2514 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(4-(2))), 0);
		    /*%%%*/
			yyval = NEW_MASGN(0, NEW_POSTARG(yyval, (yystack.valueAt(4-(4)))));
		    /*%
		      #if 0
		      TODO: Check me
		      #endif
			$$ = mlhs_add_star($$, $4);
		    %*/
		    }; return yystack},
  '372': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2526 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, -1);
		    /*%
			$$ = mlhs_add_star(mlhs_new(), Qnil);
		    %*/
		    }; return yystack},
  '373': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2534 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_MASGN(0, NEW_POSTARG(-1, (yystack.valueAt(3-(3)))));
		    /*%
			$$ = mlhs_add_star(mlhs_new(), Qnil);
		    %*/
		    }; return yystack},
  '374': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2545 of "parse.y"  */
    {
			yyval = new_args_tail((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '375': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2549 of "parse.y"  */
    {
			yyval = new_args_tail((yystack.valueAt(2-(1))), Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '376': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2553 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, (yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    }; return yystack},
  '377': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2557 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, Qnone, (yystack.valueAt(1-(1))));
		    }; return yystack},
  '378': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2563 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '379': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2567 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, Qnone, Qnone);
		    }; return yystack},
  '380': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2573 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), Qnone, (yystack.valueAt(6-(6))));
		    }; return yystack},
  '381': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2577 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(8-(1))), (yystack.valueAt(8-(3))), (yystack.valueAt(8-(5))), (yystack.valueAt(8-(7))), (yystack.valueAt(8-(8))));
		    }; return yystack},
  '382': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2581 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), Qnone, Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '383': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2585 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), Qnone, (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '384': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2589 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(4-(1))), Qnone, (yystack.valueAt(4-(3))), Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '385': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2593 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(2-(1))), Qnone, 1, Qnone, new_args_tail(Qnone, Qnone, Qnone));
		    /*%%%*/
		    /*%
                        dispatch1(excessed_comma, $$);
		    %*/
		    }; return yystack},
  '386': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2601 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), Qnone, (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '387': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2605 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(2-(1))), Qnone, Qnone, Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '388': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2609 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '389': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2613 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '390': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2617 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(2-(1))), Qnone, Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '391': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2621 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(4-(1))), Qnone, (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '392': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2625 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, (yystack.valueAt(2-(1))), Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '393': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2629 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, (yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '394': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2633 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, Qnone, Qnone, (yystack.valueAt(1-(1))));
		    }; return yystack},
  '396': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2640 of "parse.y"  */
    {
			command_start = TRUE;
		    }; return yystack},
  '397': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2646 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = blockvar_new(params_new(Qnil,Qnil,Qnil,Qnil,Qnil,Qnil,Qnil),
                                          escape_Qundef($2));
		    %*/
		    }; return yystack},
  '398': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2655 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = blockvar_new(params_new(Qnil,Qnil,Qnil,Qnil,Qnil,Qnil,Qnil),
                                          Qnil);
		    %*/
		    }; return yystack},
  '399': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2664 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(4-(2)));
		    /*%
			$$ = blockvar_new(escape_Qundef($2), escape_Qundef($3));
		    %*/
		    }; return yystack},
  '400': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2675 of "parse.y"  */
    {
		      yyval = 0;
		    }; return yystack},
  '401': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2679 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = $3;
		    %*/
		    }; return yystack},
  '404': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2705 of "parse.y"  */
    {
			new_bv(get_id((yystack.valueAt(1-(1)))));
		    /*%%%*/
		    /*%
			$$ = get_value($1);
		    %*/
		    }; return yystack},
  '405': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2713 of "parse.y"  */
    {
			yyval = 0;
		    }; return yystack},
  '406': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2718 of "parse.y"  */
    {
			yyval = dyna_push();
		    }; return yystack},
  '407': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2721 of "parse.y"  */
    {
			yyval = lpar_beg;
			lpar_beg = ++paren_nest;
		    }; return yystack},
  '408': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2727 of "parse.y"  */
    {
			lpar_beg = (yystack.valueAt(4-(2)));
		    /*%%%*/
			yyval = NEW_LAMBDA((yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    /*%
			$$ = dispatch2(lambda, $3, $4);
		    %*/
			dyna_pop((yystack.valueAt(4-(1))));
		    }; return yystack},
  '409': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2739 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(4-(2)));
		    /*%
			$$ = dispatch1(paren, $2);
		    %*/
		    }; return yystack},
  '410': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2747 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '411': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2757 of "parse.y"  */
    {
			yyval = (yystack.valueAt(3-(2)));
		    }; return yystack},
  '412': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2761 of "parse.y"  */
    {
			yyval = (yystack.valueAt(3-(2)));
		    }; return yystack},
  '413': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2767 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = dyna_push();
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*% %*/
		    }; return yystack},
  '414': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2776 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ITER((yystack.valueAt(5-(3))),(yystack.valueAt(5-(4))));
			nd_set_line(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch2(do_block, escape_Qundef($3), $4);
		    %*/
			dyna_pop((yystack.valueAt(5-(1))));
		    }; return yystack},
  '415': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2788 of "parse.y"  */
    {
		    /*%%%*/
			if (nd_type((yystack.valueAt(2-(1)))) == NODE_YIELD) {
			    compile_error(PARSER_ARG "block given to yield");
			}
			else {
			    block_dup_check((yystack.valueAt(2-(1)))->nd_args, (yystack.valueAt(2-(2))));
			}
			(yystack.valueAt(2-(2)))->nd_iter = (yystack.valueAt(2-(1)));
			yyval = (yystack.valueAt(2-(2)));
			fixpos(yyval, (yystack.valueAt(2-(1))));
		    /*%
			$$ = method_add_block($1, $2);
		    %*/
		    }; return yystack},
  '416': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2804 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    /*%
			$$ = dispatch3(call, $1, $2, $3);
			$$ = method_optarg($$, $4);
		    %*/
		    }; return yystack},
  '417': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2813 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
			(yystack.valueAt(5-(5)))->nd_iter = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))));
			yyval = (yystack.valueAt(5-(5)));
			fixpos(yyval, (yystack.valueAt(5-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, $2, $3, $4);
			$$ = method_add_block($$, $5);
		    %*/
		    }; return yystack},
  '418': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2825 of "parse.y"  */
    {
		    /*%%%*/
			block_dup_check((yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
			(yystack.valueAt(5-(5)))->nd_iter = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(4))));
			yyval = (yystack.valueAt(5-(5)));
			fixpos(yyval, (yystack.valueAt(5-(1))));
		    /*%
			$$ = dispatch4(command_call, $1, $2, $3, $4);
			$$ = method_add_block($$, $5);
		    %*/
		    }; return yystack},
  '419': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2839 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(1)));
			yyval->nd_args = (yystack.valueAt(2-(2)));
		    /*%
			$$ = method_arg(dispatch1(fcall, $1), $2);
		    %*/
		    }; return yystack},
  '420': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2848 of "parse.y"  */
    {
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*% %*/
		    }; return yystack},
  '421': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2854 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(5))));
			nd_set_line(yyval, (yystack.valueAt(5-(4))));
		    /*%
			$$ = dispatch3(call, $1, ripper_id2sym('.'), $3);
			$$ = method_optarg($$, $5);
		    %*/
		    }; return yystack},
  '422': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2864 of "parse.y"  */
    {
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*% %*/
		    }; return yystack},
  '423': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2870 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(5-(1))), (yystack.valueAt(5-(3))), (yystack.valueAt(5-(5))));
			nd_set_line(yyval, (yystack.valueAt(5-(4))));
		    /*%
			$$ = dispatch3(call, $1, ripper_id2sym('.'), $3);
			$$ = method_optarg($$, $5);
		    %*/
		    }; return yystack},
  '424': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2880 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))), 0);
		    /*%
			$$ = dispatch3(call, $1, ripper_intern("::"), $3);
		    %*/
		    }; return yystack},
  '425': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2888 of "parse.y"  */
    {
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*% %*/
		    }; return yystack},
  '426': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2894 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), rb_intern("call"), (yystack.valueAt(4-(4))));
			nd_set_line(yyval, (yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch3(call, $1, ripper_id2sym('.'),
				       ripper_intern("call"));
			$$ = method_optarg($$, $4);
		    %*/
		    }; return yystack},
  '427': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2905 of "parse.y"  */
    {
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*% %*/
		    }; return yystack},
  '428': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2911 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CALL((yystack.valueAt(4-(1))), rb_intern("call"), (yystack.valueAt(4-(4))));
			nd_set_line(yyval, (yystack.valueAt(4-(3))));
		    /*%
			$$ = dispatch3(call, $1, ripper_intern("::"),
				       ripper_intern("call"));
			$$ = method_optarg($$, $4);
		    %*/
		    }; return yystack},
  '429': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2922 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_SUPER((yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(super, $2);
		    %*/
		    }; return yystack},
  '430': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2930 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ZSUPER();
		    /*%
			$$ = dispatch0(zsuper);
		    %*/
		    }; return yystack},
  '431': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2938 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(4-(1))) && nd_type((yystack.valueAt(4-(1)))) == NODE_SELF)
			    yyval = NEW_FCALL(tAREF, (yystack.valueAt(4-(3))));
			else
			    yyval = NEW_CALL((yystack.valueAt(4-(1))), tAREF, (yystack.valueAt(4-(3))));
			fixpos(yyval, (yystack.valueAt(4-(1))));
		    /*%
			$$ = dispatch2(aref, $1, escape_Qundef($3));
		    %*/
		    }; return yystack},
  '432': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2952 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = dyna_push();
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
                    %*/
		    }; return yystack},
  '433': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2961 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ITER((yystack.valueAt(5-(3))),(yystack.valueAt(5-(4))));
			nd_set_line(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch2(brace_block, escape_Qundef($3), $4);
		    %*/
			dyna_pop((yystack.valueAt(5-(1))));
		    }; return yystack},
  '434': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2971 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = dyna_push();
		    /*%%%*/
			yyval = ruby_sourceline;
		    /*%
                    %*/
		    }; return yystack},
  '435': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2980 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ITER((yystack.valueAt(5-(3))),(yystack.valueAt(5-(4))));
			nd_set_line(yyval, (yystack.valueAt(5-(2))));
		    /*%
			$$ = dispatch2(do_block, escape_Qundef($3), $4);
		    %*/
			dyna_pop((yystack.valueAt(5-(1))));
		    }; return yystack},
  '436': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 2994 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_WHEN((yystack.valueAt(5-(2))), (yystack.valueAt(5-(4))), (yystack.valueAt(5-(5))));
		    /*%
			$$ = dispatch3(when, $2, $4, escape_Qundef($5));
		    %*/
		    }; return yystack},
  '439': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3010 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(6-(3)))) {
			    (yystack.valueAt(6-(3))) = node_assign((yystack.valueAt(6-(3))), NEW_ERRINFO());
			    (yystack.valueAt(6-(5))) = block_append((yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))));
			}
			yyval = NEW_RESBODY((yystack.valueAt(6-(2))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
			fixpos(yyval, (yystack.valueAt(6-(2)))?(yystack.valueAt(6-(2))):(yystack.valueAt(6-(5))));
		    /*%
			$$ = dispatch4(rescue,
				       escape_Qundef($2),
				       escape_Qundef($3),
				       escape_Qundef($5),
				       escape_Qundef($6));
		    %*/
		    }; return yystack},
  '441': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3030 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIST((yystack.valueAt(1-(1))));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '442': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3038 of "parse.y"  */
    {
		    /*%%%*/
			if (!(yyval = splat_array((yystack.valueAt(1-(1)))))) yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '444': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3049 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '446': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3056 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(ensure, $2);
		    %*/
		    }; return yystack},
  '449': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3068 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_LIT(ID2SYM((yystack.valueAt(1-(1)))));
		    /*%
			$$ = dispatch1(symbol_literal, $1);
		    %*/
		    }; return yystack},
  '451': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3079 of "parse.y"  */
    {
		    /*%%%*/
			NODE *node = (yystack.valueAt(1-(1)));
			if (!node) {
			    node = NEW_STR(STR_NEW0());
			}
			else {
			    node = evstr2dstr(node);
			}
			yyval = node;
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '454': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3098 of "parse.y"  */
    {
		    /*%%%*/
			yyval = literal_concat((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(string_concat, $1, $2);
		    %*/
		    }; return yystack},
  '455': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3108 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(string_literal, $2);
		    %*/
		    }; return yystack},
  '456': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3118 of "parse.y"  */
    {
		    /*%%%*/
			NODE *node = (yystack.valueAt(3-(2)));
			if (!node) {
			    node = NEW_XSTR(STR_NEW0());
			}
			else {
			    switch (nd_type(node)) {
			      case NODE_STR:
				nd_set_type(node, NODE_XSTR);
				break;
			      case NODE_DSTR:
				nd_set_type(node, NODE_DXSTR);
				break;
			      default:
				node = NEW_NODE(NODE_DXSTR, Qnil, 1, NEW_LIST(node));
				break;
			    }
			}
			yyval = node;
		    /*%
			$$ = dispatch1(xstring_literal, $2);
		    %*/
		    }; return yystack},
  '457': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3145 of "parse.y"  */
    {
		    /*%%%*/
			int options = (yystack.valueAt(3-(3)));
			NODE *node = (yystack.valueAt(3-(2)));
			NODE *list, *prev;
			if (!node) {
			    node = NEW_LIT(reg_compile(STR_NEW0(), options));
			}
			else switch (nd_type(node)) {
			  case NODE_STR:
			    {
				VALUE src = node->nd_lit;
				nd_set_type(node, NODE_LIT);
				node->nd_lit = reg_compile(src, options);
			    }
			    break;
			  default:
			    node = NEW_NODE(NODE_DSTR, STR_NEW0(), 1, NEW_LIST(node));
			  case NODE_DSTR:
			    if (options & RE_OPTION_ONCE) {
				nd_set_type(node, NODE_DREGX_ONCE);
			    }
			    else {
				nd_set_type(node, NODE_DREGX);
			    }
			    node->nd_cflag = options & RE_OPTION_MASK;
			    if (!NIL_P(node->nd_lit)) reg_fragment_check(node->nd_lit, options);
			    for (list = (prev = node)->nd_next; list; list = list->nd_next) {
				if (nd_type(list->nd_head) == NODE_STR) {
				    VALUE tail = list->nd_head->nd_lit;
				    if (reg_fragment_check(tail, options) && prev && !NIL_P(prev->nd_lit)) {
					VALUE lit = prev == node ? prev->nd_lit : prev->nd_head->nd_lit;
					if (!literal_concat0(parser, lit, tail)) {
					    node = 0;
					    break;
					}
					rb_str_resize(tail, 0);
					prev->nd_next = list->nd_next;
					rb_gc_force_recycle((VALUE)list->nd_head);
					rb_gc_force_recycle((VALUE)list);
					list = prev;
				    }
				    else {
					prev = list;
				    }
                                }
				else {
				    prev = 0;
				}
                            }
			    if (!node->nd_next) {
				VALUE src = node->nd_lit;
				nd_set_type(node, NODE_LIT);
				node->nd_lit = reg_compile(src, options);
			    }
			    break;
			}
			yyval = node;
		    /*%
			$$ = dispatch2(regexp_literal, $2, $3);
		    %*/
		    }; return yystack},
  '458': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3210 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ZARRAY();
		    /*%
			$$ = dispatch0(words_new);
			$$ = dispatch1(array, $$);
		    %*/
		    }; return yystack},
  '459': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3219 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(array, $2);
		    %*/
		    }; return yystack},
  '460': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3229 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(words_new);
		    %*/
		    }; return yystack},
  '461': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3237 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append((yystack.valueAt(3-(1))), evstr2dstr((yystack.valueAt(3-(2)))));
		    /*%
			$$ = dispatch2(words_add, $1, $2);
		    %*/
		    }; return yystack},
  '463': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3255 of "parse.y"  */
    {
		    /*%%%*/
			yyval = literal_concat((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(word_add, $1, $2);
		    %*/
		    }; return yystack},
  '464': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3265 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ZARRAY();
		    /*%
			$$ = dispatch0(symbols_new);
			$$ = dispatch1(array, $$);
		    %*/
		    }; return yystack},
  '465': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3274 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(array, $2);
		    %*/
		    }; return yystack},
  '466': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3284 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(symbols_new);
		    %*/
		    }; return yystack},
  '467': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3292 of "parse.y"  */
    {
		    /*%%%*/
			(yystack.valueAt(3-(2))) = evstr2dstr((yystack.valueAt(3-(2))));
			nd_set_type((yystack.valueAt(3-(2))), NODE_DSYM);
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))));
		    /*%
			$$ = dispatch2(symbols_add, $1, $2);
		    %*/
		    }; return yystack},
  '468': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3304 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ZARRAY();
		    /*%
			$$ = dispatch0(qwords_new);
			$$ = dispatch1(array, $$);
		    %*/
		    }; return yystack},
  '469': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3313 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(array, $2);
		    %*/
		    }; return yystack},
  '470': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3323 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_ZARRAY();
		    /*%
			$$ = dispatch0(qsymbols_new);
			$$ = dispatch1(array, $$);
		    %*/
		    }; return yystack},
  '471': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3332 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(array, $2);
		    %*/
		    }; return yystack},
  '472': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3342 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(qwords_new);
		    %*/
		    }; return yystack},
  '473': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3350 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))));
		    /*%
			$$ = dispatch2(qwords_add, $1, $2);
		    %*/
		    }; return yystack},
  '474': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3360 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(qsymbols_new);
		    %*/
		    }; return yystack},
  '475': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3368 of "parse.y"  */
    {
		    /*%%%*/
			VALUE lit;
			lit = (yystack.valueAt(3-(2)))->nd_lit;
			(yystack.valueAt(3-(2)))->nd_lit = ID2SYM(rb_intern_str(lit));
			nd_set_type((yystack.valueAt(3-(2))), NODE_LIT);
			yyval = list_append((yystack.valueAt(3-(1))), (yystack.valueAt(3-(2))));
		    /*%
			$$ = dispatch2(qsymbols_add, $1, $2);
		    %*/
		    }; return yystack},
  '476': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3382 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(string_content);
		    %*/
		    }; return yystack},
  '477': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3390 of "parse.y"  */
    {
		    /*%%%*/
			yyval = literal_concat((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(string_add, $1, $2);
		    %*/
		    }; return yystack},
  '478': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3400 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(xstring_new);
		    %*/
		    }; return yystack},
  '479': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3408 of "parse.y"  */
    {
		    /*%%%*/
			yyval = literal_concat((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(xstring_add, $1, $2);
		    %*/
		    }; return yystack},
  '480': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3418 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = dispatch0(regexp_new);
		    %*/
		    }; return yystack},
  '481': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3426 of "parse.y"  */
    {
		    /*%%%*/
			NODE *head = (yystack.valueAt(2-(1))), *tail = (yystack.valueAt(2-(2)));
			if (!head) {
			    yyval = tail;
			}
			else if (!tail) {
			    yyval = head;
			}
			else {
			    switch (nd_type(head)) {
			      case NODE_STR:
				nd_set_type(head, NODE_DSTR);
				break;
			      case NODE_DSTR:
				break;
			      default:
				head = list_append(NEW_DSTR(Qnil), head);
				break;
			    }
			    yyval = list_append(head, tail);
			}
		    /*%
			$$ = dispatch2(regexp_add, $1, $2);
		    %*/
		    }; return yystack},
  '483': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3456 of "parse.y"  */
    {
			yyval = lex_strterm;
			lex_strterm = 0;
			lex_state = EXPR_BEG;
		    }; return yystack},
  '484': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3462 of "parse.y"  */
    {
		    /*%%%*/
			lex_strterm = (yystack.valueAt(3-(2)));
			yyval = NEW_EVSTR((yystack.valueAt(3-(3))));
		    /*%
			lex_strterm = $<node>2;
			$$ = dispatch1(string_dvar, $3);
		    %*/
		    }; return yystack},
  '485': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3472 of "parse.y"  */
    {
			(yystack.valueAt(1-(1))) = cond_stack;
			yyval = cmdarg_stack;
			cond_stack = 0;
			cmdarg_stack = 0;
		    }; return yystack},
  '486': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3478 of "parse.y"  */
    {
			yyval = lex_strterm;
			lex_strterm = 0;
			lex_state = EXPR_BEG;
		    }; return yystack},
  '487': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3483 of "parse.y"  */
    {
			yyval = brace_nest;
			brace_nest = 0;
		    }; return yystack},
  '488': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3488 of "parse.y"  */
    {
			cond_stack = (yystack.valueAt(6-(1)));
			cmdarg_stack = (yystack.valueAt(6-(2)));
			lex_strterm = (yystack.valueAt(6-(3)));
			brace_nest = (yystack.valueAt(6-(4)));
		    /*%%%*/
			if ((yystack.valueAt(6-(5)))) (yystack.valueAt(6-(5)))->flags &= ~NODE_FL_NEWLINE;
			yyval = new_evstr((yystack.valueAt(6-(5))));
		    /*%
			$$ = dispatch1(string_embexpr, $5);
		    %*/
		    }; return yystack},
  '489': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3503 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_GVAR((yystack.valueAt(1-(1))));
		    /*%
			$$ = dispatch1(var_ref, $1);
		    %*/
		    }; return yystack},
  '490': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3511 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_IVAR((yystack.valueAt(1-(1))));
		    /*%
			$$ = dispatch1(var_ref, $1);
		    %*/
		    }; return yystack},
  '491': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3519 of "parse.y"  */
    {
		    /*%%%*/
			yyval = NEW_CVAR((yystack.valueAt(1-(1))));
		    /*%
			$$ = dispatch1(var_ref, $1);
		    %*/
		    }; return yystack},
  '493': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3530 of "parse.y"  */
    {
			lex_state = EXPR_END;
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(symbol, $2);
		    %*/
		    }; return yystack},
  '498': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3547 of "parse.y"  */
    {
			lex_state = EXPR_END;
		    /*%%%*/
			yyval = dsym_node((yystack.valueAt(3-(2))));
		    /*%
			$$ = dispatch1(dyna_symbol, $2);
		    %*/
		    }; return yystack},
  '501': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3560 of "parse.y"  */
    {
		    /*%%%*/
			yyval = negate_lit((yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(unary, ripper_intern("-@"), $2);
		    %*/
		    }; return yystack},
  '502': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3568 of "parse.y"  */
    {
		    /*%%%*/
			yyval = negate_lit((yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(unary, ripper_intern("-@"), $2);
		    %*/
		    }; return yystack},
  '508': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3584 of "parse.y"  */
    {ifndef_ripper(yyval = keyword_nil);}; return yystack},
  '509': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3585 of "parse.y"  */
    {ifndef_ripper(yyval = keyword_self);}; return yystack},
  '510': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3586 of "parse.y"  */
    {ifndef_ripper(yyval = keyword_true);}; return yystack},
  '511': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3587 of "parse.y"  */
    {ifndef_ripper(yyval = keyword_false);}; return yystack},
  '512': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3588 of "parse.y"  */
    {ifndef_ripper(yyval = keyword__FILE__);}; return yystack},
  '513': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3589 of "parse.y"  */
    {ifndef_ripper(yyval = keyword__LINE__);}; return yystack},
  '514': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3590 of "parse.y"  */
    {ifndef_ripper(yyval = keyword__ENCODING__);}; return yystack},
  '515': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3594 of "parse.y"  */
    {
		    /*%%%*/
			if (!(yyval = gettable((yystack.valueAt(1-(1)))))) yyval = NEW_BEGIN(0);
		    /*%
			if (id_is_var(get_id($1))) {
			    $$ = dispatch1(var_ref, $1);
			}
			else {
			    $$ = dispatch1(vcall, $1);
			}
		    %*/
		    }; return yystack},
  '516': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3607 of "parse.y"  */
    {
		    /*%%%*/
			if (!(yyval = gettable((yystack.valueAt(1-(1)))))) yyval = NEW_BEGIN(0);
		    /*%
			$$ = dispatch1(var_ref, $1);
		    %*/
		    }; return yystack},
  '517': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3617 of "parse.y"  */
    {
			yyval = assignable((yystack.valueAt(1-(1))), 0);
		    /*%%%*/
		    /*%
			$$ = dispatch1(var_field, $$);
		    %*/
		    }; return yystack},
  '518': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3625 of "parse.y"  */
    {
		        yyval = assignable((yystack.valueAt(1-(1))), 0);
		    /*%%%*/
		    /*%
			$$ = dispatch1(var_field, $$);
		    %*/
		    }; return yystack},
  '521': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3639 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = Qnil;
		    %*/
		    }; return yystack},
  '522': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3647 of "parse.y"  */
    {
			lex_state = EXPR_BEG;
			command_start = TRUE;
		    }; return yystack},
  '523': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3652 of "parse.y"  */
    {
			yyval = (yystack.valueAt(4-(3)));
		    }; return yystack},
  '524': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3656 of "parse.y"  */
    {
		    /*%%%*/
			yyerrok;
			yyval = 0;
		    /*%
			yyerrok;
			$$ = Qnil;
		    %*/
		    }; return yystack},
  '525': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3668 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(paren, $2);
		    %*/
			lex_state = EXPR_BEG;
			command_start = TRUE;
		    }; return yystack},
  '526': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3678 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(1)));
			lex_state = EXPR_BEG;
			command_start = TRUE;
		    }; return yystack},
  '527': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3686 of "parse.y"  */
    {
			yyval = new_args_tail((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '528': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3690 of "parse.y"  */
    {
			yyval = new_args_tail((yystack.valueAt(2-(1))), Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '529': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3694 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, (yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    }; return yystack},
  '530': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3698 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, Qnone, (yystack.valueAt(1-(1))));
		    }; return yystack},
  '531': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3704 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '532': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3708 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, Qnone, Qnone);
		    }; return yystack},
  '533': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3714 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), Qnone, (yystack.valueAt(6-(6))));
		    }; return yystack},
  '534': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3718 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(8-(1))), (yystack.valueAt(8-(3))), (yystack.valueAt(8-(5))), (yystack.valueAt(8-(7))), (yystack.valueAt(8-(8))));
		    }; return yystack},
  '535': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3722 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), Qnone, Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '536': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3726 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), Qnone, (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '537': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3730 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(4-(1))), Qnone, (yystack.valueAt(4-(3))), Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '538': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3734 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(6-(1))), Qnone, (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '539': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3738 of "parse.y"  */
    {
			yyval = new_args((yystack.valueAt(2-(1))), Qnone, Qnone, Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '540': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3742 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), Qnone, (yystack.valueAt(4-(4))));
		    }; return yystack},
  '541': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3746 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(6-(1))), (yystack.valueAt(6-(3))), (yystack.valueAt(6-(5))), (yystack.valueAt(6-(6))));
		    }; return yystack},
  '542': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3750 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(2-(1))), Qnone, Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '543': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3754 of "parse.y"  */
    {
			yyval = new_args(Qnone, (yystack.valueAt(4-(1))), Qnone, (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '544': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3758 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, (yystack.valueAt(2-(1))), Qnone, (yystack.valueAt(2-(2))));
		    }; return yystack},
  '545': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3762 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, (yystack.valueAt(4-(1))), (yystack.valueAt(4-(3))), (yystack.valueAt(4-(4))));
		    }; return yystack},
  '546': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3766 of "parse.y"  */
    {
			yyval = new_args(Qnone, Qnone, Qnone, Qnone, (yystack.valueAt(1-(1))));
		    }; return yystack},
  '547': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3770 of "parse.y"  */
    {
			yyval = new_args_tail(Qnone, Qnone, Qnone);
			yyval = new_args(Qnone, Qnone, Qnone, Qnone, yyval);
		    }; return yystack},
  '548': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3777 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("formal argument cannot be a constant");
			yyval = 0;
		    /*%
			$$ = dispatch1(param_error, $1);
		    %*/
		    }; return yystack},
  '549': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3786 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("formal argument cannot be an instance variable");
			yyval = 0;
		    /*%
			$$ = dispatch1(param_error, $1);
		    %*/
		    }; return yystack},
  '550': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3795 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("formal argument cannot be a global variable");
			yyval = 0;
		    /*%
			$$ = dispatch1(param_error, $1);
		    %*/
		    }; return yystack},
  '551': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3804 of "parse.y"  */
    {
		    /*%%%*/
			yyerror("formal argument cannot be a class variable");
			yyval = 0;
		    /*%
			$$ = dispatch1(param_error, $1);
		    %*/
		    }; return yystack},
  '553': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3816 of "parse.y"  */
    {
			formal_argument(get_id((yystack.valueAt(1-(1)))));
			yyval = (yystack.valueAt(1-(1)));
		    }; return yystack},
  '554': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3823 of "parse.y"  */
    {
			arg_var(get_id((yystack.valueAt(1-(1)))));
		    /*%%%*/
			yyval = NEW_ARGS_AUX((yystack.valueAt(1-(1))), 1);
		    /*%
			$$ = get_value($1);
		    %*/
		    }; return yystack},
  '555': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3832 of "parse.y"  */
    {
			ID tid = internal_id();
			arg_var(tid);
		    /*%%%*/
			if (dyna_in_block()) {
			    (yystack.valueAt(3-(2)))->nd_value = NEW_DVAR(tid);
			}
			else {
			    (yystack.valueAt(3-(2)))->nd_value = NEW_LVAR(tid);
			}
			yyval = NEW_ARGS_AUX(tid, 1);
			yyval->nd_next = (yystack.valueAt(3-(2)));
		    /*%
			$$ = dispatch1(mlhs_paren, $2);
		    %*/
		    }; return yystack},
  '557': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3858 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(3-(1)));
			yyval->nd_plen++;
			yyval->nd_next = block_append(yyval->nd_next, (yystack.valueAt(3-(3)))->nd_next);
			rb_gc_force_recycle((VALUE)(yystack.valueAt(3-(3))));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '558': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3871 of "parse.y"  */
    {
			arg_var(formal_argument(get_id((yystack.valueAt(2-(1))))));
			yyval = assignable((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%%%*/
			yyval = NEW_KW_ARG(0, yyval);
		    /*%
			$$ = rb_assoc_new($$, $2);
		    %*/
		    }; return yystack},
  '559': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3883 of "parse.y"  */
    {
			arg_var(formal_argument(get_id((yystack.valueAt(2-(1))))));
			yyval = assignable((yystack.valueAt(2-(1))), (yystack.valueAt(2-(2))));
		    /*%%%*/
			yyval = NEW_KW_ARG(0, yyval);
		    /*%
			$$ = rb_assoc_new($$, $2);
		    %*/
		    }; return yystack},
  '560': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3895 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '561': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3903 of "parse.y"  */
    {
		    /*%%%*/
			NODE *kws = (yystack.valueAt(3-(1)));

			while (kws->nd_next) {
			    kws = kws->nd_next;
			}
			kws->nd_next = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '562': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3920 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '563': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3928 of "parse.y"  */
    {
		    /*%%%*/
			NODE *kws = (yystack.valueAt(3-(1)));

			while (kws->nd_next) {
			    kws = kws->nd_next;
			}
			kws->nd_next = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '566': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3948 of "parse.y"  */
    {
			shadowing_lvar(get_id((yystack.valueAt(2-(2)))));
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '567': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3953 of "parse.y"  */
    {
			yyval = internal_id();
		    }; return yystack},
  '568': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3959 of "parse.y"  */
    {
			arg_var(formal_argument(get_id((yystack.valueAt(3-(1))))));
			yyval = assignable((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%%%*/
			yyval = NEW_OPT_ARG(0, yyval);
		    /*%
			$$ = rb_assoc_new($$, $3);
		    %*/
		    }; return yystack},
  '569': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3971 of "parse.y"  */
    {
			arg_var(formal_argument(get_id((yystack.valueAt(3-(1))))));
			yyval = assignable((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%%%*/
			yyval = NEW_OPT_ARG(0, yyval);
		    /*%
			$$ = rb_assoc_new($$, $3);
		    %*/
		    }; return yystack},
  '570': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3983 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '571': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 3991 of "parse.y"  */
    {
		    /*%%%*/
			NODE *opts = (yystack.valueAt(3-(1)));

			while (opts->nd_next) {
			    opts = opts->nd_next;
			}
			opts->nd_next = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '572': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4007 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(1-(1)));
		    /*%
			$$ = rb_ary_new3(1, $1);
		    %*/
		    }; return yystack},
  '573': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4015 of "parse.y"  */
    {
		    /*%%%*/
			NODE *opts = (yystack.valueAt(3-(1)));

			while (opts->nd_next) {
			    opts = opts->nd_next;
			}
			opts->nd_next = (yystack.valueAt(3-(3)));
			yyval = (yystack.valueAt(3-(1)));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '576': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4035 of "parse.y"  */
    {
		    /*%%%*/
			if (!is_local_id((yystack.valueAt(2-(2)))))
			    yyerror("rest argument must be local variable");
		    /*% %*/
			arg_var(shadowing_lvar(get_id((yystack.valueAt(2-(2))))));
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(rest_param, $2);
		    %*/
		    }; return yystack},
  '577': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4048 of "parse.y"  */
    {
		    /*%%%*/
			yyval = internal_id();
			arg_var(yyval);
		    /*%
			$$ = dispatch1(rest_param, Qnil);
		    %*/
		    }; return yystack},
  '580': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4063 of "parse.y"  */
    {
		    /*%%%*/
			if (!is_local_id((yystack.valueAt(2-(2)))))
			    yyerror("block argument must be local variable");
			else if (!dyna_in_block() && local_id((yystack.valueAt(2-(2)))))
			    yyerror("duplicated block argument name");
		    /*% %*/
			arg_var(shadowing_lvar(get_id((yystack.valueAt(2-(2))))));
		    /*%%%*/
			yyval = (yystack.valueAt(2-(2)));
		    /*%
			$$ = dispatch1(blockarg, $2);
		    %*/
		    }; return yystack},
  '581': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4080 of "parse.y"  */
    {
			yyval = (yystack.valueAt(2-(2)));
		    }; return yystack},
  '582': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4084 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = Qundef;
		    %*/
		    }; return yystack},
  '583': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4094 of "parse.y"  */
    {
		    /*%%%*/
			value_expr((yystack.valueAt(1-(1))));
			yyval = (yystack.valueAt(1-(1)));
		        if (!yyval) yyval = NEW_NIL();
		    /*%
			$$ = $1;
		    %*/
		    }; return yystack},
  '584': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4103 of "parse.y"  */
    {lex_state = EXPR_BEG;}; return yystack},
  '585': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4104 of "parse.y"  */
    {
		    /*%%%*/
			if ((yystack.valueAt(4-(3))) == 0) {
			    yyerror("can't define singleton method for ().");
			}
			else {
			    switch (nd_type((yystack.valueAt(4-(3))))) {
			      case NODE_STR:
			      case NODE_DSTR:
			      case NODE_XSTR:
			      case NODE_DXSTR:
			      case NODE_DREGX:
			      case NODE_LIT:
			      case NODE_ARRAY:
			      case NODE_ZARRAY:
				yyerror("can't define singleton method for literals");
			      default:
				value_expr((yystack.valueAt(4-(3))));
				break;
			    }
			}
			yyval = (yystack.valueAt(4-(3)));
		    /*%
			$$ = dispatch1(paren, $3);
		    %*/
		    }; return yystack},
  '587': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4134 of "parse.y"  */
    {
		    /*%%%*/
			yyval = (yystack.valueAt(2-(1)));
		    /*%
			$$ = dispatch1(assoclist_from_args, $1);
		    %*/
		    }; return yystack},
  '589': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4151 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_concat((yystack.valueAt(3-(1))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = rb_ary_push($1, $3);
		    %*/
		    }; return yystack},
  '590': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4161 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append(NEW_LIST((yystack.valueAt(3-(1)))), (yystack.valueAt(3-(3))));
		    /*%
			$$ = dispatch2(assoc_new, $1, $3);
		    %*/
		    }; return yystack},
  '591': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4169 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append(NEW_LIST(NEW_LIT(ID2SYM((yystack.valueAt(2-(1)))))), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch2(assoc_new, $1, $2);
		    %*/
		    }; return yystack},
  '592': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4177 of "parse.y"  */
    {
		    /*%%%*/
			yyval = list_append(NEW_LIST(0), (yystack.valueAt(2-(2))));
		    /*%
			$$ = dispatch1(assoc_splat, $2);
		    %*/
		    }; return yystack},
  '614': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4235 of "parse.y"  */
    {yyerrok;}; return yystack},
  '617': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4240 of "parse.y"  */
    {yyerrok;}; return yystack},
  '618': function (yystack) {
    /* Line 234 of lalr1.js  */
/* Line 4244 of "parse.y"  */
    {
		    /*%%%*/
			yyval = 0;
		    /*%
			$$ = Qundef;
		    %*/
		    }; return yystack}
  }

  function yyaction (yyn, yystack, yylen) // int yyn, YYStack yystack, int yylen
  {
    var yyloc = yystack.locationFromNthItemToCurrent(yylen);

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

    yy_reduce_print(yyn, yystack);  // TODO: step into

    var actionClosure = actionsTable[yyn]
    if (actionClosure)
      actionClosure(yystack)

    yy_symbol_print("-> $$ =", yyr1_[yyn], yyval, yyloc); // TODO: step into

    yystack.pop(yylen);
    yylen = 0;

    // Shift the result of the reduction.
    yyn = yyr1_[yyn];
    var yystate = yypgoto_[yyn - yyntokens_] + yystack.stateAt(0);
    if (0 <= yystate && yystate <= yylast_ && yycheck_[yystate] == yystack.stateAt(0))
      yystate = yytable_[yystate];
    else
      yystate = yydefgoto_[yyn - yyntokens_];

    yystack.push(yystate, yyval, yyloc);
    return YYNEWSTATE;
  }

  /**
   * Parse input from the scanner that was specified at object construction
   * time.  Return whether the end of the input was reached successfully.
   *
   * @return <tt>true</tt> if the parsing succeeds.  Note that this does not
   *          imply that there were no syntax errors.
   */
  this.parse = function parse ()
  {
    /// Lookahead and lookahead in internal form.
    var yychar = yyempty_;
    var yytoken = 0;

    /* State.  */
    var yyn = 0;
    var yylen = 0;
    var yystate = 0;

    var yystack = new YYStack();

    /* Error handling.  */
    var yynerrs_ = 0;
    /// The location where the error started.
    var yyerrloc = null;

    /// Location of the lookahead.
    var yylloc = new Location(null, null);

    /// @$.
    var yyloc;

    /// Semantic value of the lookahead.
    var yylval = null;

    yycdebug("Starting parse");
    yyerrstatus_ = 0;


    // Initialize the stack.
    yystack.push(yystate, yylval, yylloc);

    var label = YYNEWSTATE;
    for (;;)
    switch (label)
    {
      //----------------.
      // New state.     |
      //---------------/
      case YYNEWSTATE:
        // Unlike in the C/C++ skeletons, the state is already pushed when we come here.

        yycdebug("Entering state " + yystate);
        if (yydebug)
          yystack.print();

        // Accept?
        if (yystate == yyfinal_)
          return true;

        // Take a decision.
        // First try without lookahead.
        yyn = yypact_[yystate];
        if (yy_pact_value_is_default_ (yyn))
        {
          // goto
          label = YYDEFAULT;
          break; 
        }

        // Read a lookahead token.
        if (yychar == yyempty_)
        {
          yycdebug("Reading a token: ");
          yychar = yylexer.yylex();

          yylloc = new Location(yylexer.getStartPos(), yylexer.getEndPos());
          yylval = yylexer.getLVal();
        }


        // Convert token to internal form.
        if (yychar <= EOF)
        {
          yychar = yytoken = EOF;
          yycdebug("Now at end of input.");
        }
        else
        {
          yytoken = yytranslate_(yychar);
          yy_symbol_print("Next token is", yytoken, yylval, yylloc);
        }

        // If the proper action on seeing token YYTOKEN
        // is to reduce or to detect an error, take that action.
        yyn += yytoken;
        if (yyn < 0 || yylast_ < yyn || yycheck_[yyn] != yytoken)
        {
          // goto
          label = YYDEFAULT;
          break;
        }
        // <= 0 means reduce or error.
        else if ((yyn = yytable_[yyn]) <= 0)
        {
          if (yy_table_value_is_error_(yyn))
          {
            // goto
            label = YYERRLAB;
            break;
          }
          else
          {
            yyn = -yyn;

            // goto
            label = YYREDUCE;
            break;
          }
        }

        else
        {
          // Shift the lookahead token.
          yy_symbol_print("Shifting", yytoken, yylval, yylloc);

          // Discard the token being shifted.
          yychar = yyempty_;

          // Count tokens shifted since error;
          // after three, turn off error status.
          if (yyerrstatus_ > 0)
            --yyerrstatus_;

          yystate = yyn;
          yystack.push(yystate, yylval, yylloc);

          //goto
          label = YYNEWSTATE;
          break;
        }

        // won't reach here
        break;

      //-----------------------------------------------------------.
      // yydefault -- do the default action for the current state. |
      //----------------------------------------------------------/
      case YYDEFAULT:
        yyn = yydefact_[yystate];
        if (yyn == 0)
          label = YYERRLAB;
        else
          label = YYREDUCE;
        break;

      //------------------------------------.
      //  yyreduce -- Do a reduction.       |
      //-----------------------------------/
      case YYREDUCE:
        yylen = yyr2_[yyn];
        label = yyaction(yyn, yystack, yylen);
        yystate = yystack.stateAt(0);
        // goto label
        break;

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
          yyerror(yylloc, yysyntax_error(yystate, yytoken));
        }

        yyerrloc = yylloc;
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
        break;

      //--------------------------------------------------.
      // errorlab -- error raised explicitly by YYERROR.  |
      //-------------------------------------------------/
      case YYERROR:

        yyerrloc = yystack.locationAt(yylen - 1);
        // Do not reclaim the symbols of the rule
        // which action triggered this YYERROR.
        yystack.pop(yylen);
        yylen = 0;
        yystate = yystack.stateAt(0);
        label = YYERRLAB1;
        break;

      //--------------------------------------------------------------.
      // yyerrlab1 -- common code for both syntax error and YYERROR.  |
      //-------------------------------------------------------------/
      case YYERRLAB1:
        yyerrstatus_ = 3; // Each real token shifted decrements this.

        for (;;)
        {
          yyn = yypact_[yystate];
          if (!yy_pact_value_is_default_(yyn))
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
            return 'empty stack while handling error';
          }

          yyerrloc = yystack.locationAt(0);
          yystack.pop(1);
          yystate = yystack.stateAt(0);
          if (yydebug)
          {
            yystack.print();
          }
        }


        // Muck with the stack to setup for yylloc.
        yystack.push(0, null, yylloc);
        yystack.push(0, null, yyerrloc);
        yyloc = yylloc(yystack, 2);
        yystack.pop(2);

        // Shift the error token.
        yy_symbol_print("Shifting", yystos_[yyn], yylval, yyloc);

        yystate = yyn;
        yystack.push(yyn, yylval, yyloc);
        // goto
        label = YYNEWSTATE;
        break;

      //--------------------------.
      // Accept.                  |
      //-------------------------/
      case YYACCEPT:
        return true;

      //----------------------.
      // Abort.               |
      //---------------------/
      case YYABORT:
        return false;
    }
  }

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

  /*--------------------------------.
  | Print this symbol on YYOUTPUT.  |
  `--------------------------------*/

  function yy_symbol_print(message, yytype, yyvaluep, yylocationp)
  {
    if (!yydebug)
      return;
    
    yycdebug
    (
      message
      + (yytype < yyntokens_ ? " token " : " nterm ")
      + yytname_[yytype]
      + " ("
      + yylocationp + ": "
      + (yyvaluep == null ? "(null)" : yyvaluep.toString())
      + ")"
    );
  }


  // Generate an error message.
  function yysyntax_error(yystate, tok)
  {
    if (errorVerbose)
    {
      /* There are many possibilities here to consider:
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
      if (tok != yyempty_)
      {
        // FIXME: This method of building the message is not compatible
        // with internationalization.
        var res = "syntax error, unexpected ";
        res += yytnamerr_(yytname_[tok]);
        var yyn = yypact_[yystate];
        if (!yy_pact_value_is_default_(yyn))
        {
          // Start YYX at -YYN if negative to avoid negative indexes in YYCHECK.
          // In other words, skip the first -YYN actions for this state
          // because they are default actions.
          var yyxbegin = yyn < 0 ? -yyn : 0;
          // Stay within bounds of both yycheck and yytname.
          var yychecklim = yylast_ - yyn + 1;
          var yyxend = yychecklim < yyntokens_ ? yychecklim : yyntokens_;
          var count = 0;
          for (var x = yyxbegin; x < yyxend; ++x)
          {
            if
            (
              yycheck_[x + yyn] == x
              && x != yyterror_
              && !yy_table_value_is_error_(yytable_[x + yyn])
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
                yycheck_[x + yyn] == x
                && x != yyterror_
                && !yy_table_value_is_error_(yytable_[x + yyn])
              )
              {
                res += (count++ == 0 ? ", expecting " : " or ");
                res += yytnamerr_(yytname_[x]);
              }
            }
          }
        }
        return res;
      } // if (tok != yyempty_)
    } // if (errorVerbose)

    return "syntax error";
  }

  // Whether the given <code>yypact_</code> value indicates a defaulted state.
  // @param yyvalue   the value to check
  function yy_pact_value_is_default_(yyvalue)
  {
    return yyvalue == yypact_ninf_;
  }

  // Whether the given <code>yytable_</code> value indicates a syntax error.
  // @param yyvalue   the value to check
  function yy_table_value_is_error_(yyvalue)
  {
    return yyvalue == yytable_ninf_;
  }

  // YYPACT[STATE-NUM] -- Index in YYTABLE of the portion describing STATE-NUM.
  var yypact_ninf_ = -821;
  var yypact_ =
  [
    //]
      -821,   115,  2751,  -821,  8004,  -821,  -821,  -821,  7459,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  8134,  8134,  -821,  -821,
    8134,  4270,  3814,  -821,  -821,  -821,  -821,    42,  7309,    11,
    -821,    72,  -821,  -821,  -821,  3054,  3966,  -821,  -821,  3206,
    -821,  -821,  -821,  -821,  -821,  -821,  9694,  9694,    89,  5458,
    9824,  8524,  8914,  7752,  -821,  7159,  -821,  -821,  -821,    10,
      39,    70,    97,   100,  9954,  9694,  -821,   -32,  -821,   895,
    -821,   284,  -821,  -821,    62,   276,   214,  -821,   198, 10084,
    -821,   244,  3185,   241,   374,  -821,  9824,  9824,  -821,  -821,
    6464, 10210, 10336, 10462,  7008,    23,   151,  -821,  -821,   279,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
      46,    52,  -821,   300,   357,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,   257,  -821,  -821,  -821,  -821,
     283,  9694,   376,  5614,  9694,  9694,  9694,  9694,  -821,   311,
    3185,   349,  -821,  -821,   347,   381,   157,   319,   360,   373,
     350,  -821,  -821,  -821,  6334,  -821,  8134,  8134,  -821,  -821,
    6594,  -821,  9824,   574,  -821,   351,   363,  5770,  -821,  -821,
    -821,   385,   397,    62,  -821,   454,   456,   403,  8264,  -821,
    5458,   406,   -32,  -821,   895,    11,   440,  -821,   284,    11,
     410,   466,   491,  -821,   349,   463,   491,  -821,    11,   558,
     323, 10588,   469,  -821,   523,   529,   553,   583,  -821,  -821,
    -821,  -821,  -821,  -821,   331,  -821,   615,   712,   471,   520,
     717,   541,    36,   560,   747,   563,    59,   580,   586,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  6724,  9824,  9824,  9824,
    9824,  8264,  9824,  9824,  -821,  -821,  -821,   522,  -821,  -821,
    -821,  9044,  -821,  5458,  7878,   540,  9044,  9694,  9694,  9694,
    9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,
    9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,  9694,
    9694,  9694,  9694,  2595,  8134, 10912,  4730,   284,    99,    99,
    9824,  9824,   -32,   676,   555,   662,  -821,  -821,   603,   697,
      48,    65,    79,   313,   427,  9824,   132,  -821,   180,   626,
    -821,  -821,  -821,  -821,    25,    29,   252,   296,   332,   418,
     441,   477,   513,  -821,  -821,  -821,    23,  -821,  -821, 11006,
    -821,  -821,  9954,  9954,  -821,  -821,   388,  -821,  -821,  -821,
    9694,  9694,  8394,  -821,  -821, 11100,  8134, 11194,  9694,  9694,
    8654,  -821,    11,   570,  -821,  -821,    11,  -821,   585,   597,
    -821,   110,  -821,  -821,  -821,  -821,  -821,  7459,  -821,  9694,
    5918,   589, 11100, 11194,  9694,   895,   587,    11,  -821,  -821,
    6854,   600,    11,  -821,  -821,  8784,  -821,  -821,  8914,  -821,
    -821,  -821,   351,   653,  -821,  -821,  -821,   628, 10588, 11288,
    8134, 11382,  1104,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,   254,  -821,  -821,   625,  -821,
    -821,  -821,   435,  -821,   633,  -821,  9694,  9694,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,    20,    20,  -821,
    -821,    20,  9694,  -821,   640,   645,  -821,    11, 10588,   656,
    -821,  -821,  -821,   624,  3337,  -821,  -821,   456,  1779,  1779,
    1779,  1779,   811,   811,  2020,  1928,  1779,  1779,  3489,  3489,
     278,   278,  4725,   811,   811,   870,   870,   818,   330,   330,
     456,   456,   456,  4422,  3358,  4574,  3510,   397,   659,  -821,
      11,   518,  -821,   547,  -821,   397,  4118,   799,   808,  -821,
    4886,   801,  5198,    55,    55,   676,  9174,   799,    83, 11476,
    8134, 11570,  -821,   284,  -821,   653,  -821,   -32,  -821,  -821,
    -821, 11664,  8134, 11006,  4730,  9824,  1436,  -821,  -821,  -821,
    1138,  -821,  2881,  -821,  3185,  7459,  3033,  -821,  9694,   349,
    -821,   350,  2902,  3662,    11,   412,   443,  -821,  -821,  -821,
    -821,  8394,  8654,  -821,  -821,  9824,  3185,   671,  -821,  -821,
    -821,  3185,  5918,   -13,  -821,  -821,   491, 10588,   628,   557,
     341,    11,   404,   442,   691,  -821,  -821,  -821,  -821,  9694,
    -821,  1023,  -821,  -821,  -821,  -821,  -821,  1087,    57,  -821,
    -821,  -821,  -821,  -821,   672,  -821,   674,   772,   677,  -821,
     678,   782,   684,   790,  -821,  -821,   823,  -821,  -821,  -821,
    -821,  -821,   456,   456,  -821,   991,  6074,  -821,  -821,  5770,
      20,  6074,   694,  9304,  -821,   628, 10588,  9954,  9694,   714,
    9954,  9954,  -821,   522,   397,   698,   617,  9954,  9954,  -821,
     522,   397,  -821,  -821,  9434,   839,  -821,   631,  -821,   839,
    -821,  -821,  -821,  -821,   799,   230,  -821,   127,   158,    11,
      91,   107,  9824,   -32,  -821,  9824,  4730,   557,   341,  -821,
      11,   799,   110,  1087,  4730,   -32,  7609,  -821,   151,   276,
    -821,  9694,  -821,  -821,  -821,  9694,  9694,   506,  9694,  9694,
     713,   110,  -821,   718,  -821,  -821,   511,  9694,  -821,  -821,
    1023,   708,  -821,   716,    11,  -821,    11,  6074,  5770,  -821,
    1087,  -821,   673,  -821,  -821,  -821,    -4,  -821,  1087,  -821,
    -821,  1132,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
     739, 10714,  -821,    11,   741,   731,  -821,   734,   677,  -821,
     738,   740,  -821,   744,   886,   751,  5770,   892,  9694,   752,
     628,  3185,  9694,  -821,  3185,  -821,  3185,  -821,  -821,  -821,
    9954,  -821,  3185,  -821,  3185,  -821,  -821,   640,  -821,   800,
    -821,  5328,   899,  -821,  9824,   799,  -821,   799,  6074,  6074,
    -821,  9564,  5042,   143,    55,  -821,   -32,   799,  -821,  -821,
    -821,    11,   799,  -821,  -821,  -821,  -821,  3185,  9694,  8654,
    -821,  -821,  -821,    11,   877,   763,  1114,  -821,   761,   910,
     774,  -821,  -821,   792,   793,  -821,   677,  -821,   794,  -821,
     803,   794,  6204, 10714,   867,   681,   828,  -821,  1457,  -821,
     719,  -821,  -821,  1457,  -821,  1341,  -821,   806,  -821,  -821,
     777,  -821,   815,  3185,  -821,  3185, 10840,    99,  -821,  -821,
    6074,  -821,  -821,    99,  -821,  -821,   799,   799,  -821,   498,
    -821,  4730,  -821,  -821,  -821,  -821,  1436,  -821,   816,   877,
     743,  -821,  -821,  -821,  -821,  1087,  -821,  1132,  -821,  -821,
    1132,  -821,  1132,  -821,  -821,   847,   681,  -821, 11758,  -821,
    -821,   822,   824,  -821,   677,   826,  -821,   827,   826,  -821,
     550,  -821,  -821,  -821,   923,  -821,   702,   529,   553,   583,
    4730,  -821,  4886,  -821,  -821,  -821,  -821,  -821,  6074,   799,
    4730,   877,   816,   877,   830,   794,   831,   794,   794,  -821,
     832,   841,  1457,  -821,  1341,  -821,  -821,  1341,  -821,  1341,
    -821,  -821,   806,  -821,   653, 11852,  8134, 11946,   808,   631,
     799,  -821,   799,   816,   877,  -821,  1132,  -821,  -821,  -821,
     826,   833,   826,   826,  -821,   152,   341,    11,   116,   195,
    -821,  -821,  -821,  -821,   816,   794,  -821,  1341,  -821,  -821,
    -821,   275,  -821,   826,  -821
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
      -821,  -821,  -821,  -386,  -821,    41,  -821,  -542,   285,  -821,
     545,  -821,    35,  -821,  -310,   -43,   -70,    19,  -821,  -573,
    -821,   680,     9,   905,  -159,    27,   -73,  -821,  -404,     6,
    1733,  -328,   904,   -52,  -821,   -24,  -821,  -821,    13,  -821,
    1007,  -821,   909,  -821,   -72,   289,  -336,   141,     5,  -821,
    -320,  -212,    58,  -313,   -21,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,    49,  -821,  -821,  -821,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,  -520,  -348,  -519,    -6,  -634,  -821,  -685,
    -773,   245,   333,    37,  -821,  -405,  -821,  -680,  -821,     8,
    -821,  -821,  -821,  -821,  -821,   270,  -821,  -821,  -821,  -821,
    -821,  -821,  -821,   -95,  -821,  -821,  -535,  -821,     3,  -821,
    -821,  -821,  -821,  -821,  -821,   927,  -821,  -821,  -821,  -821,
     748,  -821,  -821,  -821,  -821,  -821,  -821,  -821,   971,  -821,
    -116,  -821,  -821,  -821,  -821,  -821,     2,  -821,     7,  -821,
    1388,  1539,   938,  1901,  1724,  -821,  -821,   108,  -450,  -410,
    -412,  -820,  -627,  -718,  -134,   251,   135,  -821,  -821,  -821,
     -83,  -721,  -809,   140,   271,  -821,  -574,  -821,  -463,  -579,
    -821,  -821,  -821,   102,  -374,  -821,  -322,  -821,   654,   -29,
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
  var yytable_ninf_ = -619;
  var yytable_ =
  [
    //]
       116,   400,   316,   283,   234,   305,   325,   258,   421,   432,
     198,   572,   232,   526,   235,   199,   521,   359,   560,   459,
     362,   196,   659,   461,   775,   208,   208,   229,   305,   208,
     198,   558,   273,   566,   451,   199,   757,    69,   453,    69,
     724,   196,   394,   357,   357,   117,   617,   357,   586,   263,
     267,    84,   741,    84,   627,   723,   306,   726,   273,   272,
     660,   363,   882,   766,   638,   215,   215,   889,   196,   215,
     273,   273,   273,  -102,   214,   214,   256,   600,   214,   317,
     614,   842,   720,   299,   617,   847,   777,   972,   314,   787,
    -103,   447,   610,   558,   966,   566,   878,   488,    84,   215,
     610,   938,   274,   689,  -110,   684,   691,   196,  -109,   261,
     654,   811,   569,   215,   695,     3,  -105,   -74,   220,   220,
     494,   630,   220,   896,   302,   397,   303,  -509,   274,  -105,
     827,  -508,  -107,   655,   641,   215,   215,   835,   -88,   215,
     368,   379,   379,   775,   875,   247,   659,   312,   313,   630,
    -517,   853,  -106,   262,   266,   685,  -518,   212,   222,   297,
     298,   223,   858,   489,   517,  -106,   992,   289,  -104,   231,
     479,   316,   482,   398,   486,  -509,  -102,   314,   486,  -508,
     882,   587,  -103,  -108,   584,   778,   495,   431,   585,   433,
     305,   941,   972,   966,   857,   230,   291,   -93,   466,   -93,
     231,   618,   862,   -94,   850,   620,   884,   659,  -107,   315,
     623,   302,   414,   303,   890,   227,   -94,   421,   414,   237,
    1023,   859,   812,   449,   889,   430,   633,   293,   901,   902,
    -101,   635,   882,   208,  -100,   208,   208,   500,   501,   502,
     503,   450,   -96,   569,   729,   776,   763,   775,   617,   775,
     273,  1044,    84,   462,   295,   302,   740,   303,   -98,   630,
     789,  -517,   792,   739,   357,   357,   357,   357,   231,   505,
     506,   630,  -105,   215,  -105,   215,   215,   256,   -97,   215,
    -596,   215,   214,   445,   214,   816,    84,  -102,  -104,   882,
     573,   574,   820,   659,   -95,   985,   694,    84,   315,    84,
     305,   610,   610,   273,   319,  -596,   941,   949,  -106,   -99,
    -106,  -597,   775,   994,   588,   473,   590,   357,   357,   887,
     274,   312,   313,   887,   962,   924,   220,   925,   220,   967,
     519,   861,   583,   575,   251,   930,   302,   933,   303,  -593,
     513,    69,   935,  -338,   321,   522,   504,   499,   327,   322,
     256,  -107,   430,  -107,  -510,    84,   215,   215,   215,   215,
      84,   215,   215,   208,   775,   422,   775,   425,   564,   678,
     215,   996,    84,   274,   326,   215,   678,   852,   474,   515,
     475,   851,   464,   465,   515,  1006,   302,   521,   303,   989,
    -338,  -338,   473,   764,   986,   466,    56,   775,  -511,   754,
     327,   838,  -510,   215,   402,    84,   983,   984,   404,   215,
     215,   677,   564,   624,   430,  -503,   348,   349,   350,   351,
     352,   601,   603,  -518,   215,   208,   414,   414,  1031,   -96,
     564,  -104,   406,  -104,  -513,   812,   230,   887,   116,   198,
     812,   410,   812,  -293,   199,   466,  -511,   273,  1022,  -103,
     196,   215,   215,  -594,   411,   474,   564,   475,   476,  1051,
    -593,   403,  -503,  -503,   418,   215,  -593,   -98,   430,  1021,
     350,   351,   352,   946,   948,    69,   353,   419,   951,   208,
     953,   954,  -513,   415,   564,   702,   659,  -110,   251,    84,
    -293,  -293,   444,   709,  -597,   617,   473,   273,   412,    84,
    1042,   420,  1043,  -110,   438,   688,   688,   444,  -101,   688,
     440,   722,   722,   841,   611,   576,   758,   274,  -109,   215,
    -512,   860,   441,   354,   355,   734,   327,   699,   747,  -506,
     416,   417,   473,  -109,   -96,   251,   481,  -431,   224,   812,
     870,   812,  -105,  -514,   812,   705,   812,   759,   754,   610,
     227,   805,   742,   877,  -100,   -96,   442,   636,   -96,   474,
     448,   475,   -96,   703,   765,   454,   716,   274,  -512,   980,
     -73,   710,   -98,  -107,  -594,   982,  -506,  -506,   430,  -503,
    -594,   752,   761,  -600,   812,  1025,  1027,  1028,  1029,   208,
     430,  -514,   680,   -98,   564,   474,   -98,   475,   750,   705,
     -98,   208,   808,   416,   443,   749,   564,   198,   251,   414,
     868,   460,   199,  -431,   463,  -506,   273,   455,   196,    84,
     468,    84,   707,   466,   456,   469,   705,  -503,   434,   215,
     116,  -515,   828,   509,   725,  1052,  -104,   435,   436,   747,
     934,   215,   458,    84,   215,   844,   841,   483,  -105,   456,
     496,   708,   937,   865,   888,  -516,   497,   891,  -431,  -600,
    -431,  -431,   854,  -506,   784,   856,   784,    69,   487,   -96,
     813,   855,   470,   471,   215,   273,   473,  -107,  -515,  -515,
    1037,    84,    74,   863,    74,  -284,   274,   490,   688,   357,
     493,   520,   357,   576,   864,   630,    74,    74,   -98,   886,
      74,  1012,  -516,  -516,  -600,   579,  -600,  -600,   231,   750,
    -596,   498,   840,   843,   705,   843,   522,   843,   578,   823,
     825,   830,   582,   760,   619,   705,   831,   833,   591,    74,
      74,   649,  -284,  -284,   632,    84,   621,   628,    84,   474,
      84,   475,   478,   650,    74,   274,   215,  -104,   622,   215,
     215,   -88,   580,   581,   697,  -294,   215,   215,   414,   196,
     769,   813,   645,   646,   647,   648,    74,    74,   -95,   965,
      74,   968,   515,   473,   923,   592,   593,   801,   473,   637,
     273,   215,   679,   958,   215,    84,   653,   654,   813,   650,
     681,  -268,   722,    84,   932,   769,   693,   645,   646,   647,
     648,   357,  -294,  -294,  1015,   784,   784,   696,   473,   712,
     655,   995,  -422,   997,   718,   808,   714,   964,   998,   762,
     808,   767,   808,   780,   785,   782,    84,    84,   786,   788,
     592,   593,   653,   654,   790,   791,   474,   918,   475,   480,
     922,   474,   793,   475,   484,  -269,   822,   904,   906,   914,
     895,  1016,  1017,   829,   841,   717,   655,   719,   969,   874,
     645,   646,   647,   648,   869,    84,   871,   876,  1030,   893,
    1032,   474,   273,   475,   491,  1033,   897,   795,   796,   215,
     797,   327,   898,    74,   784,   900,    44,    45,   327,   903,
      84,   905,  1045,   215,   993,   273,   908,    84,    84,   909,
     907,    84,   911,  -270,    74,   916,    74,    74,   920,   340,
      74,   341,    74,  1053,   939,   942,   340,    74,   341,   808,
     943,   808,   944,   957,   808,   973,   808,   843,    74,   769,
      74,   645,   646,   647,   648,   307,   308,   309,   310,   311,
     327,    84,   956,   945,   947,   950,   345,   346,   347,   348,
     349,   350,   351,   352,   952,  1013,   348,   349,   350,   351,
     352,   264,   784,   959,   808,   976,  -271,   991,   340,    84,
     341,   814,   999,  1002,   815,  1004,   817,  1007,  1009,  1014,
      84,  1024,  1026,   770,  1047,  -596,    74,    74,    74,    74,
      74,    74,    74,    74,  -597,   634,   366,   383,  1003,  1005,
     836,    74,  1008,    74,  1010,  1011,    74,   347,   348,   349,
     350,   351,   352,  1041,   430,   873,   716,   843,   802,   866,
    1034,  1040,   705,   210,   210,   208,   401,   210,   287,    84,
     564,    84,   395,   885,    74,   963,    74,    84,   961,    84,
      74,    74,   492,   800,   990,   645,   646,   647,   648,   801,
     597,   883,     0,   244,   246,    74,     0,     0,   210,   210,
       0,   650,   879,   880,     0,   215,     0,  1046,  1048,  1049,
    1050,   300,   301,     0,     0,   769,     0,   645,   646,   647,
     648,     0,    74,    74,     0,     0,     0,     0,     0,     0,
    1054,     0,     0,     0,     0,     0,    74,   651,     0,     0,
       0,   910,     0,   652,   653,   654,     0,     0,     0,     0,
     405,     0,     0,   407,   408,   409,     0,     0,     0,     0,
      74,     0,     0,     0,     0,     0,   919,     0,   655,   770,
      74,   656,     0,   926,   927,   771,     0,   929,  -618,   644,
       0,   645,   646,   647,   648,   649,  -618,  -618,  -618,   231,
      74,  -618,  -618,  -618,     0,  -618,   644,   650,   645,   646,
     647,   648,   649,     0,  -618,  -618,   769,     0,   645,   646,
     647,   648,     0,     0,   650,  -618,  -618,   955,  -618,  -618,
    -618,  -618,  -618,     0,   769,     0,   645,   646,   647,   648,
     649,     0,     0,   651,     0,     0,     0,     0,     0,   652,
     653,   654,   650,     0,     0,   981,     0,     0,   210,     0,
     651,   210,   210,   210,   300,     0,   652,   653,   654,     0,
     770,     0,     0,     0,   655,     0,   940,   656,     0,     0,
     514,   210,     0,   210,   210,   525,     0,     0,   651,     0,
    -618,   655,     0,     0,   656,   653,   654,     0,     0,     0,
      74,     0,    74,     0,     0,     0,     0,   657,     0,     0,
      74,     0,     0,  -618,     0,  1018,     0,  1019,     0,   655,
       0,     0,    74,  1020,    74,    74,     0,     0,     0,     0,
       0,     0,     0,     0,     0,  -618,  -618,     0,  -618,     0,
       0,   227,  -618,     0,  -618,     0,  -618,     0,     0,     0,
       0,     0,     0,     0,     0,    74,     0,     0,     0,     0,
       0,     0,    74,     0,     0,     0,     0,     0,     0,     0,
     607,   609,     0,     0,     0,     0,     0,     0,   210,   264,
       0,     0,     0,   524,   527,   528,   529,   530,   531,   532,
     533,   534,   535,   536,   537,   538,   539,   540,   541,   542,
     543,   544,   545,   546,   547,   548,   549,   550,   551,   552,
       0,   210,     0,     0,   609,     0,    74,   264,     0,    74,
       0,    74,     0,     0,     0,     0,     0,    74,     0,     0,
      74,    74,     0,     0,     0,     0,     0,    74,    74,     0,
     110,     0,   110,   769,     0,   645,   646,   647,   648,   801,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   602,
     604,   650,    74,     0,     0,    74,    74,   606,   210,   210,
       0,   692,     0,   210,    74,   602,   604,   210,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   110,     0,     0,
       0,   275,     0,     0,     0,     0,   626,   651,     0,     0,
       0,   631,     0,     0,   653,   654,     0,    74,    74,     0,
       0,     0,   210,     0,     0,   210,     0,   275,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   210,   655,   370,
     380,   380,   380,     0,     0,   525,     0,     0,   644,     0,
     645,   646,   647,   648,   649,     0,    74,     0,     0,     0,
       0,     0,     0,   682,   683,     0,   650,     0,     0,   800,
      74,   645,   646,   647,   648,   801,     0,   753,     0,   210,
       0,    74,     0,     0,    74,     0,     0,   650,    74,    74,
     609,   264,    74,     0,     0,     0,     0,     0,     0,     0,
       0,   111,   651,   111,     0,     0,     0,     0,   652,   653,
     654,     0,     0,     0,     0,     0,     0,     0,   768,     0,
       0,     0,     0,   651,     0,     0,     0,     0,     0,   652,
     653,   654,    74,   655,     0,     0,   656,     0,     0,     0,
       0,     0,     0,   210,     0,     0,     0,   210,   111,   743,
       0,   110,   276,     0,   655,     0,     0,   656,     0,   210,
      74,     0,   819,     0,     0,     0,     0,     0,     0,     0,
       0,    74,     0,     0,     0,   210,     0,     0,   276,     0,
       0,     0,     0,   837,     0,   110,     0,     0,   210,   210,
     371,   381,   381,   381,     0,     0,   110,     0,   110,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   210,     0,     0,   275,
      74,     0,    74,     0,     0,     0,     0,     0,    74,     0,
      74,     0,     0,     0,     0,     0,   872,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   110,     0,    74,     0,     0,   110,
     210,     0,     0,     0,   606,   821,     0,   824,   826,     0,
       0,   110,   275,     0,   832,   834,     0,     0,     0,     0,
       0,   210,     0,     0,     0,     0,   114,   912,   114,     0,
       0,     0,     0,     0,     0,    81,     0,    81,     0,     0,
       0,     0,   111,     0,   110,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   867,     0,
     928,     0,   824,   826,     0,   832,   834,     0,     0,     0,
       0,     0,     0,   114,   210,     0,   111,   277,   264,     0,
       0,     0,    81,     0,     0,     0,     0,   111,     0,   111,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   277,     0,     0,     0,     0,     0,     0,
     276,     0,     0,     0,     0,   372,   382,   382,     0,     0,
       0,     0,     0,     0,   367,   210,     0,     0,   110,   913,
       0,     0,     0,     0,     0,     0,     0,   915,   110,     0,
       0,     0,     0,     0,     0,   111,     0,     0,     0,   327,
     111,  -619,     0,  -619,     0,  -619,   275,  -619,   210,   332,
       0,   333,   111,   276,     0,  -619,     0,  -619,     0,     0,
       0,     0,     0,     0,     0,   915,   210,   340,     0,   341,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
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
       0,     0,     0,     0,     0,   277,     0,     0,   327,     0,
     328,     0,   329,     0,   330,     0,   331,   276,   332,     0,
     333,     0,   334,     0,   336,     0,   337,     0,     0,     0,
     110,     0,     0,   210,     0,   275,   340,     0,   341,     0,
     114,     0,     0,     0,     0,   114,     0,     0,     0,    81,
       0,     0,     0,     0,    81,     0,     0,   114,   277,     0,
       0,     0,     0,     0,     0,     0,    81,   276,     0,   523,
       0,   343,   344,   345,   346,   347,   348,   349,   350,   351,
     352,     0,     0,     0,   110,     0,     0,   110,     0,   110,
     114,     0,     0,     0,   275,     0,     0,     0,     0,    81,
     327,     0,   328,     0,   329,     0,   330,     0,   331,     0,
     332,     0,   333,     0,   113,     0,   336,     0,   337,   111,
       0,   111,     0,     0,     0,     0,     0,     0,   340,     0,
     341,     0,     0,     0,   110,     0,     0,     0,     0,     0,
       0,     0,   110,   111,     0,     0,     0,     0,   113,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   113,
       0,   113,     0,   343,   344,   345,   346,   347,   348,   349,
     350,   351,   352,     0,   114,   110,   110,     0,     0,     0,
       0,   111,     0,    81,   114,     0,   276,     0,     0,     0,
       0,     0,     0,    81,     0,     0,     0,     0,     0,   380,
       0,     0,   277,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   110,     0,     0,   113,     0,     0,
       0,     0,   113,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   113,   111,     0,     0,   111,   110,
     111,     0,     0,     0,     0,   276,   110,   110,     0,     0,
     110,     0,   277,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   113,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   111,     0,     0,     0,     0,
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
     799,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     114,     0,     0,   114,     0,   114,     0,     0,     0,    81,
     277,     0,    81,     0,    81,     0,     0,     0,     0,     0,
     523,   111,   381,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   978,     0,     0,     0,   111,
     114,     0,     0,     0,     0,     0,     0,     0,   114,    81,
     111,   113,     0,   113,     0,     0,     0,    81,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   113,     0,     0,     0,     0,
       0,   114,   114,     0,     0,     0,     0,     0,     0,     0,
      81,    81,     0,     0,     0,     0,     0,     0,     0,   111,
       0,   111,     0,     0,     0,   382,     0,   111,     0,   111,
       0,     0,     0,   113,     0,     0,     0,     0,     0,     0,
     114,     0,     0,     0,     0,     0,     0,     0,     0,    81,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   114,     0,     0,     0,     0,
       0,     0,   114,   114,    81,     0,   114,     0,     0,     0,
       0,    81,    81,     0,     0,    81,     0,   113,     0,     0,
     113,     0,   113,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   114,   382,     0,     0,
       0,     0,     0,     0,     0,    81,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   113,     0,     0,
     979,     0,     0,     0,   114,   113,     0,   553,   554,   975,
       0,   555,     0,    81,     0,   114,     0,     0,     0,     0,
       0,   162,     0,   163,    81,   164,     0,   165,     0,   166,
       0,   167,     0,   168,     0,   169,     0,   170,   113,   113,
       0,   171,     0,   172,     0,     0,     0,     0,     0,   173,
       0,   174,     0,   175,     0,   176,     0,     0,     0,     0,
       0,     0,     0,     0,   114,     0,   114,   177,   178,     0,
       0,     0,   114,    81,   114,    81,     0,   113,     0,     0,
       0,    81,     0,    81,     0,     0,     0,     0,   179,   180,
     181,   182,   183,   184,   185,   186,   187,   188,     0,   189,
     190,     0,   113,     0,     0,     0,     0,   191,     0,   113,
     113,  -618,     4,   113,     5,     6,     7,     8,     9,     0,
       0,     0,    10,    11,     0,     0,     0,    12,     0,    13,
      14,    15,    16,    17,    18,    19,     0,     0,     0,     0,
       0,    20,    21,    22,    23,    24,    25,    26,     0,     0,
      27,     0,     0,   113,     0,     0,    28,    29,    30,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    40,     0,
      41,    42,     0,    43,    44,    45,     0,    46,     0,    47,
       0,   113,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   113,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,    48,     0,     0,    49,    50,     0,
      51,    52,     0,    53,     0,     0,    54,    55,    56,    57,
      58,    59,    60,    61,    62,     0,     0,     0,     0,     0,
       0,   113,     0,   113,     0,     0,     0,     0,     0,   113,
       0,   113,     0,     0,    63,    64,    65,     0,     0,     0,
       0,     0,  -600,     0,     0,     0,     0,  -618,     0,  -618,
    -600,  -600,  -600,     0,     0,  -600,  -600,  -600,     0,  -600,
       0,     0,     0,     0,     0,   751,     0,     0,  -600,  -600,
    -600,  -600,     0,     0,     0,     0,     0,     0,     0,  -600,
    -600,     0,  -600,  -600,  -600,  -600,  -600,     0,     0,     0,
       0,   327,     0,   328,     0,   329,     0,   330,     0,   331,
       0,   332,     0,   333,     0,   334,   335,   336,     0,   337,
       0,   338,  -600,   339,  -600,     0,  -600,     0,  -600,   340,
    -600,   341,  -600,     0,  -600,     0,  -600,  -600,  -600,     0,
    -600,     0,  -600,     0,  -600,     0,     0,     0,     0,     0,
    -600,     0,  -600,     0,  -600,     0,   755,  -600,     0,     0,
       0,     0,   342,  -600,   343,   344,   345,   346,   347,   348,
     349,   350,   351,   352,     0,     0,     0,  -600,     0,     0,
    -600,     0,  -106,  -600,  -600,  -600,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,  -600,     0,     0,     0,     0,  -600,
    -600,  -600,  -600,  -600,  -503,     0,  -600,  -600,  -600,     0,
    -600,     0,  -503,  -503,  -503,     0,     0,  -503,  -503,  -503,
       0,  -503,     0,     0,     0,     0,     0,   698,     0,  -503,
       0,  -503,  -503,  -503,     0,     0,     0,     0,     0,     0,
       0,  -503,  -503,     0,  -503,  -503,  -503,  -503,  -503,     0,
       0,     0,     0,   327,     0,   328,     0,   329,     0,   330,
       0,   331,     0,   332,     0,   333,     0,   334,   335,   336,
       0,   337,     0,   338,  -503,   339,  -503,     0,  -503,     0,
    -503,   340,  -503,   341,  -503,     0,  -503,     0,  -503,  -503,
    -503,     0,  -503,     0,  -503,     0,  -503,     0,     0,     0,
       0,     0,  -503,     0,  -503,     0,  -503,     0,  -503,  -503,
       0,     0,     0,     0,   342,  -503,   343,   344,   345,   346,
     347,   348,   349,   350,   351,   352,     0,     0,     0,  -503,
       0,     0,  -503,     0,  -503,  -503,  -503,  -503,  -503,  -503,
    -503,  -503,  -503,  -503,  -503,  -503,  -503,     0,     0,     0,
       0,     0,  -503,  -503,  -503,  -503,  -506,     0,  -503,  -503,
    -503,     0,  -503,     0,  -506,  -506,  -506,     0,     0,  -506,
    -506,  -506,     0,  -506,     0,     0,     0,     0,     0,     0,
       0,  -506,     0,  -506,  -506,  -506,     0,     0,     0,     0,
       0,     0,     0,  -506,  -506,     0,  -506,  -506,  -506,  -506,
    -506,     0,     0,     0,     0,   327,     0,   328,     0,   329,
       0,   330,     0,   331,     0,   332,     0,   333,     0,   334,
     335,   336,     0,   337,     0,   338,  -506,   339,  -506,     0,
    -506,     0,  -506,   340,  -506,   341,  -506,     0,  -506,     0,
    -506,  -506,  -506,     0,  -506,     0,  -506,     0,  -506,     0,
       0,     0,     0,     0,  -506,     0,  -506,     0,  -506,     0,
    -506,  -506,     0,     0,     0,     0,   342,  -506,   343,   344,
     345,   346,   347,   348,   349,   350,   351,   352,     0,     0,
       0,  -506,     0,     0,  -506,     0,  -506,  -506,  -506,  -506,
    -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,  -506,     0,
       0,     0,     0,     0,  -506,  -506,  -506,  -506,  -601,     0,
    -506,  -506,  -506,     0,  -506,     0,  -601,  -601,  -601,     0,
       0,  -601,  -601,  -601,     0,  -601,     0,     0,     0,     0,
       0,   698,     0,     0,  -601,  -601,  -601,  -601,     0,     0,
       0,     0,     0,     0,     0,  -601,  -601,     0,  -601,  -601,
    -601,  -601,  -601,     0,     0,     0,     0,   327,     0,   328,
       0,   329,     0,   330,     0,   331,     0,   332,     0,   333,
       0,   334,   335,   336,     0,   337,     0,   338,  -601,   339,
    -601,     0,  -601,     0,  -601,   340,  -601,   341,  -601,     0,
    -601,     0,  -601,  -601,  -601,     0,  -601,     0,  -601,     0,
    -601,     0,     0,     0,     0,     0,  -601,     0,  -601,     0,
    -601,     0,     0,  -601,     0,     0,     0,     0,   342,  -601,
     343,   344,   345,   346,   347,   348,   349,   350,   351,   352,
       0,     0,     0,  -601,     0,     0,  -601,     0,  -245,  -601,
    -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,  -601,
    -601,     0,     0,     0,     0,  -601,  -601,  -601,  -601,  -601,
    -602,     0,  -601,  -601,  -601,     0,  -601,     0,  -602,  -602,
    -602,     0,     0,  -602,  -602,  -602,     0,  -602,     0,     0,
       0,     0,     0,     0,     0,     0,  -602,  -602,  -602,  -602,
       0,     0,     0,     0,     0,     0,     0,  -602,  -602,     0,
    -602,  -602,  -602,  -602,  -602,     0,     0,     0,     0,   327,
       0,   328,     0,   329,     0,   330,     0,   331,     0,   332,
       0,   333,     0,   334,   335,   336,     0,   337,     0,  -619,
    -602,  -619,  -602,     0,  -602,     0,  -602,   340,  -602,   341,
    -602,     0,  -602,     0,  -602,  -602,  -602,     0,  -602,     0,
    -602,     0,  -602,     0,     0,     0,     0,     0,  -602,     0,
    -602,     0,  -602,     0,     0,  -602,     0,     0,     0,     0,
       0,  -602,   343,   344,   345,   346,   347,   348,   349,   350,
     351,   352,     0,     0,     0,  -602,     0,     0,  -602,     0,
       0,  -602,  -602,  -602,  -602,  -602,  -602,  -602,  -602,  -602,
    -602,  -602,  -602,     0,     0,     0,     0,  -602,  -602,  -602,
    -602,  -602,  -293,     0,  -602,  -602,  -602,     0,  -602,     0,
    -293,  -293,  -293,     0,     0,  -293,  -293,  -293,     0,  -293,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -293,
    -293,  -293,     0,     0,     0,     0,     0,     0,     0,  -293,
    -293,     0,  -293,  -293,  -293,  -293,  -293,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,  -293,     0,  -293,     0,  -293,     0,  -293,     0,
    -293,     0,  -293,     0,  -293,     0,  -293,  -293,  -293,     0,
    -293,     0,  -293,     0,  -293,     0,     0,     0,     0,     0,
    -293,     0,  -293,     0,  -293,     0,   756,  -293,     0,     0,
       0,     0,     0,  -293,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,  -293,     0,     0,
    -293,     0,  -108,  -293,  -293,  -293,  -293,  -293,  -293,  -293,
    -293,  -293,  -293,  -293,  -293,     0,     0,     0,     0,     0,
    -293,  -293,  -293,  -293,  -430,     0,  -293,  -293,  -293,     0,
    -293,     0,  -430,  -430,  -430,     0,     0,  -430,  -430,  -430,
       0,  -430,     0,     0,     0,     0,     0,     0,     0,     0,
    -430,  -430,  -430,     0,     0,     0,     0,     0,     0,     0,
       0,  -430,  -430,     0,  -430,  -430,  -430,  -430,  -430,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,  -430,     0,  -430,     0,  -430,     0,
    -430,     0,  -430,     0,  -430,     0,  -430,     0,  -430,  -430,
    -430,     0,  -430,     0,  -430,     0,  -430,     0,     0,     0,
       0,     0,  -430,     0,  -430,     0,  -430,     0,     0,  -430,
       0,     0,     0,     0,     0,  -430,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -430,
       0,     0,     0,     0,     0,  -430,     0,  -430,  -430,  -430,
    -430,  -430,  -430,  -430,  -430,  -430,  -430,     0,     0,     0,
       0,  -430,  -430,  -430,  -430,  -430,  -285,   227,  -430,  -430,
    -430,     0,  -430,     0,  -285,  -285,  -285,     0,     0,  -285,
    -285,  -285,     0,  -285,     0,     0,     0,     0,     0,     0,
       0,     0,     0,  -285,  -285,  -285,     0,     0,     0,     0,
       0,     0,     0,  -285,  -285,     0,  -285,  -285,  -285,  -285,
    -285,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,  -285,     0,  -285,     0,
    -285,     0,  -285,     0,  -285,     0,  -285,     0,  -285,     0,
    -285,  -285,  -285,     0,  -285,     0,  -285,     0,  -285,     0,
       0,     0,     0,     0,  -285,     0,  -285,     0,  -285,     0,
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
       0,     0,     0,     0,     0,     0,     0,     0,  -420,     0,
    -420,     0,  -420,     0,  -420,     0,  -420,     0,  -420,     0,
    -420,     0,  -420,  -420,  -420,     0,  -420,     0,  -420,     0,
    -420,     0,     0,     0,     0,     0,  -420,     0,  -420,     0,
    -420,     0,     0,  -420,     0,     0,     0,     0,     0,  -420,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,  -420,     0,     0,     0,     0,     0,  -420,
       0,  -420,  -420,  -420,  -420,  -420,  -420,  -420,  -420,  -420,
    -420,     0,     0,     0,     0,  -420,  -420,  -420,  -420,  -420,
    -300,  -420,  -420,  -420,  -420,     0,  -420,     0,  -300,  -300,
    -300,     0,     0,  -300,  -300,  -300,     0,  -300,     0,     0,
       0,     0,     0,     0,     0,     0,     0,  -300,  -300,     0,
       0,     0,     0,     0,     0,     0,     0,  -300,  -300,     0,
    -300,  -300,  -300,  -300,  -300,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
    -300,     0,  -300,     0,  -300,     0,  -300,     0,  -300,     0,
    -300,     0,  -300,     0,  -300,  -300,  -300,     0,  -300,     0,
    -300,     0,  -300,     0,     0,     0,     0,     0,  -300,     0,
    -300,     0,  -300,     0,     0,  -300,     0,     0,     0,     0,
       0,  -300,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,  -300,     0,     0,     0,     0,
       0,  -300,     0,  -300,  -300,  -300,  -300,  -300,  -300,  -300,
    -300,  -300,  -300,     0,     0,     0,     0,     0,  -300,  -300,
    -300,  -300,  -600,   224,  -300,  -300,  -300,     0,  -300,     0,
    -600,  -600,  -600,     0,     0,     0,  -600,  -600,     0,  -600,
       0,     0,     0,     0,     0,     0,     0,     0,  -600,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -600,
    -600,     0,  -600,  -600,  -600,  -600,  -600,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,  -600,     0,  -600,     0,  -600,     0,  -600,     0,
    -600,     0,  -600,     0,  -600,     0,  -600,  -600,  -600,     0,
    -600,     0,  -600,     0,  -600,     0,     0,     0,     0,     0,
    -600,     0,  -600,     0,  -600,     0,   700,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,  -600,     0,     0,
       0,     0,  -106,  -600,     0,  -600,  -600,  -600,  -600,  -600,
    -600,  -600,  -600,  -600,  -600,     0,     0,     0,     0,  -600,
    -600,  -600,  -600,   -97,  -293,     0,  -600,     0,  -600,     0,
    -600,     0,  -293,  -293,  -293,     0,     0,     0,  -293,  -293,
       0,  -293,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,  -293,  -293,     0,  -293,  -293,  -293,  -293,  -293,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,  -293,     0,  -293,     0,  -293,     0,
    -293,     0,  -293,     0,  -293,     0,  -293,     0,  -293,  -293,
    -293,     0,  -293,     0,  -293,     0,  -293,     0,     0,     0,
       0,     0,  -293,     0,  -293,     0,  -293,     0,   701,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,  -293,
       0,     0,     0,     0,  -108,  -293,     0,  -293,  -293,  -293,
    -293,  -293,  -293,  -293,  -293,  -293,  -293,     0,     0,     0,
       0,     0,  -293,  -293,  -293,   -99,     0,     0,  -293,     0,
    -293,   248,  -293,     5,     6,     7,     8,     9,  -618,  -618,
    -618,    10,    11,     0,     0,  -618,    12,     0,    13,    14,
      15,    16,    17,    18,    19,     0,     0,     0,     0,     0,
      20,    21,    22,    23,    24,    25,    26,     0,     0,    27,
       0,     0,     0,     0,     0,    28,    29,   249,    31,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,   327,    46,   328,    47,   329,
       0,   330,     0,   331,     0,   332,     0,   333,     0,   334,
     335,   336,     0,   337,     0,   338,     0,   339,     0,     0,
       0,     0,     0,   340,     0,   341,     0,     0,     0,     0,
       0,     0,     0,    48,     0,     0,    49,    50,     0,    51,
      52,     0,    53,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,   342,     0,   343,   344,
     345,   346,   347,   348,   349,   350,   351,   352,     0,     0,
       0,     0,     0,    63,    64,    65,     0,     0,     0,     0,
       0,     0,     0,   231,     0,     0,  -618,   248,  -618,     5,
       6,     7,     8,     9,     0,     0,  -618,    10,    11,     0,
    -618,  -618,    12,     0,    13,    14,    15,    16,    17,    18,
      19,     0,     0,     0,     0,     0,    20,    21,    22,    23,
      24,    25,    26,     0,     0,    27,     0,     0,     0,     0,
       0,    28,    29,   249,    31,    32,    33,    34,    35,    36,
      37,    38,    39,    40,     0,    41,    42,     0,    43,    44,
      45,     0,    46,     0,    47,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    48,
       0,     0,    49,    50,     0,    51,    52,     0,    53,     0,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,    63,
      64,    65,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,  -618,   248,  -618,     5,     6,     7,     8,     9,
       0,     0,  -618,    10,    11,     0,     0,  -618,    12,  -618,
      13,    14,    15,    16,    17,    18,    19,     0,     0,     0,
       0,     0,    20,    21,    22,    23,    24,    25,    26,     0,
       0,    27,     0,     0,     0,     0,     0,    28,    29,   249,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,    46,     0,
      47,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    48,     0,     0,    49,    50,
       0,    51,    52,     0,    53,     0,     0,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,    63,    64,    65,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,  -618,   248,
    -618,     5,     6,     7,     8,     9,     0,     0,  -618,    10,
      11,     0,     0,  -618,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,     0,     0,     0,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,    27,     0,     0,
       0,     0,     0,    28,    29,   249,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,     0,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    48,     0,     0,    49,    50,     0,    51,    52,     0,
      53,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,   248,
       0,     5,     6,     7,     8,     9,     0,  -618,  -618,    10,
      11,    63,    64,    65,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,  -618,     0,  -618,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,    27,     0,     0,
       0,     0,     0,    28,    29,   249,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,     0,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    48,     0,     0,    49,    50,     0,    51,    52,     0,
      53,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,   248,
       0,     5,     6,     7,     8,     9,     0,     0,     0,    10,
      11,    63,    64,    65,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,  -618,     0,  -618,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,    27,     0,     0,
       0,     0,     0,    28,    29,   249,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,     0,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
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
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    63,    64,    65,
       0,     0,     0,     0,     0,     0,     0,     0,  -618,     0,
    -618,   248,  -618,     5,     6,     7,     8,     9,     0,     0,
       0,    10,    11,     0,     0,     0,    12,     0,    13,    14,
      15,    16,    17,    18,    19,     0,     0,     0,     0,     0,
      20,    21,    22,    23,    24,    25,    26,     0,     0,    27,
       0,     0,     0,     0,     0,    28,    29,   249,    31,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,     0,    46,     0,    47,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    48,     0,     0,    49,    50,     0,    51,
      52,     0,    53,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,    63,    64,    65,     0,     0,  -618,     4,
       0,     5,     6,     7,     8,     9,  -618,     0,  -618,    10,
      11,     0,     0,     0,    12,     0,    13,    14,    15,    16,
      17,    18,    19,     0,     0,     0,     0,     0,    20,    21,
      22,    23,    24,    25,    26,     0,     0,    27,     0,     0,
       0,     0,     0,    28,    29,    30,    31,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,    46,     0,    47,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    48,     0,     0,    49,    50,     0,    51,    52,     0,
      53,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,    63,    64,    65,     0,     0,  -618,     0,     0,     0,
       0,     0,     0,     0,  -618,   248,  -618,     5,     6,     7,
       8,     9,     0,     0,  -618,    10,    11,     0,     0,     0,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,   249,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,   248,     0,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
    -618,     0,  -618,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,   249,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,  -618,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
    -618,     0,  -618,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   204,   205,   206,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,   231,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
     302,     0,   303,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,   231,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,    30,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
     498,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,   249,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
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
       0,     0,     0,     0,   162,     0,   163,     0,   164,     0,
     165,     0,   166,     0,   167,     0,   168,     0,   169,     0,
     170,     0,     0,     0,   171,     0,   172,     0,     0,     0,
       0,     0,   173,     0,   174,     0,   175,     0,   176,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,     0,     0,     0,     0,     0,     0,
     191,   393,   118,   119,   120,   121,   122,   123,   124,   125,
     126,   127,   128,   129,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,     0,     0,     0,   142,
     143,   144,   145,   146,   147,   148,   149,   150,   151,     0,
       0,     0,     0,     0,   152,   153,   154,   155,   156,   157,
     158,   159,   160,   280,   281,   161,   282,     0,     0,     0,
       0,     0,     0,     0,     0,   162,     0,   163,     0,   164,
       0,   165,     0,   166,     0,   167,     0,   168,     0,   169,
       0,   170,     0,     0,     0,   171,     0,   172,     0,     0,
       0,     0,     0,   173,     0,   174,     0,   175,     0,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   177,   178,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   179,   180,   181,   182,   183,   184,   185,   186,
     187,   188,     0,   189,   190,     0,     0,     0,     0,     0,
       0,   191,   118,   119,   120,   121,   122,   123,   124,   125,
     126,   127,   128,   129,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,     0,     0,     0,   142,
     143,   144,   145,   146,   147,   148,   149,   150,   151,     0,
       0,     0,     0,     0,   152,   153,   154,   155,   156,   157,
     158,   159,   160,   233,     0,   161,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   162,     0,   163,     0,   164,
       0,   165,     0,   166,     0,   167,     0,   168,     0,   169,
       0,   170,     0,     0,     0,   171,     0,   172,     0,     0,
       0,     0,     0,   173,     0,   174,     0,   175,     0,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   177,   178,     0,     0,    55,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   179,   180,   181,   182,   183,   184,   185,   186,
     187,   188,     0,   189,   190,     0,     0,     0,     0,     0,
       0,   191,   118,   119,   120,   121,   122,   123,   124,   125,
     126,   127,   128,   129,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,     0,     0,     0,   142,
     143,   144,   145,   146,   147,   148,   149,   150,   151,     0,
       0,     0,     0,     0,   152,   153,   154,   155,   156,   157,
     158,   159,   160,     0,     0,   161,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   162,     0,   163,     0,   164,
       0,   165,     0,   166,     0,   167,     0,   168,     0,   169,
       0,   170,     0,     0,     0,   171,     0,   172,     0,     0,
       0,     0,     0,   173,     0,   174,     0,   175,     0,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   177,   178,     0,     0,    55,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   179,   180,   181,   182,   183,   184,   185,   186,
     187,   188,     0,   189,   190,     0,     0,     0,     0,     0,
       0,   191,   118,   119,   120,   121,   122,   123,   124,   125,
     126,   127,   128,   129,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,     0,     0,     0,   142,
     143,   144,   145,   146,   147,   148,   149,   150,   151,     0,
       0,     0,     0,     0,   152,   153,   154,   155,   156,   157,
     158,   159,   160,     0,     0,   161,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   162,     0,   163,     0,   164,
       0,   165,     0,   166,     0,   167,     0,   168,     0,   169,
       0,   170,     0,     0,     0,   171,     0,   172,     0,     0,
       0,     0,     0,   173,     0,   174,     0,   175,     0,   176,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   177,   178,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   179,   180,   181,   182,   183,   184,   185,   186,
     187,   188,     0,   189,   190,     5,     6,     7,     0,     9,
       0,   191,     0,    10,    11,     0,     0,     0,    12,     0,
      13,    14,    15,   238,   239,    18,    19,     0,     0,     0,
       0,     0,   240,   241,   242,    23,    24,    25,    26,     0,
       0,   200,     0,     0,     0,     0,     0,     0,   268,     0,
       0,    32,    33,    34,    35,    36,    37,    38,    39,    40,
       0,    41,    42,     0,    43,    44,    45,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   269,     0,     0,   203,    50,
       0,    51,    52,     0,     0,     0,     0,    54,    55,    56,
      57,    58,    59,    60,    61,    62,     0,     0,     0,     0,
       0,     5,     6,     7,     0,     9,     0,     0,     0,    10,
      11,     0,     0,     0,    12,   270,    13,    14,    15,   238,
     239,    18,    19,   271,     0,     0,     0,     0,   240,   241,
     242,    23,    24,    25,    26,     0,     0,   200,     0,     0,
       0,     0,     0,     0,   268,     0,     0,    32,    33,    34,
      35,    36,    37,    38,    39,    40,     0,    41,    42,     0,
      43,    44,    45,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   269,     0,     0,   203,    50,     0,    51,    52,     0,
       0,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,     0,     0,     0,
      12,   270,    13,    14,    15,    16,    17,    18,    19,   518,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,    30,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,    48,     0,     0,
      49,    50,     0,    51,    52,     0,    53,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   204,   205,   206,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       8,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,    28,
      29,     0,    31,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
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
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   608,   205,   206,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   204,   205,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,   205,   206,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   608,   205,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,   201,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,   205,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   512,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   204,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   818,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,   512,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
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
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,    27,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,    64,    65,
      12,     0,    13,    14,    15,    16,    17,    18,    19,     0,
       0,     0,     0,     0,    20,    21,    22,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
      29,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
      46,     0,    47,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   202,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,    63,   207,    65,
      12,     0,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
     268,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   269,     0,     0,
     323,    50,     0,    51,    52,     0,   324,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     5,     6,     7,     0,     9,     0,     0,
       0,    10,    11,     0,     0,     0,    12,   270,    13,    14,
      15,   238,   239,    18,    19,     0,     0,     0,     0,     0,
     240,   241,   242,    23,    24,    25,    26,     0,     0,   200,
       0,     0,     0,     0,     0,     0,   268,     0,     0,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   365,     0,     0,    49,    50,     0,    51,
      52,     0,    53,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,     0,     0,     0,     0,     0,     5,
       6,     7,     0,     9,     0,     0,     0,    10,    11,     0,
       0,     0,    12,   270,    13,    14,    15,   238,   239,    18,
      19,     0,     0,     0,     0,     0,   240,   241,   242,    23,
      24,    25,    26,     0,     0,   200,     0,     0,     0,     0,
       0,     0,   268,     0,     0,    32,    33,    34,   373,    36,
      37,    38,   374,    40,     0,    41,    42,     0,    43,    44,
      45,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   375,     0,     0,     0,     0,   376,
       0,     0,   203,    50,     0,    51,    52,     0,     0,     0,
       0,    54,    55,    56,    57,    58,    59,    60,    61,    62,
       0,     0,     0,     0,     0,     5,     6,     7,     0,     9,
       0,     0,     0,    10,    11,     0,     0,     0,    12,   270,
      13,    14,    15,   238,   239,    18,    19,     0,     0,     0,
       0,     0,   240,   241,   242,    23,    24,    25,    26,     0,
       0,   200,     0,     0,     0,     0,     0,     0,   268,     0,
       0,    32,    33,    34,   373,    36,    37,    38,   374,    40,
       0,    41,    42,     0,    43,    44,    45,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   376,     0,     0,   203,    50,
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
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   269,     0,     0,   323,    50,     0,    51,    52,     0,
       0,     0,     0,    54,    55,    56,    57,    58,    59,    60,
      61,    62,     0,     0,     0,     0,     0,     5,     6,     7,
       0,     9,     0,     0,     0,    10,    11,     0,     0,     0,
      12,   270,    13,    14,    15,   238,   239,    18,    19,     0,
       0,     0,     0,     0,   240,   241,   242,    23,    24,    25,
      26,     0,     0,   200,     0,     0,     0,     0,     0,     0,
     268,     0,     0,    32,    33,    34,    35,    36,    37,    38,
      39,    40,     0,    41,    42,     0,    43,    44,    45,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   894,     0,     0,
     203,    50,     0,    51,    52,     0,     0,     0,     0,    54,
      55,    56,    57,    58,    59,    60,    61,    62,     0,     0,
       0,     0,     0,     5,     6,     7,     0,     9,     0,     0,
       0,    10,    11,     0,     0,     0,    12,   270,    13,    14,
      15,   238,   239,    18,    19,     0,     0,     0,     0,     0,
     240,   241,   242,    23,    24,    25,    26,     0,     0,   200,
       0,     0,     0,     0,     0,     0,   268,     0,     0,    32,
      33,    34,    35,    36,    37,    38,    39,    40,     0,    41,
      42,     0,    43,    44,    45,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   974,     0,     0,   203,    50,     0,    51,
      52,     0,     0,     0,     0,    54,    55,    56,    57,    58,
      59,    60,    61,    62,   561,   562,     0,     0,   563,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   162,     0,
     163,     0,   164,   270,   165,     0,   166,     0,   167,     0,
     168,     0,   169,     0,   170,     0,     0,     0,   171,     0,
     172,     0,     0,     0,     0,     0,   173,     0,   174,     0,
     175,     0,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   177,   178,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   179,   180,   181,   182,   183,
     184,   185,   186,   187,   188,     0,   189,   190,   598,   562,
       0,     0,   599,     0,   191,     0,     0,     0,     0,     0,
       0,     0,   162,     0,   163,     0,   164,     0,   165,     0,
     166,     0,   167,     0,   168,     0,   169,     0,   170,     0,
       0,     0,   171,     0,   172,     0,     0,     0,     0,     0,
     173,     0,   174,     0,   175,     0,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   177,   178,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   179,
     180,   181,   182,   183,   184,   185,   186,   187,   188,     0,
     189,   190,   612,   554,     0,     0,   613,     0,   191,     0,
       0,     0,     0,     0,     0,     0,   162,     0,   163,     0,
     164,     0,   165,     0,   166,     0,   167,     0,   168,     0,
     169,     0,   170,     0,     0,     0,   171,     0,   172,     0,
       0,     0,     0,     0,   173,     0,   174,     0,   175,     0,
     176,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   177,   178,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   179,   180,   181,   182,   183,   184,   185,
     186,   187,   188,     0,   189,   190,   615,   562,     0,     0,
     616,     0,   191,     0,     0,     0,     0,     0,     0,     0,
     162,     0,   163,     0,   164,     0,   165,     0,   166,     0,
     167,     0,   168,     0,   169,     0,   170,     0,     0,     0,
     171,     0,   172,     0,     0,     0,     0,     0,   173,     0,
     174,     0,   175,     0,   176,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   177,   178,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   179,   180,   181,
     182,   183,   184,   185,   186,   187,   188,     0,   189,   190,
     639,   554,     0,     0,   640,     0,   191,     0,     0,     0,
       0,     0,     0,     0,   162,     0,   163,     0,   164,     0,
     165,     0,   166,     0,   167,     0,   168,     0,   169,     0,
     170,     0,     0,     0,   171,     0,   172,     0,     0,     0,
       0,     0,   173,     0,   174,     0,   175,     0,   176,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,   642,   562,     0,     0,   643,     0,
     191,     0,     0,     0,     0,     0,     0,     0,   162,     0,
     163,     0,   164,     0,   165,     0,   166,     0,   167,     0,
     168,     0,   169,     0,   170,     0,     0,     0,   171,     0,
     172,     0,     0,     0,     0,     0,   173,     0,   174,     0,
     175,     0,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   177,   178,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   179,   180,   181,   182,   183,
     184,   185,   186,   187,   188,     0,   189,   190,   727,   554,
       0,     0,   728,     0,   191,     0,     0,     0,     0,     0,
       0,     0,   162,     0,   163,     0,   164,     0,   165,     0,
     166,     0,   167,     0,   168,     0,   169,     0,   170,     0,
       0,     0,   171,     0,   172,     0,     0,     0,     0,     0,
     173,     0,   174,     0,   175,     0,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   177,   178,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   179,
     180,   181,   182,   183,   184,   185,   186,   187,   188,     0,
     189,   190,   730,   562,     0,     0,   731,     0,   191,     0,
       0,     0,     0,     0,     0,     0,   162,     0,   163,     0,
     164,     0,   165,     0,   166,     0,   167,     0,   168,     0,
     169,     0,   170,     0,     0,     0,   171,     0,   172,     0,
       0,     0,     0,     0,   173,     0,   174,     0,   175,     0,
     176,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,   177,   178,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,   179,   180,   181,   182,   183,   184,   185,
     186,   187,   188,     0,   189,   190,   737,   554,     0,     0,
     738,     0,   191,     0,     0,     0,     0,     0,     0,     0,
     162,     0,   163,     0,   164,     0,   165,     0,   166,     0,
     167,     0,   168,     0,   169,     0,   170,     0,     0,     0,
     171,     0,   172,     0,     0,     0,     0,     0,   173,     0,
     174,     0,   175,     0,   176,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,   177,   178,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,   179,   180,   181,
     182,   183,   184,   185,   186,   187,   188,     0,   189,   190,
    1000,   554,     0,     0,  1001,     0,   191,     0,     0,     0,
       0,     0,     0,     0,   162,     0,   163,     0,   164,     0,
     165,     0,   166,     0,   167,     0,   168,     0,   169,     0,
     170,     0,     0,     0,   171,     0,   172,     0,     0,     0,
       0,     0,   173,     0,   174,     0,   175,     0,   176,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
     177,   178,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,   179,   180,   181,   182,   183,   184,   185,   186,   187,
     188,     0,   189,   190,  1035,   554,     0,     0,  1036,     0,
     191,     0,     0,     0,     0,     0,     0,     0,   162,     0,
     163,     0,   164,     0,   165,     0,   166,     0,   167,     0,
     168,     0,   169,     0,   170,     0,     0,     0,   171,     0,
     172,     0,     0,     0,     0,     0,   173,     0,   174,     0,
     175,     0,   176,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,   177,   178,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,   179,   180,   181,   182,   183,
     184,   185,   186,   187,   188,     0,   189,   190,  1038,   562,
       0,     0,  1039,     0,   191,     0,     0,     0,     0,     0,
       0,     0,   162,     0,   163,     0,   164,     0,   165,     0,
     166,     0,   167,     0,   168,     0,   169,     0,   170,     0,
       0,     0,   171,     0,   172,     0,     0,     0,     0,     0,
     173,     0,   174,     0,   175,     0,   176,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,   177,   178,
       0,     0,     0,     0,     0,     0,     0,     0,     0,     0,
       0,     0,     0,     0,     0,     0,     0,     0,     0,   179,
     180,   181,   182,   183,   184,   185,   186,   187,   188,     0,
     189,   190,     0,     0,     0,     0,     0,     0,   191
    //[
  ];

  // YYCHECK.
  var yycheck_ =
  [
    //]
         2,    96,    74,    55,    28,    67,    79,    50,   220,   230,
       8,   359,    27,   326,    29,     8,   326,    87,   354,   262,
      90,     8,   472,   266,   651,    16,    17,    22,    90,    20,
      28,   353,    53,   355,   255,    28,   614,     2,   259,     4,
     575,    28,    94,    86,    87,     4,   420,    90,   376,    51,
      52,     2,   594,     4,   440,   574,    67,   577,    79,    53,
     472,    90,   780,   641,   468,    16,    17,   788,    55,    20,
      91,    92,    93,    25,    16,    17,    49,   399,    20,    74,
     416,   715,    27,    64,   458,   719,    29,   907,    26,   668,
      25,   250,   412,   415,   903,   417,   776,    61,    49,    50,
     420,   874,    53,   508,    25,    85,   511,    94,    25,    51,
     114,   685,    13,    64,   518,     0,    25,   130,    16,    17,
      61,   443,    20,   803,   156,   102,   158,   102,    79,    13,
     703,   102,    25,   137,   470,    86,    87,   710,   151,    90,
      91,    92,    93,   770,   771,    56,   596,    37,    38,   471,
     104,   729,    25,    51,    52,   135,   104,    16,    17,    59,
      60,    20,   740,   127,   323,    13,   939,   157,    25,   158,
     286,   243,   288,   150,   290,   150,   130,    26,   294,   150,
     898,     1,   130,    25,    52,   128,   127,   230,    56,   232,
     252,   876,  1012,  1002,   736,   153,   157,   151,   271,   151,
     158,   422,   744,   151,   724,   426,   780,   657,    13,   147,
     431,   156,   214,   158,   788,   153,   151,   429,   220,   147,
     993,   741,   685,   252,   945,   227,   447,   157,   807,   808,
     151,   452,   950,   224,   151,   226,   227,   307,   308,   309,
     310,   252,   151,    13,   580,   657,   632,   874,   622,   876,
     271,  1024,   203,   268,   157,   156,   592,   158,   151,   581,
     670,   104,   672,   591,   307,   308,   309,   310,   158,   312,
     313,   593,   156,   224,   158,   226,   227,   250,   151,   230,
     153,   232,   224,   248,   226,   690,   237,   130,    13,  1007,
     360,   361,   696,   743,   151,   929,   517,   248,   147,   250,
     362,   621,   622,   324,    28,   153,   991,   886,   156,   151,
     158,   153,   939,   940,   134,    61,   378,   360,   361,   782,
     271,    37,    38,   786,   898,   845,   224,   847,   226,   903,
     324,   743,   375,   362,    49,   854,   156,   857,   158,    26,
     321,   306,   862,   102,   130,   326,   311,   306,    70,   151,
     323,   156,   354,   158,   102,   306,   307,   308,   309,   310,
     311,   312,   313,   354,   991,   224,   993,   226,   355,   485,
     321,   945,   323,   324,   130,   326,   492,   725,   124,   321,
     126,   151,    59,    60,   326,   964,   156,   697,   158,   931,
     149,   150,    61,   636,   929,   468,   117,  1024,   102,   611,
      70,   714,   150,   354,   104,   356,   926,   927,   151,   360,
     361,   157,   399,   437,   416,   102,   138,   139,   140,   141,
     142,   402,   403,   104,   375,   416,   428,   429,  1002,    25,
     417,   156,    56,   158,   102,   898,   153,   900,   440,   437,
     903,   130,   905,   102,   437,   518,   150,   468,   990,   130,
     437,   402,   403,    26,   105,   124,   443,   126,   127,  1037,
     147,   104,   149,   150,   104,   416,   153,    25,   470,   989,
     140,   141,   142,   883,   884,   440,   102,   104,   888,   470,
     890,   891,   150,   102,   471,   557,   936,   130,   203,   440,
     149,   150,   104,   565,   153,   869,    61,   518,   151,   450,
    1020,   151,  1022,   130,   153,   507,   508,   104,   151,   511,
     147,   573,   574,    15,   412,    17,   104,   468,   130,   470,
     102,   742,   237,   149,   150,   587,    70,   542,   600,   102,
     149,   150,    61,   130,   130,   250,    65,    26,   153,  1002,
     761,  1004,   130,   102,  1007,   560,  1009,   104,   760,   869,
     153,   685,   595,   774,   151,   151,   102,   455,   154,   124,
     154,   126,   158,   558,   637,   155,   568,   518,   150,   917,
     130,   566,   130,   130,   147,   923,   149,   150,   580,   102,
     153,   605,   625,    26,  1047,   995,   996,   997,   998,   580,
     592,   150,   157,   151,   581,   124,   154,   126,   600,   614,
     158,   592,   685,   149,   150,   600,   593,   605,   323,   611,
     104,   148,   605,   102,    56,   102,   637,   151,   605,   570,
     151,   572,   104,   696,   158,   102,   641,   150,    54,   580,
     632,   102,   704,   111,   576,  1045,   130,    63,    64,   711,
     861,   592,   151,   594,   595,    14,    15,   127,   130,   158,
      70,   104,   873,   748,   788,   102,    70,   791,   147,   102,
     149,   150,   732,   150,   666,   735,   668,   632,   127,   151,
     685,   733,   149,   150,   625,   696,    61,   130,   149,   150,
    1016,   632,     2,   745,     4,   102,   637,   127,   690,   732,
     127,   151,   735,    17,   746,  1017,    16,    17,   151,   782,
      20,   151,   149,   150,   147,   102,   149,   150,   158,   711,
     153,   156,   714,   715,   729,   717,   697,   719,    56,   700,
     701,   104,    25,   621,   154,   740,   707,   708,   102,    49,
      50,    58,   149,   150,   147,   686,   151,   148,   689,   124,
     691,   126,   127,    70,    64,   696,   697,   130,   151,   700,
     701,   151,   149,   150,   130,   102,   707,   708,   760,   746,
      52,   776,    54,    55,    56,    57,    86,    87,   151,   903,
      90,   905,   714,    61,   844,   149,   150,    58,    61,   151,
     801,   732,   157,   102,   735,   736,   113,   114,   803,    70,
     157,   151,   854,   744,   856,    52,   151,    54,    55,    56,
      57,   844,   149,   150,   102,   807,   808,   151,    61,    10,
     137,   945,   153,   947,    13,   898,     8,   900,   952,   148,
     903,   130,   905,   151,    52,   151,   777,   778,   151,   151,
     149,   150,   113,   114,    52,   151,   124,   839,   126,   127,
     842,   124,    52,   126,   127,   151,   132,   810,   811,   830,
     801,   149,   150,   155,    15,   570,   137,   572,    52,   151,
      54,    55,    56,    57,   151,   816,   148,   151,  1002,   130,
    1004,   124,   893,   126,   127,  1009,   135,    54,    55,   830,
      57,    70,   151,   203,   886,   151,    63,    64,    70,   151,
     841,   151,  1026,   844,   151,   916,    10,   848,   849,   148,
     156,   852,    10,   151,   224,   105,   226,   227,     9,    98,
     230,   100,   232,  1047,   151,   154,    98,   237,   100,  1002,
      10,  1004,   148,    56,  1007,   148,  1009,   929,   248,    52,
     250,    54,    55,    56,    57,    40,    41,    42,    43,    44,
      70,   892,   893,   151,   151,   151,   135,   136,   137,   138,
     139,   140,   141,   142,   151,   970,   138,   139,   140,   141,
     142,    52,   964,   135,  1047,   916,   151,   151,    98,   920,
     100,   686,   125,   151,   689,   151,   691,   151,   151,    56,
     931,   151,   151,   106,   151,   153,   306,   307,   308,   309,
     310,   311,   312,   313,   153,   450,    91,    93,   961,   962,
     711,   321,   965,   323,   967,   968,   326,   137,   138,   139,
     140,   141,   142,  1019,  1016,   770,  1018,  1019,   685,   749,
    1012,  1018,  1037,    16,    17,  1016,    99,    20,    57,   980,
    1017,   982,    94,   782,   354,   900,   356,   988,   898,   990,
     360,   361,   294,    52,   936,    54,    55,    56,    57,    58,
     396,   780,    -1,    46,    47,   375,    -1,    -1,    51,    52,
      -1,    70,   777,   778,    -1,  1016,    -1,  1030,  1031,  1032,
    1033,    64,    65,    -1,    -1,    52,    -1,    54,    55,    56,
      57,    -1,   402,   403,    -1,    -1,    -1,    -1,    -1,    -1,
    1053,    -1,    -1,    -1,    -1,    -1,   416,   106,    -1,    -1,
      -1,   816,    -1,   112,   113,   114,    -1,    -1,    -1,    -1,
     201,    -1,    -1,   204,   205,   206,    -1,    -1,    -1,    -1,
     440,    -1,    -1,    -1,    -1,    -1,   841,    -1,   137,   106,
     450,   140,    -1,   848,   849,   112,    -1,   852,     0,    52,
      -1,    54,    55,    56,    57,    58,     8,     9,    10,   158,
     470,    13,    14,    15,    -1,    17,    52,    70,    54,    55,
      56,    57,    58,    -1,    26,    27,    52,    -1,    54,    55,
      56,    57,    -1,    -1,    70,    37,    38,   892,    40,    41,
      42,    43,    44,    -1,    52,    -1,    54,    55,    56,    57,
      58,    -1,    -1,   106,    -1,    -1,    -1,    -1,    -1,   112,
     113,   114,    70,    -1,    -1,   920,    -1,    -1,   201,    -1,
     106,   204,   205,   206,   207,    -1,   112,   113,   114,    -1,
     106,    -1,    -1,    -1,   137,    -1,   112,   140,    -1,    -1,
     321,   224,    -1,   226,   227,   326,    -1,    -1,   106,    -1,
     102,   137,    -1,    -1,   140,   113,   114,    -1,    -1,    -1,
     570,    -1,   572,    -1,    -1,    -1,    -1,   153,    -1,    -1,
     580,    -1,    -1,   125,    -1,   980,    -1,   982,    -1,   137,
      -1,    -1,   592,   988,   594,   595,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   147,   148,    -1,   150,    -1,
      -1,   153,   154,    -1,   156,    -1,   158,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   625,    -1,    -1,    -1,    -1,
      -1,    -1,   632,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     411,   412,    -1,    -1,    -1,    -1,    -1,    -1,   321,   420,
      -1,    -1,    -1,   326,   327,   328,   329,   330,   331,   332,
     333,   334,   335,   336,   337,   338,   339,   340,   341,   342,
     343,   344,   345,   346,   347,   348,   349,   350,   351,   352,
      -1,   354,    -1,    -1,   455,    -1,   686,   458,    -1,   689,
      -1,   691,    -1,    -1,    -1,    -1,    -1,   697,    -1,    -1,
     700,   701,    -1,    -1,    -1,    -1,    -1,   707,   708,    -1,
       2,    -1,     4,    52,    -1,    54,    55,    56,    57,    58,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   402,
     403,    70,   732,    -1,    -1,   735,   736,   410,   411,   412,
      -1,   512,    -1,   416,   744,   418,   419,   420,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    49,    -1,    -1,
      -1,    53,    -1,    -1,    -1,    -1,   439,   106,    -1,    -1,
      -1,   444,    -1,    -1,   113,   114,    -1,   777,   778,    -1,
      -1,    -1,   455,    -1,    -1,   458,    -1,    79,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   470,   137,    91,
      92,    93,    94,    -1,    -1,   576,    -1,    -1,    52,    -1,
      54,    55,    56,    57,    58,    -1,   816,    -1,    -1,    -1,
      -1,    -1,    -1,   496,   497,    -1,    70,    -1,    -1,    52,
     830,    54,    55,    56,    57,    58,    -1,   608,    -1,   512,
      -1,   841,    -1,    -1,   844,    -1,    -1,    70,   848,   849,
     621,   622,   852,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,     2,   106,     4,    -1,    -1,    -1,    -1,   112,   113,
     114,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   649,    -1,
      -1,    -1,    -1,   106,    -1,    -1,    -1,    -1,    -1,   112,
     113,   114,   892,   137,    -1,    -1,   140,    -1,    -1,    -1,
      -1,    -1,    -1,   576,    -1,    -1,    -1,   580,    49,   153,
      -1,   203,    53,    -1,   137,    -1,    -1,   140,    -1,   592,
     920,    -1,   693,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   931,    -1,    -1,    -1,   608,    -1,    -1,    79,    -1,
      -1,    -1,    -1,   714,    -1,   237,    -1,    -1,   621,   622,
      91,    92,    93,    94,    -1,    -1,   248,    -1,   250,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   649,    -1,    -1,   271,
     980,    -1,   982,    -1,    -1,    -1,    -1,    -1,   988,    -1,
     990,    -1,    -1,    -1,    -1,    -1,   767,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   306,    -1,  1016,    -1,    -1,   311,
     693,    -1,    -1,    -1,   697,   698,    -1,   700,   701,    -1,
      -1,   323,   324,    -1,   707,   708,    -1,    -1,    -1,    -1,
      -1,   714,    -1,    -1,    -1,    -1,     2,   818,     4,    -1,
      -1,    -1,    -1,    -1,    -1,     2,    -1,     4,    -1,    -1,
      -1,    -1,   203,    -1,   356,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   751,    -1,
     851,    -1,   755,   756,    -1,   758,   759,    -1,    -1,    -1,
      -1,    -1,    -1,    49,   767,    -1,   237,    53,   869,    -1,
      -1,    -1,    49,    -1,    -1,    -1,    -1,   248,    -1,   250,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    79,    -1,    -1,    -1,    -1,    -1,    -1,
     271,    -1,    -1,    -1,    -1,    91,    92,    93,    -1,    -1,
      -1,    -1,    -1,    -1,    91,   818,    -1,    -1,   440,   822,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   830,   450,    -1,
      -1,    -1,    -1,    -1,    -1,   306,    -1,    -1,    -1,    70,
     311,    72,    -1,    74,    -1,    76,   468,    78,   851,    80,
      -1,    82,   323,   324,    -1,    86,    -1,    88,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   868,   869,    98,    -1,   100,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   356,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,     2,    -1,     4,   518,    -1,    -1,    -1,
      -1,    -1,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,    -1,    -1,    -1,    -1,   203,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   203,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      49,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   570,    -1,
     572,   237,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     237,    -1,   248,    -1,   250,    -1,    -1,    -1,    -1,   440,
      -1,   248,   594,   250,    -1,    -1,    -1,    -1,    -1,   450,
      -1,    -1,    -1,    -1,    -1,   271,    -1,    -1,    70,    -1,
      72,    -1,    74,    -1,    76,    -1,    78,   468,    80,    -1,
      82,    -1,    84,    -1,    86,    -1,    88,    -1,    -1,    -1,
     632,    -1,    -1,  1016,    -1,   637,    98,    -1,   100,    -1,
     306,    -1,    -1,    -1,    -1,   311,    -1,    -1,    -1,   306,
      -1,    -1,    -1,    -1,   311,    -1,    -1,   323,   324,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   323,   518,    -1,   326,
      -1,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,    -1,    -1,   686,    -1,    -1,   689,    -1,   691,
     356,    -1,    -1,    -1,   696,    -1,    -1,    -1,    -1,   356,
      70,    -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,
      80,    -1,    82,    -1,   203,    -1,    86,    -1,    88,   570,
      -1,   572,    -1,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,    -1,    -1,   736,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   744,   594,    -1,    -1,    -1,    -1,   237,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   248,
      -1,   250,    -1,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,    -1,   440,   777,   778,    -1,    -1,    -1,
      -1,   632,    -1,   440,   450,    -1,   637,    -1,    -1,    -1,
      -1,    -1,    -1,   450,    -1,    -1,    -1,    -1,    -1,   801,
      -1,    -1,   468,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   816,    -1,    -1,   306,    -1,    -1,
      -1,    -1,   311,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   323,   686,    -1,    -1,   689,   841,
     691,    -1,    -1,    -1,    -1,   696,   848,   849,    -1,    -1,
     852,    -1,   518,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   356,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   736,    -1,    -1,    -1,    -1,
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
     676,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     686,    -1,    -1,   689,    -1,   691,    -1,    -1,    -1,   686,
     696,    -1,   689,    -1,   691,    -1,    -1,    -1,    -1,    -1,
     697,   892,   893,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   916,    -1,    -1,    -1,   920,
     736,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   744,   736,
     931,   570,    -1,   572,    -1,    -1,    -1,   744,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   594,    -1,    -1,    -1,    -1,
      -1,   777,   778,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     777,   778,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   980,
      -1,   982,    -1,    -1,    -1,   801,    -1,   988,    -1,   990,
      -1,    -1,    -1,   632,    -1,    -1,    -1,    -1,    -1,    -1,
     816,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   816,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   841,    -1,    -1,    -1,    -1,
      -1,    -1,   848,   849,   841,    -1,   852,    -1,    -1,    -1,
      -1,   848,   849,    -1,    -1,   852,    -1,   686,    -1,    -1,
     689,    -1,   691,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   892,   893,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   892,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   736,    -1,    -1,
     916,    -1,    -1,    -1,   920,   744,    -1,    52,    53,   916,
      -1,    56,    -1,   920,    -1,   931,    -1,    -1,    -1,    -1,
      -1,    66,    -1,    68,   931,    70,    -1,    72,    -1,    74,
      -1,    76,    -1,    78,    -1,    80,    -1,    82,   777,   778,
      -1,    86,    -1,    88,    -1,    -1,    -1,    -1,    -1,    94,
      -1,    96,    -1,    98,    -1,   100,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   980,    -1,   982,   112,   113,    -1,
      -1,    -1,   988,   980,   990,   982,    -1,   816,    -1,    -1,
      -1,   988,    -1,   990,    -1,    -1,    -1,    -1,   133,   134,
     135,   136,   137,   138,   139,   140,   141,   142,    -1,   144,
     145,    -1,   841,    -1,    -1,    -1,    -1,   152,    -1,   848,
     849,     0,     1,   852,     3,     4,     5,     6,     7,    -1,
      -1,    -1,    11,    12,    -1,    -1,    -1,    16,    -1,    18,
      19,    20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,
      -1,    30,    31,    32,    33,    34,    35,    36,    -1,    -1,
      39,    -1,    -1,   892,    -1,    -1,    45,    46,    47,    48,
      49,    50,    51,    52,    53,    54,    55,    56,    57,    -1,
      59,    60,    -1,    62,    63,    64,    -1,    66,    -1,    68,
      -1,   920,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   931,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   103,    -1,    -1,   106,   107,    -1,
     109,   110,    -1,   112,    -1,    -1,   115,   116,   117,   118,
     119,   120,   121,   122,   123,    -1,    -1,    -1,    -1,    -1,
      -1,   980,    -1,   982,    -1,    -1,    -1,    -1,    -1,   988,
      -1,   990,    -1,    -1,   143,   144,   145,    -1,    -1,    -1,
      -1,    -1,     0,    -1,    -1,    -1,    -1,   156,    -1,   158,
       8,     9,    10,    -1,    -1,    13,    14,    15,    -1,    17,
      -1,    -1,    -1,    -1,    -1,    44,    -1,    -1,    26,    27,
      28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,
      38,    -1,    40,    41,    42,    43,    44,    -1,    -1,    -1,
      -1,    70,    -1,    72,    -1,    74,    -1,    76,    -1,    78,
      -1,    80,    -1,    82,    -1,    84,    85,    86,    -1,    88,
      -1,    90,    70,    92,    72,    -1,    74,    -1,    76,    98,
      78,   100,    80,    -1,    82,    -1,    84,    85,    86,    -1,
      88,    -1,    90,    -1,    92,    -1,    -1,    -1,    -1,    -1,
      98,    -1,   100,    -1,   102,    -1,   104,   105,    -1,    -1,
      -1,    -1,   131,   111,   133,   134,   135,   136,   137,   138,
     139,   140,   141,   142,    -1,    -1,    -1,   125,    -1,    -1,
     128,    -1,   130,   131,   132,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,    -1,    -1,    -1,   147,
     148,   149,   150,   151,     0,    -1,   154,   155,   156,    -1,
     158,    -1,     8,     9,    10,    -1,    -1,    13,    14,    15,
      -1,    17,    -1,    -1,    -1,    -1,    -1,    44,    -1,    25,
      -1,    27,    28,    29,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    37,    38,    -1,    40,    41,    42,    43,    44,    -1,
      -1,    -1,    -1,    70,    -1,    72,    -1,    74,    -1,    76,
      -1,    78,    -1,    80,    -1,    82,    -1,    84,    85,    86,
      -1,    88,    -1,    90,    70,    92,    72,    -1,    74,    -1,
      76,    98,    78,   100,    80,    -1,    82,    -1,    84,    85,
      86,    -1,    88,    -1,    90,    -1,    92,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,   104,   105,
      -1,    -1,    -1,    -1,   131,   111,   133,   134,   135,   136,
     137,   138,   139,   140,   141,   142,    -1,    -1,    -1,   125,
      -1,    -1,   128,    -1,   130,   131,   132,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   142,    -1,    -1,    -1,
      -1,    -1,   148,   149,   150,   151,     0,    -1,   154,   155,
     156,    -1,   158,    -1,     8,     9,    10,    -1,    -1,    13,
      14,    15,    -1,    17,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    25,    -1,    27,    28,    29,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    37,    38,    -1,    40,    41,    42,    43,
      44,    -1,    -1,    -1,    -1,    70,    -1,    72,    -1,    74,
      -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,    84,
      85,    86,    -1,    88,    -1,    90,    70,    92,    72,    -1,
      74,    -1,    76,    98,    78,   100,    80,    -1,    82,    -1,
      84,    85,    86,    -1,    88,    -1,    90,    -1,    92,    -1,
      -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,
     104,   105,    -1,    -1,    -1,    -1,   131,   111,   133,   134,
     135,   136,   137,   138,   139,   140,   141,   142,    -1,    -1,
      -1,   125,    -1,    -1,   128,    -1,   130,   131,   132,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,    -1,
      -1,    -1,    -1,    -1,   148,   149,   150,   151,     0,    -1,
     154,   155,   156,    -1,   158,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    44,    -1,    -1,    26,    27,    28,    29,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    70,    -1,    72,
      -1,    74,    -1,    76,    -1,    78,    -1,    80,    -1,    82,
      -1,    84,    85,    86,    -1,    88,    -1,    90,    70,    92,
      72,    -1,    74,    -1,    76,    98,    78,   100,    80,    -1,
      82,    -1,    84,    85,    86,    -1,    88,    -1,    90,    -1,
      92,    -1,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,
     102,    -1,    -1,   105,    -1,    -1,    -1,    -1,   131,   111,
     133,   134,   135,   136,   137,   138,   139,   140,   141,   142,
      -1,    -1,    -1,   125,    -1,    -1,   128,    -1,   151,   131,
     132,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,    -1,    -1,    -1,   147,   148,   149,   150,   151,
       0,    -1,   154,   155,   156,    -1,   158,    -1,     8,     9,
      10,    -1,    -1,    13,    14,    15,    -1,    17,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    26,    27,    28,    29,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,    38,    -1,
      40,    41,    42,    43,    44,    -1,    -1,    -1,    -1,    70,
      -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,
      -1,    82,    -1,    84,    85,    86,    -1,    88,    -1,    90,
      70,    92,    72,    -1,    74,    -1,    76,    98,    78,   100,
      80,    -1,    82,    -1,    84,    85,    86,    -1,    88,    -1,
      90,    -1,    92,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,   105,    -1,    -1,    -1,    -1,
      -1,   111,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,    -1,    -1,   125,    -1,    -1,   128,    -1,
      -1,   131,   132,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,    -1,    -1,    -1,    -1,   147,   148,   149,
     150,   151,     0,    -1,   154,   155,   156,    -1,   158,    -1,
       8,     9,    10,    -1,    -1,    13,    14,    15,    -1,    17,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    27,
      28,    29,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,
      38,    -1,    40,    41,    42,    43,    44,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    70,    -1,    72,    -1,    74,    -1,    76,    -1,
      78,    -1,    80,    -1,    82,    -1,    84,    85,    86,    -1,
      88,    -1,    90,    -1,    92,    -1,    -1,    -1,    -1,    -1,
      98,    -1,   100,    -1,   102,    -1,   104,   105,    -1,    -1,
      -1,    -1,    -1,   111,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   125,    -1,    -1,
     128,    -1,   130,   131,   132,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,    -1,    -1,    -1,    -1,
     148,   149,   150,   151,     0,    -1,   154,   155,   156,    -1,
     158,    -1,     8,     9,    10,    -1,    -1,    13,    14,    15,
      -1,    17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      26,    27,    28,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    37,    38,    -1,    40,    41,    42,    43,    44,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    70,    -1,    72,    -1,    74,    -1,
      76,    -1,    78,    -1,    80,    -1,    82,    -1,    84,    85,
      86,    -1,    88,    -1,    90,    -1,    92,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,    -1,   105,
      -1,    -1,    -1,    -1,    -1,   111,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   125,
      -1,    -1,    -1,    -1,    -1,   131,    -1,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   142,    -1,    -1,    -1,
      -1,   147,   148,   149,   150,   151,     0,   153,   154,   155,
     156,    -1,   158,    -1,     8,     9,    10,    -1,    -1,    13,
      14,    15,    -1,    17,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    27,    28,    29,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    37,    38,    -1,    40,    41,    42,    43,
      44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    70,    -1,    72,    -1,
      74,    -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,
      84,    85,    86,    -1,    88,    -1,    90,    -1,    92,    -1,
      -1,    -1,    -1,    -1,    98,    -1,   100,    -1,   102,    -1,
      -1,   105,    -1,    -1,    -1,    -1,    -1,   111,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   125,    -1,    -1,   128,    -1,    -1,   131,   132,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,    -1,
      -1,    -1,    -1,    -1,   148,   149,   150,   151,     0,    -1,
     154,   155,   156,    -1,   158,    -1,     8,     9,    10,    -1,
      -1,    13,    14,    15,    -1,    17,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    26,    27,    28,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    37,    38,    -1,    40,    41,
      42,    43,    44,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    70,    -1,
      72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,    -1,
      82,    -1,    84,    85,    86,    -1,    88,    -1,    90,    -1,
      92,    -1,    -1,    -1,    -1,    -1,    98,    -1,   100,    -1,
     102,    -1,    -1,   105,    -1,    -1,    -1,    -1,    -1,   111,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   125,    -1,    -1,    -1,    -1,    -1,   131,
      -1,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,    -1,    -1,    -1,   147,   148,   149,   150,   151,
       0,   153,   154,   155,   156,    -1,   158,    -1,     8,     9,
      10,    -1,    -1,    13,    14,    15,    -1,    17,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    27,    28,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,    38,    -1,
      40,    41,    42,    43,    44,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      70,    -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,
      80,    -1,    82,    -1,    84,    85,    86,    -1,    88,    -1,
      90,    -1,    92,    -1,    -1,    -1,    -1,    -1,    98,    -1,
     100,    -1,   102,    -1,    -1,   105,    -1,    -1,    -1,    -1,
      -1,   111,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   125,    -1,    -1,    -1,    -1,
      -1,   131,    -1,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,    -1,    -1,    -1,    -1,    -1,   148,   149,
     150,   151,     0,   153,   154,   155,   156,    -1,   158,    -1,
       8,     9,    10,    -1,    -1,    -1,    14,    15,    -1,    17,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    26,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    37,
      38,    -1,    40,    41,    42,    43,    44,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    70,    -1,    72,    -1,    74,    -1,    76,    -1,
      78,    -1,    80,    -1,    82,    -1,    84,    85,    86,    -1,
      88,    -1,    90,    -1,    92,    -1,    -1,    -1,    -1,    -1,
      98,    -1,   100,    -1,   102,    -1,   104,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   125,    -1,    -1,
      -1,    -1,   130,   131,    -1,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,    -1,    -1,    -1,   147,
     148,   149,   150,   151,     0,    -1,   154,    -1,   156,    -1,
     158,    -1,     8,     9,    10,    -1,    -1,    -1,    14,    15,
      -1,    17,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    37,    38,    -1,    40,    41,    42,    43,    44,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    70,    -1,    72,    -1,    74,    -1,
      76,    -1,    78,    -1,    80,    -1,    82,    -1,    84,    85,
      86,    -1,    88,    -1,    90,    -1,    92,    -1,    -1,    -1,
      -1,    -1,    98,    -1,   100,    -1,   102,    -1,   104,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   125,
      -1,    -1,    -1,    -1,   130,   131,    -1,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   142,    -1,    -1,    -1,
      -1,    -1,   148,   149,   150,   151,    -1,    -1,   154,    -1,
     156,     1,   158,     3,     4,     5,     6,     7,     8,     9,
      10,    11,    12,    -1,    -1,    15,    16,    -1,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    70,    66,    72,    68,    74,
      -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,    84,
      85,    86,    -1,    88,    -1,    90,    -1,    92,    -1,    -1,
      -1,    -1,    -1,    98,    -1,   100,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   103,    -1,    -1,   106,   107,    -1,   109,
     110,    -1,   112,    -1,    -1,   115,   116,   117,   118,   119,
     120,   121,   122,   123,    -1,    -1,   131,    -1,   133,   134,
     135,   136,   137,   138,   139,   140,   141,   142,    -1,    -1,
      -1,    -1,    -1,   143,   144,   145,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   158,    -1,    -1,   156,     1,   158,     3,
       4,     5,     6,     7,    -1,    -1,    10,    11,    12,    -1,
      14,    15,    16,    -1,    18,    19,    20,    21,    22,    23,
      24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,    33,
      34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,
      -1,    45,    46,    47,    48,    49,    50,    51,    52,    53,
      54,    55,    56,    57,    -1,    59,    60,    -1,    62,    63,
      64,    -1,    66,    -1,    68,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,
      -1,    -1,   106,   107,    -1,   109,   110,    -1,   112,    -1,
      -1,   115,   116,   117,   118,   119,   120,   121,   122,   123,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   143,
     144,   145,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   156,     1,   158,     3,     4,     5,     6,     7,
      -1,    -1,    10,    11,    12,    -1,    -1,    15,    16,    17,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    45,    46,    47,
      48,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    66,    -1,
      68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,   106,   107,
      -1,   109,   110,    -1,   112,    -1,    -1,   115,   116,   117,
     118,   119,   120,   121,   122,   123,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   143,   144,   145,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   156,     1,
     158,     3,     4,     5,     6,     7,    -1,    -1,    10,    11,
      12,    -1,    -1,    15,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    -1,    68,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
     112,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,    -1,    -1,     1,
      -1,     3,     4,     5,     6,     7,    -1,     9,    10,    11,
      12,   143,   144,   145,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,   156,    -1,   158,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    -1,    68,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
     112,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,    -1,    -1,     1,
      -1,     3,     4,     5,     6,     7,    -1,    -1,    -1,    11,
      12,   143,   144,   145,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,   156,    -1,   158,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    -1,    68,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
     112,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   143,   144,   145,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   154,    -1,   156,     1,   158,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,    -1,    -1,    -1,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   143,   144,   145,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   154,    -1,
     156,     1,   158,     3,     4,     5,     6,     7,    -1,    -1,
      -1,    11,    12,    -1,    -1,    -1,    16,    -1,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    66,    -1,    68,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   103,    -1,    -1,   106,   107,    -1,   109,
     110,    -1,   112,    -1,    -1,   115,   116,   117,   118,   119,
     120,   121,   122,   123,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   143,   144,   145,    -1,    -1,   148,     1,
      -1,     3,     4,     5,     6,     7,   156,    -1,   158,    11,
      12,    -1,    -1,    -1,    16,    -1,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    66,    -1,    68,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
     112,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   143,   144,   145,    -1,    -1,   148,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   156,     1,   158,     3,     4,     5,
       6,     7,    -1,    -1,    10,    11,    12,    -1,    -1,    -1,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,     1,    -1,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
     156,    -1,   158,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,   125,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
     156,    -1,   158,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,   113,   114,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,   158,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
     156,    -1,   158,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,   158,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
     156,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   143,   144,   145,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     156,     3,     4,     5,     6,     7,     8,     9,    10,    11,
      12,    13,    14,    15,    16,    17,    18,    19,    20,    21,
      22,    23,    24,    25,    26,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    37,    38,    39,    -1,    -1,
      -1,    -1,    -1,    45,    46,    47,    48,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,    -1,
      72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,    -1,
      82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     112,   113,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,   144,   145,    -1,    -1,    -1,    -1,    -1,    -1,
     152,   153,     3,     4,     5,     6,     7,     8,     9,    10,
      11,    12,    13,    14,    15,    16,    17,    18,    19,    20,
      21,    22,    23,    24,    25,    26,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    -1,
      -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,    50,
      51,    52,    53,    54,    55,    56,    57,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,
      -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,
      -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,
      -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   112,   113,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,   144,   145,    -1,    -1,    -1,    -1,    -1,
      -1,   152,     3,     4,     5,     6,     7,     8,     9,    10,
      11,    12,    13,    14,    15,    16,    17,    18,    19,    20,
      21,    22,    23,    24,    25,    26,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    -1,
      -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,    50,
      51,    52,    53,    54,    -1,    56,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,
      -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,
      -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,
      -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   112,   113,    -1,    -1,   116,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,   144,   145,    -1,    -1,    -1,    -1,    -1,
      -1,   152,     3,     4,     5,     6,     7,     8,     9,    10,
      11,    12,    13,    14,    15,    16,    17,    18,    19,    20,
      21,    22,    23,    24,    25,    26,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    -1,
      -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,    50,
      51,    52,    53,    -1,    -1,    56,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,
      -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,
      -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,
      -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   112,   113,    -1,    -1,   116,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,   144,   145,    -1,    -1,    -1,    -1,    -1,
      -1,   152,     3,     4,     5,     6,     7,     8,     9,    10,
      11,    12,    13,    14,    15,    16,    17,    18,    19,    20,
      21,    22,    23,    24,    25,    26,    -1,    -1,    -1,    30,
      31,    32,    33,    34,    35,    36,    37,    38,    39,    -1,
      -1,    -1,    -1,    -1,    45,    46,    47,    48,    49,    50,
      51,    52,    53,    -1,    -1,    56,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,
      -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,
      -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,
      -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   112,   113,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   133,   134,   135,   136,   137,   138,   139,   140,
     141,   142,    -1,   144,   145,     3,     4,     5,    -1,     7,
      -1,   152,    -1,    11,    12,    -1,    -1,    -1,    16,    -1,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,
      -1,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,   106,   107,
      -1,   109,   110,    -1,    -1,    -1,    -1,   115,   116,   117,
     118,   119,   120,   121,   122,   123,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,
      12,    -1,    -1,    -1,    16,   143,    18,    19,    20,    21,
      22,    23,    24,   151,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
      -1,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,    -1,    -1,    -1,
      16,   143,    18,    19,    20,    21,    22,    23,    24,   151,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    47,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,   113,   114,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
       6,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    45,
      46,    -1,    48,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,   113,   114,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,   113,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,   113,   114,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,   113,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    58,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,   113,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      66,    -1,    68,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,   143,   144,   145,
      16,    -1,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,   112,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,
      -1,    11,    12,    -1,    -1,    -1,    16,   143,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   103,    -1,    -1,   106,   107,    -1,   109,
     110,    -1,   112,    -1,    -1,   115,   116,   117,   118,   119,
     120,   121,   122,   123,    -1,    -1,    -1,    -1,    -1,     3,
       4,     5,    -1,     7,    -1,    -1,    -1,    11,    12,    -1,
      -1,    -1,    16,   143,    18,    19,    20,    21,    22,    23,
      24,    -1,    -1,    -1,    -1,    -1,    30,    31,    32,    33,
      34,    35,    36,    -1,    -1,    39,    -1,    -1,    -1,    -1,
      -1,    -1,    46,    -1,    -1,    49,    50,    51,    52,    53,
      54,    55,    56,    57,    -1,    59,    60,    -1,    62,    63,
      64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    98,    -1,    -1,    -1,    -1,   103,
      -1,    -1,   106,   107,    -1,   109,   110,    -1,    -1,    -1,
      -1,   115,   116,   117,   118,   119,   120,   121,   122,   123,
      -1,    -1,    -1,    -1,    -1,     3,     4,     5,    -1,     7,
      -1,    -1,    -1,    11,    12,    -1,    -1,    -1,    16,   143,
      18,    19,    20,    21,    22,    23,    24,    -1,    -1,    -1,
      -1,    -1,    30,    31,    32,    33,    34,    35,    36,    -1,
      -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,
      -1,    49,    50,    51,    52,    53,    54,    55,    56,    57,
      -1,    59,    60,    -1,    62,    63,    64,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,   106,   107,
      -1,   109,   110,    -1,    -1,    -1,    -1,   115,   116,   117,
     118,   119,   120,   121,   122,   123,    -1,    -1,    -1,    -1,
      -1,     3,     4,     5,    -1,     7,    -1,    -1,    -1,    11,
      12,    -1,    -1,    -1,    16,   143,    18,    19,    20,    21,
      22,    23,    24,    -1,    -1,    -1,    -1,    -1,    30,    31,
      32,    33,    34,    35,    36,    -1,    -1,    39,    -1,    -1,
      -1,    -1,    -1,    -1,    46,    -1,    -1,    49,    50,    51,
      52,    53,    54,    55,    56,    57,    -1,    59,    60,    -1,
      62,    63,    64,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   103,    -1,    -1,   106,   107,    -1,   109,   110,    -1,
      -1,    -1,    -1,   115,   116,   117,   118,   119,   120,   121,
     122,   123,    -1,    -1,    -1,    -1,    -1,     3,     4,     5,
      -1,     7,    -1,    -1,    -1,    11,    12,    -1,    -1,    -1,
      16,   143,    18,    19,    20,    21,    22,    23,    24,    -1,
      -1,    -1,    -1,    -1,    30,    31,    32,    33,    34,    35,
      36,    -1,    -1,    39,    -1,    -1,    -1,    -1,    -1,    -1,
      46,    -1,    -1,    49,    50,    51,    52,    53,    54,    55,
      56,    57,    -1,    59,    60,    -1,    62,    63,    64,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   103,    -1,    -1,
     106,   107,    -1,   109,   110,    -1,    -1,    -1,    -1,   115,
     116,   117,   118,   119,   120,   121,   122,   123,    -1,    -1,
      -1,    -1,    -1,     3,     4,     5,    -1,     7,    -1,    -1,
      -1,    11,    12,    -1,    -1,    -1,    16,   143,    18,    19,
      20,    21,    22,    23,    24,    -1,    -1,    -1,    -1,    -1,
      30,    31,    32,    33,    34,    35,    36,    -1,    -1,    39,
      -1,    -1,    -1,    -1,    -1,    -1,    46,    -1,    -1,    49,
      50,    51,    52,    53,    54,    55,    56,    57,    -1,    59,
      60,    -1,    62,    63,    64,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   103,    -1,    -1,   106,   107,    -1,   109,
     110,    -1,    -1,    -1,    -1,   115,   116,   117,   118,   119,
     120,   121,   122,   123,    52,    53,    -1,    -1,    56,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    -1,
      68,    -1,    70,   143,    72,    -1,    74,    -1,    76,    -1,
      78,    -1,    80,    -1,    82,    -1,    -1,    -1,    86,    -1,
      88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    96,    -1,
      98,    -1,   100,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   112,   113,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,   144,   145,    52,    53,
      -1,    -1,    56,    -1,   152,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    66,    -1,    68,    -1,    70,    -1,    72,    -1,
      74,    -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,
      -1,    -1,    86,    -1,    88,    -1,    -1,    -1,    -1,    -1,
      94,    -1,    96,    -1,    98,    -1,   100,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   112,   113,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,    -1,
     144,   145,    52,    53,    -1,    -1,    56,    -1,   152,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,
      70,    -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,
      80,    -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,
      -1,    -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,
     100,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   112,   113,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,    -1,   144,   145,    52,    53,    -1,    -1,
      56,    -1,   152,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      66,    -1,    68,    -1,    70,    -1,    72,    -1,    74,    -1,
      76,    -1,    78,    -1,    80,    -1,    82,    -1,    -1,    -1,
      86,    -1,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,
      96,    -1,    98,    -1,   100,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   112,   113,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   142,    -1,   144,   145,
      52,    53,    -1,    -1,    56,    -1,   152,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,    -1,
      72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,    -1,
      82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     112,   113,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,   144,   145,    52,    53,    -1,    -1,    56,    -1,
     152,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    -1,
      68,    -1,    70,    -1,    72,    -1,    74,    -1,    76,    -1,
      78,    -1,    80,    -1,    82,    -1,    -1,    -1,    86,    -1,
      88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    96,    -1,
      98,    -1,   100,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   112,   113,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,   144,   145,    52,    53,
      -1,    -1,    56,    -1,   152,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    66,    -1,    68,    -1,    70,    -1,    72,    -1,
      74,    -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,
      -1,    -1,    86,    -1,    88,    -1,    -1,    -1,    -1,    -1,
      94,    -1,    96,    -1,    98,    -1,   100,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   112,   113,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,    -1,
     144,   145,    52,    53,    -1,    -1,    56,    -1,   152,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    66,    -1,    68,    -1,
      70,    -1,    72,    -1,    74,    -1,    76,    -1,    78,    -1,
      80,    -1,    82,    -1,    -1,    -1,    86,    -1,    88,    -1,
      -1,    -1,    -1,    -1,    94,    -1,    96,    -1,    98,    -1,
     100,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,   112,   113,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,    -1,   144,   145,    52,    53,    -1,    -1,
      56,    -1,   152,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      66,    -1,    68,    -1,    70,    -1,    72,    -1,    74,    -1,
      76,    -1,    78,    -1,    80,    -1,    82,    -1,    -1,    -1,
      86,    -1,    88,    -1,    -1,    -1,    -1,    -1,    94,    -1,
      96,    -1,    98,    -1,   100,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,   112,   113,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,   133,   134,   135,
     136,   137,   138,   139,   140,   141,   142,    -1,   144,   145,
      52,    53,    -1,    -1,    56,    -1,   152,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    66,    -1,    68,    -1,    70,    -1,
      72,    -1,    74,    -1,    76,    -1,    78,    -1,    80,    -1,
      82,    -1,    -1,    -1,    86,    -1,    88,    -1,    -1,    -1,
      -1,    -1,    94,    -1,    96,    -1,    98,    -1,   100,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
     112,   113,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,   133,   134,   135,   136,   137,   138,   139,   140,   141,
     142,    -1,   144,   145,    52,    53,    -1,    -1,    56,    -1,
     152,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    66,    -1,
      68,    -1,    70,    -1,    72,    -1,    74,    -1,    76,    -1,
      78,    -1,    80,    -1,    82,    -1,    -1,    -1,    86,    -1,
      88,    -1,    -1,    -1,    -1,    -1,    94,    -1,    96,    -1,
      98,    -1,   100,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,   112,   113,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,   133,   134,   135,   136,   137,
     138,   139,   140,   141,   142,    -1,   144,   145,    52,    53,
      -1,    -1,    56,    -1,   152,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    66,    -1,    68,    -1,    70,    -1,    72,    -1,
      74,    -1,    76,    -1,    78,    -1,    80,    -1,    82,    -1,
      -1,    -1,    86,    -1,    88,    -1,    -1,    -1,    -1,    -1,
      94,    -1,    96,    -1,    98,    -1,   100,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   112,   113,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,
      -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,    -1,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,    -1,
     144,   145,    -1,    -1,    -1,    -1,    -1,    -1,   152
    //[
  ];

  // STOS_[STATE-NUM]
  // The (internal number of the) accessing symbol of state STATE-NUM.
  var yystos_ =
  [
    //]
         0,   160,   161,     0,     1,     3,     4,     5,     6,     7,
      11,    12,    16,    18,    19,    20,    21,    22,    23,    24,
      30,    31,    32,    33,    34,    35,    36,    39,    45,    46,
      47,    48,    49,    50,    51,    52,    53,    54,    55,    56,
      57,    59,    60,    62,    63,    64,    66,    68,   103,   106,
     107,   109,   110,   112,   115,   116,   117,   118,   119,   120,
     121,   122,   123,   143,   144,   145,   162,   163,   164,   171,
     173,   174,   176,   177,   180,   181,   182,   184,   185,   186,
     188,   189,   199,   213,   231,   232,   233,   234,   235,   236,
     237,   238,   239,   240,   241,   266,   267,   281,   282,   283,
     284,   285,   286,   287,   290,   292,   293,   305,   307,   308,
     309,   310,   311,   312,   313,   344,   355,   164,     3,     4,
       5,     6,     7,     8,     9,    10,    11,    12,    13,    14,
      15,    16,    17,    18,    19,    20,    21,    22,    23,    24,
      25,    26,    30,    31,    32,    33,    34,    35,    36,    37,
      38,    39,    45,    46,    47,    48,    49,    50,    51,    52,
      53,    56,    66,    68,    70,    72,    74,    76,    78,    80,
      82,    86,    88,    94,    96,    98,   100,   112,   113,   133,
     134,   135,   136,   137,   138,   139,   140,   141,   142,   144,
     145,   152,   192,   193,   194,   195,   197,   198,   305,   307,
      39,    58,   103,   106,   112,   113,   114,   144,   181,   189,
     199,   201,   206,   209,   211,   231,   309,   310,   312,   313,
     342,   343,   206,   206,   153,   207,   208,   153,   203,   207,
     153,   158,   349,    54,   194,   349,   165,   147,    21,    22,
      30,    31,    32,   180,   199,   231,   199,    56,     1,    47,
     106,   167,   168,   169,   171,   183,   184,   355,   174,   215,
     202,   211,   342,   355,   201,   341,   342,   355,    46,   103,
     143,   151,   188,   213,   231,   309,   310,   313,   259,   260,
      54,    55,    57,   192,   297,   306,   296,   297,   298,   157,
     288,   157,   294,   157,   291,   157,   295,    59,    60,   176,
     199,   199,   156,   158,   348,   353,   354,    40,    41,    42,
      43,    44,    37,    38,    26,   147,   203,   207,   272,    28,
     264,   130,   151,   106,   112,   185,   130,    70,    72,    74,
      76,    78,    80,    82,    84,    85,    86,    88,    90,    92,
      98,   100,   131,   133,   134,   135,   136,   137,   138,   139,
     140,   141,   142,   102,   149,   150,   214,   174,   175,   175,
     218,   220,   175,   348,   354,   103,   182,   189,   231,   247,
     309,   310,   313,    52,    56,    98,   103,   190,   191,   231,
     309,   310,   313,   191,    33,    34,    35,    36,    49,    50,
      51,    52,    56,   153,   192,   311,   339,   102,   150,   347,
     272,   284,   104,   104,   151,   201,    56,   201,   201,   201,
     130,   105,   151,   210,   355,   102,   149,   150,   104,   104,
     151,   210,   206,   349,   350,   206,   205,   206,   211,   342,
     355,   174,   350,   174,    54,    63,    64,   172,   153,   200,
     147,   167,   102,   150,   104,   171,   170,   183,   154,   348,
     354,   350,   216,   350,   155,   151,   158,   352,   151,   352,
     148,   352,   349,    56,    59,    60,   185,   187,   151,   102,
     149,   150,   261,    61,   124,   126,   127,   299,   127,   299,
     127,    65,   299,   127,   127,   289,   299,   127,    61,   127,
     127,   127,   289,   127,    61,   127,    70,    70,   156,   164,
     175,   175,   175,   175,   171,   174,   174,   274,   273,   111,
     178,   265,   112,   176,   201,   211,   212,   183,   151,   188,
     151,   173,   176,   189,   199,   201,   212,   199,   199,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   199,   199,    52,    53,    56,   197,   271,   345,   346,
     205,    52,    53,    56,   197,   270,   345,   166,   167,    13,
     243,   353,   243,   175,   175,   348,    17,   275,    56,   102,
     149,   150,    25,   174,    52,    56,   190,     1,   134,   314,
     353,   102,   149,   150,   227,   340,   228,   347,    52,    56,
     345,   176,   199,   176,   199,   196,   199,   201,   112,   201,
     209,   342,    52,    56,   205,    52,    56,   343,   350,   154,
     350,   151,   151,   350,   194,   217,   199,   162,   148,   345,
     345,   199,   147,   350,   169,   350,   342,   151,   187,    52,
      56,   205,    52,    56,    52,    54,    55,    56,    57,    58,
      70,   106,   112,   113,   114,   137,   140,   153,   262,   317,
     319,   320,   321,   322,   323,   324,   327,   328,   329,   330,
     333,   334,   335,   336,   337,   301,   300,   157,   299,   157,
     157,   157,   199,   199,    85,   135,   254,   255,   355,   254,
     179,   254,   201,   151,   350,   187,   151,   130,    44,   349,
     104,   104,   203,   207,   269,   349,   351,   104,   104,   203,
     207,   268,    10,   242,     8,   277,   355,   167,    13,   167,
      27,   244,   353,   244,   275,   211,   242,    52,    56,   205,
      52,    56,   222,   225,   353,   315,   224,    52,    56,   190,
     205,   166,   174,   153,   316,   319,   229,   203,   204,   207,
     355,    44,   194,   201,   210,   104,   104,   351,   104,   104,
     342,   174,   148,   162,   352,   185,   351,   130,   201,    52,
     106,   112,   248,   249,   250,   321,   319,    29,   128,   263,
     151,   318,   151,   338,   355,    52,   151,   338,   151,   318,
      52,   151,   318,    52,   302,    54,    55,    57,   304,   313,
      52,    58,   251,   253,   256,   323,   325,   326,   329,   331,
     332,   335,   337,   349,   167,   167,   254,   167,   112,   201,
     187,   199,   132,   176,   199,   176,   199,   178,   203,   155,
     104,   176,   199,   176,   199,   178,   204,   201,   212,   278,
     355,    15,   246,   355,    14,   245,   246,   246,   219,   221,
     242,   151,   243,   351,   175,   353,   175,   166,   351,   242,
     350,   319,   166,   353,   192,   272,   264,   199,   104,   151,
     350,   148,   201,   250,   151,   321,   151,   350,   256,   167,
     167,   317,   322,   333,   335,   324,   329,   337,   323,   330,
     335,   323,   303,   130,   103,   231,   256,   135,   151,   252,
     151,   338,   338,   151,   252,   151,   252,   156,    10,   148,
     167,    10,   201,   199,   176,   199,   105,   279,   355,   167,
       9,   280,   355,   175,   242,   242,   167,   167,   201,   167,
     244,   226,   353,   242,   350,   242,   230,   350,   249,   151,
     112,   248,   154,    10,   148,   151,   318,   151,   318,   338,
     151,   318,   151,   318,   318,   167,   231,    56,   102,   135,
     251,   332,   335,   325,   329,   323,   331,   335,   323,    52,
     257,   258,   320,   148,   103,   189,   231,   309,   310,   313,
     243,   167,   243,   242,   242,   246,   275,   276,   223,   166,
     316,   151,   249,   151,   321,   323,   335,   323,   323,   125,
      52,    56,   151,   252,   151,   252,   338,   151,   252,   151,
     252,   252,   151,   349,    56,   102,   149,   150,   167,   167,
     167,   242,   166,   249,   151,   318,   151,   318,   318,   318,
     323,   335,   323,   323,   258,    52,    56,   205,    52,    56,
     277,   245,   242,   242,   249,   323,   252,   151,   252,   252,
     252,   351,   318,   323,   252
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
     365,   366,   367,   368,   369,   370,   371,   372,   373,   374,
     375,   376,   377,   378,   379,   380,   381,   382,   383,   384,
      61,    63,    58,    62,    60,   124,    94,    38,    43,    45,
      42,    47,    37,   385,    33,   126,   386,   123,   125,    91,
      46,    44,    96,    40,    41,    93,    59,    32,    10
    //[
  ];

  // YYR1[YYN] -- Symbol number of symbol that rule YYN derives.
  var yyr1_ =
  [
    //]
         0,   159,   161,   160,   162,   163,   163,   163,   163,   164,
     165,   164,   166,   167,   168,   168,   168,   168,   169,   170,
     169,   172,   171,   171,   171,   171,   171,   171,   171,   171,
     171,   171,   171,   171,   171,   171,   171,   171,   171,   171,
     171,   171,   171,   171,   171,   171,   173,   173,   174,   174,
     174,   174,   174,   174,   175,   176,   176,   177,   177,   179,
     178,   180,   181,   181,   181,   181,   181,   181,   181,   181,
     181,   181,   181,   182,   182,   183,   183,   184,   184,   184,
     184,   184,   184,   184,   184,   184,   184,   185,   185,   186,
     186,   187,   187,   188,   188,   188,   188,   188,   188,   188,
     188,   188,   189,   189,   189,   189,   189,   189,   189,   189,
     189,   190,   190,   191,   191,   191,   192,   192,   192,   192,
     192,   193,   193,   194,   194,   195,   196,   195,   197,   197,
     197,   197,   197,   197,   197,   197,   197,   197,   197,   197,
     197,   197,   197,   197,   197,   197,   197,   197,   197,   197,
     197,   197,   197,   197,   197,   197,   197,   197,   198,   198,
     198,   198,   198,   198,   198,   198,   198,   198,   198,   198,
     198,   198,   198,   198,   198,   198,   198,   198,   198,   198,
     198,   198,   198,   198,   198,   198,   198,   198,   198,   198,
     198,   198,   198,   198,   198,   198,   198,   198,   198,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   199,   199,   199,   199,   199,   199,   199,   199,   199,
     199,   200,   199,   199,   199,   201,   202,   202,   202,   202,
     203,   204,   204,   205,   205,   205,   205,   205,   206,   206,
     206,   206,   206,   208,   207,   209,   210,   210,   211,   211,
     211,   211,   212,   212,   212,   213,   213,   213,   213,   213,
     213,   213,   213,   213,   213,   213,   214,   213,   215,   213,
     216,   213,   213,   213,   213,   213,   213,   213,   213,   213,
     213,   217,   213,   213,   213,   213,   213,   213,   213,   213,
     213,   218,   219,   213,   220,   221,   213,   213,   213,   222,
     223,   213,   224,   213,   225,   226,   213,   227,   213,   228,
     213,   229,   230,   213,   213,   213,   213,   213,   231,   232,
     233,   234,   235,   236,   237,   238,   239,   240,   241,   242,
     243,   243,   243,   244,   244,   245,   245,   246,   246,   247,
     247,   248,   248,   249,   249,   250,   250,   250,   250,   250,
     250,   250,   250,   250,   251,   251,   251,   251,   252,   252,
     253,   253,   253,   253,   253,   253,   253,   253,   253,   253,
     253,   253,   253,   253,   253,   254,   254,   255,   255,   255,
     256,   256,   257,   257,   258,   258,   260,   261,   259,   262,
     262,   263,   263,   265,   264,   266,   266,   266,   266,   267,
     268,   267,   269,   267,   267,   270,   267,   271,   267,   267,
     267,   267,   273,   272,   274,   272,   275,   276,   276,   277,
     277,   278,   278,   278,   279,   279,   280,   280,   281,   281,
     281,   282,   283,   283,   283,   284,   285,   286,   287,   287,
     288,   288,   289,   289,   290,   290,   291,   291,   292,   292,
     293,   293,   294,   294,   295,   295,   296,   296,   297,   297,
     298,   298,   299,   300,   299,   301,   302,   303,   299,   304,
     304,   304,   304,   305,   306,   306,   306,   306,   307,   308,
     308,   308,   308,   309,   309,   309,   309,   309,   310,   310,
     310,   310,   310,   310,   310,   311,   311,   312,   312,   313,
     313,   314,   315,   314,   314,   316,   316,   317,   317,   317,
     317,   318,   318,   319,   319,   319,   319,   319,   319,   319,
     319,   319,   319,   319,   319,   319,   319,   319,   320,   320,
     320,   320,   321,   321,   322,   322,   323,   323,   324,   325,
     326,   326,   327,   327,   328,   328,   329,   329,   330,   331,
     332,   332,   333,   333,   334,   334,   335,   335,   336,   336,
     337,   338,   338,   339,   340,   339,   341,   341,   342,   342,
     343,   343,   343,   344,   344,   344,   345,   345,   345,   345,
     346,   346,   346,   347,   347,   348,   348,   349,   349,   350,
     351,   352,   352,   352,   353,   353,   354,   354,   355
    //[
  ];

  // YYR2[YYN] -- Number of symbols composing right hand side of rule YYN.
  var yyr2_ =
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
  var yytname_ =
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
  "tCHAR", "tNTH_REF", "tBACK_REF", "tREGEXP_END", "tUPLUS", "\"unary+\"",
  "tUMINUS", "\"unary-\"", "tPOW", "\"**\"", "tCMP", "\"<=>\"", "tEQ",
  "\"==\"", "tEQQ", "\"===\"", "tNEQ", "\"!=\"", "tGEQ", "\">=\"", "tLEQ",
  "\"<=\"", "\"&&\"", "\"||\"", "tMATCH", "\"=~\"", "tNMATCH", "\"!~\"",
  "tDOT2", "\"..\"", "tDOT3", "\"...\"", "tAREF", "\"[]\"", "tASET",
  "\"[]=\"", "tLSHFT", "\"<<\"", "tRSHFT", "\">>\"", "\"::\"",
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
  var yyrhs_ =
  [
    //]
       160,     0,    -1,    -1,   161,   162,    -1,   163,   348,    -1,
     355,    -1,   164,    -1,   163,   354,   164,    -1,     1,   164,
      -1,   171,    -1,    -1,    47,   165,   147,   162,   148,    -1,
     167,   277,   246,   280,    -1,   168,   348,    -1,   355,    -1,
     169,    -1,   168,   354,   169,    -1,     1,   171,    -1,   171,
      -1,    -1,    47,   170,   147,   162,   148,    -1,    -1,    45,
     194,   172,   194,    -1,    45,    54,    54,    -1,    45,    54,
      64,    -1,    45,    54,    63,    -1,     6,   195,    -1,   171,
      40,   175,    -1,   171,    41,   175,    -1,   171,    42,   175,
      -1,   171,    43,   175,    -1,   171,    44,   171,    -1,    48,
     147,   167,   148,    -1,   173,    -1,   182,   130,   176,    -1,
     312,   104,   176,    -1,   231,   149,   205,   351,   104,   176,
      -1,   231,   150,    52,   104,   176,    -1,   231,   150,    56,
     104,   176,    -1,   231,   102,    56,   104,   176,    -1,   231,
     102,    52,   104,   176,    -1,   313,   104,   176,    -1,   189,
     130,   212,    -1,   182,   130,   201,    -1,   182,   130,   212,
      -1,   174,    -1,   189,   130,   176,    -1,   189,   130,   173,
      -1,   176,    -1,   174,    37,   174,    -1,   174,    38,   174,
      -1,    39,   349,   174,    -1,   144,   176,    -1,   199,    -1,
     174,    -1,   181,    -1,   177,    -1,   266,    -1,   266,   347,
     345,   207,    -1,    -1,   111,   179,   254,   167,   148,    -1,
     344,    -1,   180,   207,    -1,   180,   207,   178,    -1,   231,
     150,   345,   207,    -1,   231,   150,   345,   207,   178,    -1,
     231,   102,   345,   207,    -1,   231,   102,   345,   207,   178,
      -1,    32,   207,    -1,    31,   207,    -1,    30,   206,    -1,
      21,   206,    -1,    22,   206,    -1,   184,    -1,   106,   183,
     350,    -1,   184,    -1,   106,   183,   350,    -1,   186,    -1,
     186,   185,    -1,   186,   112,   188,    -1,   186,   112,   188,
     151,   187,    -1,   186,   112,    -1,   186,   112,   151,   187,
      -1,   112,   188,    -1,   112,   188,   151,   187,    -1,   112,
      -1,   112,   151,   187,    -1,   188,    -1,   106,   183,   350,
      -1,   185,   151,    -1,   186,   185,   151,    -1,   185,    -1,
     187,   151,   185,    -1,   309,    -1,   310,    -1,   231,   149,
     205,   351,    -1,   231,   150,    52,    -1,   231,   102,    52,
      -1,   231,   150,    56,    -1,   231,   102,    56,    -1,   103,
      56,    -1,   313,    -1,   309,    -1,   310,    -1,   231,   149,
     205,   351,    -1,   231,   150,    52,    -1,   231,   102,    52,
      -1,   231,   150,    56,    -1,   231,   102,    56,    -1,   103,
      56,    -1,   313,    -1,    52,    -1,    56,    -1,   103,   190,
      -1,   190,    -1,   231,   102,   190,    -1,    52,    -1,    56,
      -1,    53,    -1,   197,    -1,   198,    -1,   192,    -1,   305,
      -1,   193,    -1,   307,    -1,   194,    -1,    -1,   195,   151,
     196,   194,    -1,   135,    -1,   136,    -1,   137,    -1,    72,
      -1,    74,    -1,    76,    -1,    86,    -1,    88,    -1,   133,
      -1,    80,    -1,   134,    -1,    82,    -1,    78,    -1,    98,
      -1,   100,    -1,   138,    -1,   139,    -1,   140,    -1,   112,
      -1,   141,    -1,   142,    -1,    70,    -1,   113,    -1,   144,
      -1,   145,    -1,    66,    -1,    68,    -1,    94,    -1,    96,
      -1,   152,    -1,    49,    -1,    50,    -1,    51,    -1,    47,
      -1,    48,    -1,    45,    -1,    37,    -1,     7,    -1,    21,
      -1,    16,    -1,     3,    -1,     5,    -1,    46,    -1,    26,
      -1,    15,    -1,    14,    -1,    10,    -1,     9,    -1,    36,
      -1,    20,    -1,    25,    -1,     4,    -1,    22,    -1,    34,
      -1,    39,    -1,    38,    -1,    23,    -1,     8,    -1,    24,
      -1,    30,    -1,    33,    -1,    32,    -1,    13,    -1,    35,
      -1,     6,    -1,    17,    -1,    31,    -1,    11,    -1,    12,
      -1,    18,    -1,    19,    -1,   189,   130,   199,    -1,   189,
     130,   199,    44,   199,    -1,   312,   104,   199,    -1,   312,
     104,   199,    44,   199,    -1,   231,   149,   205,   351,   104,
     199,    -1,   231,   150,    52,   104,   199,    -1,   231,   150,
      56,   104,   199,    -1,   231,   102,    52,   104,   199,    -1,
     231,   102,    56,   104,   199,    -1,   103,    56,   104,   199,
      -1,   313,   104,   199,    -1,   199,    90,   199,    -1,   199,
      92,   199,    -1,   199,   138,   199,    -1,   199,   139,   199,
      -1,   199,   140,   199,    -1,   199,   141,   199,    -1,   199,
     142,   199,    -1,   199,    70,   199,    -1,   143,    59,    70,
     199,    -1,   143,    60,    70,   199,    -1,    66,   199,    -1,
      68,   199,    -1,   199,   135,   199,    -1,   199,   136,   199,
      -1,   199,   137,   199,    -1,   199,    72,   199,    -1,   199,
     133,   199,    -1,   199,    80,   199,    -1,   199,   134,   199,
      -1,   199,    82,   199,    -1,   199,    74,   199,    -1,   199,
      76,   199,    -1,   199,    78,   199,    -1,   199,    86,   199,
      -1,   199,    88,   199,    -1,   144,   199,    -1,   145,   199,
      -1,   199,    98,   199,    -1,   199,   100,   199,    -1,   199,
      84,   199,    -1,   199,    85,   199,    -1,    -1,    46,   349,
     200,   199,    -1,   199,   131,   199,   349,   132,   199,    -1,
     213,    -1,   199,    -1,   355,    -1,   211,   352,    -1,   211,
     151,   342,   352,    -1,   342,   352,    -1,   153,   205,   350,
      -1,   355,    -1,   203,    -1,   355,    -1,   206,    -1,   211,
     151,    -1,   211,   151,   342,   151,    -1,   342,   151,    -1,
     181,    -1,   211,   210,    -1,   342,   210,    -1,   211,   151,
     342,   210,    -1,   209,    -1,    -1,   208,   206,    -1,   114,
     201,    -1,   151,   209,    -1,   355,    -1,   201,    -1,   112,
     201,    -1,   211,   151,   201,    -1,   211,   151,   112,   201,
      -1,   211,   151,   201,    -1,   211,   151,   112,   201,    -1,
     112,   201,    -1,   281,    -1,   282,    -1,   285,    -1,   286,
      -1,   287,    -1,   292,    -1,   290,    -1,   293,    -1,   311,
      -1,   313,    -1,    53,    -1,    -1,   232,   214,   166,   242,
      -1,    -1,   107,   215,   350,    -1,    -1,   107,   174,   216,
     350,    -1,   106,   167,   154,    -1,   231,   102,    56,    -1,
     103,    56,    -1,   109,   202,   155,    -1,   110,   341,   148,
      -1,    30,    -1,    31,   153,   206,   350,    -1,    31,   153,
     350,    -1,    31,    -1,    -1,    46,   349,   153,   217,   174,
     350,    -1,    39,   153,   174,   350,    -1,    39,   153,   350,
      -1,   180,   272,    -1,   267,    -1,   267,   272,    -1,   115,
     259,    -1,   233,   175,   243,   167,   245,   242,    -1,   234,
     175,   243,   167,   246,   242,    -1,    -1,    -1,   235,   218,
     175,   244,   219,   167,   242,    -1,    -1,    -1,   236,   220,
     175,   244,   221,   167,   242,    -1,   237,   175,   348,   275,
     242,    -1,   237,   348,   275,   242,    -1,    -1,    -1,   238,
     247,    25,   222,   175,   244,   223,   167,   242,    -1,    -1,
     239,   191,   314,   224,   166,   242,    -1,    -1,    -1,   239,
      98,   174,   225,   353,   226,   166,   242,    -1,    -1,   240,
     191,   227,   166,   242,    -1,    -1,   241,   192,   228,   316,
     166,   242,    -1,    -1,    -1,   241,   339,   347,   229,   192,
     230,   316,   166,   242,    -1,    21,    -1,    22,    -1,    23,
      -1,    24,    -1,   213,    -1,     7,    -1,    11,    -1,    12,
      -1,    18,    -1,    19,    -1,    16,    -1,    20,    -1,     3,
      -1,     4,    -1,     5,    -1,    10,    -1,   353,    -1,    13,
      -1,   353,    13,    -1,   353,    -1,    27,    -1,   246,    -1,
      14,   175,   243,   167,   245,    -1,   355,    -1,    15,   167,
      -1,   189,    -1,   182,    -1,   321,    -1,   106,   250,   350,
      -1,   248,    -1,   249,   151,   248,    -1,   249,    -1,   249,
     151,   112,   321,    -1,   249,   151,   112,   321,   151,   249,
      -1,   249,   151,   112,    -1,   249,   151,   112,   151,   249,
      -1,   112,   321,    -1,   112,   321,   151,   249,    -1,   112,
      -1,   112,   151,   249,    -1,   326,   151,   329,   338,    -1,
     326,   338,    -1,   329,   338,    -1,   337,    -1,   151,   251,
      -1,    -1,   323,   151,   332,   151,   335,   252,    -1,   323,
     151,   332,   151,   335,   151,   323,   252,    -1,   323,   151,
     332,   252,    -1,   323,   151,   332,   151,   323,   252,    -1,
     323,   151,   335,   252,    -1,   323,   151,    -1,   323,   151,
     335,   151,   323,   252,    -1,   323,   252,    -1,   332,   151,
     335,   252,    -1,   332,   151,   335,   151,   323,   252,    -1,
     332,   252,    -1,   332,   151,   323,   252,    -1,   335,   252,
      -1,   335,   151,   323,   252,    -1,   251,    -1,   355,    -1,
     255,    -1,   135,   256,   135,    -1,    85,    -1,   135,   253,
     256,   135,    -1,   349,    -1,   349,   156,   257,   349,    -1,
     258,    -1,   257,   151,   258,    -1,    52,    -1,   320,    -1,
      -1,    -1,   260,   261,   262,   263,    -1,   153,   319,   256,
     154,    -1,   319,    -1,   128,   167,   148,    -1,    29,   167,
      10,    -1,    -1,    28,   265,   254,   167,    10,    -1,   181,
     264,    -1,   266,   347,   345,   204,    -1,   266,   347,   345,
     204,   272,    -1,   266,   347,   345,   207,   264,    -1,   180,
     203,    -1,    -1,   231,   150,   345,   268,   204,    -1,    -1,
     231,   102,   345,   269,   203,    -1,   231,   102,   346,    -1,
      -1,   231,   150,   270,   203,    -1,    -1,   231,   102,   271,
     203,    -1,    32,   203,    -1,    32,    -1,   231,   149,   205,
     351,    -1,    -1,   147,   273,   254,   167,   148,    -1,    -1,
      26,   274,   254,   167,    10,    -1,    17,   211,   243,   167,
     276,    -1,   246,    -1,   275,    -1,     8,   278,   279,   243,
     167,   277,    -1,   355,    -1,   201,    -1,   212,    -1,   355,
      -1,   105,   189,    -1,   355,    -1,     9,   167,    -1,   355,
      -1,   308,    -1,   305,    -1,   307,    -1,   283,    -1,    62,
      -1,   284,    -1,   283,   284,    -1,   117,   296,   127,    -1,
     118,   297,   127,    -1,   119,   298,    65,    -1,   120,   157,
     127,    -1,   120,   288,   127,    -1,    -1,   288,   289,   157,
      -1,   299,    -1,   289,   299,    -1,   122,   157,   127,    -1,
     122,   291,   127,    -1,    -1,   291,   289,   157,    -1,   121,
     157,   127,    -1,   121,   294,   127,    -1,   123,   157,   127,
      -1,   123,   295,   127,    -1,    -1,   294,    61,   157,    -1,
      -1,   295,    61,   157,    -1,    -1,   296,   299,    -1,    -1,
     297,   299,    -1,    -1,   298,   299,    -1,    61,    -1,    -1,
     126,   300,   304,    -1,    -1,    -1,    -1,   124,   301,   302,
     303,   167,   125,    -1,    54,    -1,    55,    -1,    57,    -1,
     313,    -1,   116,   306,    -1,   192,    -1,    55,    -1,    54,
      -1,    57,    -1,   116,   297,   127,    -1,    59,    -1,    60,
      -1,   143,    59,    -1,   143,    60,    -1,    52,    -1,    55,
      -1,    54,    -1,    56,    -1,    57,    -1,    34,    -1,    33,
      -1,    35,    -1,    36,    -1,    50,    -1,    49,    -1,    51,
      -1,   309,    -1,   310,    -1,   309,    -1,   310,    -1,    63,
      -1,    64,    -1,   353,    -1,    -1,   134,   315,   175,   353,
      -1,     1,   353,    -1,   153,   319,   350,    -1,   319,   353,
      -1,   327,   151,   329,   338,    -1,   327,   338,    -1,   329,
     338,    -1,   337,    -1,   151,   317,    -1,    -1,   323,   151,
     333,   151,   335,   318,    -1,   323,   151,   333,   151,   335,
     151,   323,   318,    -1,   323,   151,   333,   318,    -1,   323,
     151,   333,   151,   323,   318,    -1,   323,   151,   335,   318,
      -1,   323,   151,   335,   151,   323,   318,    -1,   323,   318,
      -1,   333,   151,   335,   318,    -1,   333,   151,   335,   151,
     323,   318,    -1,   333,   318,    -1,   333,   151,   323,   318,
      -1,   335,   318,    -1,   335,   151,   323,   318,    -1,   317,
      -1,    -1,    56,    -1,    55,    -1,    54,    -1,    57,    -1,
     320,    -1,    52,    -1,   321,    -1,   106,   250,   350,    -1,
     322,    -1,   323,   151,   322,    -1,    58,   201,    -1,    58,
     231,    -1,   325,    -1,   326,   151,   325,    -1,   324,    -1,
     327,   151,   324,    -1,    70,    -1,   113,    -1,   328,    52,
      -1,   328,    -1,    52,   130,   201,    -1,    52,   130,   231,
      -1,   331,    -1,   332,   151,   331,    -1,   330,    -1,   333,
     151,   330,    -1,   140,    -1,   112,    -1,   334,    52,    -1,
     334,    -1,   137,    -1,   114,    -1,   336,    52,    -1,   151,
     337,    -1,   355,    -1,   311,    -1,    -1,   153,   340,   174,
     350,    -1,   355,    -1,   342,   352,    -1,   343,    -1,   342,
     151,   343,    -1,   201,   105,   201,    -1,    58,   201,    -1,
     113,   201,    -1,    52,    -1,    56,    -1,    53,    -1,    52,
      -1,    56,    -1,    53,    -1,   197,    -1,    52,    -1,    53,
      -1,   197,    -1,   150,    -1,   102,    -1,    -1,   354,    -1,
      -1,   158,    -1,   349,   154,    -1,   349,   155,    -1,    -1,
     158,    -1,   151,    -1,   156,    -1,   158,    -1,   353,    -1,
     354,   156,    -1,    -1
    //[
  ];

  // YYPRHS[YYN] -- Index of the first RHS symbol of rule number YYN in YYRHS.
  var yyprhs_ =
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
  var yyrline_ =
  [
    //]
         0,   114,   114,   114,   145,   156,   165,   173,   181,   187,
     189,   188,   209,   242,   253,   262,   270,   278,   284,   289,
     288,   309,   309,   317,   325,   336,   346,   354,   363,   372,
     385,   398,   407,   419,   420,   430,   435,   456,   461,   466,
     476,   481,   491,   500,   509,   518,   521,   530,   542,   543,
     551,   559,   567,   575,   578,   590,   591,   594,   595,   607,
     606,   628,   638,   647,   660,   669,   681,   690,   702,   711,
     720,   728,   736,   746,   747,   757,   758,   768,   776,   784,
     792,   801,   809,   818,   826,   835,   843,   854,   855,   865,
     873,   883,   891,   901,   905,   909,   917,   925,   933,   941,
     953,   963,   975,   984,   993,  1001,  1009,  1017,  1025,  1038,
    1051,  1062,  1070,  1073,  1081,  1089,  1099,  1100,  1101,  1102,
    1107,  1118,  1119,  1122,  1130,  1133,  1141,  1141,  1151,  1152,
    1153,  1154,  1155,  1156,  1157,  1158,  1159,  1160,  1161,  1162,
    1163,  1164,  1165,  1166,  1167,  1168,  1169,  1170,  1171,  1172,
    1173,  1174,  1175,  1176,  1177,  1178,  1179,  1180,  1183,  1183,
    1183,  1184,  1184,  1185,  1185,  1185,  1186,  1186,  1186,  1186,
    1187,  1187,  1187,  1187,  1188,  1188,  1188,  1189,  1189,  1189,
    1189,  1190,  1190,  1190,  1190,  1191,  1191,  1191,  1191,  1192,
    1192,  1192,  1192,  1193,  1193,  1193,  1193,  1194,  1194,  1197,
    1206,  1216,  1221,  1231,  1257,  1262,  1267,  1272,  1282,  1292,
    1303,  1317,  1331,  1339,  1347,  1355,  1363,  1371,  1379,  1388,
    1397,  1405,  1413,  1421,  1429,  1437,  1445,  1453,  1461,  1469,
    1477,  1485,  1493,  1501,  1512,  1520,  1528,  1536,  1544,  1552,
    1560,  1568,  1568,  1578,  1588,  1594,  1606,  1607,  1611,  1619,
    1629,  1639,  1640,  1643,  1644,  1645,  1649,  1657,  1667,  1676,
    1684,  1694,  1703,  1712,  1712,  1724,  1734,  1738,  1744,  1752,
    1760,  1774,  1790,  1804,  1819,  1829,  1830,  1831,  1832,  1833,
    1834,  1835,  1836,  1837,  1838,  1839,  1848,  1847,  1875,  1875,
    1883,  1883,  1891,  1899,  1907,  1915,  1928,  1936,  1944,  1952,
    1960,  1968,  1968,  1978,  1986,  1994,  2004,  2005,  2015,  2019,
    2031,  2043,  2043,  2043,  2054,  2054,  2054,  2065,  2076,  2085,
    2087,  2084,  2151,  2150,  2172,  2177,  2171,  2196,  2195,  2217,
    2216,  2239,  2240,  2239,  2260,  2268,  2276,  2284,  2294,  2306,
    2312,  2318,  2324,  2330,  2336,  2342,  2348,  2354,  2360,  2370,
    2376,  2381,  2382,  2389,  2394,  2397,  2398,  2411,  2412,  2422,
    2423,  2426,  2434,  2444,  2452,  2462,  2470,  2479,  2488,  2496,
    2504,  2513,  2525,  2533,  2544,  2548,  2552,  2556,  2562,  2567,
    2572,  2576,  2580,  2584,  2588,  2592,  2600,  2604,  2608,  2612,
    2616,  2620,  2624,  2628,  2632,  2638,  2639,  2645,  2654,  2663,
    2674,  2678,  2688,  2695,  2704,  2712,  2718,  2721,  2718,  2738,
    2746,  2756,  2760,  2767,  2766,  2787,  2803,  2812,  2824,  2838,
    2848,  2847,  2864,  2863,  2879,  2888,  2887,  2905,  2904,  2921,
    2929,  2937,  2952,  2951,  2971,  2970,  2991,  3003,  3004,  3007,
    3026,  3029,  3037,  3045,  3048,  3052,  3055,  3063,  3066,  3067,
    3075,  3078,  3095,  3096,  3097,  3107,  3117,  3144,  3209,  3218,
    3229,  3236,  3246,  3254,  3264,  3273,  3284,  3291,  3303,  3312,
    3322,  3331,  3342,  3349,  3360,  3367,  3382,  3389,  3400,  3407,
    3418,  3425,  3454,  3456,  3455,  3472,  3478,  3483,  3471,  3502,
    3510,  3518,  3526,  3529,  3540,  3541,  3542,  3543,  3546,  3557,
    3558,  3559,  3567,  3577,  3578,  3579,  3580,  3581,  3584,  3585,
    3586,  3587,  3588,  3589,  3590,  3593,  3606,  3616,  3624,  3634,
    3635,  3638,  3647,  3646,  3655,  3667,  3677,  3685,  3689,  3693,
    3697,  3703,  3708,  3713,  3717,  3721,  3725,  3729,  3733,  3737,
    3741,  3745,  3749,  3753,  3757,  3761,  3765,  3770,  3776,  3785,
    3794,  3803,  3814,  3815,  3822,  3831,  3850,  3857,  3870,  3882,
    3894,  3902,  3919,  3927,  3943,  3944,  3947,  3952,  3958,  3970,
    3982,  3990,  4006,  4014,  4030,  4031,  4034,  4047,  4058,  4059,
    4062,  4079,  4083,  4093,  4103,  4103,  4132,  4133,  4143,  4150,
    4160,  4168,  4176,  4188,  4189,  4190,  4193,  4194,  4195,  4196,
    4199,  4200,  4201,  4204,  4209,  4216,  4217,  4220,  4221,  4224,
    4227,  4230,  4231,  4232,  4235,  4236,  4239,  4240,  4244
    //[
  ];

  // Report on the debug stream that the rule yyrule is going to be reduced.
  function yy_reduce_print (yyrule, yystack)
  {
    if (!yydebug)
      return;

    var yylno = yyrline_[yyrule];
    var yynrhs = yyr2_[yyrule];
    // Print the symbols being reduced, and their result.
    yycdebug("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "), ");

    // The symbols being reduced.
    for (var yyi = 0; yyi < yynrhs; yyi++)
      yy_symbol_print(
        "   $" + (yyi + 1) + " =",
        yyrhs_[yyprhs_[yyrule] + yyi],
        (yystack.valueAt(yynrhs-(yyi + 1))),
        yystack.locationAt(yynrhs-(yyi + 1))
      );
  }

  // YYTRANSLATE(YYLEX) -- Bison symbol number corresponding to YYLEX.
  var yytranslate_table_ =
  [
    //]
         0,     2,     2,     2,     2,     2,     2,     2,     2,     2,
     158,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,   157,   144,     2,     2,     2,   142,   137,     2,
     153,   154,   140,   138,   151,   139,   150,   141,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,   132,   156,
     134,   130,   133,   131,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,   149,     2,   155,   136,     2,   152,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,     2,     2,     2,     2,     2,     2,     2,
       2,     2,     2,   147,   135,   148,   145,     2,     2,     2,
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
     105,   106,   107,   108,   109,   110,   111,   112,   113,   114,
     115,   116,   117,   118,   119,   120,   121,   122,   123,   124,
     125,   126,   127,   128,   129,   143,   146
    //[
  ];

  function yytranslate_ (t)
  {
    if (t >= 0 && t <= yyuser_token_number_max_)
      return yytranslate_table_[t];
    else
      return yyundef_token_;
  }

  var yylast_ = 12098;
  var yynnts_ = 197;
  var yyempty_ = -2;
  var yyfinal_ = 3;
  var yyterror_ = 1;
  var yyerrcode_ = 256;

  var yyuser_token_number_max_ = 386;
  var yyundef_token_ = 2;
}

// Version number for the Bison executable that generated this parser.
YYParser.bisonVersion = "2.7.12-4996";

// Name of the skeleton that generated this parser.
YYParser.bisonSkeleton = "./lalr1.js";

// Tokens.
// Token numbers, to be returned by the scanner.
YYParser.TOKENS =
{
  EOF: 0,
  'END_OF_INPUT': 0,
  'keyword_class': 258,
  'keyword_module': 259,
  'keyword_def': 260,
  'keyword_undef': 261,
  'keyword_begin': 262,
  'keyword_rescue': 263,
  'keyword_ensure': 264,
  'keyword_end': 265,
  'keyword_if': 266,
  'keyword_unless': 267,
  'keyword_then': 268,
  'keyword_elsif': 269,
  'keyword_else': 270,
  'keyword_case': 271,
  'keyword_when': 272,
  'keyword_while': 273,
  'keyword_until': 274,
  'keyword_for': 275,
  'keyword_break': 276,
  'keyword_next': 277,
  'keyword_redo': 278,
  'keyword_retry': 279,
  'keyword_in': 280,
  'keyword_do': 281,
  'keyword_do_cond': 282,
  'keyword_do_block': 283,
  'keyword_do_LAMBDA': 284,
  'keyword_return': 285,
  'keyword_yield': 286,
  'keyword_super': 287,
  'keyword_self': 288,
  'keyword_nil': 289,
  'keyword_true': 290,
  'keyword_false': 291,
  'keyword_and': 292,
  'keyword_or': 293,
  'keyword_not': 294,
  'modifier_if': 295,
  'modifier_unless': 296,
  'modifier_while': 297,
  'modifier_until': 298,
  'modifier_rescue': 299,
  'keyword_alias': 300,
  'keyword_defined': 301,
  'keyword_BEGIN': 302,
  'keyword_END': 303,
  'keyword__LINE__': 304,
  'keyword__FILE__': 305,
  'keyword__ENCODING__': 306,
  'tIDENTIFIER': 307,
  'tFID': 308,
  'tGVAR': 309,
  'tIVAR': 310,
  'tCONSTANT': 311,
  'tCVAR': 312,
  'tLABEL': 313,
  'tINTEGER': 314,
  'tFLOAT': 315,
  'tSTRING_CONTENT': 316,
  'tCHAR': 317,
  'tNTH_REF': 318,
  'tBACK_REF': 319,
  'tREGEXP_END': 320,
  'tUPLUS': 321,
  'RUBY_TOKEN_UPLUS': 322,
  'tUMINUS': 323,
  'RUBY_TOKEN_UMINUS': 324,
  'tPOW': 325,
  'RUBY_TOKEN_POW': 326,
  'tCMP': 327,
  'RUBY_TOKEN_CMP': 328,
  'tEQ': 329,
  'RUBY_TOKEN_EQ': 330,
  'tEQQ': 331,
  'RUBY_TOKEN_EQQ': 332,
  'tNEQ': 333,
  'RUBY_TOKEN_NEQ': 334,
  'tGEQ': 335,
  'RUBY_TOKEN_GEQ': 336,
  'tLEQ': 337,
  'RUBY_TOKEN_LEQ': 338,
  'tANDOP': 339,
  'tOROP': 340,
  'tMATCH': 341,
  'RUBY_TOKEN_MATCH': 342,
  'tNMATCH': 343,
  'RUBY_TOKEN_NMATCH': 344,
  'tDOT2': 345,
  'RUBY_TOKEN_DOT2': 346,
  'tDOT3': 347,
  'RUBY_TOKEN_DOT3': 348,
  'tAREF': 349,
  'RUBY_TOKEN_AREF': 350,
  'tASET': 351,
  'RUBY_TOKEN_ASET': 352,
  'tLSHFT': 353,
  'RUBY_TOKEN_LSHFT': 354,
  'tRSHFT': 355,
  'RUBY_TOKEN_RSHFT': 356,
  'tCOLON2': 357,
  'tCOLON3': 358,
  'tOP_ASGN': 359,
  'tASSOC': 360,
  'tLPAREN': 361,
  'tLPAREN_ARG': 362,
  'tRPAREN': 363,
  'tLBRACK': 364,
  'tLBRACE': 365,
  'tLBRACE_ARG': 366,
  'tSTAR': 367,
  'tDSTAR': 368,
  'tAMPER': 369,
  'tLAMBDA': 370,
  'tSYMBEG': 371,
  'tSTRING_BEG': 372,
  'tXSTRING_BEG': 373,
  'tREGEXP_BEG': 374,
  'tWORDS_BEG': 375,
  'tQWORDS_BEG': 376,
  'tSYMBOLS_BEG': 377,
  'tQSYMBOLS_BEG': 378,
  'tSTRING_DBEG': 379,
  'tSTRING_DEND': 380,
  'tSTRING_DVAR': 381,
  'tSTRING_END': 382,
  'tLAMBEG': 383,
  'tLOWEST': 384,
  'tUMINUS_NUM': 385,
  'tLAST_TOKEN': 386
};



}).call(this); // end of the parser namespase


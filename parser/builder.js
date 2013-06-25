// port of the Builder class from https://github.com/whitequark/parser

// methods-in-constructor pattern used for performance, simplicity
// and, of course, readability
function Scope ()
{
  var self = this;
  
  var variables,
      stack;
  
  function reset ()
  {
    // keywords for search: DVARS_INHERIT : DVARS_TOPSCOPE
    //   if you need to inherit variables from a higher level,
    //   try passing a variables object and replace `null` with it
    variables = Object.create(null);
    stack     = [];
  }
  
  reset();
  
  function push_static ()
  {
    stack.push(variables);
    variables = Object.create(null);

    return self;
  }

  function push_dynamic ()
  {
    stack.push(variables);
    variables = Object.create(variables); // use the prototype chain

    return self;
  }

  function pop ()
  {
    variables = stack.pop();

    return self;
  }

  function declare (name)
  {
    variables[name] = true;

    return self;
  }

  function is_declared (name)
  {
    return variables[name];
  }
  
  // public
  self.push_static  = push_static;
  self.push_dynamic = push_dynamic;
  self.pop          = pop;
  self.declare      = declare;
  self.is_declared  = is_declared;
}

function Node (type, children)
{
  this.type = type;
  this.children = children;
}
Node.prototype.inspect = function ()
{
  var pairs = [];
  for (var k in this)
  {
    if (k == 'type' || k == 'inspect' || k == 'line')
      continue;
    var v = this[k];
    v = (v && v.inspect) ? v.inspect() : JSON.stringify(v);
    pairs.push(k + ': ' + v);
  }
  
  return this.type + '(' + pairs.join(', ') + ')';
}
function n (type, children)
{
  return new Node(typem children);
}


function array (ary)
{
  ary.inspect = function () { return 'array['+this.length+']' } // TODO
  return ary;
}


function Builder (lexer)
{
  this.lexer = lexer;
}

Builder.prototype =
{
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
        return n('begin', statements);
    }
  },
  
  // BEGIN
  preexe: function (compstmt)
  {
    return n('preexe', [ compstmt ])
  }
  
}

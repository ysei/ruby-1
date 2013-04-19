
# fast_method_missing

One can use the `fast_method_missing` to avoid arguments to array conversion.

    def fast_method_missing recv, name, args
      `recv.method_missing.apply(recv, args)`
    end


# yield

    def no_yield
      puts "I do not going to call yield"
    end
    p no_yield { break } === nil

translates to:

    self.no_yield = function () { self.puts("I do not going to call yield") }
    
    
    BaseObject.prototype.no_yield$blk = function ()
    {
        // …magic here…
        this.no_yield.apply(this, arguments)
        // …magic there…
    }
    self.no_yield$blk(function(){ throw breaker; })


# Name conversion

    nil?          =>   nil$q() // question mark
    exit!         =>   exit$excl() // exclamation mark
    point.x = 5   =>   point.x$set(5) // setter
    Hash.new      =>   Hash.new$()
    ary.each {}   =>   ary.each$blk(function(){})


# require

Assume we have a ruby loader.

Parser takes this:

    if needForSpeed
      require 'hash/fast'
      h = Hash::Fast.new
    end

and translates it to:

    {
        requires: ['hash/fast'],
        code: function ($scope)
        {
            if ((needForSpeed).$b)
            {
                $scope.require('hash/fast')
                var h = $scope.Hash.Fast.new$()
            }
        }
    }

then the loader recursively requires all the files from `requires` property.
The actual evaluation made in `$scope.require`:

    $scope.require = function (path)
    {
        var f = new Function('$scope', this.preloadedRequires[path])
        f(this)
    }

# Proxy with JIT methods


    // native method proxy:
    // 

    // avoid new array creation
    var callByArity =
    [
        function (recv, name, args) { return recv[name]() },
        function (recv, name, args) { return recv[name](args[0].$j()) },
        function (recv, name, args) { return recv[name](args[0].$j(), args[1].$j()) },
        function (recv, name, args) { return recv[name](args[0].$j(), args[1].$j(), args[2].$j()) },
        // ten more
    ]

    function createNativeMethodProxy (name, argc)
    {
        var hits = 1, misses = 0
    
        switch (argc)
        {
            case 0:
            return function proxy0 ()
            {
                if (arguments.length === 0)
                {
                    ++hits
                    return this.native[name]()
                }
            
                if (++misses > hits << 1)
                    this[name] = createNativeMethodProxy(name, arguments.length)
            
                return callByArity[arguments.length](this.native, name, arguments)
            }
        
            case 1:
            return function proxy1 (a)
            {
                if (arguments.length === 1)
                {
                    ++hits
                    return this.native[name](a.$j())
                }
            
                if (++misses > hits << 1)
                    this[name] = createNativeMethodProxy(name, arguments.length)
            
                return callByArity[arguments.length](this.native, name, arguments)
            }
        
            // up to 5
            
            default:
            return function proxyN ()
            {
                if (arguments.length > 5)
                {
                    ++hits
                    return callByArity[arguments.length](this.native, name, arguments)
                }
            
                if (++misses > hits >> 2)
                    this[name] = createNativeMethodProxy(name, arguments.length)
            
                return callByArity[arguments.length](this.native, name, arguments)
            }
        }
    }
    
    function bakeNativeMethodStub (methodName)
    {
        return function ()
        {
            var prop = this.native[methodName]
            if (typeof prop == 'function')
            {
                var proxy = this[methodName] = createNativeMethodProxy(methodName, arguments.length)
                return proxy.apply(this, …)
            }
        
            // property getter
        }
    }
    

then later in method missing:

    NativeProxy.prototype.blablabla = bakeNativeMethodStub('blablabla')

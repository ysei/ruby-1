#!env rspec
# encoding: utf-8

# puts 1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1+1






$c = 0

def a
  yield
end

a { redo if ($c += 1) > 5 }


describe "loops" do
  it "recalculates loop end on every iteration" do
    a = [1,2,3,4,5]
    a.map do |v|
      a.pop
    end.should == [5,4,3]
  end
end



# begin
# 
#   raise {}
# 
# rescue => e
#   p 'rescue'
#   p e
# end















# p $asdfghvc == nil






# def foo
#   lambda { |n| yield n }.call(5)
# end
# foo { |f| puts f }  # prints 5






# def inner
#   yield
# end
# def outer
#   inner { yield }
# end
# p outer { 123 } == 123
# begin
#   outer
# rescue Exception => e
#   p e.message == "no block given (yield)"
# end







# ß = 5
# puts ß







# def a; next; end
# #=> Syntax Error: Invalid next

# def a; break; end
# #=> Syntax Error: Invalid break

# def no_yield
# end
# p no_yield { break } === nil











describe "blocks" do
  it "juggles with blocks as hell" do
    def one_two_three n
      [
        yield(n),
        yield(n+1),
        yield(n+2)
      ]
    end

    def proxy n, &block
      # puts 'proxy begin'
      ret = one_two_three n, &block
      # puts 'proxy end'
      ret
    end

    def dump_proxy n
      one_two_three n
    end

    proxy(1) { |i| next "next(#{i})"   }.should == ["next(1)", "next(2)", "next(3)"]
    proxy(1) { |i| break "break(#{i})" }.should == "break(1)"
    expect { proxy(1) }.to raise_error("no block given (yield)")
    expect { dump_proxy(1) {} }.to raise_error("no block given (yield)")
  end
end







# x = 5
# 
# def x rex
#   
# end
# 
# x / a /m





# class A
#   @@v = 'a'
#   def to_s
#     @@v = @@v.succ
#     "#{@@v}"
#   end
# end
# 
# a = A.new
# puts [1,2,3].join(a)






# h = {}
# h[:a] = 1
# h[:b] = 2
# h[:a] = 3
# p h.keys == [:a, :b]





# h = {}
# h[3] = 1
# h["3"] = 2
# puts h




# class A
#   def initialize
#     @a = 1
#   end
# end
# 
# a = A.new
# 
# puts a.instance_variable_get(:@a) == 1
# puts a.instance_variable_get(:@b) == nil
# puts a.instance_eval { @a } == 1
# puts a.instance_eval { @b } == nil





# class A; end
# 
# a = A.new
# def a.m; end
# puts defined?(a.m).inspect
# 
# b = A.new
# puts defined?(b.m).inspect










# class A
#   def to_s
#     "abc"
#   end
# end
# 
# str = "abc"
# a = A.new
# 
# h = {}
# h["abc"] = 1
# h






# 3 == "3"






# {}.hash == {}.hash
# {}.hash != {a:1}.hash






# def a &block
#   yield "123456"
# end
# 
# puts a(&:length)



# https://github.com/mruby/mruby/tree/master/test/t



# ObjectSpace.each_object do |v|
#   p v
# end




# 3 + nil



# s = ''
# def s.a
#   123
# end
# p s.a



# class A; end
# a = A.new
# 
# h = {}
# h[a.to_s] = 1
# h[a] = 2
# puts h[a.to_s] != h[a]



# a = []
# a[0] = a
# p a
# h = {}
# h[a] = 1
# p h
# h[a] = 1


# h = {}
# h[h] = 1
# p h[{}] == nil
# p h[h] == nil
# h[h] = 1
# p h[h] == nil
# h[h] = 1
# p h[h] == nil





# class A; end
# 
# h = {}
# 
# a = A.new
# h[a] = 'a'
# 
# b = A.new
# h[b] = 'b'
# 
# c = b
# h[c] = 'c'
# 
# puts h[a], h[b], h[c]




# class A; end
# 
# h = {}
# 
# a = A.new
# h[a] = 'a'
# 
# b = A.new
# h[b] = 'b'
# 
# c = b
# h[c] = 'c'
# 
# puts h[a], h[b], h[c]






# h = {}
# 
# a = {a:1}
# h[a] = 'a'
# 
# b = {a:2}
# h[b] = 'b'
# 
# c = {a:2}
# h[c] = 'c'
# 
# puts h[a], h[b], h[c]





# class A
#   @@a = 555
#   def initialize
#     @a = 123
#   end
# end
# 
# puts A.new.instance_eval { @a } == 123
# puts A.new.instance_eval { defined? @a } == 'instance-variable'
# puts A.new.instance_eval { defined? @@a } == nil



# puts eval "Class", TOPLEVEL_BINDING



# def m
#   x = 1
#   b = binding
#   x = 2
#   b
# end
# 
# puts m.eval("x")




# $flag = false
# def m
#   $flag = true
# end
# 
# a = true
# a ||= m
# 
# p $flag




# $x = nil
# $y = []
# 
# 
# def $x.a
#   $y
# end
# 
# def ($x.a).b
#   123
# end
# 
# p $x.a.b




# # require 'unicode'
# puts "йетти".length
# puts "йетти".size
# puts "йетти".bytesize




# if false
#   x = 5
# end
# 
# puts x





# x = 0
# 
# def m
#   x = 7
# end
# 
# m
# p x





# class AAA < Range
# end
# fr = AAA.new(1,5)
# p [1,2,3,4,5,6,7,8,9,0][fr]




# # block return
# 
# def block
#   puts 'before'
#   yield
#   puts 'after'
# end
# 
# def proxy &p
#   block &p
# end
# 
# def a
#   p = proc do
#     return 123
#   end
#   proxy &p
# end
# 
# p a

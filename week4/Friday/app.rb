require 'pry'

# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

def s1 num
    num % 2
end

def s2 num
    (1..num).sum
end

# .. = beginning to end inclusively
# ... = beginning to end excluding end value

binding.pry
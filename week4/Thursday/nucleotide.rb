require 'pry'

def count_nucleotides string

    count = {
        "A" => 0,
        "C" => 0,
        "G" => 0,
        "T" => 0,
        "Unknown" => 0
    }

    # case string.upcase.each_char
    # when "A"
    #     count["A"] += 1
    # when "C"  
    #     count["C"] += 1
    # when "G"
    #     count["G"] += 1
    # when "T"
    #     count["T"] += 1
    # else
    #     count["Unknown"] += 1
    # end
  
    string.upcase.each_char do |char|
        if count.key? char
            count[char] += 1
        else
          count["Unknown"] += 1
        end
    end
  
    count.each do |key, value|
        puts "#{key}: #{value}"
    end
  
end
  
print "Enter string: "

user_input = gets.chomp
  
count_nucleotides user_input
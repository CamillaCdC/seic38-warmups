
memory = []
guessed = true

while guessed
    puts 'New sequence:'
	memory.push rand 1..4
	puts memory.join ' '
    sleep 1
    puts `clear`
    
    puts 'Your guess:'
    input = gets.chomp().split(' ')
    
    memory.each_with_index do |x, index|
		if x == input[index].to_i
			puts `clear`
        else
            guessed = false
            puts 'Wrong!'
			break
		end
    end
    
end

if memory.size > 5 
    puts "Hot damn you got #{memory.size}"
else
    puts "Huh, lame. You got #{memory.size}"
end

# same as above
# puts memory.size > 5 ? "Hot damn you got #{memory.size}" : "Huh, lame. You got #{memory.size}"
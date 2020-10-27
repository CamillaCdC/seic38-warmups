def convert year
	roman = {
		1000 => 'M',
		900 => 'CM',
		500 => 'D',
		400 => 'CD',
		100 => 'C',
		90 => 'XC',
		50 => 'L',
		40 => 'XL',
		10 => 'X',
		9 => 'IX',
		5 => 'V',
		4 => 'IV',
		1 => 'I'
	}

	output = ''

	roman.each do |key, value|
		# puts "Key: #{key}, value: #{value}"
		while year >= key
			output += "#{value} "
			year -= key
			# puts "==== There is a match for #{key}"
			# puts "==== Current value of year is #{year}"
		end
		break if year.zero?
	end

	output
end

# puts convert 2100
# puts convert 2008
# puts convert 2000
# puts convert 1999
# puts convert 8
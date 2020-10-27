def luhn? num

  processed_digits = []

  # starting from the rightmost digit
  num.digits.reverse.map.with_index do |digit, index|
    # double every second digit
    digit *= 2 if index.even? 
    # if over or equal to 10, subtract 9
    digit -= 9 if digit >= 10
    processed_digits << digit
  end

  # add all the digits together
  total = processed_digits.sum

  # if total ends in 0 return true
  if total % 10 == 0
    # puts "Number #{num} is valid"
    true
  # else return false
  else
    # puts "Number #{num} is invalid"
    false
  end

end

puts luhn? 1111 # false
puts luhn? 3554 # false
puts luhn? 8763 # true
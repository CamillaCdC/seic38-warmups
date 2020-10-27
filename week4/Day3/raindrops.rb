
def raindrops number
	raindrop_str = ''
	raindrop_str += 'Pling' if number % 3 == 0
	raindrop_str += 'Plang' if number % 5 == 0
	raindrop_str += 'Plong' if number % 7 == 0

	if raindrop_str.size == 0
		raindrop_str = number.to_s
    end 
        
    raindrop_str
end


puts raindrops 28            # Plong
puts raindrops 1755          # PlingPlang
puts raindrops 34            # 34
puts raindrops 105           # PlingPlangPlong
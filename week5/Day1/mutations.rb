def point_mutations (string_one, string_two)

    hamming_distance = 0

    string_one.chars.each_with_index do | base, index |

        if base != string_two[index]
            hamming_distance +=1
        end

    end

    hamming_distance

end

puts point_mutations "GAGCCTACTAACGGGA", "CATCGTAATGACGGCCT"
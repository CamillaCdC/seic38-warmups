class Robot

  attr_reader :instruction_count

  def initialize
    @name = generate_name
    @instruction_count = 0
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def generate_name
    letters = ("A".."Z").to_a.sample(2)
    digits = ("000".."999").to_a.sample
    make_name = letters.join.concat(digits)
  end

  def name
    @instruction_count += 1
    @name
  end

  # def instruction_count
  #   @instruction_count
  # end

  def reset
    @instruction_count += 1
    @reset_at = Time.now.to_i
    @name = generate_name
  end

  def timers
    @instruction_count += 1
    return "#{Time.now.to_i - @reset_at} seconds since last reboot, #{Time.now.to_i - @created_at} seconds since creation."
  end

end

require 'pry'
binding.pry
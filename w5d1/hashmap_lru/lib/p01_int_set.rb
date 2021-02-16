class MaxIntSet
  attr_reader :store

  def initialize(max)
    @max = max
    
    #max + 1 so we can return "false" in our include method
    #@store = Array.new(max + 1) {false}

    #alternative:
    @store = Array.new(max) {false}

  end

  def insert(num)
    @store[num] = true if is_valid?(num)
  end

  def remove(num)
    @store[num] = false if is_valid?(num)
  end

  def include?(num)
    #return @store[num]
    
    #alternative:
    return @store[num] || false #takes advantage of nil is falsy
  end

  private

  def is_valid?(num)
    raise "Out of bounds" unless num.between?(0,@max)
    true
  end

  def validate!(num)

  end
end
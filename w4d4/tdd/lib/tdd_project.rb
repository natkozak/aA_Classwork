class Array

  def my_uniq
    hash = Hash.new(0)
    self.each { |ele| hash[ele] += 1 }
    hash.keys
  end

  def two_sum
    pairs = []
    i = 0
    while i < self.length
      j = i + 1
      while j < self.length
        pairs << [i, j] if self[i] + self[j] == 0
        j += 1
      end
      i += 1
    end
    return pairs
  end
end

def transpose(array)
  transposed = Array.new(array[0].length) { Array.new(array.length) }
  i = 0
  while i < array.length
    j = 0
    while j < array.length
      transposed[i][j] = array[j][i] 
      j += 1
    end
    i += 1
  end
  return transposed
end
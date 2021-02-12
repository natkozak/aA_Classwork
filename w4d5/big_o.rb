def my_min(array) # O(n^2)
    min = 0
    (0...array.length).each do |i| 
        (i+1...array.length).each do |j|
            if array[i] < array[j] && array[i] < min 
                min = array[i]
            end
        end
    end
    min
end

def my_fast_min(array)
    min = 0
    (0...array.length).each do |i|
        if array[i] < min 
            min = array[i]
        end
    end
    min 
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
p my_min(list)  # =>  -5
p my_fast_min(list)
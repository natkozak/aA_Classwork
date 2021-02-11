#used to initialize
piece = Piece.new(:black, self, [3,4])
self[[3,4]] = piece
piece2= Piece.new(:black, self, [0,0])
self[[0,0]]= piece2
####

board = Board.new
start = [3,4]
last = [3,6]
p board[start] #should be a piece

p board[start].is_a?(Piece) #true
p board[last].is_a?(Piece) #true because NullPiece counts as a piece
p board[last].is_a?(NullPiece) #true

puts

board.move_piece(start, last) 
puts "moving piece ...."
p board[last].is_a?(Piece) #true
p board[start].is_a?(NullPiece) #true

i1 =            [15, 3]
i2 =            [3, 15]
i3 =            [-2, 0]
i4 =            [0, -2]

# out of bounds error
#board.move_piece(i1, start) #should error

#no piece at start error
# no_start= [2,4]
# pos= [4,4]

# board.move_piece(no_start, pos)

# board.move_piece([0,0], [0,1])
# p board

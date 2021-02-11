require_relative "piece.rb"
require "byebug"

class Board
  def initialize
    @null_piece = NullPiece.instance
    @grid = Array.new(8) { Array.new(8, @null_piece)}

    # #black pieces
    self[[0,0]] = Rook.new(:black, self,   [0,0])
    self[[0,1]] = Knight.new(:black, self, [0,1])
    self[[0,2]] = Bishop.new(:black, self, [0,2])
    self[[0,3]] = Queen.new(:black, self,  [0,3])
    self[[0,4]] = King.new(:black, self,   [0,4])
    self[[0,5]] = Bishop.new(:black, self, [0,5])
    self[[0,6]] = Knight.new(:black, self, [0,6])
    self[[0,7]] = Rook.new(:black, self,   [0,7])
    self[[1,0]] = Pawn.new(:black, self, [1,0])
    self[[1,1]] = Pawn.new(:black, self, [1,1])
    self[[1,2]] = Pawn.new(:black, self, [1,2])
    self[[1,3]] = Pawn.new(:black, self, [1,3])
    self[[1,4]] = Pawn.new(:black, self, [1,4])
    self[[1,5]] = Pawn.new(:black, self, [1,5])
    self[[1,6]] = Pawn.new(:black, self, [1,6])
    self[[1,7]] = Pawn.new(:black, self, [1,7])

    # #white pieces
    self[[7,0]] = Rook.new(:white, self,   [7,0])
    self[[7,1]] = Knight.new(:white, self, [7,1])
    self[[7,2]] = Bishop.new(:white, self, [7,2])
    self[[7,3]] = Queen.new(:white, self,  [7,3])
    self[[7,4]] = King.new(:white, self,   [7,4])
    self[[7,5]] = Bishop.new(:white, self, [7,5])
    self[[7,6]] = Knight.new(:white, self, [7,6])
    self[[7,7]] = Rook.new(:white, self,   [7,7])
    self[[6,0]] = Pawn.new(:white, self, [6,0])
    self[[6,1]] = Pawn.new(:white, self, [6,1])
    self[[6,2]] = Pawn.new(:white, self, [6,2])
    self[[6,3]] = Pawn.new(:white, self, [6,3])
    self[[6,4]] = Pawn.new(:white, self, [6,4])
    self[[6,5]] = Pawn.new(:white, self, [6,5])
    self[[6,6]] = Pawn.new(:white, self, [6,6])
    self[[6,7]] = Pawn.new(:white, self, [6,7])


  end

  def check_valid(pos)
    if pos[0] < 0 
      raise OutOfBoundsError 
    elsif pos[0] > 7
      raise OutOfBoundsError 
    elsif pos[1] < 0
      raise OutOfBoundsError 
    elsif pos[1] > 7
      raise OutOfBoundsError 
    end
  end

  def move_piece(start_pos, end_pos)
    begin
    #check start position validity - refactor later into diff method
    check_valid(start_pos)

    #check end position validity - refactor later into diff method
    check_valid(end_pos)

    if self[end_pos].color == self[start_pos].color 
      raise InvalidMoveError 
    end

    raise "no piece at start_pos" if self[start_pos].is_a?(NullPiece)

    rescue InvalidMoveError => e
      puts e.message
    end

    self[end_pos] = self[start_pos] 
    self[end_pos].pos[0] = end_pos[0]
    self[end_pos].pos[1]= end_pos[1]
    self[start_pos] = @null_piece
  end

  # def capture_piece(start_pos, end_pos) #handles taking pieces of opposite color
  #   if @grid[end_pos].is_a?(Piece) #and it's the opposite color
  #     #piece is taken
  #   end
  # end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos, value)
    row, col = pos
    @grid[row][col] = value
  end

  def in_check?(color) #return whether a player is in check 
    pos= []
    @grid.each_with_index do |row, i|
      row.each_with_index do |piece, i2|
        if piece.is_a?(King)
          pos = [i, i2]
        end
      end
    end

    @grid.each_with_index do |row, i|
      row.each_with_index do |piece, i2|
        unless piece.is_a?(NullPiece)
          return true if piece.moves.include?(pos)
      end
    end
     return false   
  end
end


# ---------- TESTS ---------------
board= Board.new

p board[[4,4]].moves



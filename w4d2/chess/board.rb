require_relative "piece.rb"

class Board
  def initialize
    @grid = Array.new(8) { Array.new(8)}
    @null_piece = NullPiece.new #why is this here?
    #populate with nullpieces? or populate with nils?
    
    #black pieces
    @grid[0,0] = Rook.new("black", self,   [0,0])
    @grid[0,1] = Knight.new("black", self, [0,1])
    @grid[0,2] = Bishop.new("black", self, [0,2])
    @grid[0,3] = Queen.new("black", self,  [0,3])
    @grid[0,4] = King.new("black", self,   [0,4])
    @grid[0,5] = Bishop.new("black", self, [0,5])
    @grid[0,6] = Knight.new("black", self, [0,6])
    @grid[0,7] = Rook.new("black", self,   [0,7])
    @grid[1,0] = Pawn.new("black", self, [1,0])
    @grid[1,1] = Pawn.new("black", self, [1,1])
    @grid[1,2] = Pawn.new("black", self, [1,2])
    @grid[1,3] = Pawn.new("black", self, [1,3])
    @grid[1,4] = Pawn.new("black", self, [1,4])
    @grid[1,5] = Pawn.new("black", self, [1,5])
    @grid[1,6] = Pawn.new("black", self, [1,6])
    @grid[1,7] = Pawn.new("black", self, [1,7])

    #white pieces
    @grid[7,0] = Rook.new("white", self,   [7,0])
    @grid[7,1] = Knight.new("white", self, [7,1])
    @grid[7,2] = Bishop.new("white", self, [7,2])
    @grid[7,3] = Queen.new("white", self,  [7,3])
    @grid[7,4] = King.new("white", self,   [7,4])
    @grid[7,5] = Bishop.new("white", self, [7,5])
    @grid[7,6] = Knight.new("white", self, [7,6])
    @grid[7,7] = Rook.new("white", self,   [7,7])
    @grid[6,0] = Pawn.new("white", self, [6,0])
    @grid[6,1] = Pawn.new("white", self, [6,1])
    @grid[6,2] = Pawn.new("white", self, [6,2])
    @grid[6,3] = Pawn.new("white", self, [6,3])
    @grid[6,4] = Pawn.new("white", self, [6,4])
    @grid[6,5] = Pawn.new("white", self, [6,5])
    @grid[6,6] = Pawn.new("white", self, [6,6])
    @grid[6,7] = Pawn.new("white", self, [6,7])




    #grid[0,0] to grid[1,7] and grid[6,0] to grid[7,7] populated with pieces
    #rest with nils?
  end

  def move_piece(start_pos, end_pos)
    if @grid[end_pos].is_a?(Piece) #and it's the opposite color
      raise InvalidMoveError 
    end
    @grid[end_pos] = @grid[start_pos] 
    raise "no piece at start_pos" if @grid[start_pos] == nil
    rescue InvalidMoveError => e
      puts e.message
      retry
    end
  end

  def capture_piece(start_pos, end_pos) #handles taking pieces of opposite color
    if @grid[end_pos].is_a?(Piece) #and it's the opposite color
      #piece is taken
    end
  end

  def[](pos)
    row, col = *pos
    @grid[row][col]
  end

  def[]=(pos, value)
    row, col = *pos
    @grid[row][col] = value
  end
end
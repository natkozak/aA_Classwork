require 'singleton'

module Slideable

    HORIZONTAL_DIRS = [
        [-1,0], # up
        [1, 0], # down
        [0, 1], # right
        [0,-1] # left
    ]
    DIAGONAL_DIRS = [
        [1,1], #down-right
        [-1,-1], #up-left
        [1,-1], #down-left
        [-1,1] #up-right
    ]

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves
        possible_moves = []
        possible_dirs = move_dirs
        possible_dirs.each do |dir|
            possible_moves.concat(grow_unblocked_moves_in_dir(dir))
        end
        possible_moves
    end

    private
    def move_dirs
        raise "Implement this per-piece!"
    end

    def grow_unblocked_moves_in_dir(dir) #[1,1]
        start_pos = self.pos
        valid = true
        moves_in_dir = []
        current_pos = start_pos.dup
        while valid
            #increments current position 
            current_pos = [current_pos[0] + dir[0], current_pos[1] + dir[1]]

            #checks current position for validity
            if current_pos[0] < 0 || current_pos[1] < 0 #out of bounds of board
                valid = false
                break
            elsif current_pos[0] > 7 || current_pos[1] > 7 #out of bounds of board
                valid = false
                break
            elsif self.board[current_pos].color == self.color #your piece blocks it
                valid = false
                break
            else
                #it's valid so far. 
                #if there's another piece:
                    #you input the current_pos as possible
                    #but then set valid to false afterwards (because you can't move afterwards)
                moves_in_dir << current_pos
                color_at_current_pos = self.board[current_pos].color
                if self.board[current_pos].is_a?(NullPiece)
                    next
                elsif color_at_current_pos != self.color
                    valid = false  
                end
            end
        end
        moves_in_dir
    end
end

module Stepable
    def moves
        valid_moves = []
        dir = move_diffs #array of differences
        dir.each do |dir|
            start_pos = self.pos
            current_pos = start_pos.dup
            current_pos = [current_pos[0] + dir[0], current_pos[1] + dir[1]]
            piece_on_pos = self.board[current_pos]
            if piece_on_pos.is_a?(NullPiece) || piece_on_pos.color != self.color #other player's piece
                valid_moves << current_pos
            end
        end
        valid_moves
    end

    private
    def move_diffs
        raise "This should be called per-piece!"
    end

end

class InvalidMoveError < StandardError
    def message
        "That move was invalid. Use capture_piece to take pieces."
    end
end

class InvalidCaptureError < StandardError
    def message
        "That capture was invalid. Use move_piece to move to an unoccupied space."
    end
end

class OutOfBoundsError < StandardError
    def message
        "That move was out of bounds."
    end
end

class Piece
    attr_reader :color, :board
    attr_accessor :pos

    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end

    def to_s

    end

    def empty?

    end

    def valid_moves
        
    end

    def pos=(val)

    end

    def symbol

    end

    private
    def move_into_check?(end_pos)
        
    end

end


class NullPiece < Piece
include Singleton

    def initialize; end
    
    def moves
        ""
    end

    def symbol
        ""
    end

    # def to_s
    #     ''
    # end

    # def empty?
    #     ''
    # end

    # def valid_moves
    #    '' 
    # end

    # def pos=(val)
    #    '' 
    # end

    # private
    # def move_into_check?(end_pos)
    #     ''
    # end
        
end


#Slideable
class Rook < Piece
    include Slideable
    def initialize(color, board, pos)
        super
    end
   
    def move_dirs
        self.horizontal_dirs
    end
end

class Bishop < Piece
    include Slideable
    def initialize(color, board, pos)
        super
    end

    def move_dirs
        diagonal_dirs
    end
end

class Queen < Piece
    include Slideable
    def initialize(color, board, pos)
        super
    end

    def move_dirs
        horizontal_dirs + diagonal_dirs
    end
end


#Stepable
class Knight < Piece
    include Stepable
    def initialize(color, board, pos)
        super
    end

    def move_diffs
        @knight_moves = [
            [-1, 2],
            [-1,-2],
            [-2, 1],
            [-2,-1],
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1]
        ]
    end
end

class King < Piece
    include Stepable
    def initialize(color, board, pos)
        super
    end

    def move_diffs
        @king_moves = [
            [-1,0], # up
            [1, 0], # down
            [0, 1], # right
            [0,-1], # left
            [1,1],  #down-right
            [-1,-1],#up-left
            [1,-1], #down-left
            [-1,1]  #up-right
        ]
    end

    def symbol
        :king
    end
end

#Pawn is special
class Pawn < Piece
    def initialize(color, board, pos)
        super
    end
end
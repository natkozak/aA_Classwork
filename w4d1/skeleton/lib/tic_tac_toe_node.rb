require_relative 'tic_tac_toe'

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos
  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
    @marks = [:x, :o]
  end

  def losing_node?(evaluator)
  end

  def winning_node?(evaluator)
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def other_mark
    return :o if @next_mover_mark == :x
    return :x if @next_mover_mark == :o
  end


  def children
    kids = []
    
    (0...3).each do |row|
      (0...3).each do |col|
        if @board.empty?([row, col])
          board_dup = @board.dup
          board_dup[row, col] = self.next_mover_mark
          node = TicTacToeNode.new(board_dup, other_mark, [row, col])
          kids << node
        end
      
      end
    end
    kids
  end
end

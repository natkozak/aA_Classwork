require_relative "board"
require_relative "cursor"
require "colorize"


class Display

    def initialize(board)
        @board= board
        @cursor= Cursor.new([0,0], board)
    end

end

board= Board.new
display= Display.new(board)
p display
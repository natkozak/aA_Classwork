require_relative '00_tree_node.rb'

# 3,0  3,1  3,2  3,3  3,4
# 2,0  2,1  2,2  2,3  2,4
# 1,0  1,1  1,2  1,3  1,4
# 0,0  0,1  0,2  0,3  0,4

# 0,0  0,1  0,2  0,3  0,4
# 1,0  1,1  1,2  1,3  1,4
# 2,0  2,1  2,2  2,3  2,4
# 3,0  3,1  3,2  3,3  3,4

# [0,0] #[2, 1] up/down, side/side
# [0,0] #[1, 2]

# [3,4] #


class KnightPathFinder
  attr_reader :root_node, :considered_positions

  #Start by creating an instance variable, self.root_node that stores the knight's initial position in an instance of your PolyTreeNode class.
  # def self.root_node #why did they tell us to make an instance variable called self.root_node?? doesn't that need a getter?? 
  # end
  

  def self.valid_moves(pos) #1
    valid_moves = []
    @possible_moves = [ #first elt is horizontal movement, second elt is vertical movement
      [-1, 2],
      [-1,-2],
      [-2, 1],
      [-2,-1],
      [1, 2],
      [1, -2],
      [2, 1],
      [2, -1]
    ]
    @possible_moves.each do |move|
      new_pos = []
      new_pos << pos[0] + move[0] 
      new_pos << pos[1] + move[1] 
      if new_pos[0] >= 0 && new_pos[0] < 8 && new_pos[1] >= 0 && new_pos[1] < 8
        valid_moves << new_pos
      end
    end
    valid_moves
  end
  
  def initialize(pos)
      @root_node = PolyTreeNode.new(pos)
      @grid = Array.new(8) {Array.new(8)}
      @pos = pos
      @considered_positions = [@pos]#array containing just the starting position
      self.build_move_tree
  end

  def new_move_positions(pos) #2
    valid_new_moves = KnightPathFinder.valid_moves(pos)
    not_considered = valid_new_moves - @considered_positions
    @considered_positions.concat(not_considered)
    not_considered
  end

  def build_move_tree
    #builds the move tree, beginning with self.root_node
    queue = []
    queue << @root_node
    while queue.length > 0
      top_queue = queue.shift
      new_moves = new_move_positions(top_queue.value)
      new_moves.each do |new_move|
        new_move_node = PolyTreeNode.new(new_move)
        new_move_node.parent=(top_queue)
        queue << new_move_node
      end
    end
  end

  def find_path(end_pos)
    node = @root_node.dfs(end_pos)
    trace_path_back(end_pos, node)
  end

  def trace_path_back(end_pos, node)
    path = [end_pos]
    current_node = node #node that has the end_position
    until path[0] == @root_node.value
      current_node = current_node.parent
      path.unshift(current_node.value)
    end
    path
  end


  # def find_path
  #   #use to traverse move tree -- don't write yet.
  # end

  # def =(pos)
  #   row, col = pos
  #   @grid[row][col]
  # end
end
kpf = KnightPathFinder.new([0, 0])
p kpf.find_path([2, 1]) # => [[0, 0], [2, 1]]
p kpf.find_path([1, 2]) # => [[0, 0], [1, 2]]
p kpf.find_path([3, 3]) # => [[0, 0], [2, 1], [3, 3]]

p kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]

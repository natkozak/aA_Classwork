class PolyTreeNode
    attr_reader :parent, :value, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    

    def parent=(new_parent)
        #unless condition == if !condition
        if !(self.parent == nil)
            old_parent_children = self.parent.children
            old_parent_children.delete(self)
        end

        #new_parent ||= PolyTreeNode.new()
        @parent = new_parent
        new_parent.children << self unless self.parent == nil
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise "that's not your child!!!" if !self.children.include?(child_node)
        child_node.parent = nil
    end

    def bfs(target_value)
        queue = []
        queue << self
        while queue.length > 0
            first_node = queue.shift
            return first_node if first_node.value == target_value
            queue.concat(first_node.children)
        end
    end

    def dfs(target_value)
        #base case:
        #return nil if self.nil?
        return self if self.value == target_value
        self.children.each do |child|
            search_result = child.dfs(target_value)
            return search_result unless search_result == nil
        end
        nil
    end



    

    

    


end

n1 = PolyTreeNode.new("root1")
n2 = PolyTreeNode.new("root2")
n3 = PolyTreeNode.new("root3")

# # connect n3 to n1
# n3.parent = n1
# # connect n3 to n2
# n3.parent = n2

# # this should work
# raise "Bad parent=!" unless n3.parent == n2
# raise "Bad parent=!" unless n2.children == [n3]

# # this probably doesn't
# raise "Bad parent=!" unless n1.children == []
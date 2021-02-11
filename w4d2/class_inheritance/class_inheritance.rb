class Employee
  attr_reader :name, :title, :salary, :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    bonus = (@salary) * multiplier
  end
end

class Manager < Employee
  attr_accessor :employees

  def initialize(name, title, salary, boss)
    @employees = []
    super(name, title, salary, boss)
  end

  def bonus(multiplier)
    queue = [self]
    salaries = 0 
    until queue.empty?
      first = queue.shift
      if first.is_a?(Manager)
        queue.concat(first.employees)
      end
      salaries += first.salary
    end
    salaries -= self.salary
    bonus = salaries * multiplier
  end


  # def bonus(multiplier)
  #   salaries = 0 
  #   employees.each do |employee|
  #     salaries += employee.salary
  #     if employee.is_a?(Manager)
  #       employee.employees.each do |grand_employee|
  #         salaries += grand_employee.salary
  #       end
  #     end
  #   end 
  #   bonus = salaries * multiplier
  # end


  def add_employee(employee)
    if employee.boss == self
      @employees << employee
    end
  end

end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
ned.add_employee(darren)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)
darren.add_employee(shawna)
darren.add_employee(david)

p ned.salary
p darren.salary
p ned.bonus(5) # => 500_000
p darren.bonus(4) # => 88_000
p david.bonus(3) # => 30_000
require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    # name = "#{self}"
    #   labels = DBConnection.execute(<<-SQL, name)
    #   SELECT *
    #   FROM INFORMATION_SCHEMA.COLUMNS
    #   WHERE TABLE_NAME = ?
    #   SQL
    # return labels.to_sym
    return @columns if @columns 
    #execute2 is exactly like execute, but it returns the column labels as the first row
    labels = DBConnection.execute2(<<-SQL)
      SELECT *
      FROM #{self.table_name}
    SQL
    @columns = labels.first.map(&:to_sym)
  end

  def self.finalize!
    #iterate through all columns
    # using define method twice to create a getter and setter method for each column, just like my_attr_accessor
    # but this time, instead of dynamically creating an instance variable, store everything in the attributes hash

    self.columns.each do |column|
      define_method(column) do
        self.attributes[column] #don't need interpolation here because column is already the right string
      end

      define_method("#{column}=") do |value| #do need interpolation here to change the name of the method to add the equal sign
        self.attributes[column] = value
      end
    end

  end

  def self.table_name=(table_name)
    @name = table_name.to_s.tableize
  end

  def self.table_name

    @name ||= self.to_s.tableize #we only assign it if there isn't a table name already, so we're not reseting every time
  end

  def self.all

    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM #{self.table_name}
    SQL
    self.parse_all(results)
  end

  def self.parse_all(results)
    results.map do |result|
      self.new(result)
    end
  end

  def self.find(id)
    item = DBConnection.execute(<<-SQL, id)
      SELECT *
      FROM #{self.table_name}
      WHERE #{self.table_name}.id = ?
    SQL
    item_object = self.parse_all(item)
    p item_object
  end

  def initialize(params = {})
    #Your #initialize method should 
    
    #iterate through each of the attr_name, value pairs. 
        #For each attr_name
            #convert the name to a symbol
            #check whether the attr_name is among the columns. If it is not, raise an error:

            #Set the attribute by calling the setter method. Use #send; avoid using @attributes or #attributes inside #initialize.

    params.each do |name, value|
      name = name.to_sym #gotta convert (ie reassign) it
      unless self.class.columns.include?(name)
        raise "unknown attribute '#{name}'"
      else
        self.send("#{name}=", value) #the first param is the method name, the second is the parameter the method takes
      end
    end
  end

  def attributes
    @attributes ||= Hash.new {|h, k| h[k] = nil}


  end

  def attribute_values
    # attribute = DBConnection.execute(<<-SQL)
    #   SELECT *
    #   FROM #{self.table_name}
    #   WHERE #{self}
    # SQL

    #Charis's solution:
    #self.attributes.values

    #Solution doc:
    #self.class.columns.map { |col| self.send(col) }
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end

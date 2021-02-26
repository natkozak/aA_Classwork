class AttrAccessorObject
  def self.my_attr_accessor(*names) #names of methods in a class
    # getter    

    names.each do |name|
      define_method(name) do
        #self.instance_variable_get("@#{name}")
        self.instance_variable_get('@' + name.to_s)
      end

      define_method("#{name}=") do |new_value|
        self.instance_variable_set("@#{name}", new_value)
      end
    end
  end
  #don't need to make the method name a class variable with @
  #you do need to pass in a version of 'name' that has become a class variable via string interpolation as an argument 
  #new_value can be whatever type 
  #instance_variable_get and instance_variable_set are doing work under the hood to interpret the variable name and the new value


end

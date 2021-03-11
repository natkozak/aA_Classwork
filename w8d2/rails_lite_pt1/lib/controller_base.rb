require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
    #stored request will be used to fill out response in one of the actions (:new, :edit, etc) defined within controllers that inherit from it
    @already_built_response = false
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    if self.already_built_response?
      raise "Double render error!"
    else
      @res.status = 302
      @res.location = url
      @already_built_response = true
    end
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type = 'text/html')
    if self.already_built_response?
      raise "Double render error!"
    else
      @res.write(content)
      @res['Content-Type'] = content_type
      @already_built_response = true
      nil
    end
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    #Use controller and template names to construct paths to template files.


    #Use File.read to read the template file.

    #Create a new ERB template from the contents.
    
    #Evaluate the ERB template, using binding to capture the controller's instance variables.

    #Pass the result to #render_content with a content_type of text/html.

    
  end

  # method exposing a `Session` object
  def session
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
  end
end


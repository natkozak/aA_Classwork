class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @catt = Cat.find(:id)

    render :show
  end

end

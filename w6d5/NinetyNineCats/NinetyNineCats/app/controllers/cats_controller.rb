class CatsController < ApplicationController
  def index
    @cats = Cat.all
    render :index
  end

  def show
    @catt = Cat.find_by(id: params[:id])
    render :show
  end

  def create
    @catt = Cat.new(cat_params)
    if @catt.save
      redirect_to cats_url
    else
      render :new
    end
  end

  def new
    @catt = Cat.new
    render :new
  end

  def update
    @catt = Cat.find_by(id: params[:id])
     if @catt.update(cat_params)
      redirect_to cat_url(@catt.id)
    else
      render :edit
    end
  end

  def edit
    @catt = Cat.find(params[:id])
    render :edit
  end

 
  private


  def cat_params
    params.require(:cat).permit(:birth_date, :color, :name, :sex, :description)
  end

end

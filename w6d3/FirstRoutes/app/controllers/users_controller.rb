# UsersController < ApplicationController < ActionController::Base

class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to user_url(user.id)
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    
    user = User.find_by(id: params[:id])

    if user.nil?
      redirect_to users_url
      render json: "User doesn't exist", status: 404
    else
      render json: user
    end

  end

  def update
    user = User.find_by(id: params[:id])

    if user.update(user_params)
      redirect_to user_url(user.id)
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: user
  end


  private

  def user_params
    params.require(:user).permit(:username)
  end
end

#http://0.0.0.0:3000
#localhost:3000/
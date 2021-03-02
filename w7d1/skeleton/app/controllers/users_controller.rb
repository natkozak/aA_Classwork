class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to user_url(@user.id)
    else
      render :new
    end

  end

  def new
    @user = User.new
    render :new
  end

  private
  def user_params
    params.require(:user).permit(:user_name, :password)
  end

end

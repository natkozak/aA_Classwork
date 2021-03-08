class UsersController < ApplicationController
  before_action :require_logged_in, only: [:index]

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save #tried to save the user in the sessions if. would that matter?
      #keeps failing this
      login!(@user)
      redirect_to users_url
    else
      #flash[:errors] = ["Invalid email or password syntax"]
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def edit
    @user = User.find(params[:id]) #####
    render :edit
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      redirect_to users.url(@user)
    else
      render :edit
    end
  end

  def destroy
    @user = User.find_by(id: params[:id]) #####
    @user.destroy
    redirect_to users_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end

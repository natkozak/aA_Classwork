class PostsController < ApplicationController

  def new
    @post = Post.new
    render :new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]
    if @post.save
      redirect_to :show
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit #only post author can use this
    @post = Post.find_by(params[:id])
    render :edit if current_user.id == @post.owner_id
  end

  def update #only post author can use this
    @post = Post.find_by(params[:id])
    if current_user.id == @post.owner_id && @post.update(post_params)
      redirect_to :show
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def show
    @post = Post.find_by(params[:id])
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end

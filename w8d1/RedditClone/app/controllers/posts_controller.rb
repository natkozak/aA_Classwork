class PostsController < ApplicationController

  # def new
  #   @post = Post.new
  #   render :new
  # end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    @post.sub_id = params[:sub_id]
    if @post.save
      redirect_to sub_post_url(@post.sub_id, @post.id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render sub_url(@post.sub_id)
    end
  end

  def edit #only post author can use this
    @post = Post.find_by(id: params[:id])
    render :edit if current_user.id == @post.owner_id
  end

  def update #only post author can use this
    @post = Post.find_by(id: params[:id])
    if current_user.id == @post.owner_id && @post.update(post_params)
      redirect_to :show
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content)
  end
end

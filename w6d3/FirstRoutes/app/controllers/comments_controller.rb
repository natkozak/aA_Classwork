class CommentsController < ApplicationController
  def index
    #It should now be possible to make GET requests to CommentsController#index and depending on the params provided either return comments made by a particular user or comments made on a particular piece of artwork.

    commented = nil
    if params[:comment][:author_id]
      commented = User.find_by(id: params[:comment][:author_id])
    elsif params[:comment][:artwork_id]
      commented = Artwork.find_by(id: params[:comment][:artwork_id])
    end
    render json: commented.comments
    
  end

  def create
    comment = Comment.new(comment_params)

    if comment.save
      comment = Comment.find_by(id: params[:id])
      render json: comment
    else
      render json: comment.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
    render json: comment
  end

  private

  def comment_params
    params.require(:comment).permit(:author_id, :artwork_id, :body)
  end
end

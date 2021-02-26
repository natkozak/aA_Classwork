class ArtworksController < ApplicationController
   def index
    user = User.find_by(id: params[:user_id])
    all_artworks = user.artworks + user.shared_artworks

    render json: all_artworks
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      redirect_to artwork_url(artwork.id)
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    artwork = Artwork.find_by(id: params[:id])
    render json: artwork
  end

  def update
    artwork = Artwork.find_by(id: params[:id])

    if artwork.update(artwork_params)
      redirect_to artwork_url(artwork.id)
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    artwork = Artwork.find_by(id: params[:id])
    artwork.destroy
    render json: artwork
  end


  private

  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end

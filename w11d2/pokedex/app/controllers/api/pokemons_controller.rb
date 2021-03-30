class Api::PokemonsController < ApplicationController
    def index 
        @pokemons = Pokemon.all
        render :index 
    end
    
    def show
        @pokemon = Pokemon.find_by(id: params[:id])
        render :show
        # @poke_items = @pokemon.items
    end

    private 
    def pokemon_params
        params.require(:pokemon).permit(:name, :image_url, :attack, :defense, :poke_type)
    end
end

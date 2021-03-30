json.pokemon do 
    json.set! @pokemon.id do 
  json.extract! @pokemon, :id, :name, :image_url, :attack, :defense, :poke_type
        
    end   
end



json.moves do 
    @pokemon.moves.each do |move|
        json.set! move.id do 
            json.extract! move, :id, :name
        end
    end
end



# json.set! @pokemon.items do 
#     json.extract! @pokemon.items, :id, :pokemon_id, :name, :price, :happiness, :image_url
# end

json.items do 
    @pokemon.items.each do |item|
        json.set! item.id do 
            json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
        end
    end
end



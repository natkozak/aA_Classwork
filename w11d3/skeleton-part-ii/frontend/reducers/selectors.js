export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}
  
export const selectPokemonDetails = (state) => {
  return Object.values(state.entities.details)
}

export const selectPokemonMoves = (state) => {
  return Object.values(state.entities.pokemon.moves)
}

export const selectPokemonItems = (state) => {
  return Object.values(state.entities.pokemon.items)
}


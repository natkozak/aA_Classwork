import * as APIUtil from '../util/api_util';

// types are used in POJO action creators to help direct the action to the appropriate switch statement in a reducer
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON_DETAILS = "RECEIVE_POKEMON_DETAILS";


// POJO action creators use "receive"
export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemonDetails = (pokemon) => ({
  type: RECEIVE_POKEMON_DETAILS,
  pokemon
})


//thunk action creators use "request"
export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemonDetails = (pokemon) => (dispatch) => (
  APIUtil.fetchPokemonDetails()
    .then(pokemon => dispatch(receivePokemonDetails(pokemon)))
)
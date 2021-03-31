import { RECEIVE_ALL_POKEMON } from './../actions/pokemon_actions';
import { RECEIVE_POKEMON_DETAILS } from './../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, action.pokemon, state);
  case RECEIVE_POKEMON_DETAILS:
      // return Object.assign({}, action.details, state);
      nextState[action.payload.pokemon.id]
  default:
    return state;
  }
}
  
export default pokemonReducer;

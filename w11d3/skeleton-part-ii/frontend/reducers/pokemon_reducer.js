import { RECEIVE_ALL_POKEMON } from './../actions/pokemon_actions';
import { RECEIVE_POKEMON_DETAILS } from './../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, action.pokemon, state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return nextState;
  case RECEIVE_POKEMON_DETAILS:
      // return Object.assign({}, action.details, state);
      debugger
      return nextState[action.pokemon];
  default:
    return state;
  }
}
  
export default pokemonReducer;

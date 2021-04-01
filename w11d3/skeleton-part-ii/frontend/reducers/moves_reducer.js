import { RECEIVE_POKEMON_DETAILS } from './../actions/pokemon_actions';

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_POKEMON_DETAILS:
      // return Object.assign({}, action.details, state);
      return nextState[action.payload.pokemon.moves];
    default:
      return state;
  }
}

export default movesReducer;
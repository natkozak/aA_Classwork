import { RECEIVE_POKEMON_DETAILS } from './../actions/pokemon_actions';


const detailsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON_DETAILS:
            return Object.assign({}, action.pokemon, state);
        default:
            return state;
    }
}

export default detailsReducer;

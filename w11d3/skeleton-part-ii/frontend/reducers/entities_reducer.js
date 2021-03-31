import {combineReducers} from 'redux';
import pokemonReducer from './pokemon_reducer';
import detailsReducer from './details_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  details: detailsReducer
})

export default entitiesReducer;
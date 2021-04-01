import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchAllPokemon, fetchPokemonDetails } from './util/api_util';
import {receiveAllPokemon, receivePokemonDetails, requestAllPokemon, requestPokemonDetails} from './actions/pokemon_actions';
import * as selectors from './reducers/selectors';



document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  
  window.store = store;

  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchPokemonDetails = fetchPokemonDetails;
  window.receiveAllPokemon = receiveAllPokemon;
  window.receivePokemonDetails = receivePokemonDetails;
  window.requestAllPokemon = requestAllPokemon;
  window.requestPokemonDetails = requestPokemonDetails;

  window.selectors = selectors;

  ReactDOM.render(<Root store={store} />, rootEl)
})
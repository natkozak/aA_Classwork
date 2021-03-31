import React from 'react';
import ReactDOM from 'react-dom';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { Route } from 'react-router-dom';

const App = () => (
    <Route path="/" component={PokemonIndexContainer} />
);

export default App;
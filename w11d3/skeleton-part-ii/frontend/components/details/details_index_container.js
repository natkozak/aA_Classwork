import { connect } from 'react-redux';
import { requestPokemonDetails } from './../../actions/pokemon_actions';
import { selectPokemonDetails } from './../../reducers/selectors';
import DetailsIndex from './details_index';


const mapStateToProps = state => ({
    pokemon: selectPokemonDetails(state)
})

const mapDispatchToProps = dispatch => ({
    requestPokemonDetails: () => dispatch(requestPokemonDetails())
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailsIndex)
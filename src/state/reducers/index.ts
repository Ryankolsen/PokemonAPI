import { combineReducers } from "redux";
import pokemonListReducer from "./pokemonReducer";
import singlePokemonReducer from "./singlePokemonReducer";

const reducers = combineReducers({
  allPokemon: pokemonListReducer,
  singlePokemon: singlePokemonReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>; //create type and assign it to state

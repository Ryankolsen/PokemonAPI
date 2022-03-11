import { ActionType } from "../action-types/index";
import { FetchIndividualPokemonActoin } from "../actions/index";
import { IPokemon } from "../actions/index";

export const singlePokemonReducer = (
  pokemonState: IPokemon[] = [],
  action: FetchIndividualPokemonActoin
) => {
  switch (action.type) {
    case ActionType.FETCHINDIVIDUALPOKEMON:
      return action.payload;
    default:
      return pokemonState;
  }
};

export default singlePokemonReducer;

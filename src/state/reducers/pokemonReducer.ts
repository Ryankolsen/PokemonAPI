import { ActionType } from "../action-types/index";
import { FetchPokemonsAction } from "../actions/index";

interface IProps {
  allPokemon: [name: string, url: string];
}

export const pokemonListReducer = (
  state: IProps[] = [],
  action: FetchPokemonsAction
) => {
  switch (action.type) {
    case ActionType.FETCHPOKEMONS:
      console.log(action.payload);

      return action.payload;
    default:
      return state;
  }
};

export default pokemonListReducer;

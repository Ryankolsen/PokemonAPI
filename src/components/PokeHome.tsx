import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { useAppSelector, useAppDispatch } from "../state/hooks";

import PokemonList from "./PokemonList";
import PokemonSingleView from "./PokemonSingleView";
import "../css/App.css";

//https://www.youtube.com/watch?v=jrKcJxF0lAU
//https://www.youtube.com/watch?v=udr2rx_B99w

export default function PokeHome(): JSX.Element {
  const allPokemon = useAppSelector((state: State) => state.allPokemon);
  const pokemon: [] = useAppSelector(
    (pokemonState: State) => pokemonState.singlePokemon
  );

  const dispatch = useAppDispatch();

  const { fetchPokemon } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <div className="poke-home__background">
      <div className="poke-home__Container">
        <h1 onClick={() => window.location.reload()} className="poke-home__h1">
          PokeHome
        </h1>
        <h2 className="poke-home__h2">Pokemons!</h2>
        {allPokemon && pokemon.length === 0 ? (
          <PokemonList allPokemon={allPokemon} />
        ) : (
          <PokemonSingleView />
        )}
      </div>
    </div>
  );
}

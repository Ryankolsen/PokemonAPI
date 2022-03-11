import React from "react";
import { useAppSelector } from "../state/hooks";
import { State } from "../state";
import { IPokemon } from "../state/actions/index";

import PokemonSingleMove from "./PokemonSingleMove";

export default function PokemonSingleView() {
  const pokemon: IPokemon = useAppSelector(
    (pokemonState: any) => pokemonState.singlePokemon
  );

  const {
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    held_items,
    id,
    is_default,
    location_area_encounters,
    moves,
    name,
    order,
    past_types,
    species,
    sprites,
    stats,
    types,
    weight,
  } = pokemon;
  const pokemonSpriteFront: any = sprites?.front_default;

  // console.log(forms);
  // console.log(pokemon);

  return (
    <div className="pokemon-single-view">
      {pokemon.name ? (
        <h1 className="pokemon-single-view__h1">
          {name.charAt(0).toUpperCase()}
          {name.slice(1)}
        </h1>
      ) : null}

      {pokemonSpriteFront ? <img src={pokemonSpriteFront} /> : null}

      <h2 className="pokemon-singl-view__h2">
        Abilities
        {abilities.map((ability: any) => {
          return (
            <PokemonSingleMove
              key={ability.ability.name}
              ability={ability.ability}
            />
          );
        })}
      </h2>

      <h3 className="pokemon-single-view__h3">Moves:</h3>
      <h4 className="pokemon-single-view__h4">
        {moves.map((move) => {
          return (
            <ul
              // onClick={() => pokemonMoves(move.move.name)}
              key={move.move.name}
            >
              {move.move.name}
            </ul>
          );
        })}
      </h4>

      <div className="pokemonSingleView__container">
        <button
          className="btn-reset-search "
          onClick={() => window.location.reload()}
        >
          Reset Search
        </button>
      </div>
    </div>
  );
}

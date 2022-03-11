import React from "react";
import { DefaultRootState } from "react-redux";
import { DefaultSerializer } from "v8";
import Pokemon from "./Pokemon";

export interface IProps {
  allPokemon: [name: string, url: string];
}

export default function PokemonList({ allPokemon }: IProps) {
  return (
    <div>
      <div className="pokemon-list__container">
        {allPokemon.map((pokemons: any) => {
          return <Pokemon key={pokemons.name} {...pokemons} />;
        })}
      </div>
    </div>
  );
}

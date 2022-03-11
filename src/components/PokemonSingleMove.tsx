import React from "react";

interface IpropsPokemonSingleMove {
  ability: {
    name: string;
    url: string;
  };
}

export default function PokemonSingleMove({
  ability,
}: IpropsPokemonSingleMove) {
  return (
    <div>
      <h3 className="pokemon-single-move__h3">
        <li className="pokemon-single-move__li">
          {ability.name.charAt(0).toUpperCase()}
          {ability.name.slice(1)}
        </li>
      </h3>
    </div>
  );
}

import React from "react";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useAppSelector, useAppDispatch } from "../state/hooks";

interface IpropsPokemon {
  name: string;
  url: string;
}
export default function Pokemon(props: IpropsPokemon) {
  const singlePokemon = useAppSelector((pokemonState) => pokemonState);
  const dispatch = useAppDispatch();

  const { fetchSinglePokemon } = bindActionCreators(actionCreators, dispatch);

  const { name, url } = props;
  return (
    <div>
      <div className="pokemon__container">
        <button
          className="btn-pokemon"
          onClick={() => {
            fetchSinglePokemon(url);
          }}
        >
          {name.charAt(0).toUpperCase()}
          {name.slice(1)}
        </button>
      </div>
    </div>
  );
}

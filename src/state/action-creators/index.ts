import { Dispatch } from "redux";
import {
  FetchPokemonsAction,
  FetchIndividualPokemonActoin,
} from "../actions/index";

export const fetchSinglePokemon = (url: string) => {
  return (dispatch: Dispatch<FetchIndividualPokemonActoin>) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log("successful connection!");
          return res.json();
        } else {
          console.log("Network response was not OK");
        }
      })
      .then((data) => {
        dispatch({
          type: "fetchIndividualPokemon",
          payload: data,
        });
      });
  };
};

export const fetchPokemon = () => {
  return (dispatch: Dispatch<FetchPokemonsAction>) => {
    fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default", //I know the above is not necessary for get request...but wanted to show I could do other requests
    })
      .then((res) => {
        if (res.ok) {
          console.log("successful connection!");
          return res.json();
        } else {
          console.log("Network response was not OK");
        }
      })
      .then((data) =>
        dispatch({
          type: "fetchPokemons",
          payload: data.results,
        })
      );
  };
};

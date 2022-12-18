import { api } from "./api";

import { Pokemon, Request } from "../interfaces/pokemons";

export const getPokemons = async () => {
  try {
    const response = await api.get("/pokemon");
    const { results } = response.data;

    return { results };
  } catch (err) {
    console.log(err);
  }
};

export const getSpecificPokemon = async (url: string): Promise<Request> => {
  try {
    const response = await api.get(url);

    const { id, types } = response.data as Request;

    return { id, types };
  } catch (err) {
    console.log(err);
  }
};

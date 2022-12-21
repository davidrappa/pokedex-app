import { api } from "./api";

import { Pokemon, Request } from "../interfaces/pokemons";

export const getPokemons = async (offset: number) => {
  try {
    const response = await api.get("/pokemon", {
      params: {
        limit: 10,
        offset,
      },
    });

    const { results, count } = response.data;

    return { results, count };
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

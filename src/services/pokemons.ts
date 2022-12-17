import { api } from "./api";

import { Pokemon, Request } from "../interfaces/pokemons";

export const getPokemons = async () => {
  try {
    const response = await api.get("/pokemon");
    const { results } = response.data;

    const payloadPokemons = await Promise.all(
      results.map(async (pokemon: Pokemon) => {
        const { id, types } = await getSpecificPokemon(pokemon.url);

        return { name: pokemon.name, id, types };
      })
    );

    return { payloadPokemons };
  } catch (err) {
    console.log(err);
  }
};

export const getSpecificPokemon = async (name: string) => {
  try {
    const response = await api.get(`/pokemon/${name}`);

    const { id, types } = response.data as Request;

    return { id, types };
  } catch (err) {
    console.log(err);
  }
};

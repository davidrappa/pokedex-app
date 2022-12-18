import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPokemons, getSpecificPokemon } from "../../services/pokemons";

import { Pokemon } from "../../interfaces/pokemons";

export const getPokemonsList = createAsyncThunk(
  "pokemonsList/getPokemonsList",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getPokemons();

      const pokemons = await Promise.all(
        data?.results.map(async (pokemon: Pokemon) => {
          const {
            payload: { id, types },
          } = await dispatch(getMoreInfoAboutPokemonsByUrl(pokemon.url));

          return { name: pokemon.name, id, types };
        })
      );

      return { pokemons };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getMoreInfoAboutPokemonsByUrl = createAsyncThunk(
  "pokemonsList/getMoreInfoAboutPokemonsByUrl",
  async (url: string, { rejectWithValue }) => {
    try {
      const { id, types } = await getSpecificPokemon(url);

      return { id, types };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const pokemonsListSlice = createSlice({
  name: "pokemonsList",
  initialState: {
    data: [],
    pokemons: [],
    pageStatus: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonsList.rejected, (state) => {
      state.pageStatus = "error";
    });
    builder.addCase(getPokemonsList.pending, (state) => {
      state.pageStatus = "loading";
    });
    builder.addCase(getPokemonsList.fulfilled, (state, { payload }) => {
      const { pokemons } = payload;

      Object.assign(state, {
        pokemons,
        pageStatus: "success",
      });
    });
  },
});

export default pokemonsListSlice.reducer;

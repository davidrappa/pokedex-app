import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPokemons, getSpecificPokemon } from "@/services/pokemons";

import { RootState } from "..";

import { IPokemonSlice, Pokemon } from "@/interfaces/pokemons";

export const getPokemonsList = createAsyncThunk(
  "pokemonsList/getPokemonsList",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { pokemons } = getState() as RootState;
      const offset = pokemons.offset;

      const data = await getPokemons(offset);

      const pokemonsInfo = await Promise.all(
        data?.results.map(async (pokemon: Pokemon) => {
          const {
            payload: { id, types },
          } = await dispatch(getMoreInfoAboutPokemonsByUrl(pokemon.url));

          return { name: pokemon.name, id, types };
        })
      );

      return { pokemonsInfo, data };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getMorePokemonsList = createAsyncThunk(
  "pokemonsList/getMorePokemonsList",
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const { pokemons } = getState() as RootState;
      const offset = pokemons.offset + 10;

      const data = await getPokemons(offset);

      const pokemonsInfo = await Promise.all(
        data?.results.map(async (pokemon: Pokemon) => {
          const {
            payload: { id, types },
          } = await dispatch(getMoreInfoAboutPokemonsByUrl(pokemon.url));

          return { name: pokemon.name, id, types };
        })
      );

      return { pokemonsInfo, offset };
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

const initialState: IPokemonSlice = {
  pokemons: [],
  pageStatus: "loading",
  offset: 0,
  totalPokemons: 0,
  isLoadingNextPage: false,
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    refreshingGetPokemons(state, { payload }) {
      const isRefreshing = payload;

      const pageStatus = isRefreshing ? state.pageStatus : "loading";

      return { ...state, pageStatus, offset: 0 };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonsList.rejected, (state) => {
      state.pageStatus = "error";
    });
    builder.addCase(getPokemonsList.pending, (state) => {
      state.pageStatus = "loading";
    });
    builder.addCase(getPokemonsList.fulfilled, (state, { payload }) => {
      const { pokemonsInfo, data } = payload;

      Object.assign(state, {
        pokemons: pokemonsInfo,
        totalPokemons: data?.count,
        pageStatus: "success",
        isLoadingNextPage: false,
      });
    });
    builder.addCase(getMorePokemonsList.rejected, (state) => {
      state.pageStatus = "error";
    });
    builder.addCase(getMorePokemonsList.pending, (state) => {
      state.isLoadingNextPage = true;
    });
    builder.addCase(getMorePokemonsList.fulfilled, (state, { payload }) => {
      const { pokemonsInfo, offset } = payload;

      const newPokemons = [...state.pokemons, ...pokemonsInfo];

      Object.assign(state, {
        pokemons: newPokemons,
        offset: offset + 10,
        isLoadingNextPage: false,
      });
    });
  },
});

export default pokemonsSlice.reducer;
export const { refreshingGetPokemons } = pokemonsSlice.actions;

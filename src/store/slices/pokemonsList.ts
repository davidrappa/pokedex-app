import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPokemons, getSpecificPokemon } from "../../services/pokemons";

import { RootState } from "..";

export const getPokemonsList = createAsyncThunk(
  "pokemonsList/getPokemonsList",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPokemons();

      return { data };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getSpecificPokemonOnList = createAsyncThunk(
  "pokemonsList/getSpecificPokemonOnList",
  async (name: string, { rejectWithValue }) => {
    try {
      const data = await getSpecificPokemon(name);

      console.log(data);
      return { data };
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
      const { data } = payload;

      Object.assign(state, {
        data,
        pageStatus: "success",
      });
    });
    builder.addCase(getSpecificPokemonOnList.rejected, (state) => {
      state.pageStatus = "error";
    });
    builder.addCase(getSpecificPokemonOnList.pending, (state) => {
      state.pageStatus = "loading";
    });
    builder.addCase(
      getSpecificPokemonOnList.fulfilled,
      (state, { payload }) => {
        const { data } = payload;

        console.log(data);

        Object.assign(state, {
          pokemons: [...state.pokemons, data],
          pageStatus: "success",
        });
      }
    );
  },
});

export default pokemonsListSlice.reducer;

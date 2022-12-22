import { StackNavigationProp } from "@react-navigation/stack";

type PageStatusType = "error" | "loading" | "success";

export type PokemonRoutesProps = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

export type PokemonsScreensNavigationProp =
  StackNavigationProp<PokemonRoutesProps>;

export type PokemonsNavigationProps = {
  navigation: PokemonsScreensNavigationProp;
  route: {};
};

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Request {
  id: number;
  types: PokemonType[];
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface IPokemonSlice {
  pokemons: Pokemon[];
  pageStatus: PageStatusType;
  offset: number;
  totalPokemons: number;
  isLoadingNextPage: boolean;
}

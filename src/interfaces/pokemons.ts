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

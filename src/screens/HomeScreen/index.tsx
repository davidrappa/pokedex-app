import React, { useState, useEffect, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";

import { Card, Loading } from "../../components";

import pokeballImage from "../../assets/patterns/POKEBALL.svg";

import * as S from "./styles";
import Header from "./Header";

type PokemonType = {
  type: {
    name: string;
  };
};

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: PokemonType[];
}

export interface Request {
  id: number;
  types: PokemonType[];
}

const HomeScreen = (): JSX.Element => {
  const { navigate } = useNavigation();

  const [load, setLoad] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function getPokemons(): Promise<void> {
      try {
        const response = await api.get("/pokemon");
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfoAboutPokemonsByUrl(
              pokemon.url
            );

            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );

        setPokemons(payloadPokemons as Pokemon[]);
      } catch (err) {
        Alert.alert("ops, algo de errado aconteceu, tente mais tarde");
      } finally {
        setLoad(false);
      }
    }

    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url: string): Promise<Request> {
    const response = await api.get(url);

    const { id, types } = response.data as Request;

    return { id, types };
  }

  const ListHeaderComponent = useCallback(() => {
    return <Header />;
  }, []);

  function handleNavigationPokemonDetail(pokemonId: number) {
    console.log();
  }
  return load ? (
    <S.LoadingScreen>
      <Loading />
    </S.LoadingScreen>
  ) : (
    <>
      <S.Container>
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          data={pokemons}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => (
            <Card
              data={pokemon}
              onPress={() => {
                handleNavigationPokemonDetail(pokemon.id);
              }}
            />
          )}
        />
      </S.Container>
    </>
  );
};

export default HomeScreen;

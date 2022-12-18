import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Card, Loading } from "../../components";
import Header from "./Header";

import { useAppDispatch, useAppSelector } from "../../store";
import { getPokemonsList } from "../../store/slices/pokemonsList";

import * as S from "./styles";

const HomeScreen = (): JSX.Element => {
  const { navigate } = useNavigation();

  const dispatch = useAppDispatch();
  const pageStatus = useAppSelector((state) => state.pokemonsList.pageStatus);
  const pokemons = useAppSelector((state) => state.pokemonsList.pokemons);

  useEffect(() => {
    dispatch(getPokemonsList());
  }, [dispatch]);

  const ListHeaderComponent = useCallback(() => {
    return <Header />;
  }, []);

  function handleNavigationPokemonDetail(pokemonId: number) {
    console.log();
  }
  return (
    <S.Container>
      {pageStatus === "loading" && (
        <S.LoadingScreen>
          <Loading />
        </S.LoadingScreen>
      )}
      {pageStatus === "success" && (
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 50,
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
      )}
    </S.Container>
  );
};

export default HomeScreen;

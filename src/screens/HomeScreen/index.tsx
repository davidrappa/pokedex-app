import React, { useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { Pokemon } from "../../interfaces/pokemons";

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

  const renderItem = useCallback(({ item }: { item: Pokemon }) => {
    return (
      <Card
        data={item}
        onPress={() => {
          handleNavigationPokemonDetail(item.id);
        }}
      />
    );
  }, []);

  const keyExtractor = useCallback(({ id }: Pokemon) => id.toString(), []);

  const ListHeaderComponent = useCallback(() => {
    return <Header />;
  }, []);

  function handleNavigationPokemonDetail(pokemonId: number) {
    console.log();
  }

  useEffect(() => {
    dispatch(getPokemonsList({}));
  }, [dispatch]);

  return (
    <S.Container>
      {pageStatus === "loading" && (
        <S.LoadingScreen>
          <Loading />
        </S.LoadingScreen>
      )}
      {pageStatus === "success" && (
        <S.List
          ListHeaderComponent={ListHeaderComponent}
          data={pokemons}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      )}
    </S.Container>
  );
};

export default HomeScreen;

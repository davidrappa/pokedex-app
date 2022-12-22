import React, { useEffect, useCallback, Fragment, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RefreshControl } from "react-native";

import { delay } from "@/utils/functions";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  getMorePokemonsList,
  getPokemonsList,
  refreshingGetPokemons,
} from "@/store/slices/pokemons";

import { Pokemon, PokemonsNavigationProps } from "@/interfaces/pokemons";

import { Card, Loading, SafeAreaView } from "@/components";
import Header from "./Header";

import * as S from "./styles";

const HomeScreen = ({ navigation }: PokemonsNavigationProps): JSX.Element => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const pageStatus = useAppSelector((state) => state.pokemons.pageStatus);
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  const totalPokemons = useAppSelector((state) => state.pokemons.totalPokemons);
  const offset = useAppSelector((state) => state.pokemons.offset);
  const isLoadingNextPage = useAppSelector(
    (state) => state.pokemons.isLoadingNextPage
  );

  const renderItem = useCallback(({ item }: { item: Pokemon }) => {
    return (
      <Card data={item} onPress={() => navigation.navigate("DetailScreen")} />
    );
  }, []);

  const keyExtractor = useCallback(({ id }: Pokemon) => id.toString(), []);

  const ListHeaderComponent = useCallback(() => {
    return <Header />;
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    await delay(1500);

    dispatch(refreshingGetPokemons(true));
    dispatch(getPokemonsList());

    setRefreshing(false);
  }, [dispatch]);

  const ListFooterComponent = useCallback(() => {
    return (
      <Fragment>
        {isLoadingNextPage && (
          <S.LoadingView>
            <Loading />
          </S.LoadingView>
        )}
      </Fragment>
    );
  }, [isLoadingNextPage]);

  useEffect(() => {
    dispatch(getPokemonsList());
  }, [dispatch]);

  return (
    <SafeAreaView type="primary" forceInset={{ bottom: "never" }}>
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
            onEndReachedThreshold={0.2}
            ListFooterComponent={ListFooterComponent}
            onEndReached={() =>
              totalPokemons > offset &&
              !isLoadingNextPage &&
              dispatch(getMorePokemonsList())
            }
            refreshControl={
              <RefreshControl
                style={{ marginBottom: refreshing ? -20 : 0 }}
                tintColor="#000"
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
          />
        )}
      </S.Container>
    </SafeAreaView>
  );
};

export default HomeScreen;

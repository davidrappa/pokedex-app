import React from "react";
import { useTheme } from "styled-components";

import BackgroundPokeball from "../../../assets/patterns/BACKGROUND-POKEBALL.png";

import { Icon } from "../../../components";

import * as S from "./styles";

const Header = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.ImageBackground source={BackgroundPokeball} />
      <S.IconsView>
        <S.TouchableIcon>
          <Icon
            name="icon-generation"
            width={25}
            height={25}
            fill={colors.projectColors["text-black"]}
          />
        </S.TouchableIcon>
        <S.TouchableIcon>
          <Icon
            name="icon-sort"
            width={25}
            height={25}
            fill={colors.projectColors["text-black"]}
          />
        </S.TouchableIcon>
        <S.TouchableIcon>
          <Icon
            name="icon-filter"
            width={25}
            height={25}
            fill={colors.projectColors["text-black"]}
          />
        </S.TouchableIcon>
      </S.IconsView>

      <S.Title>Pokédex</S.Title>
      <S.Subtitle>
        Search for Pokémon by name or using the National Pokédex number.
      </S.Subtitle>

      <S.InputView>
        <Icon
          name="icon-search"
          fill={colors.projectColors["text-gray"]}
          width={20}
          height={20}
        />
        <S.InputArea placeholder="What Pokémon are you looking for?" />
      </S.InputView>
    </S.Container>
  );
};

export default Header;

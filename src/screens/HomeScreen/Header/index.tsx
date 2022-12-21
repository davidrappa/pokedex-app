import React, { Fragment } from "react";
import { useTheme } from "styled-components";

import { Icon } from "@/components";

import * as S from "./styles";

const Header = (): JSX.Element => {
  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Title>Pokédex</S.Title>
      <S.Subtitle>
        Your most complete pokédex in the palm of your hand.
      </S.Subtitle>
    </S.Container>
  );
};

export default Header;

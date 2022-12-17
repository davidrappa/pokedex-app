import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Pokemon } from "../../interfaces/pokemons";

import pokeballCardImage from "../../assets/patterns/POKEBALL.png";
import dotsImage from "../../assets/patterns/DOTS.png";

import * as S from "./styles";
import { SvgUri } from "react-native-svg";

type CardProps = {
  data: Pokemon;
} & TouchableOpacityProps;

const Card = ({ data, ...rest }: CardProps): JSX.Element => {
  const { id, types, name } = data;

  return (
    <S.PokemonCard type={types[0].type.name} {...rest}>
      <S.LeftSide>
        <S.PokemonId>#{id}</S.PokemonId>
        <S.PokemonName>{name}</S.PokemonName>
        <S.ImageCardDetailLeftSide source={dotsImage} />
        <S.PokemonContentType>
          {types.map(({ type }) => {
            return (
              <S.PokemonType key={type.name} type={type.name}>
                <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
              </S.PokemonType>
            );
          })}
        </S.PokemonContentType>
      </S.LeftSide>

      <S.RightSide>
        <S.PokeballCardDetail source={pokeballCardImage} />
        <S.PokemonImage
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
      </S.RightSide>
    </S.PokemonCard>
  );
};

export default Card;

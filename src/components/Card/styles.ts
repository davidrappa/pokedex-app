import styled, { css, DefaultTheme } from "styled-components/native";

interface PokemonType {
  type: DefaultTheme;
}

export const PokemonCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<PokemonType>`
  ${({ theme: { colors }, type }) => css`
    background-color: ${colors.backgroundType[type]};
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    max-height: 115px;
  `}
`;

export const LeftSide = styled.View`
  width: 50%;
  position: relative;
`;

export const ContentLeftSide = styled.View`
  padding: 20px;
  flex: 1;
`;

export const ImageCardDetailLeftSide = styled.ImageBackground`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top: -15px;
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
  ${({ theme: { colors }, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background-color: ${colors.boxType[type]};
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme: { colors, fontSizes, fontWeights } }) => css`
    color: ${colors.projectColors["text-white"]};
    font-size: ${fontSizes["font-size-12"]}px;
    font-family: ${fontWeights["font-weight-regular"]};
    line-height: 14px;
    text-transform: capitalize;
  `}
`;

export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`;

export const PokemonId = styled.Text`
  ${({ theme: { colors, fontSizes, fontWeights } }) => css`
    color: ${colors.projectColors["text-number"]};
    font-size: ${fontSizes["font-size-12"]}px;
    font-family: ${fontWeights["font-weight-bold"]};
    line-height: 14px;
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme: { colors, fontSizes, fontWeights } }) => css`
    color: ${colors.projectColors["text-white"]};
    font-size: ${fontSizes["font-size-24"]}px;
    font-family: ${fontWeights["font-weight-bold"]};
    line-height: 31px;
    margin-bottom: 5px;
    text-transform: capitalize;
  `}
`;

export const PokemonImage = styled.Image`
  margin-top: -40px;
  width: 130px;
  height: 130px;
`;

export const PokeballCardDetail = styled.Image`
  position: absolute;
  right: -20px;
  top: -30px;
`;

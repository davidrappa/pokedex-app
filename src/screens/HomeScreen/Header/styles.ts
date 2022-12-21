import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
`;

export const IconsView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const TouchableIcon = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme: { colors, fontSizes, fontWeights } }) => css`
    color: ${colors.projectColors["text-black"]};
    font-size: ${fontSizes["font-size-32"]}px;
    font-family: ${fontWeights["font-weight-bold"]};
    line-height: 38.19px;
    margin-bottom: 10px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme: { colors, fontSizes, fontWeights } }) => css`
    color: ${colors.projectColors["text-gray"]};
    font-size: ${fontSizes["font-size-16"]}px;
    font-family: ${fontWeights["font-weight-regular"]};
    line-height: 19.09px;
    margin-bottom: 25px;
  `}
`;

export const InputView = styled.View`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.projectColors["background-default-input"]};
    width: 100%;
    height: 60px;
    padding: 20px 35px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 15px;
  `}
`;

export const InputArea = styled.TextInput`
  margin-left: 10px;
  width: 100%;
`;

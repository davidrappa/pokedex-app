import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const windowWidth = Dimensions.get("window").width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.projectColors["background-white"]};
    flex: 1;
    position: relative;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.projectColors["text-black"]};
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
    margin-top: -70px;
  `}
`;
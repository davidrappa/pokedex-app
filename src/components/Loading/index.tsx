import React from "react";

import LottieView from "lottie-react-native";
import loading from "./loading.json";

import * as S from "./styles";

const Loading = () => {
  return (
    <S.Container>
      <LottieView
        autoPlay
        source={loading}
        loop
        style={{ width: 150, opacity: 0.6 }}
      />
    </S.Container>
  );
};

export default Loading;

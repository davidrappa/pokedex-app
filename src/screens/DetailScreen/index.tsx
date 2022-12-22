import { SafeAreaView } from "@/components";
import React from "react";
import { Text } from "react-native";

import * as S from "./styles";

const DetailScreen = (): JSX.Element => {
  return (
    <SafeAreaView type="primary" forceInset={{ bottom: "never" }}>
      <S.Container>
        <Text>Text</Text>
      </S.Container>
    </SafeAreaView>
  );
};

export default DetailScreen;

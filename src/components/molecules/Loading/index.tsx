import React from "react";

import { ActivityIndicator } from "react-native";

import { Container } from "./styles";


export function Loading() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#1DA1F2" />
    </Container>
  );
}


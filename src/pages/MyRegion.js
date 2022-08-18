import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MyRegion() {
  return (
    <Container>
      MyRegion
      <Card />
    </Container>
  );
}

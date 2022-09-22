import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getDataThunk } from "../actions/data";
import Card from "../components/Card";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function MyRegion() {
  const data = useSelector((state) => state.info);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data !== null) return;
    dispatch(getDataThunk(1, 0, "양천구"));
  }, [data, dispatch]);
  return (
    <Container>
      MyRegion
      <Card />
    </Container>
  );
}

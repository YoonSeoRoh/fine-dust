import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getDataThunk } from "../actions/data";

import Card from "../components/Card";
import Loading from "../components/Loading";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 100px 20px;
`;

export default function MyRegion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, dustData } = useSelector((state) => state.data);
  const { loginDone, loginData } = useSelector((state) => state.user);

  useEffect(() => {
    if (loginDone) {
      dispatch(getDataThunk(loginData.user.location));
    } else {
      navigate("/");
    }
  }, [dispatch, loginDone, loginData, navigate]);

  return (
    <Container>
      {loading && <Loading />}
      {dustData &&
        dustData.items.map((item, index) => (
          <Card key={index} data={item} isMine={true} />
        ))}
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getDataThunk } from "../actions/data";

import DropDownMenu from "../components/DropDownMenu";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 100px 20px;
`;

export default function EntireRegions() {
  const { loginData } = useSelector((state) => state.user);
  const { loading, dustData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState("서울");

  const getCity = (name) => {
    setCity(name);
  };

  useEffect(() => {
    if (!loginData) {
      navigate("/");
    }
  }, [dispatch, loginData, navigate]);

  useEffect(() => {
    dispatch(getDataThunk(city));
  }, [city, dispatch]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <DropDownMenu getCity={getCity} />
          {dustData &&
            dustData.items.map((item, index) => (
              <Card key={index} data={item} />
            ))}
        </>
      )}
    </Container>
  );
}

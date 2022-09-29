import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { getBookMarkThunk } from "../actions/bookmark";

import Loading from "../components/Loading";
import Card from "../components/Card";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 100px 20px;
`;

const Text = styled.h1`
  padding: 10px 0;
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export default function BookMark() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector((state) => state.user);
  const { getBookMarkLoading, bookmarkData } = useSelector(
    (state) => state.bookmark
  );

  useEffect(() => {
    dispatch(getBookMarkThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!loginData) {
      navigate("/");
    }
  }, [dispatch, loginData, navigate]);

  return (
    <Container>
      {getBookMarkLoading && <Loading />}
      {bookmarkData &&
        bookmarkData?.map((item) => {
          if (item.email === loginData?.user.email) {
            return (
              <Card
                key={item.id}
                id={item.id}
                data={item.data}
                isChecked={true}
              />
            );
          }
        })}
    </Container>
  );
}

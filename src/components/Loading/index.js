import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`;
const LoadingText = styled.div`
  color: #333333;
  font-size: 18px;
  font-weight: 600;
  padding: 20px;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingText>잠시만 기다려주세요...</LoadingText>
      <img src="assets/spinner.gif" alt="로딩중" width="10%" />
    </LoadingContainer>
  );
}

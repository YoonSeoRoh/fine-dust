import React from "react";
import styled from "styled-components";
import BookMarkBtn from "../BookMarkBtn";

const CardContainer = styled.div`
  width: 400px;
  height: 200px;
  border-radius: 10px;
  background-color: orange;
  margin: 10px;
  color: #fff;
`;
const LocationBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  h3 {
    display: inline;
    font-size: 18px;
  }
  span {
    margin-left: 4px;
    font-size: 12px;
  }
  div {
    display: inline;
  }
`;
const LevelBlock = styled.div`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: orange;
    font-size: 40px;
    font-weight: 540;
  }
`;
const InfoBlock = styled.div`
  p {
    margin-top: 10px;
    text-align: center;
  }
`;

export default function Card() {
  return (
    <CardContainer>
      <LocationBlock>
        <div>
          <h3>성북구</h3>
          <span>서울</span>
        </div>
        <BookMarkBtn />
      </LocationBlock>
      <LevelBlock>
        <h1>보통</h1>
      </LevelBlock>
      <InfoBlock>
        <p>미세먼지 수치 : 37</p>
        <p>(2022-05-02 09:00 기준)</p>
      </InfoBlock>
    </CardContainer>
  );
}

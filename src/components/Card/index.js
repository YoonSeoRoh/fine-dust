import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { GRADE_DATA } from "./gradeList";

import BookMarkBtn from "../BookMarkBtn";

const CardContainer = styled.div`
  width: 60%;
  height: 200px;
  border-radius: 10px;
  background-color: ${(props) => props.pm10Grade};
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
  width: 140px;
  height: 80px;
  border-radius: 10px;
  background-color: #fff;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: ${(props) => props.pm10Grade};
    font-size: 30px;
    font-weight: 540;
  }
`;
const InfoBlock = styled.div`
  p {
    margin-top: 10px;
    text-align: center;
  }
`;

export default function Card(props) {
  const { dataTime, stationName, sidoName, pm10Value, pm10Grade } = props.data;
  const [name, setName] = useState("알수없음");
  const [color, setColor] = useState("#6d6a73");

  useEffect(() => {
    GRADE_DATA.forEach((item) => {
      if (item.grade === parseInt(pm10Grade)) {
        setName(item.value);
        setColor(item.color);
      }
    });
  }, [pm10Grade]);

  return (
    <CardContainer pm10Grade={color}>
      <LocationBlock>
        <div>
          <h3>{stationName}</h3>
          <span>{sidoName}</span>
        </div>
        {!props.isMine && (
          <BookMarkBtn
            id={props.id}
            data={props.data}
            isChecked={props.isChecked}
          />
        )}
      </LocationBlock>
      <LevelBlock pm10Grade={color}>
        <h1>{name}</h1>
      </LevelBlock>
      <InfoBlock>
        <p>미세먼지 수치 : {pm10Value}</p>
        <p>({dataTime} 기준)</p>
      </InfoBlock>
    </CardContainer>
  );
}

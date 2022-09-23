import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { CITY_DATA, LOC_DATA } from "./menulist";

const MenuContainer = styled.section`
  padding: 10px 0 0 0;
  display: flex;
`;

const Select = styled.select`
  width: 100%;
  height: 54px;
  border: none;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

export default function DropDownMenu() {
  const dispatch = useDispatch();

  const [city, setCity] = useState("서울");
  const [loc, setLoc] = useState("");

  // useEffect(() => {
  //   dispatch()
  // }, [city, loc])

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleLocChange = (e) => {
    setLoc(e.target.value);
  };

  return (
    <MenuContainer>
      <Select onChange={handleCityChange} defaultValue={"서울"}>
        {CITY_DATA.map((option) => (
          <option key={parseInt(option.id)} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
      <Select onChange={handleLocChange}>
        {LOC_DATA.map((option, index) => {
          if (option.value === city) {
            return (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            );
          }
        })}
      </Select>
    </MenuContainer>
  );
}

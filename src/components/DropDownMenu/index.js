import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { CITY_DATA } from "./menuList";

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

export default function DropDownMenu(props) {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
    props.getCity(e.target.value);
  };

  return (
    <MenuContainer>
      <Select onChange={handleCityChange} selected={city}>
        {CITY_DATA.map((option) => (
          <option key={parseInt(option.id)} value={option.value}>
            {option.value}
          </option>
        ))}
      </Select>
    </MenuContainer>
  );
}

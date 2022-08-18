import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faFilledStar } from "@fortawesome/free-solid-svg-icons";

const BtnContainer = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export default function BookMarkBtn() {
  const [checked, setChecked] = useState(false);
  return (
    <BtnContainer onClick={() => setChecked(!checked)}>
      {!checked ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faFilledStar} />
      )}
    </BtnContainer>
  );
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faFilledStar } from "@fortawesome/free-solid-svg-icons";

import { addBookMarkThunk, deleteBookMarkThunk } from "../../actions/bookmark";

const BtnContainer = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export default function BookMarkBtn(props) {
  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.user);
  const [checked, setChecked] = useState(props.isChecked);

  const handleClick = () => {
    if (checked) {
      setChecked(false);
      dispatch(deleteBookMarkThunk(props.id));
    }
    if (!checked) {
      setChecked(true);
      dispatch(
        addBookMarkThunk({ email: loginData?.user.email, data: props.data })
      );
    }
  };

  return (
    <>
      <BtnContainer onClick={handleClick}>
        {!checked ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faFilledStar} />
        )}
      </BtnContainer>
    </>
  );
}

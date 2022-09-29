import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { logout } from "../../reducers/user";

const HeaderContainer = styled.section`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  padding: 0 20px;
  background-color: transparent;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: #3a44b7;
  font-size: 12px;
  font-weight: 600;
  width: 60px;
  height: 30px;
  float: right;
  margin-top: 5px;
`;

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginDone } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    if (!loginDone) {
      navigate("/");
    }
  }, [loginDone, navigate]);

  return (
    <HeaderContainer>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
}

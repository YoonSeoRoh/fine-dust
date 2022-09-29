import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { emailReg, pwdReg } from "../libs/constants";
import useInput from "../hooks/useInput";
import { loginThunk } from "../actions/user";

import Modal from "../components/Modal";

const LoginContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;
const Title = styled.h1`
  padding: 30px;
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;
const Form = styled.form`
  width: 42%;
  margin: 0 auto;
`;
const Input = styled.div`
  label {
    display: block;
    padding: 20px 0;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #e9e9e9;
  }
`;
const Validate = styled.p`
  margin: 5px 0;
  font-size: 12px;
  color: #fb152a;
`;
const LoginButton = styled.button`
  background-color: #3a44b7;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  width: 100%;
  height: 54px;
  margin: 20px 0;
`;
const SignUpButton = styled.button`
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  color: #3a44b7;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loginDone, loginData } = useSelector((state) => state.user);

  const email = useInput("", emailReg);
  const password = useInput("", pwdReg);

  const [modal, setModal] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (loginDone) {
      if (loginData.user) {
        navigate("/myregion");
      } else {
        setModal(true);
        setMsg(loginData);
      }
    }
  }, [loginDone, loginData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginThunk({ email: email.value, password: password.value }));
  };
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Form>
        <Input>
          <label>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email.value}
            onChange={email.onChange}
          />
          <Validate>{!email.valid && "이메일 양식에 맞지 않습니다."}</Validate>
        </Input>
        <Input>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password.value}
            onChange={password.onChange}
          />
          <Validate>
            {!password.valid &&
              "특수문자, 영문자, 숫자 4-12자리 내로 입력해주세요."}
          </Validate>
        </Input>
        <LoginButton
          disabled={!email.valid && !password.valid}
          type="submit"
          onClick={handleSubmit}
        >
          로그인
        </LoginButton>
      </Form>
      <SignUpButton onClick={() => navigate("/signup")}>회원가입</SignUpButton>
      {modal && (
        <ModalContainer>
          <Modal message={msg} closeModal={() => setModal(!modal)} />
        </ModalContainer>
      )}
    </LoginContainer>
  );
}

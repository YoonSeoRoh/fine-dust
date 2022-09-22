import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  width: 40%;
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

export default function Login() {
  const navigate = useNavigate();

  const [idValid, setIdValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const [idMsg, setIdMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
    const idReg = /^[a-zA-Z0-9_-]{4,12}$/;
    if (!idReg.test(e.target.value)) {
      setIdMsg("한글, 영문(대/소), 숫자 4-12자리 내로 입력해주세요.");
    } else {
      setIdMsg("");
      setIdValid(true);
    }
  };
  const handlePwd = (e) => {
    setPwd(e.target.value);
    const pwdReg =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{4,12}$/;
    if (!pwdReg.test(e.target.value)) {
      setPwdMsg("특수문자, 영문(대/소), 숫자 4-12자리 내로 입력해주세요.");
    } else {
      setPwdMsg("");
      setPwdValid(true);
    }
  };
  const handleSubmit = () => {
    navigate("/myregion");
  };
  return (
    <LoginContainer>
      <Title>로그인</Title>
      <Form>
        <Input>
          <label>아이디</label>
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            onChange={handleId}
          />
          <Validate>{idMsg}</Validate>
        </Input>
        <Input>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handlePwd}
          />
          <Validate>{pwdMsg}</Validate>
        </Input>
        <LoginButton
          disabled={!idValid && !pwdValid}
          type="submit"
          onClick={handleSubmit}
        >
          로그인
        </LoginButton>
      </Form>
      <SignUpButton onClick={() => navigate("/signup")}>회원가입</SignUpButton>
    </LoginContainer>
  );
}

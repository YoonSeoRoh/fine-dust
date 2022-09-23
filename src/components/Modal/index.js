import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #3a44b7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  margin: 0 auto;
  padding-top: 26px;
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 16px;
`;

const ModalButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: #3a44b7;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export default function Modal({ message, closeModal }) {
  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <Title>{message}</Title>
      <ButtonWrapper>
        <ModalButton onClick={closeModal}>확인</ModalButton>
      </ButtonWrapper>
    </ModalContainer>
  );
}

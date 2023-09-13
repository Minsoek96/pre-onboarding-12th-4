import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundPage = () => {
  const navigater = useNavigate();
  return (
    <S.Container>
      <S.Message>404 - Page Not Found</S.Message>
      <S.Button onClick={() => navigater(-1)}>{"뒤로가기"}</S.Button>
    </S.Container>
  );
};

export default NotFoundPage;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `,
  Message: styled.h2`
    color: red;
  `,
  Button: styled.button`
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
  `,
};

import React from 'react';
import styled from 'styled-components';
import { BasicInput } from '../Components/BasicInput';

export const SIngup = () => {
  return (
    <Wapper>
      <MobileView>
        <Title>SIGNUP</Title>
        <FormDiv>
          <BasicInput
            placeholder="핸드폰 번호를 입력해주세요"
            type="number"
            fieldName="phoneNumber"
          />
          <BasicInput placeholder="비밀번호를 입력해주세요" type="password" fieldName="password" />
          <BasicInput placeholder="이름을 입력해주세요" type="text" fieldName="name" />

          <Button>로그인</Button>
        </FormDiv>
      </MobileView>
    </Wapper>
  );
};
const Wapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const MobileView = styled.div`
  width: 350px;
  padding: 20px;
  margin: 0 auto;
`;
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  background-color: #f6bd60;
  border: none;
  padding: 14px 20px;
  border-radius: 6px;
`;

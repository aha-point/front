import React from 'react';
import styled from 'styled-components';
import { BasicInput } from '../Components/BasicInput';
import BasicInputWithLabel from '../Components/BasicInputWithLabel';
import InputButton from '../Components/InputButton';

export const SIngup = () => {
  return (
    <Wapper>
      <MobileView>
        <Title>SIGNUP</Title>
        <FormDiv>
          <Label htmlFor="phoneNumber">아이디(핸드폰 번호)</Label>
          <InputButton
            placeholder="핸드폰 번호('-' 구분없이 입력)"
            type="number"
            label="아이디(핸드폰 번호)"
            fieldName="phoneNumber"
            buttonText="인증번호 전송"
          />
          <InputButton
            placeholder="인증번화 확인"
            type="number"
            label="아이디(핸드폰 번호)"
            fieldName="phoneNumber"
            buttonText="확인"
          />
          <BasicInputWithLabel
            placeholder="비밀번호"
            type="password"
            fieldName="password"
            label="비밀번호"
          />
          <BasicInputWithLabel
            placeholder="비밀번호 확인"
            type="password"
            fieldName="password"
            label="비밀번호 확인"
          />
          <BasicInputWithLabel
            placeholder="이름을 입력해주세요"
            type="text"
            fieldName="name"
            label="이름"
          />

          <Button>가입하기</Button>
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
const Label = styled.label`
  margin-bottom: 6px;
`;
const Button = styled.button`
  background-color: #f6bd60;
  border: none;
  padding: 14px 20px;
  border-radius: 6px;
`;

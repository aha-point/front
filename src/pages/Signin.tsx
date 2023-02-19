import React from 'react';
import styled from 'styled-components';
import { BasicInput } from '../Components/BasicInput';

export const Signin = () => {
  return (
    <Wapper>
      <SplitedView50></SplitedView50>
      <SplitedView50>
        <MobileView>
          <Title>LOGIN</Title>
          <FormDiv>
            <BasicInput placeholder="Phone Number" type="number" fieldName="phoneNumber" />
            <BasicInput placeholder="Password" type="password" fieldName="password" />
            <Button>로그인</Button>
          </FormDiv>
        </MobileView>
      </SplitedView50>
    </Wapper>
  );
};

const Wapper = styled.div`
  display: flex;
  height: 100vh;
`;
const SplitedView50 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

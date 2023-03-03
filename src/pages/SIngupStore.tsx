import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInputWithLabel from '../Components/BasicInputWithLabel';
import FileInput from '../Components/FIleInput';

import InputButton from '../Components/InputButton';

export const SIngupStore = () => {
  const [file, setFile] = useState<File | null>();
  const onChangeFileUploadInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    setFile(files && files[0]);
    console.log(files[0]);
    // const file = files[0];
    // uploadImage(file) //
    //   .then((url) => {
    //     console.log(url, 'url');
    //   })
    //   .finally(() => console.log('loaded'));
  };
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
            placeholder="상호명 입력"
            type="text"
            fieldName="name"
            label="상호명"
          />
          <BasicInputWithLabel
            placeholder="가게 전화번호 입력"
            type="number"
            fieldName="name"
            label="가게 번호"
          />
          <BasicInputWithLabel
            placeholder="가게 주소 입력"
            type="address"
            fieldName="name"
            label="가게 주소"
          />
          <BasicInputWithLabel placeholder="업종 입력" type="text" fieldName="name" label="업종" />
          <BasicInputWithLabel
            placeholder="적립률 입력"
            type="number"
            fieldName="name"
            label="적립률"
          />
          {/* <label htmlFor="fileChoose">가게 이미지</label>
          <input type="file" name="fileChoose" accept="image/*" /> */}
          <FileInput onChangeFileUploadInput={onChangeFileUploadInput}> </FileInput>
          <Button onClick={() => console.log('click')}>로그인</Button>
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
  cursor: pointer;
  &:hover {
    background-color: #f7ede2;
  }
`;

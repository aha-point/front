import React, { useState } from 'react';
import styled from 'styled-components';
import BasicInputWithLabel from '../Components/BasicInputWithLabel';
import FileInput from '../Components/FIleInput';

import InputButton from '../Components/InputButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

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

        <Grid container columns={12} spacing={1}>
          <Grid item xs={12}>
            <InputButton
              placeholder="핸드폰 번호('-' 구분없이 입력)"
              type="number"
              label="아이디(핸드폰 번호)"
              fieldName="phoneNumber"
              buttonText="인증번호 전송"
            />
          </Grid>
          <Grid item xs={12}>
            <InputButton
              placeholder="인증번화 확인"
              type="number"
              label="아이디(핸드폰 번호)"
              fieldName="phoneNumber"
              buttonText="확인"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="비밀번호"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="비밀번호 확인"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="storeName" label="상호명" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="storeNumber" label="가게 전화번호" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="address" label="가게 주소" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField required id="businessType" label="업종" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="standard-search" label="적립률" type="number" variant="standard" />
          </Grid>
        </Grid>
        {/* <label htmlFor="fileChoose">가게 이미지</label>
          <input type="file" name="fileChoose" accept="image/*" /> */}
        <Grid>
          <FileInput onChangeFileUploadInput={onChangeFileUploadInput}> </FileInput>
        </Grid>
        <Grid>
          <Button onClick={() => console.log('click')}>로그인</Button>
        </Grid>
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

import { styled } from '@mui/system';
import InputButton from '../../Components/InputButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import ImageUpload from '../../Components/ImageUpload';
import BasicButton from '../../Components/Button/BasicButton';
import { Outlet } from 'react-router-dom';

const SignupStore = () => {
  // const [file, setFile] = useState<File | null>();
  const imageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    // setFile(files && files[0]);
    // console.log(files[0]);
    // const file = files[0];
    // uploadImage(file) //
    //   .then((url) => {
    //     console.log(url, 'url');
    //   })
    //   .finally(() => console.log('loaded'));
  };
  return (
    <>
      <Grid container height={'100vh'} alignItems="center">
        <Grid item width={'350px'} margin={'0 auto'} padding={'20px 0'}>
          <Title
            sx={{
              color: '#eff4f5',
              textShadow:
                '1px 1px #c56f76, 1px -1px #c56f76, -1px 1px #c56f76, -1px -1px #c56f76, 2px 2px 3px #ecacaa',
            }}
          >
            SIGNUP STORE
          </Title>
          <Grid container columns={12} spacing={1}>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <InputButton
                placeholder="핸드폰 번호('-' 구분없이 입력)"
                type="tel"
                label="아이디(핸드폰 번호)"
                fieldName="phoneNumber"
                buttonText="인증번호 전송"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <InputButton
                placeholder="인증번화 확인"
                type="number"
                label="인증번호"
                fieldName="phoneNumber"
                buttonText="확인"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                id="password"
                label="비밀번호"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                id="password"
                label="비밀번호 확인"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField fullWidth required id="storeName" label="상호명" variant="standard" />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                required
                type="tel"
                id="storeNumber"
                label="가게 전화번호"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                required
                type="text"
                id="address"
                label="가게 주소"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                required
                type="text"
                id="businessType"
                label="업종"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                required
                id="standard-search"
                label="적립률"
                type="number"
                variant="standard"
              />
            </Grid>
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              {/* <FileInput imageFileUpload={imageFileUpload}> </FileInput> */}
              <ImageUpload imageFileUpload={imageFileUpload}></ImageUpload>
            </Grid>
          </Grid>
          <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
            <BasicButton onClick={() => console.log('click')} fullWidth>
              회원가입
            </BasicButton>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

const Title = styled('h1')({
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '50px',
});

export default SignupStore;

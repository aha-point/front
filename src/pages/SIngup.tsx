import { styled } from '@mui/system';
import InputButton from '../Components/InputButton';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const SIngup = () => {
  return (
    <Grid container>
      <Grid item width={'350px'} margin={'0 auto'} padding={'20px 0'}>
        <Title>SIGNUP</Title>
        <Grid container columns={12} spacing={1}>
          <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
            <InputButton
              placeholder="핸드폰 번호('-' 구분없이 입력)"
              type="number"
              label="아이디(핸드폰 번호)"
              fieldName="phoneNumber"
              buttonText="인증번호 전송"
            />
          </Grid>
          <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
            <InputButton
              placeholder="인증번화 확인"
              type="number"
              label="아이디(핸드폰 번호)"
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
            <TextField fullWidth required id="name" label="이름" variant="standard" />
          </Grid>
          <Button variant="contained" onClick={() => console.log('click')}>
            가입하기
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Title = styled('h1')({
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '50px',
});

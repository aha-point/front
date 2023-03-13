import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <Grid container direction={'row'} height={'100vh'}>
      <Grid item width={'50%'} margin={'0 auto'}></Grid>
      <Grid item width={'50%'} alignItems={'center'}>
        <Grid container height={'100%'} direction="column" justifyContent="center" width={'350px'}>
          <Title>LOGIN</Title>
          <Grid container columns={12} spacing={1} direction="row" justifyContent="center">
            <Grid container p={1} direction="row" justifyContent="center" alignItems="center">
              <TextField
                fullWidth
                placeholder="핸드폰 번호('-' 구분없이 입력)"
                type="tel"
                label="아이디(핸드폰 번호)"
                variant="standard"
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
              <Button variant={'contained'}>로그인</Button>
            </Grid>
          </Grid>
          <Grid container justifyContent={'space-between'}>
            <Grid item>
              <div>회원이 아니신가요?</div>
            </Grid>
            <Grid item>
              <Link to="/sinupstore">가게 회원가입</Link>
              <Link to="/sinupstore">일반 회원가입</Link>
            </Grid>
          </Grid>
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

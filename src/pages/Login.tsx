import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Link as RouterLink, redirect } from 'react-router-dom';
import Link from '@mui/material/Link';
import BasicButton from '../Components/Button/BasicButton';

const Login = () => {
  return (
    <Grid container direction={'row'} height={'100vh'}>
      <Grid item width={'50%'} margin={'0 auto'}></Grid>
      <Grid item width={'50%'} alignItems={'center'}>
        <Grid container height={'100%'} direction="column" justifyContent="center" width={'350px'}>
          <Title
            sx={{
              color: '#eff4f5',
              textShadow:
                '1px 1px #c56f76, 1px -1px #c56f76, -1px 1px #c56f76, -1px -1px #c56f76, 2px 2px 3px #ecacaa',
            }}
          >
            LOGIN
          </Title>
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
              <BasicButton
                onClick={() => {
                  console.log('click login');
                }}
                fullWidth
              >
                로그인
              </BasicButton>
            </Grid>
          </Grid>
          <Grid container justifyContent={'space-between'} alignItems="center">
            <Grid item>
              <div>회원이 아니신가요?</div>
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/store/signup">
                가게 회원가입
              </Link>
              <br />
              <Link component={RouterLink} to="/user/signup">
                일반 회원가입
              </Link>
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

const getAccessTokenFfromLocalStorage = (key: string) => {
  // TODO : 토큰 확인 로직
  if (key === 'ACCESS_TOKEN') {
    return true;
  }
  return false;
};

export const rootLoader = () => {
  /** TOEKN */
  const accessToken = getAccessTokenFfromLocalStorage('ACCESS_TOKEN');
  if (!accessToken) {
    return redirect('/');
  }

  return null;
};
export default Login;

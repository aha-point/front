import { Box } from '@mui/system';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

import BasicButton from '../../Components/Button/BasicButton';

interface IUsePointResultProps {}

const UsePointResult = (props: IUsePointResultProps) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const useStatus = state?.useStatus || 'inactive';
  const currentUserPoint = state?.currentUserPoint || 'inactive';

  const onClickMainButton = () => {
    navigate('/');
  };

  if (useStatus === 'inactive' || currentUserPoint === 'inactive') {
    return <Navigate to={'/notfound'} replace />; // 다른 경로로 이동
  }

  return (
    <Box
      maxWidth={'1200px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={4}
      px={10}
    >
      <Box width={'100%'} display="flex" flexDirection={'column'} textAlign={'center'} p={1} pt={4}>
        <Typography variant="subtitle1" color="initial">
          {`포인트가 ${useStatus === 'getPoint' ? '적립' : '사용'}되었습니다.`}
        </Typography>
        <Typography
          variant="h5"
          color="initial"
        >{`OOO님의 현재 포인트는 ${currentUserPoint}원 입니다.`}</Typography>
      </Box>
      <Box width={'100%'} display="flex" justifyContent={'center'} p={1} pt={4}>
        <BasicButton onClick={onClickMainButton}>메인으로</BasicButton>
      </Box>
    </Box>
  );
};

export default UsePointResult;

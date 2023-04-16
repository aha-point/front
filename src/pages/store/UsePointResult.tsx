import { Box } from '@mui/system';
import { Navigate, useLocation } from 'react-router-dom';
interface IUsePointResultProps {}

const UsePointResult = (props: IUsePointResultProps) => {
  const { state } = useLocation();
  const useStatus = state?.useStatus || 'inactive';
  const currentUserPoint = state?.currentUserPoint || 'inactive';

  if (useStatus === 'inactive' || currentUserPoint === 'inactive') {
    return <Navigate to={'/notfound'} replace />; // 다른 경로로 이동
  }

  return (
    <Box>
      <Box>{`${useStatus === 'getPoint' ? '적립' : '사용'}되었습니다.`}</Box>
      <Box>{`OOO님의 현재 포인트는 ${currentUserPoint}원 입니다.`}</Box>
    </Box>
  );
};

export default UsePointResult;

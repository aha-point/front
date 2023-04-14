import { styled } from '@mui/material';

import { Box } from '@mui/system';

interface InfoTextProps {
  nowUsingPoint: number;
  normalGetPoint: number;
  useThenGetPoint: number;
  pointUseStatus: string;
  paiedPrice: number;
}
const PricePoint = styled('span')({
  fontSize: '20px',
  color: 'blueviolet',
});
const InfoText = ({
  nowUsingPoint,
  normalGetPoint,
  useThenGetPoint,
  pointUseStatus,
  paiedPrice,
}: InfoTextProps) => {
  // const nowUsePoint = userPoint > price ? price : userPoint;
  // const getPoint = Math.round(price * 0.1);
  // const useThenGetPoint = Math.round((price - nowUsePoint) * 0.1);

  if (paiedPrice > 0) {
    if (pointUseStatus === 'getPoint') {
      return (
        <Box>
          <PricePoint>{paiedPrice}</PricePoint>원을 결제하여{' '}
          <PricePoint>{normalGetPoint}</PricePoint> 포인트를 적립합니다.
        </Box>
      );
    } else {
      return (
        <Box>
          <PricePoint>{paiedPrice}</PricePoint>원을 결제하여{' '}
          <PricePoint>{nowUsingPoint}</PricePoint>
          포인트를 사용 후 <PricePoint>{useThenGetPoint >= 0 ? useThenGetPoint : 0}</PricePoint>
          포인트를 적립합니다.
        </Box>
      );
    }
  } else {
    return <></>;
  }
};

export default InfoText;

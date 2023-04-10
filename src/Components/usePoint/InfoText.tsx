import { styled } from '@mui/material';
import { FC } from 'react';
import { Box } from '@mui/system';

interface InfoTextProps {
  pointUseStatus: string;
  price: number;
  userPoint: number;
}
const PricePoint = styled('span')({
  fontSize: '20px',
  color: 'blueviolet',
});
const InfoText: FC<InfoTextProps> = ({ pointUseStatus, userPoint, price }: InfoTextProps) => {
  const usedPoint = userPoint > price ? price : userPoint;
  const earnedPoint = Math.round((price - usedPoint) * 0.1);

  if (price > 0) {
    if (pointUseStatus === 'getPoint') {
      return (
        <Box>
          <PricePoint>{price}</PricePoint>원을 결제하여 <PricePoint>{earnedPoint}</PricePoint>{' '}
          포인트를 적립합니다.
        </Box>
      );
    } else {
      return (
        <Box>
          <PricePoint>{price}</PricePoint>원을 결제하여 <PricePoint>{usedPoint}</PricePoint>
          포인트를 사용 후 <PricePoint>{earnedPoint >= 0 ? earnedPoint : 0}</PricePoint>포인트를
          적립합니다.
        </Box>
      );
    }
  } else {
    return <></>;
  }
};

export default InfoText;

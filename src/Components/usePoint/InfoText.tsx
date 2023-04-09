import { Typography } from '@mui/material';
import { FC } from 'react';
import { Box } from '@mui/system';

interface InfoTextProps {
  pointUseStatus: string;
  price: number;
  userPoint: number;
}

const InfoText: FC<InfoTextProps> = ({ pointUseStatus, userPoint, price }: InfoTextProps) => {
  return pointUseStatus === 'getPoint' ? (
    <Box>
      <span>{price}</span>원을 결제하여
      <span>{Math.round(price * 0.1)}</span>포인트를 적립합니다.
    </Box>
  ) : (
    <Box>
      <span>{price}</span>원을 결제하여 <span>{userPoint > price ? price : userPoint}</span>포인트를
      사용 후
      <span>
        {Math.round((price - userPoint) * 0.1) >= 0 ? Math.round((price - userPoint) * 0.1) : 0}
      </span>
      포인트를 적립합니다.
    </Box>
  );
};

export default InfoText;

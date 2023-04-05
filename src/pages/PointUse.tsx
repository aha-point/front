import { FC } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface PointUseProps {}

const PointUse: FC<PointUseProps> = () => {
  return (
    <Box
      width={'1200px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={2}
    >
      <Box width={'100%'} pt={4}>
        <Typography variant="subtitle1" color="initial">
          가나다님의 현재 적립금
        </Typography>
        <Typography variant="h4" color="initial">
          1000원
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default PointUse;

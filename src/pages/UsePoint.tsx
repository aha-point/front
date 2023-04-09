import { FC, useEffect, useMemo, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import InfoText from '../Components/usePoint/InfoText';

interface PointUseProps {}

const PointUse: FC<PointUseProps> = () => {
  const [price, setPrice] = useState<number>(0);
  const [userPoint, setUserPoint] = useState(1000);
  const [pointUseStatus, setPointUseStatus] = useState('getPoint');

  return (
    <Box
      maxWidth={'1200px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={2}
    >
      <Box width={'100%'} p={1} pt={4}>
        <Typography variant="subtitle1" color="initial">
          가나다님의 현재 적립금
        </Typography>
        <Typography variant="h4" color="initial">
          {`${userPoint}원`}
        </Typography>
      </Box>
      <Box p={1}>
        <TextField
          onChange={(e: any) => {
            setPrice(e.target.value);
          }}
          fullWidth
          required
          id="outlined-required"
          type={'number'}
          label="결제한 금액을 입력해주세요."
        />
      </Box>
      <Box p={1}>
        <RadioButtonGroup
          radioButtonGroupLabel={'포인트 사용 여부'}
          radioButtonList={[
            { value: 'getPoint', label: '적립' },
            { value: 'usePoint', label: '사용' },
          ]}
          defaultRadioButtonValue={pointUseStatus}
          changePointUseState={setPointUseStatus}
        />
      </Box>
      <Box p={1} display="flex" justifyContent={'space-between'}>
        <Box>
          {price !== 0 ? (
            <InfoText pointUseStatus={pointUseStatus} userPoint={userPoint} price={price} />
          ) : (
            ''
          )}
        </Box>
        <Button disabled={!price ? true : false} variant="contained">
          다음
        </Button>
      </Box>
      <Box p={1} display="flex" justifyContent={'right'}></Box>
    </Box>
  );
};

export default PointUse;

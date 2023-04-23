import { ChangeEvent, useMemo, useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import RadioButtonGroup from '../../Components/RadioButtonGroup';
import InfoText from '../../Components/usePoint/InfoText';
import { useNavigate } from 'react-router-dom';
import MenuAppBar from '../../Components/AppBar/MenuAppBar';
import BasicButton from '../../Components/Button/BasicButton';

interface PointUseProps {}

const PointUse = () => {
  const navigate = useNavigate();

  const [paiedPrice, setPaiedPrice] = useState<number>(0);
  const [beforeUserPoint, setBeforeUserPoint] = useState(1000);
  const [pointUseStatus, setPointUseStatus] = useState<string>('getPoint');

  const nowUsingPoint = useMemo(() => {
    return beforeUserPoint > paiedPrice ? paiedPrice : beforeUserPoint;
  }, [paiedPrice, beforeUserPoint]);
  const normalGetPoint = useMemo(() => {
    return Math.round(paiedPrice * 0.1);
  }, [paiedPrice]);
  const useThenGetPoint = useMemo(() => {
    return Math.round((paiedPrice - nowUsingPoint) * 0.1);
  }, [paiedPrice, nowUsingPoint]);

  const onClickNextButton = () => {
    if (pointUseStatus === 'usePoint') {
      navigate('/usepointresult', { state: { useStatus: 'usePoint', currentUserPoint: 1000 } });
    } else {
      navigate('/usepointresult', { state: { useStatus: 'getPoint', currentUserPoint: 1000 } });
    }
  };
  return (
    <MenuAppBar>
      <Box
        maxWidth={'1200px'}
        display="flex"
        flexDirection={'column'}
        margin={'0 auto'}
        overflow={'scroll'}
        pt={4}
        px={10}
      >
        <Box width={'100%'} p={1} pt={4}>
          <Typography variant="subtitle1" color="initial">
            가나다님의 현재 적립금
          </Typography>
          <Typography variant="h4" color="initial">
            {`${beforeUserPoint}원`}
          </Typography>
        </Box>
        <Box p={1}>
          <TextField
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPaiedPrice(Number(e.target.value));
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
            <InfoText
              nowUsingPoint={nowUsingPoint}
              normalGetPoint={normalGetPoint}
              useThenGetPoint={useThenGetPoint}
              pointUseStatus={pointUseStatus}
              paiedPrice={paiedPrice}
            />
          </Box>
          <BasicButton onClick={onClickNextButton} disabled={!paiedPrice ? true : false}>
            다음
          </BasicButton>
        </Box>
        <Box p={1} display="flex" justifyContent={'right'}></Box>
      </Box>
    </MenuAppBar>
  );
};

export default PointUse;

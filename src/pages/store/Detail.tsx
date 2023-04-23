import { FC, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Box, styled } from '@mui/system';
import PlaceIcon from '@mui/icons-material/Place';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import MenuAppBar from '../../Components/MenuAppBar';
import AccessibleIcon from '@mui/icons-material/Accessible';
import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  const [storeName, setStoreName] = useState('');
  useEffect(() => {
    setStoreName('냠냠');
  }, []);
  return (
    <MenuAppBar>
      <Grid container height={'100vh'} alignItems="center">
        <Grid item width={'350px'} margin={'0 auto'} padding={'20px 0'}>
          <Title>{storeName}</Title>
          <Box
            component="img"
            sx={{
              // height: 233,
              width: '100%',
              // maxHeight: { xs: 233, md: 167 },
              // maxWidth: { xs: 350, md: 250 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
          <Box display={'flex'} width="100%" alignItems={'center'} py={1}>
            <PlaceIcon />
            <Typography variant="body1" sx={{ pl: 1 }}>
              글자가 길면 자동으로 다음 줄로 넘어갑니다.글자가 길면 자동으로 다음 줄로 넘어갑니다.
            </Typography>
          </Box>
          <Box display={'flex'} width="100%" alignItems={'center'} py={1}>
            <CallIcon />
            <Typography variant="body1" sx={{ pl: 1 }}>
              010-1234-1234
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, mb: 0 }} variant="h6" component="div">
              메뉴
            </Typography>
            <div>
              <List dense={true}>
                {['쵸코하임', '홈런볼', '그래놀라'].map((e, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={e} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Box>
          <Box>
            <Typography sx={{ mt: 4, mb: 0 }} variant="h6" component="div">
              상세 정보
            </Typography>
            <div>
              <List
                dense={true}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                {[
                  { title: '포장가능', icon: <CardGiftcardIcon /> },
                  { title: 'WiFi', icon: <WifiIcon /> },
                  { title: '동물출입', icon: <PetsIcon /> },
                  { title: '주차', icon: <LocalParkingIcon /> },
                  { title: '휠체어사용', icon: <AccessibleIcon /> },
                  { title: '놀이방', icon: <SportsEsportsIcon /> },
                ].map((e, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      paddingLeft: '4px',
                      paddingRight: '4px',
                      width: '20%',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'center',
                    }}
                  >
                    <ListItemAvatar>{e.icon}</ListItemAvatar>
                    <ListItemText primary={e.title} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Box>
        </Grid>
      </Grid>
    </MenuAppBar>
  );
};

const Title = styled('h1')({
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '50px',
});

export default Detail;

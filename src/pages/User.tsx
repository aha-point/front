import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { ReactElement, cloneElement, FC } from 'react';
import FolderIcon from '@mui/icons-material/Folder';

interface IUserProps {}
const generate = (element: ReactElement) => {
  return new Array(3).fill(0).map((value, index) =>
    cloneElement(element, {
      key: index + 1,
    }),
  );
};
const User: FC<IUserProps> = (props) => {
  return (
    <Box
      width={'350px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={2}
    >
      <Box width={'100%'} pb={4}>
        <Box>
          <Typography variant="body1" color="initial">
            가나다 님의 현재 적립금
          </Typography>
          <Typography variant="h4" color="initial">
            1000원
          </Typography>
        </Box>
      </Box>
      <Box width={'100%'}>
        <Box>
          <Typography variant="subtitle1" color="initial">
            적립내역
          </Typography>
          <List>
            {generate(
              <ListItem sx={{ px: 0 }} secondaryAction={<Typography>+1000원 적립</Typography>}>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: '#aa96ac' }}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Single-line item" secondary={'2023년 3월 20일'} />
              </ListItem>,
            )}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default User;

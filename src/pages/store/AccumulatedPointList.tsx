import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import { ReactElement, cloneElement } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import MenuAppBar from '../../Components/AppBar/MenuAppBar';

interface AccumulatedPointListProps {}
const generate = (element: ReactElement) => {
  return new Array(3).fill(0).map((value, index) =>
    cloneElement(element, {
      key: index + 1,
    }),
  );
};
const AccumulatedPointList = ({}: AccumulatedPointListProps) => {
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
        <Box>
          <Typography variant="subtitle1" color="initial">
            적립내역
          </Typography>
          <List>
            {generate(
              <ListItem
                sx={{ px: 0 }}
                secondaryAction={
                  <Box
                    display={'flex'}
                    flexDirection={'row'}
                    textAlign="center"
                    alignItems={'center'}
                  >
                    <Typography display={'block'} pr={1}>
                      +1000원 적립
                    </Typography>
                    <button>취소하기</button>
                  </Box>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: '#aa96ac' }}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="사용자 이름 + 전화번호" secondary={'2023년 3월 20일'} />
              </ListItem>,
            )}
          </List>
        </Box>
      </Box>
    </MenuAppBar>
  );
};

export default AccumulatedPointList;

import { useState, FC } from 'react';
import SearchBar from '../Components/SearchBar';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/system';

interface IStoreUserProps {}
const data = [
  'Paris',
  'London',
  'New York',
  'Tokyo',
  'Berlin',
  'Buenos Aires',
  'Cairo',
  'Canberra',
  'Rio de Janeiro',
  'Dublin',
  '가나',
];
const filterData = (query: string, data: string[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter((e: string) => e.toLowerCase().includes(query));
  }
};
const StoreUser: FC<IStoreUserProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const dataFiltered = filterData(searchQuery, data);
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     alignSelf: 'center',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     padding: 20,
    //   }}
    // >
    <Box
      width={'350px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={2}
    >
      <Box>가게 찾아보기</Box>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ padding: 3 }}>
        {dataFiltered.map((e: string, index: number) => (
          <ListItem sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#aa96ac' }}>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={e} />
          </ListItem>
        ))}
      </div>
      {/* </div> */}
    </Box>
  );
};

export default StoreUser;

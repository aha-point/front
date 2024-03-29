import { useState, FC } from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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

const SearchStore: FC<IStoreUserProps> = (props) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      // TODO : 여기에서 검색 실행
      console.log(searchQuery);
    }
  };
  const dataFiltered = filterData(searchQuery, data);
  const clickListItem = (e: any) => {
    // TODO : detail 이동시 store 정보 받아오기
    navigate(`/user/storedetail/${e}`);
  };
  return (
    <Box
      width={'350px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={2}
    >
      <Box>
        <Typography pb={2} variant="body1" color="initial">
          가게 찾기
        </Typography>
      </Box>
      <Box>
        <TextField
          id="search"
          label="가게 이름을 검색하세요"
          type="search"
          fullWidth
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <IconButton onClick={() => console.log(searchQuery)}>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>

      <Box p={1}>
        {dataFiltered.map((e: string, index: number) => (
          <ListItem sx={{ px: 0, cursor: 'pointer' }} onClick={() => clickListItem(e)}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#bfc47e' }}>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={e} />
          </ListItem>
        ))}
      </Box>
    </Box>
  );
};

export default SearchStore;

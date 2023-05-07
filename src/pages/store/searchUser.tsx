import { useState } from 'react';
import { Box } from '@mui/system';
import { TextField, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: '토끼', phoneNumber: '01012341234' },
  { name: '강쥐', phoneNumber: '01011111111' },
  { name: '몽몽', phoneNumber: '01022222222' },
  { name: '뭉뭉', phoneNumber: '01033333333' },
  { name: '냥냥', phoneNumber: '01044444444' },
];
const filterData = (query: string, data: { name: string; phoneNumber: string }[]) => {
  if (!query) {
    return data;
  } else {
    return data.filter((e) => e.phoneNumber.toLowerCase().includes(query));
  }
};

const SearchUser = () => {
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
    // TODO : 포인트 사용으로 이동시 사용사 정보 가져가기
    navigate(`/store/usepoint`);
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
          번호 찾기
        </Typography>
      </Box>
      <Box>
        <TextField
          id="search"
          label="고객님의 번호를 검색하세요"
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
        {dataFiltered.map((e: { name: string; phoneNumber: string }) => (
          <ListItem sx={{ px: 0, cursor: 'pointer' }} onClick={() => clickListItem(e)}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: '#bfc47e' }}>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={e.name} secondary={e.phoneNumber} />
          </ListItem>
        ))}
      </Box>
    </Box>
  );
};

export default SearchUser;

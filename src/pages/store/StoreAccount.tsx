import { Box } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import BasicButton from '../../Components/Button/BasicButton';

const StoreAccount = () => {
  const [menuName, setMenuName] = useState('');
  const [menuPrice, setMenuPrice] = useState(0);
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMenuName(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMenuPrice(Number(event.target.value));
  };

  // const handleAddClick = () => {
  //   const newId = menuItems.length + 1;
  //   const newItem = { id: newId, name: menuName, price: menuPrice };
  //   setMenuItems([...menuItems, newItem]);
  //   setMenuName('');
  //   setMenuPrice('');
  // };

  return (
    <Box
      maxWidth={'1200px'}
      display="flex"
      flexDirection={'column'}
      margin={'0 auto'}
      overflow={'scroll'}
      pt={4}
      px={10}
    >
      <div>메뉴 추가</div>
      <Box display={'flex'} flexDirection={'row'}>
        <Box sx={{ p: 2 }} width="50%">
          <TextField
            fullWidth
            value={menuName}
            onChange={handleNameChange}
            id="menuName"
            label="메뉴명"
            type="text"
            variant="standard"
          />
        </Box>
        <Box sx={{ p: 2 }} width="50%">
          <TextField
            fullWidth
            value={menuPrice}
            onChange={handlePriceChange}
            id="menuPrice"
            label="메뉴가격"
            type="number"
            variant="standard"
          />
        </Box>
        <BasicButton onClick={() => console.log('test')}>추가</BasicButton>
      </Box>
    </Box>
  );
};

export default StoreAccount;

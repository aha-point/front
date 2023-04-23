import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent } from 'react';
import { Grid } from '@mui/material';
interface SearchBarProps {
  searchQuery: any;
  setSearchQuery: any;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const onInputHandler = (e: FormEvent<HTMLDivElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchQuery(target.value);
  };
  return (
    <form>
      <Grid container spacing={0}>
        <Grid item xs={10}>
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              onInputHandler(e);
            }}
            label="Enter keyword"
            variant="outlined"
            placeholder="Search..."
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;

import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { FormEvent } from 'react';
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
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default SearchBar;

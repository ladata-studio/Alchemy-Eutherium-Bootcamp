import React from 'react';
import { Search, Input } from './seachStyles';

const SearchComponent = () => {
  return (
    <Search>
      <Input
        type="text"
        placeholder="Search by address"
      />
    </Search>
  );
};

export default SearchComponent;

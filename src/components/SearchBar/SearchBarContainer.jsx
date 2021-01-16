import React from 'react';
import SearchBarPresenter from './SearchBarPresenter';

const SearchBarContainer = () => {
    const onChange = () => {
        console.log('i');
    }
    const onSubmit = () => {
        console.log('a');
    }
    return (
      <SearchBarPresenter
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  };

  export default SearchBarContainer;
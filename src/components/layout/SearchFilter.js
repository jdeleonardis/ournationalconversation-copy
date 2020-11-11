import React, { Component } from 'react';
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import FilterBar from './FilterBar'
import ButtonBox from './ButtonBox'

class SearchFilter extends Component {
  render() {
    return (
 
    <div>
      <SearchBar/>
      <SortBy/>
        <FilterBar/>
        <ButtonBox/>
    </div>
    );
  }
}

export default SearchFilter;


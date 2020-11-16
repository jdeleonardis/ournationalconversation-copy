import React, { Component } from 'react';
import SearchBox from './SearchBox'
import SortBy from './SortBy'
import FilterBar from './FilterBar'
import RailButtons from '../Misc/RailButtons';

class SearchFilter extends Component {
  render() {
    return (
    <div>
      <SearchBox/>
      <SortBy/>
      <FilterBar/>
      <RailButtons/>
    </div>
    );
  }
}

export default SearchFilter;


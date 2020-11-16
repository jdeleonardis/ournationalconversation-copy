import React, { Component } from 'react';
import SearchBar from './SearchBar'
import SortBy from './SortBy'
import FilterBar from './FilterBar'
import RailButtons from '../Misc/RailButtons';

class SearchFilter extends Component {
  render() {
    return (
    <div>
      <SortBy/>
      <FilterBar/>
      <RailButtons/>
    </div>
    );
  }
}

export default SearchFilter;


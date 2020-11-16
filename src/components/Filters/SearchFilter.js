import React, { Component } from 'react';
import SearchBox from './SearchBox'
import SortBy from './SortBy'
import FilterBar from './FilterBar'
import RailButtons from '../Misc/RailButtons';

class SearchFilter extends Component {
  render() {
    return (
    <div>
        <Row>
          <Col md={3}>
          <SearchBox/>
          <FilterBar/>
          </Col>
          <Col md={6}>
            <SortBy/>
          </Col>
          <Col md={3}>
            <RailButtons/>
          </Col>
        </Row>
    </div>
    );
  }
}
export default SearchFilter;


import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import SortBy from './SortBy';
// import SortByLocal from './SortByLocal';
// import SortByStore from './SortByStore';
import FilterBar from './FilterBar';
import SourceFilterBar from './SourceFilterBar';
import RailButtons from '../Misc/RailButtons';
import SearchBox from './SearchBox';
// import AddLocation from "./AddLocation";

class SearchFilter extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <SearchBox />
            <Col>
              <FilterBar />
              <SourceFilterBar />
            </Col>
          </Col>
          <Col md={6}>
            <SortBy />
            {/* <SortByLocal /> */}
            {/* <AddLocation/> */}
            {/* <SortByStore /> */}
          </Col>
          <Col md={3}>
            <RailButtons />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchFilter;

import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import SortBy from './SortBy';
import SortByLocal from './SortByLocal';
import SortByStore from './SortByStore';
import FilterBar from './FilterBar';
import SourceFilterBar from './SourceFilterBar';
import RailButtons from '../Misc/RailButtons';
import SearchBox from './SearchBox';
// import AddLocation from "./AddLocation";

class SearchFilter extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <SearchBox />
            <Col>
              <br />
              <FilterBar />
              <SourceFilterBar />
            </Col>
          </Col>
          <Col md={6}>
            <SortBy />
            <hr />
            <SortByLocal />
            {/* <AddLocation/> */}
            <hr />
            <SortByStore />
          </Col>
          <Col md={3}>
            <RailButtons />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchFilter;

import React, { Component } from 'react';
import { Navbar, Nav, Row, Col, Container } from 'react-bootstrap';
import SortBy from './SortBy';
import SortByLocal from './SortByLocal';
import SortByStore from './SortByStore';
import FilterBar from './FilterBar';
import FilterBarSource from './FilterBarSource';
import RailButtons from '../Misc/RailButtons';
import SearchBox from './SearchBox';
import FilterBarStore from './FilterBarStore';
import '../../styles/demo.css';

class DemoSearchFilter extends Component {
  render() {
    return (
      <Container>
        <Row className='demo'>
          <Col md={3}>
            <SearchBox />
            <Col>
              <br />
              {/* FilterBar for different pages */}
              <FilterBar />
              <FilterBarSource />
              <br />
              <FilterBarStore />
              <br />
            </Col>
          </Col>
          <Col md={6}>
            {/* SortBy for different pages */}
            <SortBy />
            <br />
            <br />
            <br />
            <SortByLocal />
            <br />
            <br />
            <br />
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

export default DemoSearchFilter;

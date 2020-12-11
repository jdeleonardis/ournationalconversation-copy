import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import SortBy from './SortBy';
import SortByLocal from './SortByLocal';
import SortByStore from './SortByStore';
import FilterBar from './FilterBar';
import FilterBarSource from './FilterBarSource';
import RailButtons from '../Misc/RailButtons';
import SearchBox from './SearchBox';
import FilterBarStore from './FilterBarStore';
import LocationOverlay from './Overlay/LocationOverlay';
import ShoppingCartOverlay from './Overlay/ShoppingCartOverlay';

import CustomButton from './Expended/CustomButton';
import CustomDropdown from './Expended/CustomDropdown';
import PrefixingComponents from './Expended/PrefixingComponents';

import '../../styles/demo.css';


class DemoSearchFilter extends Component {
  render() {
    return (
      <>
        
        <br/>
        <br/>
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
              <SortByStore />
              <br />
              <br />
              <br />
              <SortByLocal />

              <br />
              <br />
              <br />
              <SortBy />
              <br />
              <br />
              <br />
              {/* Expanded Components & Overlay */}
              <ShoppingCartOverlay />
              <LocationOverlay />
              <br />

              <br />
              <CustomButton />
              <CustomDropdown />
              <br />
              <PrefixingComponents />
            </Col>
            {/* Right Rail Buttons */}
            <Col md={3}>
              <RailButtons />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default DemoSearchFilter;

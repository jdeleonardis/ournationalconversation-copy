import React, { Component } from 'react';
import {
  FormControl,
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import '../styles/searchBar.css';

class SearchBar extends Component {
  render() {
    return (
      // <Container>
      <Navbar className='search-bar' variant=''>
        <Col className='mb-2' xs lg='9'>
          <Nav className='group-68 mr-auto '>
            <button className='news-filters-btn' href='#'>
              NEWS FILTERS{' '}
              <i class='fas fa-chevron-down news-filters-btn' />
            </button>
            <Nav.Link href='#'>
              <span className='hot-topics'>HOT TOPICS: </span>
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              COVID-19 Alert
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              Biden VP Pick
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              School Reopenings
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg='3' md='auto'>
          {/* <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                  ></FormControl>
                  <i class='fas fa-search'></i>
                </Form> */}
          <input className='search' type='text' placeholder='SEARCH' />
          <i className='fa fa-search search-i' />
        </Col>
      </Navbar>
      // </Container>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import '../styles/searchBar.css';

const SearchBar = (props) => {
  return (
    <>
      <Navbar className='search-bar ' variant='' >
        <Col className='mb-2' xs lg='3'>
          <Navbar.Brand href='#'>
            <button className='news-filters-btn' href='#'>
              NEWS FILTERS
              <i class='fas fa-chevron-down news-filters-btn' />
            </button>
          </Navbar.Brand>
        </Col>
        <Col className='mb-2' xs lg='6'>
          <Nav className='group-68 mr-auto '>
            <Nav.Link className='hot-topics search-bar-text' href='#'>
              HOT TOPICS :
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              COVID-19 Alert{props.hotTopics}
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              Biden VP Pick{props.hotTopics}
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              School Reopenings{props.hotTopics}
            </Nav.Link>
          </Nav>
        </Col>
        <Col className='mb-2' xs lg='3'>
          <input className='search' type='text' placeholder='SEARCH' />
          <i className='fa fa-search search-i' />
        </Col>
      </Navbar>
      <hr />
    </>
  );
};

export default SearchBar;

import React from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Col,
  Button,
  ButtonGroup,
  DropdownButton,
  Accordion,
  Card
} from 'react-bootstrap';
import NewFiltersExpanded from './Expended/NewFiltersExpanded';
import CustomButton from './Expended/CustomButton';
import '../../styles/searchBar.css';

const SearchBar = (props) => {
  return (
    <>
      <Navbar
        className='search-bar'
        variant='
      '
      >
        <Col xs={3} md={3}>
          <Nav
          // className='group-68'
          >
            <CustomButton />
            <DropdownButton
              className='news-filters-dp '
              as={ButtonGroup}
              title='NEWS FILTERS'
              menuAlign={{ lg: 'left' }}
              variant='purple'
            >
              <NewFiltersExpanded />
            </DropdownButton>
            
          </Nav>
        </Col>
        <Col xs={6} md={7}>
          <Nav className='hot-topics'>
            <Nav.Link className='search-bar-text' href='#'>
              {/* <span className=' search-bar-text hot-topics'> */}
              HOT TOPICS:
              {/* </span> */}
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
        <Col xs={2} md={2} className='search-box'>
          <i className='fa fa-search search-i' />
          <input className='search' type='text' placeholder='SEARCH' />
        </Col>
      </Navbar>
      <hr />
    </>
  );
};

export default SearchBar;

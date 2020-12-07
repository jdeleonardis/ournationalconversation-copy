import React from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Col,
  Button,
  ButtonGroup,
  DropdownButton
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
        <Col className='mb-2'>
          <Nav className='group-68'>
            <CustomButton />
            <DropdownButton
              className='news-filters-dp '
              as={ButtonGroup}
              title='NEWS FILTERS'
              menuAlign={{ lg: 'left' }}
              variant='purple'
            >
              <NewFiltersExpanded style={{ padding: '100', margin: '100', border:'none' }} />
            </DropdownButton>

            <Nav.Link href='#'>
              <span className='hot-topics'>HOT TOPICS: </span>
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
        <Col lg='3' md='auto'>
          <input className='search' type='text' placeholder='SEARCH' />
          <i className='fa fa-search search-i' />
        </Col>
      </Navbar>
      <hr />
    </>
  );
};

export default SearchBar;

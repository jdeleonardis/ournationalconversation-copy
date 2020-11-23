import React from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Col,
  ButtonGroup,
  DropdownButton
} from 'react-bootstrap';
import NewFiltersExpanded from './Expended/NewFiltersExpanded';
import '../../styles/searchBar.css';

const SearchBar = (props) => {
  return (
    <>
      <Navbar className='search-bar' variant=''>
        <Col className='mb-2' xs lg='9'>
          <Nav className='group-68 mr-auto '>
            <div class='dropdown'>
              {/* <button
                className='news-filters-btn '
                type='button'
                id='dropdownMenu2'
                // data-toggle='dropdown'
                // aria-haspopup='true'
                aria-expanded='false'
                data-toggle='collapse'
                data-target='#collapseExample'
                aria-controls='collapseExample'
                href='#'
              >
                NEWS FILTERS <i class='fas fa-chevron-down news-filters-btn' />
              </button> */}
              {/* <div class='collapse' id='collapseExample'> */}
              <DropdownButton
                // id='dropdown-item-button'
                title='NEWS FILTERS'
                className='news-filters-btn '
                type='button'
                id='dropdownMenu2'
                // data-toggle='dropdown'
                // aria-haspopup='true'
                // aria-expanded='false'
                // data-toggle='collapse'
                // data-target='#collapseExample'
                // aria-controls='collapseExample'
                // href='#'
                variant='primary'
              >
                <NewFiltersExpanded />
                {/* <Dropdown.Toggle
                  id='dropdown-custom-1'
                  variant='purple'
                  href='/'
                >
                  NEWS FILTERS
                </Dropdown.Toggle> */}
                {/* <Dropdown.Menu
                  // className='super-colors'
                  variant='purple'
                > */}

                {/* </Dropdown.Menu> */}
              </DropdownButton>
              <Dropdown as={ButtonGroup}></Dropdown>
              {/* </div> */}
            </div>
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

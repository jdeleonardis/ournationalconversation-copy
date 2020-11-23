import React from 'react';
import {
  Navbar,
  Nav,
  Dropdown,
  Col,
  ButtonGroup,DropdownButton
} from 'react-bootstrap';
import NewFiltersExpanded from './NewFiltersExpanded'
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
              <DropdownButton id='dropdown-item-button' title='NEWS FILTERS'>
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

                {/* <Nav defaultActiveKey='/home' className='flex-column'>
                    <Nav.Link href='/home'>Active</Nav.Link>
                    <Nav.Link eventKey='link-1'>Link</Nav.Link>
                    <Nav.Link eventKey='link-2'>Link</Nav.Link>
                    <Nav.Link eventKey='disabled' disabled>
                      Disabled
                    </Nav.Link>
                  </Nav> */}
                {/* */}
                {/* <div className='mb-2'>
                    {['up', 'down', 'left', 'right'].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant='secondary'
                        title={` Drop ${direction} `}
                      >
                        <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
                        <Dropdown.Item eventKey='2'>
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey='3'>
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey='4'>
                          Separated link
                        </Dropdown.Item>
                      </DropdownButton>
                    ))}
                  </div> */}
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

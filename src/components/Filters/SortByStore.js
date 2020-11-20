import React from 'react';
import { Dropdown, Row, Col, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import '../../styles/sort-by.css';
import '../../styles/searchBar.css';

const SortByStore = (props) => {
  return (
    <div>
      <Row>
        <h2 className='page-title'>
          <strong>ONC STORE{props.pageTitle}</strong>
        </h2>
        <i class='fas fa-shopping-cart'></i>
        <div
          className='textdiv'
          style={{ width: '105%', marginBottom: '-25px' }}
        >
          <div className='texttitle'>
            All items{props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
          </div>
          <div className='divider'></div>&nbsp;
          <Dropdown>
            <Dropdown.Toggle variant='purple' id='dropdown-basic'>
              Sort by: DEFAULT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item variant='purple' href='#/action-1'>
                DEFAULT
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>NEWEST ADDTIONS</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>
                RATING: HIGH TO LOW
              </Dropdown.Item>
              <Dropdown.Item href='#/action-4'>
                RATING: LOW TO HIGH
              </Dropdown.Item>
              <Dropdown.Item href='#/action-5'>
                PRICE: HIGH TO LOW
              </Dropdown.Item>
              <Dropdown.Item href='#/action-6'>
                PRICE: LOW TO HIGH
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
    </div>
  );
};

export default SortByStore;

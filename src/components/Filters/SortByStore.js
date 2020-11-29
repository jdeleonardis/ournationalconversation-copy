import React from 'react';
import { Dropdown, Row, Col, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import ShoppingCartOverlay from './Overlay/ShoppingCartOverlay';
import '../../styles/sort-by.css';

const SortByStore = (props) => {
  return (
    <div>
      <Row>
        <h2 className='page-title'>
          <strong>ONC STORE{props.pageTitle}</strong>
        </h2>
        {/* <i class='fas fa-shopping-cart'></i> */}
        <ShoppingCartOverlay />
        <div
          className='textdiv'
          style={{ width: '105%', marginBottom: '-25px' }}
        >
          <div className='texttitle'>
            All items{props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
          </div>
          <div className='divider'></div>&nbsp;
          <Dropdown
            menuAlign='right'
            title='Dropdown right'
            id='dropdown-menu-align-right'
          >
            <Dropdown.Toggle
              variant=''
              id='dropdown-basic'
              menuAlign='right'
              title='Dropdown right'
              id='dropdown-menu-align-right'
              align='right'
            >
              Sort by: DEFAULT
            </Dropdown.Toggle>

            <Dropdown.Menu
              menuAlign='right'
              title='Dropdown right'
              id='dropdown-menu-align-right'
              align='right'
              variant=''
              menuAlign='xl: "left"|"right"'
              alignRight
              menuAlign='right'
              title='Dropdown right'
              className='dropdown-menu-align-right'
              align='right'
              className='mx-8 my-8 w-auto'
            >
              <Dropdown.Item variant='' href='#/action-1'>
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

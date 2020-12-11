import React from 'react';
import {
  Button,
  Dropdown,
  Row,
  Accordion,
  Col,
  NavDropdown,
  Navbar,
  Nav
} from 'react-bootstrap';
import ShoppingCartOverlay from './Overlay/ShoppingCartOverlay';
import CustomButton from './Expended/CustomButton';
import '../../styles/sort-by.css';

const SortByStore = (props) => {
  return (
    <div>
      <Row>
        <h2 className='page-title'>
          <strong>ONC STORE{props.pageTitle}</strong>
        </h2>
        <ShoppingCartOverlay />
        <div
          className='textdiv'
          style={{ width: '97.5%', marginBottom: '-25px' }}
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
              id='dropdown-menu-align-right'
              variant='purple'
              alignRight
              className='mx-8 my-8 w-auto'
            >
              <Dropdown.Item variant='purple' href='#/action-1' active>
                DEFAULT
              </Dropdown.Item>
              <Dropdown.Item variant='purple' href='#/action-2'>
                NEWEST ADDTIONS
              </Dropdown.Item>
              <Dropdown.Item variant='purple' href='#/action-3'>
                RATING: HIGH TO LOW
              </Dropdown.Item>
              <Dropdown.Item variant='purple' href='#/action-4'>
                RATING: LOW TO HIGH
              </Dropdown.Item>
              <Dropdown.Item variant='purple' href='#/action-5'>
                PRICE: HIGH TO LOW
              </Dropdown.Item>
              <Dropdown.Item variant='purple' href='#/action-6'>
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

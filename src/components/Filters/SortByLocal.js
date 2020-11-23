import React from 'react';
import { Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/sort-by.css';
import '../../styles/searchBar.css';

const SortByLocal = (props) => {
  return (
    <Row>
      <div className='textdiv' style={{ width: '105%', marginBottom: '-25px' }}>
        <div className='texttitle'>
          <strong className='page-title'>LOCAL NEWS{props.pageTitle}</strong>
          {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
        </div>
        <div className='divider'></div>&nbsp;
        <Dropdown>
          <Dropdown.Toggle variant='purple' id='dropdown-basic'>
            SAN JOSE, CA
          </Dropdown.Toggle>
          <Dropdown.Menu
            variant='purple'
            menuAlign='xl: "left"|"right"'
            alignRight
          >
            <Dropdown.Item
              variant='purple'
              bg='grey'
              href='#/action-1'
              eventKey='1'
              active
            >
              SAN JOSE, CA <span className='remove'>Remove</span>
            </Dropdown.Item>
            <Dropdown.Item href='#/action-2' eventKey='2'>
              LOS ANGELES,CA
            </Dropdown.Item>
            <Dropdown.Item href='#/action-3' eventKey='3'>
              NEW YORK,NY
            </Dropdown.Item>
            <Dropdown.Item href='#/action-4' eventKey='4'>
              PORTLAND,OR
            </Dropdown.Item>
            <Dropdown.Item href='#/action-5' eventKey='5'>
              SAN FRANCISCO,CA
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='6'>ADD NEW LOCATION +</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Row>
  );
};

export default SortByLocal;

import React from 'react';
import { Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../styles/sort-by.css';


const SortByLocal = (props) => {
  return (
    <Row>
      <div className='textdiv' style={{ width: '105%', marginBottom: '-25px' }}>
        <div className='texttitle'>
          <strong className='page-title'>LOCAL NEWS{props.pageTitle}</strong>
          {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
        </div>
        <div className='divider'></div>&nbsp;
        <Dropdown >
          <Dropdown.Toggle variant='purple' id='dropdown-basic'>
            SAN JOSE, CA
          </Dropdown.Toggle>
          <Dropdown.Menu
            variant='purple'
            menuAlign='right'
            alignRight
            menuAlign='right'
            className='dropdown-menu-align-right location-dropdown'
            align='right'
            className='mx-8 my-8 w-auto'
          >
            <Dropdown.Item
              variant='purple'
              bg='grey'
              href='#/action-1'
              eventKey='1'
              active
            >
    
              SAN JOSE, CA <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item href='#/action-2' eventKey='2'>
              LOS ANGELES, CA <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item href='#/action-3' eventKey='3'>
              NEW YORK, NY <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item href='#/action-4' eventKey='4'>
              PORTLAND, OR <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item href='#/action-5' eventKey='5'>
              SAN FRANCISCO, CA <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey='6' className='justify-content-md-center'>
               ADD NEW LOCATION +{' '}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Row>
  );
};

export default SortByLocal;

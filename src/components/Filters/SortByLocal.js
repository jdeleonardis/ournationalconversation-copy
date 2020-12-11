import React from 'react';
import { Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import CustomButton from './Expended/CustomButton';
import LocationOverlay from './Overlay/LocationOverlay';
import '../../styles/sort-by.css';

const SortByLocal = (props) => {
  return (
    <Row>
      <div className='textdiv' style={{ width: '105%', marginBottom: '-25px' }}>
        <div className='texttitle '>
          <span className='page-title local-news'>
            LOCAL NEWS{props.pageTitle}
          </span>{' '}
          <span id='local-news-line'>{props.horizLineTextLeft}</span>{' '}
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className='divider'></div>&nbsp;
        <Dropdown>
          <Dropdown.Toggle variant='' id='dropdown-basic'>
            SAN JOSE, CA
          </Dropdown.Toggle>
          <Dropdown.Menu
            variant='purple'
            menuAlign='right'
            alignRight
            className='dropdown-menu-align-right location-dropdown mx-8 my-6 w-auto'
            align='right'
          >
            <Dropdown.Item
              variant='purple'
              bg='grey'
              href='#/action-1'
              eventKey='1'
              size='xxl'
              active
            >
              SAN JOSE, CA{' '}
              <span className='remove-active' variant='purple'>
                Remove
              </span>
            </Dropdown.Item>
            <Dropdown.Item variant='' size='xxl' href='#/action-2' eventKey='2'>
              LOS ANGELES, CA{' '}
              <span className='remove' variant='purple'>
                Remove
              </span>
            </Dropdown.Item>
            <Dropdown.Item
              variant='purple'
              size='xxl'
              href='#/action-3'
              eventKey='3'
            >
              NEW YORK, NY <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item
              variant='purple'
              size='xxl'
              href='#/action-4'
              eventKey='4'
            >
              PORTLAND, OR <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Item
              variant='purple'
              size='xxl'
              href='#/action-5'
              eventKey='5'
            >
              SAN FRANCISCO, CA <span className='remove'> Remove</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              variant=''
              size='xxl'
              href='#/action-5'
              eventKey='6'
              className='justify-content-md-center'
            >
              <LocationOverlay />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Row>
  );
};

export default SortByLocal;

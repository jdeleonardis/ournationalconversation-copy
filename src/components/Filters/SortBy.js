import React from 'react';
import { Row, Dropdown } from 'react-bootstrap';
import CustomButton from './Expended/CustomButton';
import '../../styles/sort-by.css';
import '../../styles/searchBar.css';

const SortBy = (props) => {
  return (
    <div className='main'>
      <Row>
        <h2 className='page-title'>
          <strong>{props.pageTitle}</strong>
        </h2>
        <div
          className='textdiv'
          style={{ width: '94.8%', marginBottom: '-25px' }}
        >
          <div className='texttitle'>
            {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
          </div>
          <div className='divider'></div>&nbsp;
          <Dropdown>
            <Dropdown.Toggle variant='' id='dropdown-basic'>
              Sort by: DEFAULT
            </Dropdown.Toggle>

            <Dropdown.Menu
              variant='purple'
              menuAlign='xl: "left"|"right"'
              alignRight
              menuAlign='right'
              title='Dropdown right'
              className='dropdown-menu-align-right'
              align='right'
              className='mx-8 my-8 w-auto'
            >
              <Dropdown.Item variant='purple' href='#/action-1' active>
                DEFAULT
              </Dropdown.Item>
              <Dropdown.Item href='#/action-2'>NEWEST</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>OLDEST</Dropdown.Item>
              <Dropdown.Item href='#/action-4'>MOST COMMENTS</Dropdown.Item>
              <Dropdown.Item href='#/action-5'>MOST LIKES</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>
    </div>
  );
};

export default SortBy;

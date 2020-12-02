import React, { Component } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
export class CustomDropdown extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            .btn-purple {
              background-color: #2c1c59 ;
              color: white;
            }

            .btn-xxl {
              padding: 0.5rem 2rem;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 0.0025em;

            }
            .dp-purple {
              background-color: #2c1c59 ;
              color: white;
            }
            `}
        </style>

        <Button variant='' size=''></Button>

        <Dropdown>
          <Dropdown.Toggle variant='purple' id='dropdown-basic'>
            Sort by
          </Dropdown.Toggle>
          <Dropdown.Menu
            variant='purple'
            alignRight
            className='dropdown-menu-align-right mx-8 my-8 w-auto'
          >
            <Dropdown.Item variant='purple' href='#/action-1' active>
              DEFAULT
            </Dropdown.Item>
            <Dropdown.Item href='#/action-2'>NEWEST</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>OLDEST</Dropdown.Item>
            <Dropdown.Item href='#/action-4'>MOST COMMENTS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
}

export default CustomDropdown;

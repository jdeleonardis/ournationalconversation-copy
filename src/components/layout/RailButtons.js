import React, { Component } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
class RailButtons extends Component {
  render() {
    return (
      // <Container fluid="xl" >
      <div vertical className='gb-5'>
        <div
          class=' mb-2'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <button className='gb-text btn-block ' type='button' size='lg'>
            ONC STORE
          </button>
        </div>
        <div
          class='btn-toolbar  mb-2'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <button className='gb-text btn-block' size='lg'>
            ONC NEWSLETTERS
          </button>
        </div>
        <div
          class='btn-toolbar  mb-2'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <button className='gb-text btn-block' size='lg'>
            WEBISODES
          </button>
        </div>
        <div
          class='btn-toolbar  mb-2'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <button className='gb-text btn-block' size='lg'>
            PODCASTS
          </button>
        </div>
        <div
          class='btn-toolbar  mb-2'
          role='toolbar'
          aria-label='Toolbar with button groups'
        >
          <button className='gb-text btn-block' size='lg'>
            RESOURCES
          </button>
        </div>
        {/* <button className='gb-text'
               size='lg'>
                ONC STORE
              </button>
           
              <button className='gb-text' size='lg'>
                ONC NEWSLETTERS
              </button>
           
              <button className='gb-text' size='lg'>
                WEBISODES
              </button>
            
              <button className='gb-text' size='lg'>
                PODCASTS
              </button>
          
              <button className='gb-text' size='lg'>
                RESOURCES
              </button> */}
      </div>
      // </Container>
    );
  }
}
export default RailButtons;

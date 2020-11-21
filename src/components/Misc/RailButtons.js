import React, { Component } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';
// import '../../styles/railButtons.css';

class RailButtons extends Component {
  render() {
    return (
      // <div vertical className='gb-5'>
      <div vertical>
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
      </div>
    );
  }
}
export default RailButtons;

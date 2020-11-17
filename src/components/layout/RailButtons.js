import React, { Component } from 'react';
import '../styles/railButtons.css';

class RailButtons extends Component {
  render() {
    return (
      <div vertical className='gb-5 '>
        <div class='mb-2 '>
          <button className='gb-text btn-block mb-2' type='button' size='lg'>
            ONC STORE
          </button>
        </div>
        <div class=' mb-2'>
          <button className='gb-text btn-block mb-2' size='lg'>
            ONC NEWSLETTERS
          </button>
        </div>
        <div class='mb-2'>
          <button className='gb-text btn-block mb-2' size='lg'>
            WEBISODES
          </button>
        </div>
        <div class='mb-2'>
          <button className='gb-text btn-block mb-2' size='lg'>
            PODCASTS
          </button>
        </div>
        <div class='mb-2'>
          <button className='gb-text btn-block mb-2' size='lg'>
            RESOURCES
          </button>
        </div>
      </div>
    );
  }
}
export default RailButtons;

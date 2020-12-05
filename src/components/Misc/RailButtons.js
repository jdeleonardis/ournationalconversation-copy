import React, { Component } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import GlobalButton from '../Misc/GlobalButton';
import '../../styles/railButtons.css';

class RailButtons extends Component {
  render() {
    return (      
      <div vertical style={{textAlign:'center'}}>
          <GlobalButton
            className='global-btn'
            margin ='5px -20px'
            width='100%'
            label='ONC STORE'
            link='/store'
          />        
          <GlobalButton
            className='global-btn'
            margin ='5px -20px'
            width='100%'
            label='ONC NEWSLETTERS'
            link='/newsletter'
          />    
          <GlobalButton
            className='global-btn'
            margin ='5px -20px'
            width='100%'
            label='WEBISODES'
            link='/webisodes'
          />   
          <GlobalButton
            className='global-btn'
            margin ='5px -20px'
            width='100%'
            label='PODCASTS'
            link='/podcasts'
          />   
          <GlobalButton
            className='global-btn'
            margin ='5px -20px'
            width='100%'
            label='RESOURCES'
            link='/resources'
          />   
      </div>
    );
  }
}
export default RailButtons;

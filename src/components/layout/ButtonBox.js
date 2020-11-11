import React, { Component } from 'react';
import {
  ButtonGroup,
  Button, Container,
} from 'react-bootstrap';
class GroupButtons extends Component {
  render() {
    return (
    <Container fluid="xl" className = "gb-5">
      <ButtonGroup vertical >
         
              <Button variant='outline-primary' size='lg'>
                ONC STORE
              </Button>
           
              <Button variant='outline-primary' size='lg'>
                ONC NEWSLETTERS
              </Button>
           
              <Button variant='outline-primary' size='lg'>
                WEBISODES
              </Button>
            
              <Button variant='outline-primary' size='lg'>
                PODCASTS
              </Button>
          
              <Button variant='outline-primary' size='lg'>
                RESOURCES
              </Button>
          
      </ButtonGroup>
    </Container>
  )
 }
}
export default GroupButtons;
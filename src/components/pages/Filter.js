import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Col,
  Navbar,
  Nav,
  Form
} from 'react-bootstrap';
class SearchFilter extends Component {
  render() {
    return (
      <Container>
        <Col sm={9}>
          <div>
            <hr />
            <hr />
            <hr />
            <h3>OPINIONS</h3>
            <p>
              Filter By:{' '}
              <Button variant='outline-primary' defaultChecked>
                All
              </Button>{' '}
              <Button variant='outline-primary'>Topic</Button>{' '}
              <Button variant='outline-primary'>Source</Button>{' '}
              <Button variant='outline-primary'>Slant</Button> <hr />
              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <h5>Search: </h5>
                </InputGroup.Prepend>

                <input
                  type='text'
                  class='form-control'
                  placeholder='ENTER KEYWORDS'
                  aria-label='Input group example'
                  aria-describedby='btnGroupAddon'
                ></input>
              </InputGroup>
            </p>
          </div>
        </Col>
        <Col sm={3}>
          <div>
            <Button variant='outline-primary' size='lg'>
              ONC NEWSLETTERS
            </Button>{' '}
            <hr />
            <Button variant='outline-primary' size='lg'>
              ONC WEBISODES
            </Button>{' '}
            <hr />
            <Button variant='outline-primary' size='lg'>
              ONC PODCASTS
            </Button>{' '}
            <hr />
            <Button variant='outline-primary' size='lg'>
              ONC STORE
            </Button>
          </div>
        </Col>
      </Container>
    );
  }
}

export default Filter;

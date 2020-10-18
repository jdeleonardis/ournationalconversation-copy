import React, { Component } from 'react';
import {
  Button,
  DropdownButton,
  ButtonGroup,
  InputGroup,
  Container,
  Col,
  Row
} from 'react-bootstrap';
import '../styles/filter.css';
class Filter extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs lg='9'>
            <h3>Healthcare</h3>
            <hr />
            <p>
              Show me:{' '}
              <Button variant='primary' defaultChecked>
                All
              </Button>{' '}
              <Button variant='outline-primary'>News</Button>{' '}
              <Button variant='outline-primary'>Opinions</Button>{' '}
              <Button variant='outline-primary'>Solutions</Button>
            </p>
            <p>
              Filter By:{' '}
              <Button variant='primary' defaultChecked>
                All
              </Button>{' '}
              <Button variant='outline-primary'>Slant</Button>{' '}
              <Button variant='outline-primary'>Source</Button>{' '}
              <Button variant='outline-primary'>Topic</Button>
            </p>
            <p>
              {/* <DropdownButton
                id='dropdown-basic-button'
                title='All'
                variant='outline-primary'
              ></DropdownButton> */}
              <Button variant='outline-primary' defaultChecked>
                All
              </Button>{' '}
              <Button variant='outline-primary'>Liberal</Button>{' '}
              <Button variant='outline-primary'>Moderate</Button>{' '}
              <Button variant='outline-primary'>Conservative</Button>{' '}
            </p>
            <p>
              <Button variant='outline-primary'>Governance</Button>{' '}
              <Button variant='outline-primary'>Economy</Button>{' '}
              <Button variant='outline-primary'>Freigh Policy & Defence</Button>{' '}
              <Button variant='outline-primary'>Healthcare</Button>{' '}
              <Button variant='outline-primary'>Justice & Public Safety</Button>{' '}
              <Button variant='outline-primary'>Infrastructure</Button>{' '}
              <Button variant='outline-primary'>
                Cllimate,Science, & Tech
              </Button>{' '}
              <InputGroup className='mb-3'></InputGroup>
            </p>
          </Col>
          <Col xs lg='3'>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC NEWSLETTERS
              </Button>
            </div>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC WEBISODES
              </Button>
            </div>
            <div className='mb-2'>
              <Button variant='primary' size='lg'>
                ONC PODCASTS
              </Button>
              {/* <Button variant='primary' size='lg'>
                ONC STORE
              </Button> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Filter;

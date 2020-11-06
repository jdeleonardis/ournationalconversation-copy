import React, { Component } from 'react';
import {
  Button,
  DropdownButton,
  ButtonGroup,
  InputGroup,
  Container,
  Col,
  Row,
  Form,
} from 'react-bootstrap';
import '../styles/filter.css';
class FilterBar extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h2>Filter by:</h2>
          <p className='filter'>
            <i class='fas fa-chevron-up'></i>
            TOPIC CLEAR
          </p>
          {['radio'].map((type) => (
            <div key={`custom-${type}`} className='mb-3'>
              <Form.Check
                custom
                type='radio'
                label='US'
                name='formHorizontalRadios'
                id='formHorizontalRadios1'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='World'
                name='formHorizontalRadios'
                id='formHorizontalRadios2'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Politics'
                name='formHorizontalRadios'
                id='formHorizontalRadios3'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Business'
                name='formHorizontalRadios'
                id='formHorizontalRadios4'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Tech'
                name='formHorizontalRadios'
                id='formHorizontalRadios5'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Health'
                name='formHorizontalRadios'
                id='formHorizontalRadios6'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Science & Environment'
                name='formHorizontalRadios'
                id='formHorizontalRadios7'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Media'
                name='formHorizontalRadios'
                id='formHorizontalRadios8'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Polls'
                name='formHorizontalRadios'
                id='formHorizontalRadios9'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Faith / Spirituality'
                name='formHorizontalRadios'
                id='formHorizontalRadios10'
                // className={`custom-${type}`}
              />
              <Form.Check
                custom
                type='radio'
                label='Fact Check'
                name='formHorizontalRadios'
                id='formHorizontalRadios11'
                // className={`custom-${type}`}
              />
            </div>
          ))}
        </Form>

        {/* <Row className='justify-content-md-center'>
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
               <DropdownButton
                id='dropdown-basic-button'
                title='All'
                variant='outline-primary'
              ></DropdownButton> 
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
   
            </div>
          </Col>
        </Row> 
      */}
      </Container>
    );
  }
}

export default FilterBar;

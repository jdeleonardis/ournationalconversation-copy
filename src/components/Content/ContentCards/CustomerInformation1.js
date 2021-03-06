import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Form,
  Card,
  Accordion
} from 'react-bootstrap';
import ShippingMethod1 from './ShippingMethod1';

import '../../../styles/CustomerInformation.css';

class CustomerInformation1 extends Component {
  render() {
    return (
      <div
        className='customer-info customer-info-menu '
        eventKey='#customer-information'
      >
        <Form id='customer-information'>
          <Form.Group>
            <Form.Label className='checkout-subtitle mb-3 '>EMAIL</Form.Label>
            <Form.Control
              className='checkout-placeholder mb-2'
              type='email'
              placeholder='EMAIL ADDRESS'
            />
          </Form.Group>

          <Form.Group id='formGridCheckbox'>
            <Form.Check type='checkbox' className='subscribe' id=''>
              <Form.Check.Input className='subscribe-radio' type='checkbox' />
              <Form.Check.Label>
                <span className=''>Subscribe to our newsletter</span>
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>
          <Form.Group className='' controlId='formGridAddress1'>
            <Form.Label className='checkout-subtitle mb-3 '>
              SHIPPING ADDRESS
            </Form.Label>
            <Form.Row>
              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='FIRST NAME'
                />
              </Col>
              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='LAST NAME'
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='ADDRESS'
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='APT/SUITE'
                />
              </Col>
              <Col>
                <Form.Control className='checkout-placeholder mb-2' placeholder='CITY' />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='COUNTRY'
                  as='select'
                  defaultValue='Choose...'
                >
                  <option>COUNTRY</option>
                  <option>...</option>
                </Form.Control>
              </Col>

              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='STATE'
                  as='select'
                  defaultValue='Choose...'
                >
                  <option>STATE</option>
                  <option>...</option>
                </Form.Control>
              </Col>

              <Col>
                <Form.Control
                  className='checkout-placeholder mb-2'
                  placeholder='ZIP CODE'
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Accordion.Toggle className='checkout-steps' eventKey='1'>
            <Button
              className='cont-shipping-method'
              variant='purple'
              href='#shipping-method'
            >
              CONTINUE TO SHIPPING METHOD
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <ShippingMethod1 />
          </Accordion.Collapse>
        </Form>
        {/* <InputGroup className=' '>
          <Button
            className='cont-shipping-method'
            variant='purple'
            href='#shipping-method'
          >
            CONTINUE TO SHIPPING METHOD
          </Button>
        </InputGroup> */}
      </div>
    );
  }
}

export default CustomerInformation1;

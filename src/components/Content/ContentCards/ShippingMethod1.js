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
import Payment1 from './Payment1';

import '../../../styles/ShippingMethod.css';

class ShippingMethod1 extends Component {
  
  render() {
    return (
      <div
        className='shipping-method shipping-method-form '
        eventKey='#shipping-method'
      >
        <Form
          className='shipping-method-form shipping-method-menu'
          id='shipping-method'
        >
          <Form.Check className='shipping-method-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>
                Standard US Shipping
              </span>{' '}
              <span className='shipping-method-price'>$5.99</span>
            </Form.Check.Label>
          </Form.Check>
          <Form.Check className='shipping-method-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>Express US Shipping</span>{' '}
              <span className='shipping-method-price'>$11.99</span>
            </Form.Check.Label>
          </Form.Check>
        </Form>

        {/* <Button className='cont-pmt' variant='purple'>
          CONTINUE TO PAYMENT
        </Button> */}
        <Card>
          <Accordion.Toggle
            className='checkout-steps'
            as={Card.body}
            eventKey='2'
          >
            <Button className='cont-pmt' variant='purple'>
              CONTINUE TO PAYMENT
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Payment1 />
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default ShippingMethod1;

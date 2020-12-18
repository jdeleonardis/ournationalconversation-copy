import { CreditCard } from '@material-ui/icons';
import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Image,
  Form,
  Card,
  Accordion
} from 'react-bootstrap';
import creditCard from '../../../img/creditCard.png';
import payPal from '../../../img/paypal.png';
import amazonPay from '../../../img/amazonPay.png';
import OrderConfirmation1 from './OrderConfirmation1';


import '../../../styles/payment.css';

class Payment1 extends Component {
  render() {
    return (
      <div className='payment' eventKey='#payment'>
        <Form className='shipping-method-form'>
          <h5 className='payment-method mb-3 '>PAYMENT METHOD</h5>
          <Form.Check className='payment-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>Credit Card</span>
              <span className='credit-card-i'>
                <Image className='credit-card-img' src={creditCard} fluid />
              </span>
            </Form.Check.Label>
          </Form.Check>
          <InputGroup className='mb-2 ' variant=''>
            <FormControl
              className='name-placeholder credit-card-info'
              placeholder='NAME ON CARD'
              aria-label='NAME ON CARD'
              aria-describedby='basic-addon2'
            />
          </InputGroup>
          <InputGroup className='mb-2 ' variant=''>
            <FormControl
              className='payment-placeholder credit-card-info'
              placeholder='CARD NUMBER'
              aria-label='CARD NUMBER'
              aria-describedby='basic-addon2'
              icon='fa-lock'
            />
            <i id='basic-addon1' class='fas fa-lock'></i>
          </InputGroup>
          <InputGroup className='mb-2'>
            <Form.Row>
              <Col xs={6} md={7}>
                <Form.Control
                  className='payment-placeholder credit-card-info'
                  placeholder='EXPRIATION DATE(MM/YY)'
                />
              </Col>
              <Col xs={6} md={5}>
                <Form.Control
                  className='payment-placeholder credit-card-info'
                  placeholder='SECURITY CODE'
                />
              </Col>
            </Form.Row>
          </InputGroup>

          <Form.Check className='payment-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>
                <Image className='paypal-img' src={payPal} fluid />
              </span>
            </Form.Check.Label>
          </Form.Check>
          <Form.Check className='payment-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>
                <Image className='amazon-pay-img' src={amazonPay} fluid />
              </span>
            </Form.Check.Label>
          </Form.Check>
          <h5 className='billing-address'>BILLING ADDRESS</h5>
          <Form.Check className='payment-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>
                Same as shipping address
              </span>
            </Form.Check.Label>
          </Form.Check>
          <Form.Check className='payment-box' type='radio' id=''>
            <Form.Check.Input
              className='shipping-method-radio'
              type='radio'
              isValid
            />
            <Form.Check.Label>
              <span className='shipping-method-title'>
                Use a different address
              </span>
            </Form.Check.Label>
          </Form.Check>
          {/* <InputGroup className='mb-2' variant=''>
            <Button className='pay-now' variant='purple'>
              PAY NOW
            </Button>
          </InputGroup> */}
        </Form>
        <Card>
          <Accordion.Toggle
            className='checkout-steps'
            as={Card.body}
            eventKey='3'
          >
            <Button className='pay-now' variant='purple'>
              PAY NOW
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='3'>
            <OrderConfirmation1 />
          </Accordion.Collapse>
        </Card>
      </div>
    );
  }
}

export default Payment1;

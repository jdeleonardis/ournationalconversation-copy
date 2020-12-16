import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Accordion,Card,Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import CustomerInformation1 from './CustomerInformation1';
import ShippingMethod1 from './ShippingMethod1';
import Payment1 from './Payment1';
import OrderConfirmation1 from './OrderConfirmation1';


import '../../../styles/checkoutsteps.css';



export class CheckoutSteps extends Component {
  render() {
    const style = {
      // textAlign: 'center',
      // width: '104%'
    };

    return (
      <>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              <span className='customer-info-title'>
                1.&nbsp;CUSTOMER INFORMATION
              </span>
              <hr className='cs-Rectangle-125' />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <CustomerInformation1 />
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              <span className='sm-title'> 2.&nbsp;SHIPPING METHOD</span>
              <hr className='sm-Rectangle-125' />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <ShippingMethod1 />
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='2'>
              <span className='payment-title'>3.&nbsp;PAYMENT</span>
              <hr className='pmt-Rectangle-125' />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <Payment1 />
            </Accordion.Collapse>
          </Card>
          <br />
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='3'>
              <span className='order-title'> 4.&nbsp;ORDER CONFIRMATION</span>
              <hr className='oc-Rectangle-125' />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <OrderConfirmation1 />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default CheckoutSteps;

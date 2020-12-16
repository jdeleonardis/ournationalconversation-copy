import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Accordion,Card,Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import CustomerInformation from './CustomerInformation';
import ShippingMethod from './ShippingMethod';
import PaymentCard from './PaymentCard';
import OrderConfirmation from './OrderConfirmation';


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
              <CustomerInformation />
            </Accordion.Collapse>
            <Accordion.Collapse eventKey='1'>
              <Button
                className='cont-shipping-method'
                variant='purple'
                onClick={this.closeMenu}
                href='/1'
              >
                CONTINUE TO SHIPPING METHOD
              </Button>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='1'>
              <ShippingMethod />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='2'>
              <PaymentCard />
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='1'>
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='3'>
              <OrderConfirmation />
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  }
}

export default CheckoutSteps;

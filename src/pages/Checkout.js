import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import CheckoutSteps from '../components/Content/ContentCards/CheckoutSteps';
import CustomerInformation from '../components/Content/ContentCards/CustomerInformation';
import ShippingMethod from '../components/Content/ContentCards/ShippingMethod';
import PaymentCard from '../components/Content/ContentCards/Payment';
import OrderConfirmation from '../components/Content/ContentCards/OrderConfirmation';
import ShoppingCartCard from '../components/Content/ContentCards/ShoppingCartCard';

import '../styles/Pages.css';

export class StoreCheckout extends Component {
  render() {
    const style = {
      // textAlign: 'center',
      // width: '104%'
    };

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | ONC Store Checkout</title>
          </Helmet>
          <Container className='container' fluid>
            <Row className='checkout-topline'>
              <div className='textdiv' style={{}}>
                <h2>CHECKOUT</h2>
                <div id='main-label'>&nbsp;&nbsp;</div>
                <div className='divider-line'></div>
              </div>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <CheckoutSteps />
                <br />
                <br />
                <br />
                <br />
                <br />
                <CustomerInformation />
                <br />
                <ShippingMethod />
                <br />
                <PaymentCard />
                <br />
                <OrderConfirmation />
              </Col>
              <Col md={6}>
                <ShoppingCartCard />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default StoreCheckout;

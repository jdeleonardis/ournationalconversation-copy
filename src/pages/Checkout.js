import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';
import ShoppingCartCard from '../components/Content/ContentCards/ShoppingCartCard';
import ShippingMethod from '../components/Content/ContentCards/ShippingMethod';
import PaymentCard from '../components/Content/ContentCards/PaymentCard';
import OrderConfirmation from '../components/Content/ContentCards/OrderConfirmation';


import '../styles/Pages.css';


export class StoreCheckout extends Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '104%'
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
                <ShippingMethod/>
                <br/>
                <PaymentCard />
                <br/>
                <OrderConfirmation/>
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

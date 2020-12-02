import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';
import ShoppingCartCard from '../components/Content/ContentCards/ShoppingCartCard';
import PaymentCard from '../components/Content/ContentCards/PaymentCard';

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
                <div className='divider-line'></div> &nbsp;&nbsp;&nbsp;
              </div>
            </Row>
            <br />
            <Row>
              <Col md={6}>
                <PaymentCard />
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

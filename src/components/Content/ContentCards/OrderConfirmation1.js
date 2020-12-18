import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Alert,
  Card
} from 'react-bootstrap';

import '../../../styles/OrderConfirmation.css';

class OrderConfirmation1 extends Component {
  render() {
    return (
      <div className='order' eventKey='#order-confirmation'>
        <Card.Body variant='flush'>
          <h2 className='thank-you'>
            <i class='far fa-check-circle '></i> THANK YOU!
          </h2>
          <p className='order-num'>ORDER #19283</p>

          <h3 className='confirmation-title'>Your Order Is Confirmed.</h3>
          <p className='confirmation-text'>
            Confirmation has been sent to your email address provided. Please
            check your email for updates on your order status.
          </p>

          <h3 className='confirmation-title'>Customer Information:</h3>

          <Row>
            <Col>
              <h4 className='cs-info-title'>SHIPPING ADDRESS</h4>
              <p className='confirmation-text'>
                123 Internet Street
                <br />
                Apt A
                <br />
                New York, NY <br />
                10001 <br />
                USA
              </p>
            </Col>
            <Col>
              <h4 className='cs-info-title'>BILLING ADDRESS</h4>
              <p className='confirmation-text'>
                123 Internet Street
                <br />
                Apt A
                <br />
                New York, NY <br />
                10001 <br />
                USA
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className='cs-info-title'>SHIPPING METHOD</h4>
              <p className='confirmation-text'>Standard US Shipping</p>
            </Col>
            <Col>
              <h4 className='cs-info-title'>BILLING METHOD</h4>
              <p className='confirmation-text'>VISA ending in XXXX</p>
            </Col>
          </Row>
          <br />
          <Row>
            <Button className='return-to-store' variant='purple' href='/store'>
              RETURN TO STORE
            </Button>
          </Row>
        </Card.Body>
      </div>
    );
  }
}

export default OrderConfirmation1;

import React, { useState, Component } from 'react';
import { Form, Button, Row, Col, Image, Card } from 'react-bootstrap';

import '../../../styles/shopping-cart.css';
import bookCover from '../../../img/book-cover.jpg';

const ShoppingCartCard = () => {
  return (
    <div className='your-items'>
      <Card className='rectangle124' fuild>
        <Card.Body className='your-items-contents'>
          <Row>
            <h3
              id='example-custom-Card-styling-title'
              className='your-items-title'
            >
              YOUR ITEMS (1{})
            </h3>
          </Row>

          <Row className='your-items-table'>
            <Col xs={12} md={6}>
              ITEM
            </Col>
            <Col xs={6} md={3}>
              QUANTITY
            </Col>
            <Col xs={6} md={3}>
              PRICE
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={4} md={2}>
              <Image
                className='your-items-img'
                variant='top'
                src={bookCover}
                fluid
              ></Image>
            </Col>
            <Col className='your-items-des' xs={6} md={5}>
              Rethinking America: Rethinking the World
            </Col>
            <Col className='your-items-qty' xs={4} md={2}>
              <i class='fas fa-times'></i>
              <span> 1 </span>
            </Col>
            <Col xs={4} md={3}>
              <span className='your-items-price'>$13.95</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className='your-items-promo' xs={8} md={9}>
              <Form.Control type='text' placeholder='PROMO CODE' />
            </Col>
            <Col xs={4} md={3}>
              <Button
                className='your-items-apply'
                variant='purple'
                type='submit'
              >
                APPLY
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='your-items-sub' xs={4} md={9}>
              <h6>SUBTOTAL</h6>
              <h6>SHIPPING</h6>
              <h6>TAXES</h6>
            </Col>

            <Col xs={6} md={3}>
              <h6 className='your-items-price'>$13.95</h6>
              <h6>
                <i class='fas fa-minus'></i>
              </h6>
              <h6>
                <i class='fas fa-minus'></i>
              </h6>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={6} md={3} className='your-items-total'>
              TOTAL
            </Col>
            <Col xs={6} md={3}>
              <span className='your-items-total-price'>$21.14</span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingCartCard;

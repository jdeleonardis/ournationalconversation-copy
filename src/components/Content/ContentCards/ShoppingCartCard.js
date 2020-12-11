import React, { useState, Component } from 'react';
import { Form, Button, Row, Col, Image, Card } from 'react-bootstrap';

import bookCover from '../../../img/book-cover.jpg';
import '../../../styles/shopping-cart.css';

const ShoppingCartCard = () => {
  return (
    <div className='your-items'>
      <Card border='light' className='rectangle124' fuild>
        <Card.Header className='your-items-contents'>
          <Row>
            <h3 className='your-items-title'>YOUR ITEMS (1{})</h3>
          </Row>
          <Row className='your-items-table'>
            <Col xs={12} md={6}>
              ITEM
            </Col>
            <Col className='right-col' xs={6} md={3}>
              QUANTITY
            </Col>
            <Col className='right-col' xs={6} md={3}>
              PRICE
            </Col>
          </Row>
          <hr className='Rectangle-37' />
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
            <Col className='your-items-qty ' xs={4} md={2}>
              <i class='fas fa-times'>
                <span> 1 </span>
              </i>
            </Col>
            <Col className='right-col your-items-price' xs={4} md={3}>
              <span className=' item-price '>$13.95</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className='your-items-promo' xs={8} md={8}>
              <Form.Control
                type='text'
                placeholder='PROMO CODE'
                className='rectangle-2'
              />
            </Col>
            <Col xs={4} md={3}>
              <Button
                size='xl'
                className='your-items-apply'
                variant='purple'
                type='submit'
              >
                APPLY
              </Button>
            </Col>
          </Row>
          <hr className='line-84' />
          <Row>
            <Col className='your-items-sub' xs={4} md={9}>
              <h6>SUBTOTAL</h6>
              <h6>SHIPPING</h6>
              <h6>TAXES</h6>
            </Col>

            <Col className='right-col items-price' xs={6} md={3}>
              <h6 className='item-price'>$13.95</h6>
              <h6>
                <i class='fas fa-minus'></i>
              </h6>
              <h6>
                <i class='fas fa-minus'></i>
              </h6>
            </Col>
          </Row>
          <hr className='line-84' />
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={6} md={3} className='your-items-total'>
              TOTAL
            </Col>
            <Col className='your-items-total-price' xs={6} md={3}>
              <span>$21.14</span>
            </Col>
          </Row>
        </Card.Header>
      </Card>
    </div>
  );
};

export default ShoppingCartCard;

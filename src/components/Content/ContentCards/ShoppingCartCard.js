import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image, Card } from 'react-bootstrap';

import '../../../styles/StoreCards.css';
import bookCover from '../../../img/book-cover.jpg';


const ShoppingCartCard = () => {
  return (
    <div className='shopping-cart'>
      <Card>
      <Modal.Header className='shopping-cart' closeButton>
        <Modal.Title
          id='example-custom-modal-styling-title'
          className='shopping-cart-title'
        >
          Shopping Cart (1{})
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='shopping-cart-contents'>
        <Container className='rectangle124'>
          <Row className='shopping-cart-table'>
            <Col xs={12} md={7}>
              ITEM
            </Col>
            <Col xs={6} md={3}>
              QUANTITY
            </Col>
            <Col xs={6} md={2}>
              PRICE
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={4} md={2}>
              <Image
                className='shopping-cart-img'
                variant='top'
                src={bookCover}
                fluid
              ></Image>
            </Col>
            <Col className='shopping-cart-des' xs={6} md={5}>
              Rethinking America: Rethinking the World
            </Col>
            <Col className='shopping-cart-qty' xs={4} md={3}>
              <i class='fas fa-minus' />
              <span>1</span>
              <i class='fas fa-plus' />
            </Col>
            <Col xs={4} md={2}>
              <span className='shopping-cart-price'>$13.95</span>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className='shopping-cart-sub' xs={4} md={10}>
              SUBTOTAL
            </Col>

            <Col xs={6} md={2}>
              <span className='shopping-cart-price'>$13.95</span>
            </Col>
          </Row>
          <Row>
            <Col className='shopping-cart-shipping' xs={4} md={7}>
              SHIPPING
            </Col>

            <Col className='shopping-cart-caption' xs={6} md={5}>
              <p>Shipping calculated at checkout</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Button className='shopping-cart-checkout' variant='purple'>
        CHECKOUT
      </Button>
      <p className='shopping-cart-or'>OR</p>
      <Modal.Footer>
        <a className='shopping-cart-cont'>CONITUE SHOPPING</a>
      </Modal.Footer>
      </Card>
    </div>
  );
};

export default ShoppingCartCard;
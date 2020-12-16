import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image,Badge } from 'react-bootstrap';

import bookCover from '../../../img/book-cover.jpg';

import '../../../styles/shoppingcart-overlay.css';

const ShoppingCartOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className='view-cart-btn '
        variant='outline-primary'
        onClick={() => setShow(true)}
      >
        <i class='fas fa-shopping-cart' />
        <Badge pill id='item-in-cart' variant='danger'>
          9
        </Badge>
        <span className='sr-only'>items in cart</span>
        VIEW CART
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'
        className='shopping-cart'
      >
        <Modal.Header
          className='shopping-cart-close '
          closeButton
        ></Modal.Header>
        <Modal.Body className='shopping-cart-contents '>
          <Container fluid>
            <Row>
              <p className='shopping-cart-title'>Shopping Cart (1{})</p>
            </Row>
            <div className='shopping-cart-table'>
              <Row className='shopping-cart-items'>
                <Col xs={12} md={6}>
                  ITEM
                </Col>
                <Col xs={6} md={3}>
                  QUANTITY
                </Col>
                <Col className='col-center' xs={6} md={3}>
                  PRICE
                </Col>
              </Row>
              <hr className='rectangle-37' />
              <Row className='shopping-cart-details'>
                <Col xs={4} md={2}>
                  <Image
                    className='shopping-cart-img'
                    variant='top'
                    src={bookCover}
                    fluid
                  ></Image>
                </Col>
                <Col className='shopping-cart-des' xs={6} md={4}>
                  <span>Rethinking America: Rethinking the World</span>
                </Col>
                <Col className='shopping-cart-qty' xs={4} md={3}>
                  <i class='fas fa-minus' />
                  <span> 1 </span>
                  <i class='fas fa-plus' />
                </Col>
                <Col className='shopping-cart-price' xs={4} md={3}>
                  <span className='col-center'>$13.95</span>
                </Col>
              </Row>
              <hr className='line-86' />
              <Row className='subtotal'>
                <Col className='shopping-cart-sub' xs={4} md={9}>
                  SUBTOTAL
                </Col>

                <Col className='shopping-cart-price price' xs={6} md={3}>
                  <span>$13.95</span>
                </Col>
              </Row>
              <Row>
                <Col className='shopping-cart-shipping' xs={4} md={6}>
                  {' '}
                  SHIPPING{' '}
                </Col>

                <Col className='shopping-cart-caption' xs={4} md={6}>
                  <p>Shipping calculated at checkout</p>
                </Col>
              </Row>
            </div>

            <div className='shopping-cart-bottom'>
              <Row className='shopping-cart-checkout'>
                <Button className='checkout-btn' variant='' href='/checkout'>
                  <span id='checkout'>CHECKOUT</span>{' '}
                </Button>
              </Row>

              <Row>
                <Col md={5}>
                  <div id=''></div>
                  <div className='line-or-left'></div>
                </Col>
                <Col md={1}>
                  <p className='shopping-cart-or'>OR</p>
                </Col>
                <Col md={5}>
                  <div id=''>;</div>
                  <div className='line-or-right'></div>
                </Col>
              </Row>
              <Row>
                <Button className='shopping-cart-cont' variant=''>
                  <span id='continue-shopping' href='/store'>
                    CONITUE SHOPPING
                  </span>
                </Button>
              </Row>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartOverlay;

import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import '../../../styles/shoppingcart-overlay.css';
import bookCover from '../../../img/book-cover.jpg';

const ShoppingCartOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a variant='purple' onClick={() => setShow(true)}>
        <i class='fas fa-shopping-cart'></i>
      </a>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'
        className='shopping-cart'
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className='shopping-cart-contents '>
          <Container fluid>
            <Row className='shopping-cart-title'>
              <h3>Shopping Cart (1{})</h3>
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
          </Container>
          <Container className='shopping-cart-btn' >
            <Button className='shopping-cart-checkout' variant=''>
              CHECKOUT
            </Button>
            <div>
              <Row>
                <Col md={5}>
                  <div className='' style={{ width: '100%' }}>
                    <div id=''>&nbsp;&nbsp;</div>
                    <div className='line-or'></div> &nbsp;&nbsp;&nbsp;
                  </div>
                </Col>
                <Col md={2}>
                  <p className='shopping-cart-or'>OR</p>
                </Col>
                <Col md={5}>
                  <div className='' style={{ width: '100%' }}>
                    <div id=''>&nbsp;&nbsp;</div>
                    <div className='line-or'></div> &nbsp;&nbsp;&nbsp;
                  </div>
                </Col>
              </Row>
            </div>
            <Button className='shopping-cart-cont' variant=''>
              CONITUE SHOPPING
            </Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShoppingCartOverlay;

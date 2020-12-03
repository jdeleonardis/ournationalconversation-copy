import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import GlobalButton from '../../Misc/GlobalButton'
import '../../../styles/NewsletterOverlay.css';
import bookCover from '../../../img/book-cover.jpg';

const NewsletterOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button        
        id='add-newsletter-sub'
        onClick={() => setShow(true)}
      >
        SIGN UP FOR OUR NEWSLETTER
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        className='newsletter-overlay'
      >
        <Modal.Header
          className='newsletter-overlay-close'
          closeButton
        ></Modal.Header>
        <Modal.Body className='shopping-cart-contents '>
          <Container fluid>
            
            <p className='newsletter-overlay-title'>Sign Up For Our Newsletter!</p>
            <p className='newsletter-overlay-paragraph'>Enter your email below and let us know which stories you'd like to receive.  All
            newsletters are sent in the morning and afternoon Monday-Friday, then once daily on Saturday and Sunday.</p>


            <Button        
                id='add-newsletter-sub'
                onClick={() => setShow(true)}
            >
                SUBSCRIBE
            </Button>            
{/*             
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
                <Button className='shopping-cart-btn' variant=''>
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
                  <span id="continue-shopping">CONITUE SHOPPING</span>
                </Button>
              </Row>
            </div>*/}
          </Container> 
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewsletterOverlay;

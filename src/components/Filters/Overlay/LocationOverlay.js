import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import '../../../styles/shoppingcart-overlay.css';
import bookCover from '../../../img/book-cover.jpg';

const LocationOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='purple'
        className='add-new-location'
        onClick={() => setShow(true)}
      >
        ADD NEW LOCATION <i class='fas fa-plus'> </i>{' '}
      </Button>
      

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        aria-labelledby='example-custom-modal-styling-title'
        className='add-location'
      >
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className='add-location-contents '>
          <Container fluid>
            <Row className='add-location-title'>
              <h3> Add Location</h3>
            </Row>
            <div className='add-location-table'>
              <Row className='add-location-items'>
                <input id='small-search-field' type='text' placeholder='Covid'></input>
        <i id='searchsubmit' className='fa fa-search'></i>
      
              </Row>
              <hr className='rectangle-37' />
              <Row className='add-location-details'>
                <Col xs={4} md={2}>
                  <Image
                    className='add-location-img'
                    variant='top'
                    src={bookCover}
                    fluid
                  ></Image>
                </Col>
                <Col className='add-location-des' xs={6} md={4}>
                  <span>Rethinking America: Rethinking the World</span>
                </Col>
                <Col className='add-location-qty' xs={4} md={3}>
                  <i class='fas fa-minus' />
                  <span> 1 </span>
                  <i class='fas fa-plus' />
                </Col>
                <Col className='add-location-price' xs={4} md={3}>
                  <span className='col-center'>$13.95</span>
                </Col>
              </Row>
              <hr className='line-86' />
              <Row className='subtotal'>
                <Col className='add-location-sub' xs={4} md={9}>
                  SUBTOTAL
                </Col>

                <Col className='add-location-price price' xs={6} md={3}>
                  <span>$13.95</span>
                </Col>
              </Row>
              <Row>
                <Col className='add-location-shipping' xs={4} md={6}>
                  {' '}
                  SHIPPING{' '}
                </Col>

                <Col className='add-location-caption' xs={4} md={6}>
                  <p>Shipping calculated at checkout</p>
                </Col>
              </Row>
            </div>
          </Container>
          <Container className='add-location-btn'>
            <Button className='add-location-checkout' variant=''>
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
                  <p className='add-location-or'>OR</p>
                </Col>
                <Col md={5}>
                  <div className='' style={{ width: '100%' }}>
                    <div id=''>&nbsp;&nbsp;</div>
                    <div className='line-or'></div> &nbsp;&nbsp;&nbsp;
                  </div>
                </Col>
              </Row>
            </div>
            <Button className='add-location-cont' variant=''>
              CONITUE SHOPPING
            </Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationOverlay;

import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image ,} from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import '../../../styles/shoppingcart-overlay.css';
import bookCover from '../../../img/book-cover.jpg';
import AddLocationCard from '../../Content/ContentCards/AddLocationCard';

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
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className='add-location-contents '>
          <Container className='add-location-contents ' fluid>
            <Row className='add-location-title'>
              <h3 className='add-location'> Add Location</h3>
            </Row>
            <div className='add-location-table'>
              <Row className='add-location-search'>
                <input
                  id='city-or-zipcode'
                  type='text'
                  placeholder='CITY OR ZIPCODE'
                ></input>
                <i id='searchsubmit' className='fa fa-search vector'></i>
              </Row>
              <Row className='add-location-card'>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
                <Col xs={6} md={4}>
                  <AddLocationCard />
                </Col>
              </Row>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationOverlay;

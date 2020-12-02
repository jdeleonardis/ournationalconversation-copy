import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image} from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';


import AddLocationCard from '../../Content/ContentCards/AddLocationCard';
import Chicago from '../../../img/Chicago.jpg';
import Denver from '../../../img/Denver.jpg';
import Detroit from '../../../img/Detroit.jpg';
import Houston from '../../../img/Houston.jpg';
import Nashville from '../../../img/Nashville.jpg';
import Portland from '../../../img/Portland.jpg';


import '../../../styles/shoppingcart-overlay.css';



const LocationOverlay = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant=''
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
               
                  <AddLocationCard />
                  </Row>
                
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationOverlay;

import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

import SignupComponent from './SignupComponent';

const HeaderSignup = () => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='light'
        className='log-in sign-up'
        onClick={() => setShow(true)}
        active
      >
        SIGN UP
      </Button>

      <Modal show={show} onHide={() => setShow(false)} >
        <SignupComponent />
      </Modal>
    </>
  );
};

export default HeaderSignup;

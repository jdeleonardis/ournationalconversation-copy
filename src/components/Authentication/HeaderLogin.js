import React, { useState, Component } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

import LoginComponent from './LoginComponent';

const HeaderLogin = () => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='' className='log-in' onClick={() => setShow(true)}>
        LOG IN
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        // dialogClassName='modal-90w'
        // aria-labelledby='example-custom-modal-styling-title'
        // center
      >
        <LoginComponent />
      </Modal>
    </>
  );
};

export default HeaderLogin;

import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import LoginComponent from './LoginComponent';

// Bootstrap React Modal: Modal clicks when you click the CLOSE button AND anywhere else
const LoginModalButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  console.log(show);
  console.log(handleClose);

  return (
    <div>
      <Button
        style={{
          margin: '10px',
        }}
        variant='success'
        onClick={showModal}
      >
        Login Modal
      </Button>
      <Modal closeButton show={isOpen} onHide={hideModal}>
        <Modal.Header closeButton>
          {/* <Modal.Title>
                  <strong>Sign Up</strong>
                </Modal.Title> */}
        </Modal.Header>
        <Modal.Body
          style={{
            paddingBottom: 0,
          }}
        >
          <LoginComponent />
        </Modal.Body>

        {/* <Modal.Footer>
                <Button
                  style={{
                    margin: '10px',
                  }}
                  variant='success'
                  onClick={hideModal}
                >
                  Close
                </Button>
              </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default LoginModalButton;

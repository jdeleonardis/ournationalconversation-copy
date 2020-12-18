import React from 'react';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import SignupComponent from './SignupComponent';
import '../../styles/Signup.css';

export default class App extends React.Component {
  state = {
    open: false,
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button
          id='nav-signup-btn'
          style={{
            margin: '10px',
            color: '#c60717',
          }}
          variant='light'
          onClick={this.onOpenModal}
        >
          SIGN UP
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <SignupComponent />
        </Modal>
      </div>
    );
  }
}

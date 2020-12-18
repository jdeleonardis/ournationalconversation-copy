import React from 'react';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import LoginComponent from './LoginComponent';
import '../../styles/login.css';

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
          id='nav-login-btn'
          style={{
            margin: '10px',
            color: '#ffffff',
            textDecoration: 'none',
          }}
          variant='link'
          onClick={this.onOpenModal}
        >
          LOG IN
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <LoginComponent />
        </Modal>
      </div>
    );
  }
}

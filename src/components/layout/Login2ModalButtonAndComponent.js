import React from 'react';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import Login2 from './Login2';

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
          style={{
            margin: '10px',
          }}
          variant='success'
          onClick={this.onOpenModal}
        >
          Login 2 Modal
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Login2 />
        </Modal>
      </div>
    );
  }
}

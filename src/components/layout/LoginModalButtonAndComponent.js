import React from 'react';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import LoginComponent from './LoginComponent';

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
          Login Modal
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <LoginComponent />
        </Modal>
      </div>
    );
  }
}

// import React from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import LoginComponent from './LoginComponent';

// // Bootstrap React Modal: Modal clicks when you click the CLOSE button AND anywhere else
// const LoginModalButton = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const showModal = () => {
//     setIsOpen(true);
//   };

//   const hideModal = () => {
//     setIsOpen(false);
//   };
//   // const [show, setShow] = useState(false);
//   // const handleClose = () => setShow(false);
//   // console.log(show);
//   // console.log(handleClose);

//   return (
//     <div>
//       <Button
//         style={{
//           margin: '10px',
//         }}
//         variant='success'
//         onClick={showModal}
//       >
//         Login Modal
//       </Button>
//       <Modal closeButton show={isOpen} onHide={hideModal}>
//         <Modal.Header closeButton></Modal.Header>
//         <Modal.Body
//           style={{
//             paddingBottom: 0,
//           }}
//         >
//           <LoginComponent />
//         </Modal.Body>

//         {/* <Modal.Footer>
//                 <Button
//                   style={{
//                     margin: '10px',
//                   }}
//                   variant='success'
//                   onClick={hideModal}
//                 >
//                   Close
//                 </Button>
//               </Modal.Footer> */}
//       </Modal>
//     </div>
//   );
// };

// export default LoginModalButton;

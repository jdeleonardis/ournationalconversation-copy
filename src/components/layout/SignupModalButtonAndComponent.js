import React from 'react';
import 'react-responsive-modal/styles.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-responsive-modal';
import SignupComponent from './SignupComponent';

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
          Signup Modal
        </Button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <SignupComponent />
        </Modal>
      </div>
    );
  }
}

// import React from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import SignupComponent from './SignupComponent';

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
//         Signup Modal
//       </Button>
//       <Modal closeButton show={isOpen} onHide={hideModal}>
//         <Modal.Header closeButton>
//           {/* <Modal.Title>
//                   <strong>Sign Up</strong>
//                 </Modal.Title> */}
//         </Modal.Header>
//         <Modal.Body
//           style={{
//             paddingBottom: 0,
//           }}
//         >
//           <SignupComponent />
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

// // import React, { Fragment, useState } from 'react';
// // import { Container, Button, Modal } from 'react-bootstrap';
// // import { Helmet } from 'react-helmet';
// // import Solution from '../layout/Solutions';
// // import SignupComponent from '../layout/SignupComponent';

// // // Bootstrap React Modal: Modal only closes when you click the CLOSE button

// // const Home = () => {
// //   const [isOpen, setIsOpen] = React.useState(false);

// //   const showModal = () => {
// //     setIsOpen(true);
// //   };

// //   const hideModal = () => {
// //     setIsOpen(false);
// //   };
// //   const [show, setShow] = useState(false);
// //   const handleClose = () => setShow(false);
// //   console.log(show);

// //   return (
// //     <Fragment>
// //       <div>
// //         <Helmet>
// //           <title>Our National Conversation</title>
// //         </Helmet>
// //         <Container className='container' fluid>
// //           <div>
// //             <h1>Home</h1>
// //             <Button
// //               style={{
// //                 margin: '10px',
// //               }}
// //               variant='success'
// //               href='/'
// //             >
// //               Home
// //             </Button>
// //             <Button
// //               style={{
// //                 margin: '10px',
// //               }}
// //               variant='success'
// //               href='/signup'
// //             >
// //               Sign Up
// //             </Button>
// //             <Button
// //               style={{
// //                 margin: '10px',
// //               }}
// //               variant='success'
// //               onClick={showModal}
// //             >
// //               Sign Up Modal
// //             </Button>
// //             <Modal onHide={handleClose} show={isOpen}>
// //               <Modal.Body
// //                 style={{
// //                   paddingBottom: 0,
// //                 }}
// //               >
// //                 <SignupComponent />
// //               </Modal.Body>

// //               <Modal.Footer>
// //                 <Button
// //                   style={{
// //                     margin: '10px',
// //                   }}
// //                   variant='success'
// //                   onClick={hideModal}
// //                 >
// //                   Close
// //                 </Button>
// //               </Modal.Footer>
// //             </Modal>
// //             <Button
// //               style={{
// //                 margin: '10px',
// //               }}
// //               variant='success'
// //               href='/login'
// //             >
// //               Login
// //             </Button>
// //             <Button
// //               style={{
// //                 margin: '10px',
// //               }}
// //               variant='success'
// //               href='/contact'
// //             >
// //               Contact
// //             </Button>
// //             <br /> <br />
// //             <p>Dummy home page.</p>
// //             <p>
// //               Whoever works on the home page can go ahead and get ride of all
// //               this code and use this file for the home page.
// //             </p>
// //           </div>
// //         </Container>
// //       </div>
// //       <Solution />
// //     </Fragment>
// //   );
// // };

// // export default Home;

// // MODAL VERSION FROM HERE: http://shibe97.github.io/react-awesome-modal/
// // Make sure to install package: npm i -S react-awesome-modal

// // import React, { Component, Fragment } from 'react';
// // import { Container, Button } from 'react-bootstrap';
// // import { Helmet } from 'react-helmet';
// // import Solution from '../layout/Solutions';
// // import SignupComponent from '../layout/SignupComponent';
// // import Modal from 'react-awesome-modal';

// // export class Home extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       visible: false,
// //     };
// //   }

// //   openModal() {
// //     this.setState({
// //       visible: true,
// //     });
// //   }

// //   closeModal() {
// //     this.setState({
// //       visible: false,
// //     });
// //   }

// //   render() {
// //     return (
// //       <Fragment>
// //         <div>
// //           <Helmet>
// //             <title>Our National Conversation</title>
// //           </Helmet>
// //           <Container className='container' fluid>
// //             <div>
// //               <h1>Home</h1>
// //               <Button
// //                 style={{
// //                   margin: '10px',
// //                 }}
// //                 variant='success'
// //                 href='/'
// //               >
// //                 Home
// //               </Button>
// //               <Button
// //                 style={{
// //                   margin: '10px',
// //                 }}
// //                 variant='success'
// //                 href='/signup'
// //               >
// //                 Sign Up
// //               </Button>
// //               <Button
// //                 style={{
// //                   margin: '10px',
// //                 }}
// //                 variant='success'
// //                 onClick={() => this.openModal()}
// //               >
// //                 Sign Up Modal
// //               </Button>
// //               <Modal
// //                 style={{
// //                   paddingTop: '50px',
// //                 }}
// //                 visible={this.state.visible}
// //                 effect='fadeInDown'
// //                 onClickAway={() => this.closeModal()}
// //               >
// //                 <SignupComponent />
// //               </Modal>
// //               <Button
// //                 style={{
// //                   margin: '10px',
// //                 }}
// //                 variant='success'
// //                 href='/login'
// //               >
// //                 Login
// //               </Button>
// //               <Button
// //                 style={{
// //                   margin: '10px',
// //                 }}
// //                 variant='success'
// //                 href='/contact'
// //               >
// //                 Contact
// //               </Button>
// //               <br /> <br />
// //               <p>Dummy home page.</p>
// //               <p>
// //                 Whoever works on the home page can go ahead and get ride of all
// //                 this code and use this file for the home page.
// //               </p>
// //             </div>
// //           </Container>
// //         </div>
// //         <Solution />
// //       </Fragment>
// //     );
// //   }
// // }

// // export default Home;

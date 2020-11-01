// import React, { Fragment } from 'react';
// import { Container, Alert, Card, Form, Button } from 'react-bootstrap';

// import '../../App.css';

// // ANIMATE.CSS ERROR MSG ANIMATIONS
// export default function App() {
//   //   const [userName, setUserName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   // Redirect to Home Page after submitting form
//   // function redirect() {
//   //   // window.location.replace('/');
//   //   window.location.href = '/';
//   //   return false;
//   // }

//   // Password Icon Toggle
//   function pwToggle() {
//     document.getElementById('show_password').classList.toggle('fa-eye-slash');
//     document.getElementById('show_password').classList.toggle('fa-eye');

//     var x = document.getElementById('password');
//     if (x.type === 'password') {
//       x.type = 'text';
//     } else {
//       x.type = 'password';
//     }
//   }

//   const handleSubmit = (event) => {
//     console.log('Form submitted.');

//     console.log(`
//     Email: ${email}
//     Password: ${password}
//   `);

//     // REGEX VARIABLES
//     // const userNameRegex = /^[a-z0-9_-]{3,15}$/;
//     const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

//     // USERNAME VALIDATION
//     function usernameNotBlank() {
//       const eBlank = document.getElementById('username-notblank');
//       eBlank.innerHTML = '<p>Username cannot be blank.</p>';
//       eBlank.style.fontSize = '12px';
//       eBlank.style.color = '#FF0000';
//       eBlank.style.marginTop = '5px';
//     }

//     function usernameNotValid() {
//       const uValid = document.getElementById('username-notvalid');
//       uValid.innerHTML = '<p>Please enter a valid username.</p>';
//       uValid.style.fontSize = '12px';
//       uValid.style.color = '#FF0000';
//       uValid.style.marginTop = '5px';
//     }

//     // EMAIL VALIDATION
//     function emailNotBlank() {
//       const eBlank = document.getElementById('email-notblank');
//       eBlank.innerHTML =
//         '<span><i class="fas fa-info-circle"></i> Email cannot be blank.</span>';
//       eBlank.style.display = 'block';
//       eBlank.style.fontSize = '14px';
//       eBlank.style.backgroundColor = '#d54b3d';
//       eBlank.style.color = '#FFFFFF';

//       eBlank.style.position = 'absolute';
//       eBlank.style.width = '70%';
//       eBlank.style.left = '0';
//       eBlank.style.right = '0';
//       eBlank.style.margin = 'auto';
//       eBlank.style.top = '15px';

//       eBlank.classList.add('animate__animated', 'animate__fadeOut');
//       eBlank.style.setProperty('--animate-duration', '5s');

//       eBlank.addEventListener('animationend', () => {
//         eBlank.style.display = 'none';
//         document.querySelector('.eye-con').style.marginTop = '0';
//       });
//     }

//     function emailNotValid() {
//       const eValid = document.getElementById('email-notvalid');
//       eValid.innerHTML =
//         '<span><i class="fas fa-info-circle"></i> Please enter a valid email.</span>';
//       eValid.style.display = 'block';
//       eValid.style.fontSize = '14px';
//       eValid.style.backgroundColor = '#d54b3d';
//       eValid.style.color = '#FFFFFF';

//       eValid.style.position = 'absolute';
//       eValid.style.width = '70%';
//       eValid.style.left = '0';
//       eValid.style.right = '0';
//       eValid.style.margin = 'auto';
//       eValid.style.top = '15px';

//       eValid.classList.add('animate__animated', 'animate__fadeOut');
//       eValid.style.setProperty('--animate-duration', '5s');

//       eValid.addEventListener('animationend', () => {
//         eValid.style.display = 'none';
//         document.querySelector('.eye-con').style.marginTop = '0';
//       });
//     }

//     // PASSWORD VALIDATION
//     function passwordNotBlank() {
//       const pBlank = document.getElementById('password-notblank');
//       pBlank.innerHTML =
//         '<span><i class="fas fa-info-circle"></i> Password required.</span>';
//       pBlank.style.display = 'block';
//       pBlank.style.fontSize = '14px';
//       pBlank.style.backgroundColor = '#d54b3d';
//       pBlank.style.color = '#FFFFFF';

//       pBlank.style.position = 'absolute';
//       pBlank.style.width = '70%';
//       pBlank.style.left = '0';
//       pBlank.style.right = '0';
//       pBlank.style.margin = 'auto';
//       pBlank.style.top = '15px';

//       pBlank.classList.add('animate__animated', 'animate__fadeOutDown');
//       pBlank.style.setProperty('--animate-duration', '3s');

//       pBlank.addEventListener('animationend', () => {
//         pBlank.style.display = 'none';
//         document.querySelector('.eye-con').style.marginTop = '0';
//       });
//     }

//     function passwordNotValid() {
//       const pValid = document.getElementById('password-notvalid');
//       pValid.innerHTML =
//         '<span><i class="fas fa-info-circle"></i> Please enter a valid password.</span>';
//       pValid.style.display = 'block';
//       pValid.style.fontSize = '14px';
//       pValid.style.backgroundColor = '#d54b3d';
//       pValid.style.color = '#FFFFFF';

//       pValid.style.position = 'absolute';
//       pValid.style.width = '70%';
//       pValid.style.left = '0';
//       pValid.style.right = '0';
//       pValid.style.margin = 'auto';
//       pValid.style.top = '15px';

//       pValid.classList.add('animate__animated', 'animate__fadeOutDown');
//       pValid.style.setProperty('--animate-duration', '3s');

//       pValid.addEventListener('animationend', () => {
//         pValid.style.display = 'none';
//         document.querySelector('.eye-con').style.marginTop = '0';
//       });
//     }

//     // className = 'alert-msg';
//     // id = 'email-notblank';

//     // Email
//     if (!email) {
//       console.log('Email cannot be blank.');
//       // const eNotBlank = document.getElementById('email-notblank');
//       // eNotBlank.addEventListener('change', eNotBlank);
//       emailNotBlank();
//     } else if (!email.match(emailRegex)) {
//       console.log('Please enter a valid email.');
//       // const eNotValid = document.getElementById('email-notvalid');
//       // eNotValid.addEventListener('change', eNotValid);
//       emailNotValid();
//       // const eNotBlank = document.getElementById('email-notblank');
//       // eNotBlank.classList.add('notvalid-msg-clear');
//     } else {
//       console.log('Email is valid');
//       // const eNotValid = document.getElementById('email-notvalid');
//       // eNotValid.classList.add('notvalid-msg-clear');
//       // document.querySelector('.form-input-field').reset();
//     }

//     // Username
//     // if (!userName) {
//     //   console.log('Username cannot be blank.');
//     //   const uNotBlank = document.getElementById('username-notblank');
//     //   uNotBlank.addEventListener('change', uNotBlank);
//     //   usernameNotBlank();
//     // } else if (!userName.match(userNameRegex)) {
//     //   console.log('Please enter a valid username.');
//     //   const uNotValid = document.getElementById('username-notvalid');
//     //   uNotValid.addEventListener('change', uNotValid);
//     //   usernameNotValid();
//     //   const uNotBlank = document.getElementById('username-notblank');
//     //   uNotBlank.classList.add('notvalid-msg-clear');
//     // } else {
//     //   console.log('Username is valid');
//     //   const uNotValid = document.getElementById('username-notvalid');
//     //   uNotValid.classList.add('notvalid-msg-clear');
//     // }

//     // Password
//     if (!password) {
//       console.log('Password required.');
//       const pNotBlank = document.getElementById('password-notblank');
//       pNotBlank.addEventListener('change', pNotBlank);
//       passwordNotBlank();
//     } else if (!password.match(passwordRegex)) {
//       console.log(
//         'Please enter a valid password. Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter.'
//       );
//       const pNotValid = document.getElementById('password-notvalid');
//       pNotValid.addEventListener('change', pNotValid);
//       passwordNotValid();
//       const pNotBlank = document.getElementById('password-notblank');
//       pNotBlank.classList.add('notvalid-msg-clear');
//     } else {
//       console.log('Password is valid');
//       const pNotValid = document.getElementById('password-notvalid');
//       pNotValid.classList.add('notvalid-msg-clear');
//       document.querySelector('.eye-con').style.marginTop = '0';
//       // document.querySelector('.form-input-field').reset();
//     }

//     event.preventDefault();
//   };

//   return (
//     <Fragment>
//       <div>
//         <Container className='modal-container-login' fluid>
//           {/* <i
//               onClick={closeModal}
//               class='far fa-times-circle fa-lg'
//               style={{
//                 cursor: 'pointer',
//               }}
//             ></i> */}

//           <Card.Body id='login-card-body'>
//             <Alert
//               className='alert-msg'
//               style={{ display: 'none' }}
//               id='email-notblank'
//               variant='danger'
//             ></Alert>
//             <Alert
//               className='alert-msg'
//               style={{ display: 'none' }}
//               id='email-notvalid'
//               variant='danger'
//             ></Alert>

//             <Alert
//               className='alert-msg'
//               style={{ display: 'none' }}
//               id='password-notblank'
//               variant='danger'
//             ></Alert>
//             <Alert
//               className='alert-msg'
//               style={{ display: 'none' }}
//               id='password-notvalid'
//               variant='danger'
//             ></Alert>
//             <Card.Title id='login-card-title'>Log in to ONC</Card.Title>
//             <Card.Subtitle id='login-card-subtitle' className='mb-2'>
//               <div id='new-to-site'>
//                 New to this site?
//                 <span id='sign-up'>
//                   <a href='/login'>Sign Up</a>
//                 </span>
//               </div>
//             </Card.Subtitle>

//             <form onSubmit={handleSubmit}>
//               {/* <Form.Group controlId='formBasicName'>
//                   <Form.Control
//                     className='form-input-field'
//                     name='userName'
//                     placeholder='USERNAME'
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)}
//                   />
//                   <div id='username-notblank'></div>
//                   <div id='username-notvalid'></div>
//                 </Form.Group> */}

//               <Form.Group controlId='formBasicEmail'>
//                 <Form.Control
//                   className='form-input-field'
//                   name='email'
//                   placeholder='USERNAME OR EMAIL'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {/* <div id='email-notblank'></div>
//                 <div id='email-notvalid'></div> */}
//               </Form.Group>

//               <Form.Group controlId='formBasicPassword'>
//                 <div className='input-div'>
//                   <Form.Control
//                     className='form-input-field form-control'
//                     id='password'
//                     name='password'
//                     type='password'
//                     placeholder='PASSWORD'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   {/* <div id='password-notblank'></div>
//                   <div id='password-notvalid'></div> */}

//                   <span
//                     id='show_password'
//                     onClick={pwToggle}
//                     className='toggle-span eye-con fas fa-eye-slash'
//                     // className='toggle-span'
//                   >
//                     {/* <span
//                       id='show_password'
//                       onClick={pwToggle}
//                       className='eye-con fas fa-eye-slash'
//                     ></span> */}
//                   </span>
//                 </div>
//               </Form.Group>
//               <Form.Group id='remember-group' controlId='formBasicCheckbox'>
//                 <span id='forgot'>
//                   <a href='/login'>Forgot Password?</a>
//                 </span>
//                 <Form.Check
//                   id='remember-me'
//                   type='checkbox'
//                   label='Remember me'
//                 />
//               </Form.Group>

//               <Button
//                 // href='/'
//                 id='login-btn'
//                 variant='primary'
//                 type='submit'
//                 block
//               >
//                 LOG IN
//               </Button>
//               <h2 className='or-h2' id='or-text'>
//                 <span>OR</span>
//               </h2>
//               <Button id='facebook-login-btn' variant='primary' type='submit'>
//                 LOG IN WITH <br />
//                 FACEBOOK
//               </Button>
//               <Button id='google-login-btn' variant='danger' type='submit'>
//                 LOG IN WITH <br />
//                 GOOGLE
//               </Button>
//             </form>
//           </Card.Body>
//         </Container>
//       </div>
//     </Fragment>
//   );
// }

// ORIGINAL ALERTS
import React, { Fragment } from 'react';
import { Container, Alert, Card, Form, Button } from 'react-bootstrap';
import '../../App.css';

export default function App() {
  //   const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Redirect to Home Page after submitting form
  // function redirect() {
  //   // window.location.replace('/');
  //   window.location.href = '/';
  //   return false;
  // }

  // Password Icon Toggle
  function pwToggle() {
    document.getElementById('show_password').classList.toggle('fa-eye-slash');
    document.getElementById('show_password').classList.toggle('fa-eye');

    var x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  }

  const handleSubmit = (event) => {
    console.log('Form submitted.');

    console.log(`
    Email: ${email}
    Password: ${password}
  `);

    // REGEX VARIABLES
    // const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // USERNAME VALIDATION
    function usernameNotBlank() {
      const eBlank = document.getElementById('username-notblank');
      eBlank.innerHTML = '<p>Username cannot be blank.</p>';
      eBlank.style.fontSize = '12px';
      eBlank.style.color = '#FF0000';
      eBlank.style.marginTop = '5px';
    }

    function usernameNotValid() {
      const uValid = document.getElementById('username-notvalid');
      uValid.innerHTML = '<p>Please enter a valid username.</p>';
      uValid.style.fontSize = '12px';
      uValid.style.color = '#FF0000';
      uValid.style.marginTop = '5px';
    }

    // EMAIL VALIDATION
    function emailNotBlank() {
      const eBlank = document.getElementById('email-notblank');
      eBlank.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Email cannot be blank.</span>';
      eBlank.style.display = 'block';
      eBlank.style.fontSize = '14px';
      eBlank.style.backgroundColor = '#d54b3d';
      eBlank.style.color = '#FFFFFF';

      // Fade Out Animation
      // eBlank.classList.add('animate__animated', 'animate__fadeOut');
      // eBlank.style.setProperty('--animate-duration', '5s');

      // eBlank.addEventListener('animationend', () => {
      //   eBlank.style.display = 'none';
      //   document.querySelector('.eye-con').style.marginTop = '0';
      // });
    }

    function emailNotValid() {
      const eValid = document.getElementById('email-notvalid');
      eValid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please enter a valid email.</span>';
      eValid.style.display = 'block';
      eValid.style.fontSize = '14px';
      eValid.style.backgroundColor = '#d54b3d';
      eValid.style.color = '#FFFFFF';

      // Fade Out Animation
      // eValid.classList.add('animate__animated', 'animate__fadeOut');
      // eValid.style.setProperty('--animate-duration', '5s');

      // eValid.addEventListener('animationend', () => {
      //   eValid.style.display = 'none';
      //   document.querySelector('.eye-con').style.marginTop = '0';
      // });
    }

    // PASSWORD VALIDATION
    function passwordNotBlank() {
      const pBlank = document.getElementById('password-notblank');
      pBlank.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Password required.</span>';
      pBlank.style.display = 'block';
      pBlank.style.fontSize = '14px';
      pBlank.style.backgroundColor = '#d54b3d';
      pBlank.style.color = '#FFFFFF';

      // Fade Out Animation
      // pBlank.classList.add('animate__animated', 'animate__fadeOut');
      // pBlank.style.setProperty('--animate-duration', '5s');

      // pBlank.addEventListener('animationend', () => {
      //   pBlank.style.display = 'none';
      //   document.querySelector('.eye-con').style.marginTop = '0';
      // });
    }

    function passwordNotValid() {
      const pValid = document.getElementById('password-notvalid');
      pValid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please enter a valid password.</span>';
      pValid.style.display = 'block';
      pValid.style.fontSize = '14px';
      pValid.style.backgroundColor = '#d54b3d';
      pValid.style.color = '#FFFFFF';

      // pValid.style.position = 'absolute';
      // pValid.style.width = '70%';
      // pValid.style.left = '0';
      // pValid.style.right = '0';
      // pValid.style.margin = 'auto';
      // pValid.style.top = '15px';

      // Fade Out Animation
      // pValid.classList.add('animate__animated', 'animate__fadeOut');
      // pValid.style.setProperty('--animate-duration', '5s');

      // pValid.addEventListener('animationend', () => {
      //   pValid.style.display = 'none';
      //   document.querySelector('.eye-con').style.marginTop = '0';
      // });
    }

    // className = 'alert-msg';
    // id = 'email-notblank';

    // Email
    if (!email) {
      console.log('Email cannot be blank.');
      // const eNotBlank = document.getElementById('email-notblank');
      // eNotBlank.addEventListener('change', eNotBlank);
      emailNotBlank();
    } else if (!email.match(emailRegex)) {
      console.log('Please enter a valid email.');
      // const eNotValid = document.getElementById('email-notvalid');
      // eNotValid.addEventListener('change', eNotValid);
      emailNotValid();
      const eNotBlank = document.getElementById('email-notblank');
      eNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Email is valid');
      const eNotValid = document.getElementById('email-notvalid');
      eNotValid.classList.add('notvalid-msg-clear');
      // document.querySelector('.form-input-field').reset();
    }

    // Username
    // if (!userName) {
    //   console.log('Username cannot be blank.');
    //   const uNotBlank = document.getElementById('username-notblank');
    //   uNotBlank.addEventListener('change', uNotBlank);
    //   usernameNotBlank();
    // } else if (!userName.match(userNameRegex)) {
    //   console.log('Please enter a valid username.');
    //   const uNotValid = document.getElementById('username-notvalid');
    //   uNotValid.addEventListener('change', uNotValid);
    //   usernameNotValid();
    //   const uNotBlank = document.getElementById('username-notblank');
    //   uNotBlank.classList.add('notvalid-msg-clear');
    // } else {
    //   console.log('Username is valid');
    //   const uNotValid = document.getElementById('username-notvalid');
    //   uNotValid.classList.add('notvalid-msg-clear');
    // }

    // Password
    if (!password) {
      console.log('Password required.');
      const pNotBlank = document.getElementById('password-notblank');
      pNotBlank.addEventListener('change', pNotBlank);
      passwordNotBlank();
    } else if (!password.match(passwordRegex)) {
      console.log(
        'Please enter a valid password. Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter.'
      );
      const pNotValid = document.getElementById('password-notvalid');
      pNotValid.addEventListener('change', pNotValid);
      passwordNotValid();
      const pNotBlank = document.getElementById('password-notblank');
      pNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Password is valid');
      const pNotValid = document.getElementById('password-notvalid');
      pNotValid.classList.add('notvalid-msg-clear');
      document.querySelector('.eye-con').style.marginTop = '0';
      // document.querySelector('.form-input-field').reset();
    }

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='modal-container-login' fluid>
          {/* <i
              onClick={closeModal}
              class='far fa-times-circle fa-lg'
              style={{
                cursor: 'pointer',
              }}
            ></i> */}

          <Card.Body id='login-card-body'>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='email-notblank'
              variant='danger'
            ></Alert>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='email-notvalid'
              variant='danger'
            ></Alert>

            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='password-notblank'
              variant='danger'
            ></Alert>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='password-notvalid'
              variant='danger'
            ></Alert>
            <Card.Title id='login-card-title'>Log in to ONC</Card.Title>
            <Card.Subtitle id='login-card-subtitle' className='mb-2'>
              <div id='new-to-site'>
                New to this site?
                <span id='sign-up'>
                  <a href='/'>Sign Up</a>
                </span>
              </div>
            </Card.Subtitle>

            <form onSubmit={handleSubmit}>
              {/* <Form.Group controlId='formBasicName'>
                  <Form.Control
                    className='form-input-field'
                    name='userName'
                    placeholder='USERNAME'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <div id='username-notblank'></div>
                  <div id='username-notvalid'></div>
                </Form.Group> */}

              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  className='form-input-field'
                  name='email'
                  placeholder='USERNAME OR EMAIL'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <div id='email-notblank'></div>
                <div id='email-notvalid'></div> */}
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <div className='input-div'>
                  <Form.Control
                    className='form-input-field form-control'
                    id='password'
                    name='password'
                    type='password'
                    placeholder='PASSWORD'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {/* <div id='password-notblank'></div>
                  <div id='password-notvalid'></div> */}

                  <span
                    id='show_password'
                    onClick={pwToggle}
                    className='toggle-span eye-con fas fa-eye-slash'
                    // className='toggle-span'
                  >
                    {/* <span
                      id='show_password'
                      onClick={pwToggle}
                      className='eye-con fas fa-eye-slash'
                    ></span> */}
                  </span>
                </div>
              </Form.Group>
              <Form.Group id='remember-group' controlId='formBasicCheckbox'>
                <span id='forgot'>
                  <a href='/'>Forgot Password?</a>
                </span>
                <Form.Check
                  id='remember-me'
                  type='checkbox'
                  label='Remember me'
                />
              </Form.Group>

              <Button
                // href='/'
                id='login-btn'
                variant='primary'
                type='submit'
                block
              >
                LOG IN
              </Button>
              <h2 className='or-h2' id='or-text'>
                <span>OR</span>
              </h2>
              <Button id='facebook-login-btn' variant='primary' type='submit'>
                LOG IN WITH <br />
                FACEBOOK
              </Button>
              <Button id='google-login-btn' variant='danger' type='submit'>
                LOG IN WITH <br />
                GOOGLE
              </Button>
            </form>
          </Card.Body>
        </Container>
      </div>
    </Fragment>
  );
}

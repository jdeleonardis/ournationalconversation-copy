import React, { Fragment } from 'react';
import countries from './Countries';
import { Container, Alert, Card, Form, Button } from 'react-bootstrap';
import '../../App.css';

export default function App() {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [country, setCountry] = React.useState('');

  // Password Icon Toggle
  function pwToggle() {
    document.getElementById('show_password').classList.toggle('fa-eye-slash');
    document.getElementById('show_password').classList.toggle('fa-eye');
    document.getElementById('show_password2').classList.toggle('fa-eye-slash');
    document.getElementById('show_password2').classList.toggle('fa-eye');

    var x = document.getElementById('password');
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }

    var y = document.getElementById('password2');
    if (y.type === 'password') {
      y.type = 'text';
    } else {
      y.type = 'password';
    }
  }

  const handleSubmit = (event) => {
    console.log('Form submitted.');

    console.log(`
      Username: ${userName}
      Email: ${email}
      Password: ${password}
      Password2: ${password2}
      Country: ${country}
    `);

    // REGEX VARIABLES
    const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // USERNAME VALIDATION
    function usernameNotBlank() {
      const eBlank = document.getElementById('username-notblank');
      eBlank.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Username cannot be blank.</span>';
      eBlank.style.display = 'block';
      eBlank.style.fontSize = '14px';
      eBlank.style.backgroundColor = '#d54b3d';
      eBlank.style.color = '#FFFFFF';

      eBlank.style.position = 'absolute';
      eBlank.style.width = '70%';
      eBlank.style.left = '0';
      eBlank.style.right = '0';
      eBlank.style.margin = 'auto';
      eBlank.style.top = '15px';

      eBlank.classList.add('animate__animated', 'animate__fadeOut');
      eBlank.style.setProperty('--animate-duration', '5s');

      eBlank.addEventListener('animationend', () => {
        eBlank.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    function usernameNotValid() {
      const uValid = document.getElementById('username-notvalid');
      uValid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please enter a valid username.</span>';
      uValid.style.display = 'block';
      uValid.style.fontSize = '14px';
      uValid.style.backgroundColor = '#d54b3d';
      uValid.style.color = '#FFFFFF';

      uValid.style.position = 'absolute';
      uValid.style.width = '70%';
      uValid.style.left = '0';
      uValid.style.right = '0';
      uValid.style.margin = 'auto';
      uValid.style.top = '15px';

      uValid.classList.add('animate__animated', 'animate__fadeOut');
      uValid.style.setProperty('--animate-duration', '5s');

      uValid.addEventListener('animationend', () => {
        uValid.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
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

      eBlank.style.position = 'absolute';
      eBlank.style.width = '70%';
      eBlank.style.left = '0';
      eBlank.style.right = '0';
      eBlank.style.margin = 'auto';
      eBlank.style.top = '15px';

      eBlank.classList.add('animate__animated', 'animate__fadeOut');
      eBlank.style.setProperty('--animate-duration', '5s');

      eBlank.addEventListener('animationend', () => {
        eBlank.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    function emailNotValid() {
      const eValid = document.getElementById('email-notvalid');
      eValid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please enter a valid email.</span>';
      eValid.style.display = 'block';
      eValid.style.fontSize = '14px';
      eValid.style.backgroundColor = '#d54b3d';
      eValid.style.color = '#FFFFFF';

      eValid.style.position = 'absolute';
      eValid.style.width = '70%';
      eValid.style.left = '0';
      eValid.style.right = '0';
      eValid.style.margin = 'auto';
      eValid.style.top = '15px';

      eValid.classList.add('animate__animated', 'animate__fadeOutDown');
      eValid.style.setProperty('--animate-duration', '5s');

      eValid.addEventListener('animationend', () => {
        eValid.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
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

      pBlank.style.position = 'absolute';
      pBlank.style.width = '70%';
      pBlank.style.left = '0';
      pBlank.style.right = '0';
      pBlank.style.margin = 'auto';
      pBlank.style.top = '15px';

      pBlank.classList.add('animate__animated', 'animate__fadeOut');
      pBlank.style.setProperty('--animate-duration', '3s');

      pBlank.addEventListener('animationend', () => {
        pBlank.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    function passwordNotValid() {
      const pValid = document.getElementById('password-notvalid');
      pValid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please enter a valid password.</span>';
      pValid.style.display = 'block';
      pValid.style.fontSize = '14px';
      pValid.style.backgroundColor = '#d54b3d';
      pValid.style.color = '#FFFFFF';

      pValid.style.position = 'absolute';
      pValid.style.width = '70%';
      pValid.style.left = '0';
      pValid.style.right = '0';
      pValid.style.margin = 'auto';
      pValid.style.top = '15px';

      pValid.classList.add('animate__animated', 'animate__fadeOut');
      pValid.style.setProperty('--animate-duration', '3s');

      pValid.addEventListener('animationend', () => {
        pValid.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    // PASSWORD CONFIRMATION VALIDATION
    function password2NotBlank() {
      const p2Blank = document.getElementById('password2-notblank');
      p2Blank.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Please confirm your password.</span>';
      p2Blank.style.display = 'block';
      p2Blank.style.fontSize = '14px';
      p2Blank.style.backgroundColor = '#d54b3d';
      p2Blank.style.color = '#FFFFFF';

      p2Blank.style.position = 'absolute';
      p2Blank.style.width = '70%';
      p2Blank.style.left = '0';
      p2Blank.style.right = '0';
      p2Blank.style.margin = 'auto';
      p2Blank.style.top = '15px';

      p2Blank.classList.add('animate__animated', 'animate__fadeOutUp');
      p2Blank.style.setProperty('--animate-duration', '3s');

      p2Blank.addEventListener('animationend', () => {
        p2Blank.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    function password2NotValid() {
      const p2Valid = document.getElementById('password2-notvalid');
      p2Valid.innerHTML =
        '<span><i class="fas fa-info-circle"></i> Passwords do not match.</span>';
      p2Valid.style.display = 'block';
      p2Valid.style.fontSize = '14px';
      p2Valid.style.backgroundColor = '#d54b3d';
      p2Valid.style.color = '#FFFFFF';

      p2Valid.style.position = 'absolute';
      p2Valid.style.width = '70%';
      p2Valid.style.left = '0';
      p2Valid.style.right = '0';
      p2Valid.style.margin = 'auto';
      p2Valid.style.top = '15px';

      p2Valid.classList.add('animate__animated', 'animate__fadeOutDown');
      p2Valid.style.setProperty('--animate-duration', '3s');

      p2Valid.addEventListener('animationend', () => {
        p2Valid.style.display = 'none';
        document.querySelector('.eye-con').style.marginTop = '0';
      });
    }

    // Email
    if (!email) {
      console.log('Email cannot be blank.');
      //   const eNotBlank = document.getElementById('email-notblank');
      //   eNotBlank.addEventListener('change', eNotBlank);
      emailNotBlank();
    } else if (!email.match(emailRegex)) {
      console.log('Please enter a valid email.');
      //   const eNotValid = document.getElementById('email-notvalid');
      //   eNotValid.addEventListener('change', eNotValid);
      emailNotValid();
      //   const eNotBlank = document.getElementById('email-notblank');
      //   eNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Email is valid');
      //   const eNotValid = document.getElementById('email-notvalid');
      //   eNotValid.classList.add('notvalid-msg-clear');
      // document.querySelector('.form-input-field').reset();
    }

    // Username
    if (!userName) {
      console.log('Username cannot be blank.');
      //   const uNotBlank = document.getElementById('username-notblank');
      //   uNotBlank.addEventListener('change', uNotBlank);
      usernameNotBlank();
    } else if (!userName.match(userNameRegex)) {
      console.log('Please enter a valid username.');
      //   const uNotValid = document.getElementById('username-notvalid');
      //   uNotValid.addEventListener('change', uNotValid);
      usernameNotValid();
      //   const uNotBlank = document.getElementById('username-notblank');
      //   uNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Username is valid');
      //   const uNotValid = document.getElementById('username-notvalid');
      //   uNotValid.classList.add('notvalid-msg-clear');
      // document.querySelector('.form-input-field').reset();
    }

    // Password
    if (!password) {
      console.log('Password required.');
      //   const pNotBlank = document.getElementById('password-notblank');
      //   pNotBlank.addEventListener('change', pNotBlank);
      passwordNotBlank();
    } else if (!password.match(passwordRegex)) {
      console.log(
        'Please enter a valid password. Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter.'
      );
      //   const pNotValid = document.getElementById('password-notvalid');
      //   pNotValid.addEventListener('change', pNotValid);
      passwordNotValid();
      //   const pNotBlank = document.getElementById('password-notblank');
      //   pNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Password is valid');
      //   const pNotValid = document.getElementById('password-notvalid');
      //   pNotValid.classList.add('notvalid-msg-clear');
      //   document.querySelector('.eye-con').style.marginTop = '0';
      //   document.querySelector('.eye-con-2').style.marginTop = '0';
      // document.querySelector('.form-input-field').reset();
    }

    // Password Confirmation
    if (!password2) {
      console.log('Please confirm your password.');
      //   const p2NotBlank = document.getElementById('password2-notblank');
      //   p2NotBlank.addEventListener('change', p2NotBlank);
      password2NotBlank();
    } else if (password2 !== password) {
      console.log('Passwords do not match.');
      //   const p2NotValid = document.getElementById('password2-notvalid');
      //   p2NotValid.addEventListener('change', p2NotValid);
      password2NotValid();
      //   const p2NotBlank = document.getElementById('password2-notblank');
      //   p2NotBlank.classList.add('notvalid-msg-clear');

      //   document.querySelector('.eye-con').style.marginTop = '0';
      //   document.querySelector('.eye-con-2').style.marginTop = '0';
    } else {
      console.log('Passwords confirmed!');
      //   const pNotValid = document.getElementById('password2-notvalid');
      //   pNotValid.classList.add('notvalid-msg-clear');

      // document.querySelector('.form-input-field').reset();
    }
    if (password2 === password) {
      console.log('Passwords match.');
      //   const pNotValid = document.getElementById('password2-notvalid');
      //   pNotValid.classList.add('notvalid-msg-clear');
    }

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='modal-container-signup' fluid>
          <Card.Body id='signup-card-body'>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='username-notblank'
              variant='danger'
            ></Alert>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='username-notvalid'
              variant='danger'
            ></Alert>

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

            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='password2-notblank'
              variant='danger'
            ></Alert>
            <Alert
              className='alert-msg'
              style={{ display: 'none' }}
              id='password2-notvalid'
              variant='danger'
            ></Alert>

            <Card.Title id='signup-card-title'>Sign up for ONC</Card.Title>
            <Card.Subtitle id='signup-card-subtitle' className='mb-2'>
              <div id='new-to-site'>It's quick and easy.</div>
            </Card.Subtitle>

            <form onSubmit={handleSubmit}>
              <Form.Group controlId='formBasicName'>
                <Form.Control
                  className='form-input-field'
                  name='userName'
                  // type='name'
                  placeholder='USERNAME'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {/* <div id='username-notblank'></div>
                <div id='username-notvalid'></div> */}
              </Form.Group>

              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  className='form-input-field'
                  name='email'
                  // type='email'
                  placeholder='EMAIL'
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

              <Form.Group controlId='formBasicPassword2'>
                <div className='input-div'>
                  <Form.Control
                    className='form-input-field form-control'
                    id='password2'
                    name='password'
                    type='password'
                    placeholder='CONFIRM PASSWORD'
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                  {/* <div id='password2-notblank'></div>
                  <div id='password2-notvalid'></div> */}
                  <span
                    id='show_password2'
                    onClick={pwToggle}
                    className='toggle-span eye-con eye-con-2 fas fa-eye-slash'
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

              {/* icon unicode: &#xf017; */}
              <label id='dropdown-label'>
                <div className='input-div'>
                  <select
                    id='dropdown'
                    name='country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option key=''>SELECT COUNTRY</option>
                    {countries.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                  {/* <span className='icon-span '>
                    <span className='country-con far fa-clock'></span>
                  </span> */}
                  <span className='icon-span '>
                    <span className='caret-con fas fa-angle-down fa-2x'></span>
                  </span>
                </div>
              </label>

              <Button
                // href='/'
                id='signup-btn'
                variant='primary'
                type='submit'
                block
              >
                SIGN UP
              </Button>
            </form>
          </Card.Body>
        </Container>
      </div>
    </Fragment>
  );
}

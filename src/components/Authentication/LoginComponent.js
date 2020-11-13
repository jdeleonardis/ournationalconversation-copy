import React, { Fragment } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import '../../App.css';

export default function App() {
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
    // Original RegEx
    // const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    // const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // const emailUsernameRegex = /^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    // First part of RegEx: Username must be at least 6 characters and cannot be longer than 11 characters. The characters - and _ are allowed.
    // Second part of RegEx: This validates 99% of emails in use.

    const emailUsernameRegex = /^(?:[a-z0-9_-]{3,15}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/i;
    // First part of RegEx: Username must be at least 3 characters and cannot be longer than 15 characters. The characters - and _ are allowed.
    // Second part of RegEx: This validates 99% of emails in use.

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    // Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter.

    // EMAIL/USERNAME VALIDATION
    function emailNotBlank() {
      const eBlank = document.getElementById('email-notblank');
      eBlank.innerHTML = '<p>Username / Email cannot be blank.</p>';
      eBlank.style.fontSize = '12px';
      eBlank.style.color = '#FF0000';
      eBlank.style.marginTop = '-10px';
    }

    function emailNotValid() {
      const eValid = document.getElementById('email-notvalid');
      eValid.innerHTML = '<p>Please enter a valid username or email.</p>';
      eValid.style.fontSize = '12px';
      eValid.style.color = '#FF0000';
      eValid.style.marginTop = '-10px';
    }

    // PASSWORD VALIDATION
    function passwordNotBlank() {
      const pBlank = document.getElementById('password-notblank');
      pBlank.innerHTML = '<p>Password required.</p>';
      pBlank.style.fontSize = '12px';
      pBlank.style.color = '#FF0000';
      pBlank.style.marginTop = '5px';
    }

    function passwordNotValid() {
      const pValid = document.getElementById('password-notvalid');
      pValid.innerHTML = '<p>Please enter a valid password.</p>';
      pValid.style.fontSize = '12px';
      pValid.style.color = '#FF0000';
      pValid.style.marginTop = '5px';
    }

    // Email
    if (!email) {
      console.log('Email cannot be blank.');
      const eNotBlank = document.getElementById('email-notblank');
      eNotBlank.addEventListener('change', eNotBlank);
      emailNotBlank();
    } else if (!email.match(emailUsernameRegex)) {
      console.log('Please enter a valid email.');
      const eNotValid = document.getElementById('email-notvalid');
      eNotValid.addEventListener('change', eNotValid);
      emailNotValid();
      const eNotBlank = document.getElementById('email-notblank');
      eNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Email is valid');
      const eNotValid = document.getElementById('email-notvalid');
      eNotValid.classList.add('notvalid-msg-clear');
    }

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
    }

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='modal-container-login' fluid>
          <Card.Body id='login-card-body'>
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
              <div className='input-container-email'>
                <input
                  className='form-input-field email-input'
                  name='email'
                  placeholder='USERNAME OR EMAIL'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='hidden-err-msg' id='email-notblank'></div>
              <div className='hidden-err-msg' id='email-notvalid'></div>

              <div className='input-container'>
                <input
                  className='pw-input'
                  id='password'
                  name='password'
                  type='password'
                  placeholder='PASSWORD'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>
                  <span
                    id='show_password'
                    onClick={pwToggle}
                    className='eye-con fas fa-eye-slash'
                  ></span>
                </span>
              </div>
              <div className='hidden-err-msg' id='password-notblank'></div>
              <div className='hidden-err-msg' id='password-notvalid'></div>

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
                LOG IN WITH FACEBOOK
              </Button>
              <Button id='google-login-btn' variant='danger' type='submit'>
                LOG IN WITH GOOGLE
              </Button>
            </form>
          </Card.Body>
        </Container>
      </div>
    </Fragment>
  );
}

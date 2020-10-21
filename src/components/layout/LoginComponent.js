import React, { Fragment } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

import '../../App.css';

export default function App() {
  //   const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    console.log('Form submitted.');

    // Clear form if submission is valid

    // console.log(`
    //   Username: ${userName}
    //   Email: ${email}
    //   Password: ${password}

    // `);
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
      eBlank.innerHTML = '<p>Email cannot be blank.</p>';
      eBlank.style.fontSize = '12px';
      eBlank.style.color = '#FF0000';
      eBlank.style.marginTop = '5px';
    }

    function emailNotValid() {
      const eValid = document.getElementById('email-notvalid');
      eValid.innerHTML = '<p>Please enter a valid email.</p>';
      eValid.style.fontSize = '12px';
      eValid.style.color = '#FF0000';
      eValid.style.marginTop = '5px';
    }

    // PASSWORD VALIDATION
    function passwordNotBlank() {
      const pBlank = document.getElementById('password-notblank');
      pBlank.innerHTML = '<p>Password required.</p>';
      pBlank.style.fontSize = '12px';
      pBlank.style.color = '#FF0000';
      pBlank.style.marginTop = '5px';
      // document.querySelector('.eye-con').classList.add('eye-con-error-msg');
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
    } else if (!email.match(emailRegex)) {
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
      // document.querySelector('.form-input-field').reset();
    }

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='container' fluid>
          <Card id='login-card'>
            <Card.Body id='login-card-body'>
              <Card.Title id='login-card-title'>Log in to ONC</Card.Title>
              <Card.Subtitle id='login-card-subtitle' className='mb-2'>
                <div id='new-to-site'>
                  New to this site?
                  <span id='sign-up'>
                    <a href='/login'>Sign Up</a>
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
                  <div id='email-notblank'></div>
                  <div id='email-notvalid'></div>
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
                    <div id='password-notblank'></div>
                    <div id='password-notvalid'></div>
                    <span className='toggle-span'>
                      <span
                        id='show_password'
                        className='eye-con fas fa-eye'
                      ></span>
                    </span>
                  </div>
                </Form.Group>
                <Form.Group id='remember-group' controlId='formBasicCheckbox'>
                  <span id='forgot'>
                    <a href='/login'>Forgot Password?</a>
                  </span>
                  <Form.Check
                    id='remember-me'
                    type='checkbox'
                    label='Remember me'
                  />
                </Form.Group>

                <Button id='login-btn' variant='primary' type='submit' block>
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
          </Card>
        </Container>
      </div>
    </Fragment>
  );
}

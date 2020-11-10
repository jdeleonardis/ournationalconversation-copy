import React, { Fragment } from 'react';
import countries from './Countries';
import { Container, Card, Button } from 'react-bootstrap';
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
    // Username must be at least 3 characters and cannot be longer than 15 characters. The characters - and _ are allowed.
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // USERNAME VALIDATION
    function usernameNotBlank() {
      const eBlank = document.getElementById('username-notblank');
      eBlank.innerHTML = '<p>Username cannot be blank.</p>';
      eBlank.style.fontSize = '12px';
      eBlank.style.color = '#FF0000';
      eBlank.style.marginTop = '-10px';
    }

    function usernameNotValid() {
      const uValid = document.getElementById('username-notvalid');
      uValid.innerHTML = '<p>Please enter a valid username.</p>';
      uValid.style.fontSize = '12px';
      uValid.style.color = '#FF0000';
      uValid.style.marginTop = '-10px';
    }

    // EMAIL VALIDATION
    function emailNotBlank() {
      const eBlank = document.getElementById('email-notblank');
      eBlank.innerHTML = '<p>Email cannot be blank.</p>';
      eBlank.style.fontSize = '12px';
      eBlank.style.color = '#FF0000';
      eBlank.style.marginTop = '-10px';
    }

    function emailNotValid() {
      const eValid = document.getElementById('email-notvalid');
      eValid.innerHTML = '<p>Please enter a valid email.</p>';
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

    // PASSWORD CONFIRMATION VALIDATION
    function password2NotBlank() {
      const p2Blank = document.getElementById('password2-notblank');
      p2Blank.innerHTML = '<p>Please confirm your password.</p>';
      p2Blank.style.fontSize = '12px';
      p2Blank.style.color = '#FF0000';
      p2Blank.style.marginTop = '-10px';
    }

    function password2NotValid() {
      const p2Valid = document.getElementById('password2-notvalid');
      p2Valid.innerHTML = '<p>Passwords do not match.</p>';
      p2Valid.style.fontSize = '12px';
      p2Valid.style.color = '#FF0000';
      p2Valid.style.marginTop = '-10px';
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
      const eNotBlank = document.getElementById('email-notblank');
      eNotBlank.classList.add('notvalid-msg-clear');
      const eNotValid = document.getElementById('email-notvalid');
      eNotValid.classList.add('notvalid-msg-clear');
    }

    // Username
    if (!userName) {
      console.log('Username cannot be blank.');
      const uNotBlank = document.getElementById('username-notblank');
      uNotBlank.addEventListener('change', uNotBlank);
      usernameNotBlank();
    } else if (!userName.match(userNameRegex)) {
      console.log('Please enter a valid username.');
      const uNotValid = document.getElementById('username-notvalid');
      uNotValid.addEventListener('change', uNotValid);
      usernameNotValid();
      const uNotBlank = document.getElementById('username-notblank');
      uNotBlank.classList.add('notvalid-msg-clear');
    } else {
      console.log('Username is valid');
      const uNotBlank = document.getElementById('username-notblank');
      uNotBlank.classList.add('notvalid-msg-clear');
      const uNotValid = document.getElementById('username-notvalid');
      uNotValid.classList.add('notvalid-msg-clear');
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

    // Password Confirmation
    if (!password2) {
      console.log('Please confirm your password.');
      const p2NotBlank = document.getElementById('password2-notblank');
      p2NotBlank.addEventListener('change', p2NotBlank);
      password2NotBlank();
    } else if (password2 !== password) {
      console.log('Passwords do not match.');
      const p2NotValid = document.getElementById('password2-notvalid');
      p2NotValid.addEventListener('change', p2NotValid);
      password2NotValid();
      const p2NotBlank = document.getElementById('password2-notblank');
      p2NotBlank.classList.add('notvalid-msg-clear');
    } else if (password2 === password) {
      console.log('Passwords confirmed!');
      const pNotValid = document.getElementById('password2-notvalid');
      pNotValid.classList.add('notvalid-msg-clear');
    } else {
      console.log('Passwords match.');
      const pNotValid = document.getElementById('password2-notvalid');
      pNotValid.classList.add('notvalid-msg-clear');
    }

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='modal-container-signup' fluid>
          <Card.Body id='signup-card-body'>
            <Card.Title id='signup-card-title'>Sign up for ONC</Card.Title>
            <Card.Subtitle id='signup-card-subtitle' className='mb-2'>
              <div id='new-to-site'>It's quick and easy.</div>
            </Card.Subtitle>

            <form onSubmit={handleSubmit}>
              <div className='input-container-name'>
                <input
                  className='form-input-field name-input'
                  name='userName'
                  placeholder='USERNAME'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className='hidden-err-msg' id='username-notblank'></div>
              <div className='hidden-err-msg' id='username-notvalid'></div>

              <div className='input-container-email'>
                <input
                  className='form-input-field email-input'
                  name='email'
                  placeholder='EMAIL'
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

              <div className='input-container2'>
                <input
                  className='pw-input2'
                  id='password2'
                  name='password'
                  type='password'
                  placeholder='CONFIRM PASSWORD'
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <span>
                  <span
                    id='show_password2'
                    onClick={pwToggle}
                    className='eye-con fas fa-eye-slash'
                  ></span>
                </span>
              </div>
              <div className='hidden-err-msg' id='password2-notblank'></div>
              <div className='hidden-err-msg' id='password2-notvalid'></div>

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

                  <span className='icon-span '>
                    <span className='caret-con fas fa-chevron-down fa-lg'></span>
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

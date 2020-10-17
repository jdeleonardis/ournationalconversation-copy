import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CountryDropdown from '../layout/CountryDropdown';

import { Helmet } from 'react-helmet';

const initialState = {
  userName: '',
  email: '',
  emailError: '',
  passwordError: '',
  password: '',
  userNameError: '',
  password2: '',
  password2Error: '',
};

export class Signup extends Component {
  state = initialState;

  // Handle change of the inputs
  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let userNameError = '';
    let emailError = '';
    let passwordError = '';
    let password2Error = '';
    const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // General Email Regex (RFC 5322 Official Standard)
    // /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (!this.state.userName) {
      userNameError = 'Username cannot be blank';
    }

    // USERNAME VALIDATION
    // Username RegEx: Username must be any lowercase character, digit, or the symbols "_" and "-", having a length of 3 to 16 characters.
    if (!this.state.userName.match(userNameRegex)) {
      userNameError = 'Please enter a valid username.';
    } else {
      userNameError = '';
      console.log('Username is valid');
    }

    console.log(this.state.userName);

    if (!this.state.userName) {
      userNameError = 'Username cannot be blank.';
    }

    if (userNameError) {
      this.setState({ userNameError });
      return false;
    }

    // Email validation: basic version
    // if (!this.state.email.includes('@')) {
    //   emailError = 'Please enter a valid email.';
    // }

    // EMAIL VALIDATION
    // Email RegEx version
    if (!this.state.email.match(emailRegex)) {
      emailError = 'Please enter a valid email.';
    } else {
      console.log('Email is valid');
    }

    if (!this.state.email) {
      emailError = 'Email cannot be blank.';
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    // PASSWORD VALIDATION
    // Password RegEx: Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter
    if (!this.state.password.match(passwordRegex)) {
      passwordError = 'Please enter a valid password.';
    } else {
      console.log(
        'Password is valid (between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter)'
      );
    }

    if (!this.state.password) {
      passwordError = 'Password is required.';
    }
<<<<<<< HEAD

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

    // PASSWORD CONFIRMATION VALIDATION
    // Password Confirmation RegEx (same as password): Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter

    // if (!this.state.password2.match(passwordRegex)) {
    //   password2Error = 'Please enter a valid password.';
    // } else {
    //   console.log('Password confirmation matches password');
    // }

    if (this.state.password2 === this.state.password) {
      console.log('Password confirmation matches password');
    }

    if (this.state.password2 !== this.state.password) {
      console.error('Passwords do not match.');
      password2Error = 'Passwords do not match.';
    }

    if (!this.state.password2) {
      password2Error = 'Please confirm your password.';
    }

    // if (this.state.password2 !== this.state.password) {
    //   // if (this.state.password2.match(!this.state.password)) {
    //   passwordError = 'Passwords do not match.';
    // }
=======
>>>>>>> 1a812b1f64d90a63ab18fff5926a33a8a6a7d1d4

    if (password2Error) {
      this.setState({ password2Error });
      return false;
    }

    // PASSWORD CONFIRMATION VALIDATION
    // Password Confirmation RegEx (same as password): Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter

    // if (!this.state.password2.match(passwordRegex)) {
    //   password2Error = 'Please enter a valid password.';
    // } else {
    //   console.log('Password confirmation matches password');
    // }

    if (this.state.password2 === this.state.password) {
      console.log('Password confirmation matches password');
    }

    if (this.state.password2 !== this.state.password) {
      console.log('Passwords do not match.');
      password2Error = 'Passwords do not match.';
    }

    if (!this.state.password2) {
      password2Error = 'Please confirm your password.';
    }

    if (password2Error) {
      this.setState({ password2Error });
      return false;
    }

    return true;
  };

  // Submit the state
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      // Clear form if submission is valid
      this.setState(initialState);
    }
  };

  render() {
    // const { country, region } = this.state; // use this if including region in dropdown
    // const { country } = this.state;
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Sign Up</title>
          </Helmet>

          <Container className='container' fluid>
            <br />

            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <Card id='signup-card'>
                    <Card.Body id='signup-card-body'>
                      <Card.Title id='signup-card-title'>
                        Sign up for ONC
                      </Card.Title>
                      <Card.Subtitle id='signup-card-subtitle' className='mb-2'>
                        <div id='new-to-site'>It's quick and easy.</div>
                      </Card.Subtitle>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='formBasicUserName'>
                          {/* <Form.Label>USERNAME</Form.Label> */}
                          <Form.Control
                            className='form-input-field'
                            // type='name'
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                            placeholder='USERNAME'
                          />
                          <div
                            style={{
                              fontSize: 12,
                              color: '#FF0000',
                              marginTop: '5px',
                            }}
                          >
                            {this.state.userNameError}
                          </div>
                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                          {/* <Form.Label>EMAIL</Form.Label> */}
                          <Form.Control
                            className='form-input-field'
                            // type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder='EMAIL'
                          />
                          <div
                            style={{
                              fontSize: 12,
                              color: '#FF0000',
                              marginTop: '5px',
                            }}
                          >
                            {this.state.emailError}
                          </div>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>
                          {/* <Form.Label>PASSWORD</Form.Label> */}
                          <Form.Control
                            className='form-input-field'
                            // className='fas fa-eye'
                            // id='eye'
                            type='password'
                            name='password'
                            // placeholder='PASSWORD &#xf06e;' // Font Awesome Unicode
                            placeholder='PASSWORD'
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <div
                            style={{
                              fontSize: 12,
                              color: '#FF0000',
                              marginTop: '5px',
                            }}
                          >
                            {this.state.passwordError}
                          </div>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword2'>
                          {/* <Form.Label>CONFIRM PASSWORD</Form.Label> */}
                          <Form.Control
                            className='form-input-field'
                            type='password'
                            name='password2'
                            placeholder='CONFIRM PASSWORD'
                            value={this.state.password2}
                            onChange={this.handleChange}
                          />
                          <div
                            style={{
                              fontSize: 12,
                              color: '#FF0000',
                              marginTop: '5px',
                            }}
                          >
                            {this.state.password2Error}
                          </div>
                        </Form.Group>

                        <CountryDropdown />

                        <Button
                          id='signup-btn'
                          variant='primary'
                          type='submit'
                          block
                        >
                          SIGN UP
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Signup;

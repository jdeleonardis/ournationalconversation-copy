import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import LoginComponent from '../layout/LoginComponent';

const initialState = {
  userName: '',
  email: '',
  password: '',
  userNameError: '',
  emailError: '',
  passwordError: ''
};

export class Login extends Component {
  state = initialState;

  // Handle change of the inputs
  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    // let userNameError = '';
    let emailError = '';
    let passwordError = '';
    const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // General Email Regex (RFC 5322 Official Standard)
    // /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    // if (!this.state.userName) {
    //   userNameError = 'name cannot be blank';
    // }

    // if (!this.state.email) {
    //   emailError = 'Please enter your email address or username.';
    // }

    // Email validation: basic version
    // if (!this.state.email.includes('@')) {
    //   emailError = 'Please enter a valid email.';
    // }

    if (
      this.state.email.match(emailRegex) ||
      this.state.userName.match(userNameRegex)
    ) {
      alert('Great!');
    } else {
      emailError = 'Please enter a valid username or email.';
    }

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

    if (passwordError) {
      this.setState({ passwordError });
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
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Login</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <LoginComponent />
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>

            {/* <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <Card id='login-card'>
                    <Card.Body id='login-card-body'>
                      <Card.Title id='login-card-title'>
                        Log in to ONC
                      </Card.Title>
                      <Card.Subtitle id='login-card-subtitle' className='mb-2'>
                        <div id='new-to-site'>
                          New to this site?
                          <span id='sign-up'>
                            <a href='/login'>Sign Up</a>
                          </span>
                        </div>
                      </Card.Subtitle>
                      <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='formBasicEmail'>
                          <Form.Control
                            className='form-input-field'
                            id='email-login-input'
                            name='email'
                            placeholder='USERNAME OR EMAIL'
                            value={this.state.email}
                            onChange={this.handleChange}
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

                          <Form.Group controlId='formBasicPassword'>
                            <div className='input-div'>
                              <Form.Control
                                className='form-input-field form-control'
                                id='password'
                                type='password'
                                name='password'
                                placeholder='PASSWORD'
                                value={this.state.password}
                                onChange={this.handleChange}
                              />
                              <span className='toggle-span'>
                                <span
                                  id='show_password'
                                  className='eye-con fas fa-eye'
                                ></span>
                              </span>
                            </div>
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
                        </Form.Group>

                        <Form.Group
                          id='remember-group'
                          controlId='formBasicCheckbox'
                        >
                          <span id='forgot'>
                            <a href='/login'>Forgot Password?</a>
                          </span>
                          <Form.Check
                            id='remember-me'
                            type='checkbox'
                            label='Remember me'
                          />
                        </Form.Group>
                        <Button
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
                        <Button
                          id='facebook-login-btn'
                          variant='primary'
                          type='submit'
                        >
                          LOG IN WITH FACEBOOK
                        </Button>
                        <Button
                          id='google-login-btn'
                          variant='danger'
                          type='submit'
                        >
                          LOG IN WITH GOOGLE
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row> */}
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Login;

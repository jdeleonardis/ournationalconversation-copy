import React, { Component, Fragment } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Form,
  FormControl,
  Button,
  Card,
} from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const initialState = {
  userName: '',
  email: '',
  password: '',
  userNameError: '',
  emailError: '',
  passwordError: '',
};

// Include error messages displayed to user
// const initialState = {
//   userName: '',
//   email: '',
//   password: '',
//   userNameError: '',
//   emailError: '',
//   passwordError: '',
// };

export class Login extends Component {
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
    // let userNameError = '';
    let emailError = '';
    let passwordError = '';
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

    // RegEx version
    if (!this.state.email.match(emailRegex)) {
      emailError = 'Please enter a valid email.';
    } else {
      console.log('Email is valid');
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    // RegEx version: password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    if (!this.state.password.match(passwordRegex)) {
      passwordError = 'Please enter a valid password.';
    } else {
      console.log(
        'Password is valid (between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter)'
      );
    }

    // Password validation: basic version
    // console.log(this.state.password);
    // if (this.state.password < 6) {
    //   passwordError = 'Invalid password. Please try again.';
    // }

    // if (!this.state.password) {
    //   passwordError = 'Password is required.';
    // }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

    // if (this.state.email === '' || this.state.password === '') {
    //   userNameError = 'Please fill in all fields';
    // }

    // if (userNameError) {
    //   this.setState({ userNameError });
    //   return false;
    // }

    // if (!this.state.password.length > 6) {
    //   passwordError = 'Please enter a valid password';
    // }

    // if (emailError || passwordError) {
    //   this.setState({ emailError, passwordError });
    //   return false;
    // }

    // if (this.state.password.length < 6) {
    //   passwordError = 'Please enter a valid email';
    // }

    return true;
  };

  // Submit the state
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      // console.log(this.state);

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

          {/* START DUMMY NAVBARS */}
          <Navbar id='dummy-nav' bg='dark' variant='dark'>
            <Navbar.Brand>Dummy Navbar: Login Component</Navbar.Brand>
          </Navbar>
          <Navbar bg='light' variant='light'>
            <DropdownButton id='dropdown-basic-button' title='NEWS FILTERS'>
              <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
              <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
            </DropdownButton>
            <Nav className='mr-auto'>
              <Nav.Link href='#'>Covid-19 Alert</Nav.Link>
              <Nav.Link href='#'>Biden VP Pick</Nav.Link>
              <Nav.Link href='#'>School Reopenings</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='outline-primary'>Search</Button>
            </Form>
          </Navbar>

          {/* END DUMMY NAVBARS */}

          <Container className='container' fluid>
            <br />

            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <Card id='login-card'>
                    <Card.Body>
                      <Card.Title id='login-card-title'>
                        Log In to ONC
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
                          <Form.Label>USERNAME OR EMAIL</Form.Label>
                          <Form.Control
                            // type='email'
                            name='email'
                            // placeholder='Username or Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: 'red' }}>
                            {this.state.emailError}
                          </div>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                          <Form.Label>PASSWORD</Form.Label>
                          <Form.Control
                            type='password'
                            name='password'
                            // placeholder='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                          <div style={{ fontSize: 12, color: 'red' }}>
                            {this.state.passwordError}
                          </div>
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
                        <h2 id='or-text'>
                          <span>OR</span>
                        </h2>
                        <Button
                          id='facebook-login-btn'
                          variant='primary'
                          type='submit'
                          block
                        >
                          SIGN IN WITH&nbsp;&nbsp;
                          <i class='fab fa-facebook'></i>
                        </Button>
                        <Button
                          id='twitter-login-btn'
                          variant='primary'
                          type='submit'
                          block
                        >
                          SIGN IN WITH&nbsp;&nbsp;
                          <i class='fab fa-twitter'></i>
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

export default Login;

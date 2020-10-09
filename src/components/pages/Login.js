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

export class Login extends Component {
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
                        New to this site?{' '}
                        <span id='sign-up'>
                          <a href='/login'>Sign Up</a>
                        </span>
                      </Card.Subtitle>
                      <Form>
                        <Form.Group controlId='formBasicEmail'>
                          <Form.Label>USERNAME OR EMAIL</Form.Label>
                          <Form.Control type='email' />
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword'>
                          <Form.Label>PASSWORD</Form.Label>
                          <Form.Control type='password' />
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

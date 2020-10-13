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

export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Contact</title>
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
                      <Card.Title id='contact-card-title'>
                        Contact Us
                      </Card.Title>
                      <Card.Subtitle id='login-card-subtitle' className='mb-2'>
                        <div id='contact-subtitle'>
                          Interested in contacting us? We're happy to hear from
                          you!
                        </div>
                      </Card.Subtitle>
                      <Form>
                        <Form.Group controlId='formBasicEmail'>
                          <Form.Label>Who do you want to reach?</Form.Label>
                          <DropdownButton
                            id='dropdown-basic-button'
                            title='Menu'
                          >
                            <Dropdown.Item href='#/action-1'>
                              Editorial matters
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-2'>
                              Business propositions
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-3'>
                              Advertising inquiries
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-4'>
                              Legal issues
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-5'>
                              Employment inquiries
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-6'>
                              Emergencies
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-7'>
                              For questions or comments about our webisodes or
                              videos
                            </Dropdown.Item>
                            <Dropdown.Item href='#/action-8'>
                              For general queries or comments
                            </Dropdown.Item>
                          </DropdownButton>
                        </Form.Group>
                        <Form.Group controlId='formBasicName'>
                          <Form.Label>Name</Form.Label>
                          <Form.Control type='name' required />
                        </Form.Group>
                        <Form.Group controlId='formBasicEmail'>
                          <Form.Label>Email</Form.Label>
                          <Form.Control type='email' required />
                        </Form.Group>
                        <Form.Group controlId='exampleForm.ControlTextarea1'>
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as='textarea'
                            rows='4'
                            placeholder='Write your message'
                            required
                          />
                        </Form.Group>
                        <Button
                          id='login-btn'
                          variant='primary'
                          type='submit'
                          block
                        >
                          SEND MESSAGE
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

export default Contact;

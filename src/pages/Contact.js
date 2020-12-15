import React, { Fragment } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import subjects from '../components/Misc/ContactSubjects';
import RailButtons from '../components/Misc/RailButtons';
import '../styles/contact.css';

// export class Contact extends Component {
//   render() {

const Contact = () => {
  const [subject, setSubject] = React.useState('');
  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation | Contact</title>
        </Helmet>

        <Container className='container' fluid>
          <br />

          <Row>
            {/* <Col md={3}></Col> */}
            <Col md={9}>
              <div>
                <Card id='contact-card'>
                  <Card.Body>
                    <Card.Title id='contact-card-title'>CONTACT</Card.Title>
                    <Card.Subtitle id='login-card-subtitle' className='mb-2'>
                      <div id='contact-subtitle-text'>
                        We’d love to hear from you! Send us a question or
                        comment and we’ll be in touch as soon as possible.
                      </div>
                    </Card.Subtitle>
                    <Form>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label className='label'>SUBJECT</Form.Label>

                        <label id='dropdown-label'>
                          <div className='input-div'>
                            <select
                              id='dropdown'
                              name='subjects'
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              required
                            >
                              <option key=''>SELECT SUBJECT</option>
                              {subjects.map((subject) => (
                                <option key={subject}>{subject}</option>
                              ))}
                            </select>
                            <span className='icon-span '>
                              <span className='contact-caret-con fas fa-chevron-down fa-lg'></span>
                            </span>
                          </div>
                        </label>
                      </Form.Group>
                      <Form.Group controlId='formBasicName'>
                        <Form.Label className='label'>YOUR NAME</Form.Label>
                        <Form.Control
                          id='name-input'
                          placeholder='FIRST AND LAST NAME'
                          type='name'
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label className='label'>
                          YOUR EMAIL ADDRESS
                        </Form.Label>
                        <Form.Control
                          id='email-input'
                          placeholder='EMAIL'
                          type='email'
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId='exampleForm.ControlTextarea1'>
                        <Form.Label className='label'>YOUR MESSAGE</Form.Label>
                        <Form.Control as='textarea' rows='6' required />
                      </Form.Group>
                      <Button id='send-btn' variant='primary' type='submit'>
                        SEND MESSAGE
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={3}>
              <div className='rail-group' style={{ marginTop: '-4px' }}>
                <RailButtons />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Contact;

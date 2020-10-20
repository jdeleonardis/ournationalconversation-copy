import React, { Fragment } from 'react';
import countries from '../layout/Countries';
import {
  Container,
  Card,
  Form,
  // Dropdown,
  // DropdownButton,
  Button,
} from 'react-bootstrap';
import '../../App.css';

export default function App() {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [country, setCountry] = React.useState('');

  const handleSubmit = (event) => {
    console.log(`
      Username: ${userName}
      Email: ${email}
      Password: ${password}
      Password2: ${password2}
      Country: ${country}
    `);

    event.preventDefault();
  };

  return (
    <Fragment>
      <div>
        <Container className='container' fluid>
          <Card id='signup-card'>
            <Card.Body id='signup-card-body'>
              <Card.Title id='signup-card-title'>Sign up for ONC</Card.Title>
              <Card.Subtitle id='signup-card-subtitle' className='mb-2'>
                <div id='new-to-site'>It's quick and easy.</div>
              </Card.Subtitle>

              <form onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    className='form-input-field'
                    name='userName'
                    type='name'
                    placeholder='USERNAME'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    className='form-input-field'
                    name='email'
                    type='email'
                    placeholder='EMAIL'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
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
                      required
                    />
                    <span className='toggle-span'>
                      <span
                        id='show_password'
                        className='eye-con fas fa-eye'
                      ></span>
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
                      required
                    />
                    <span className='toggle-span'>
                      <span
                        id='show_password2'
                        className='eye-con fas fa-eye'
                      ></span>
                    </span>
                  </div>
                </Form.Group>

                <label>
                  Country:
                  <select
                    name='country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option key=''></option>
                    {countries.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                </label>

                {/* <Form.Group>
        <select
          id='dropdown-basic-button'
          title='SELECT COUNTRY'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        >
          <option key=''></option>
          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </Form.Group> */}

                <Button id='signup-btn' variant='primary' type='submit' block>
                  SIGN UP
                </Button>

                {/* <button>Submit</button> */}
              </form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
}

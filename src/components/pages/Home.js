import React, { Component, Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation</title>
          </Helmet>
          <Container className='container' fluid>
            <div>
              <h1>Home</h1>
              <Button
                style={{
                  margin: '10px',
                }}
                variant='success'
                href='/'
              >
                Home
              </Button>
              <Button
                style={{
                  margin: '10px',
                }}
                variant='success'
                href='/login'
              >
                Login
              </Button>
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Home;

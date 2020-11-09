import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export class Opinions extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Opinions</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <h3>Opinions</h3>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Opinions;

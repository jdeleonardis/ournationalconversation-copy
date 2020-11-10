import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../layout/SortBy';
import FilterBar from '../layout/FilterBar';

export class Opinions extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Opinions</title>
          </Helmet>

          <Container className='container' fluid>
            {/* <br />
            <h3>Opinions</h3> */}
            <SortBy />
            <FilterBar />
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Opinions;

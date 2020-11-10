import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../layout/SortBy';
import FilterBar from '../layout/FilterBar';
import Comments from '../layout/ContentCards/Comments';

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
            <Row>
              <Col>
                <SortBy
                  pageName='Opinions'
                  pageTitle='OPINIONS'
                  horizLineTextLeft='Newly Arrived'
                />
                <br />
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <FilterBar />
              </Col>
              <Col md={6}>
                <Comments />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Opinions;

import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../layout/SortBy';
import FilterBar from '../layout/FilterBar';
// import Comments from '../layout/ContentCards/ContentCard';
import ContentCard from '../layout/ContentCards/ContentCard';
import RailButtons from '../layout/RailButtons';

export class Webisodes extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Webisodes</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col>
                <SortBy
                  pageName='Webisodes'
                  pageTitle='WEBISODES'
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
                <ContentCard type='webisode' />
                {/* <Comments /> */}
              </Col>
              <Col md={3}>
                <RailButtons />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Webisodes;

import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../layout/SortBy';
import FilterBar from '../layout/FilterBar';
import * as type from '../layout/ContentCards/constants/cardConstants';
import ContentCard from '../layout/ContentCards/ContentCard';
import RailButtons from '../layout/RailButtons';
import GlobalButton from '../layout/GlobalButton';

export class Podcasts extends Component {
  render() {
    const style = {
      textAlign: 'center',
      marginBottom: '40px',
    };

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Podcasts</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col>
                <SortBy
                  pageName='Podcasts'
                  pageTitle='PODCASTS'
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
                <ContentCard type={type.PODCAST} />
                <ContentCard type={type.PODCAST} />
                <br />
                <div style={style}>
                  <GlobalButton label='SEE MORE PODCASTS' />
                </div>
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

export default Podcasts;

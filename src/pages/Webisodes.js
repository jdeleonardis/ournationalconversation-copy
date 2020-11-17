import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../components/Filters/SortBy';
import FilterBar from '../components/Filters/FilterBar';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import ContentCard from '../components/Content/ContentCards/ContentCard';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';

export class Webisodes extends Component {
  render() {
    const style = {
      textAlign: 'center',
    };

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
                <ContentCard type={type.WEBISODE} />
                <ContentCard type={type.WEBISODE} />
                <br />
                <div style={style}>
                  <GlobalButton fontWeight='700' label='SEE MORE WEBISODES' />
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

export default Webisodes;
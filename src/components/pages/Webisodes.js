import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../layout/SortBy';
import FilterBar from '../layout/FilterBar';
import * as type from '../layout/ContentCards/constants/cardConstants';
import ContentCard from '../layout/ContentCards/ContentCard';
import RailButtons from '../layout/RailButtons';
import GlobalButton from '../layout/GlobalButton';

export class Webisodes extends Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '104.5%',
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
                <div
                  style={{
                    width: '110%',
                    marginLeft: '-15px',
                    // fontSize: '14px',
                  }}
                >
                  <ContentCard type={type.WEBISODE} />
                  <ContentCard type={type.WEBISODE} />
                </div>
                <br />
                <div style={style}>
                  <GlobalButton
                    padding='7px 55px'
                    fontWeight='700'
                    label='SEE MORE WEBISODES'
                  />
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

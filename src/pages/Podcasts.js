import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../components/Filters/SortBy';
import FilterBar from '../components/Filters/FilterBar';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import ContentCard from '../components/Content/ContentCards/ContentCard';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';

export class Podcasts extends Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '104%',
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
              <Col md={3}>
                <SearchBox pageName='Podcasts' />
              </Col>
              <Col md={6}>
                <SortBy
                  pageName='Podcasts'
                  pageTitle='PODCASTS'
                  horizLineTextLeft='Newly Arrived'
                />
                <br />
              </Col>
              <Col md={3}></Col>
            </Row>

            <Row>
              <Col md={3}>
                <FilterBar />
              </Col>
              <Col md={6}>
                <div
                  style={{
                    width: '111%',
                    marginLeft: '-20px',
                  }}
                >
                  <ContentCard type={type.PODCAST} />
                  <ContentCard type={type.PODCAST} />
                  <ContentCard type={type.PODCAST} />
                  <ContentCard type={type.PODCAST} />
                  <ContentCard type={type.PODCAST} />
                </div>
                <br />
                <div style={style}>
                  <GlobalButton
                    padding='7px 55px'
                    fontWeight='700'
                    label='SEE MORE PODCASTS'
                  />
                </div>
              </Col>
              <Col md={3}>
                <div style={{ marginTop: '-88px' }}>
                  <RailButtons />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Podcasts;

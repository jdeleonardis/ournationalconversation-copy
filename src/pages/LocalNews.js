import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import FilterBar from '../components/Filters/FilterBar';
import NewsCard from '../components/Content/ContentCards/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';
import SortByLocal from '../components/Filters/SortByLocal';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';

const Home = () => {
  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation</title>
        </Helmet>
        <Container className='container' fluid>
          <br />

          <Row>
            <Col md={9}>
              <SortByLocal />
              <br />
              <NewsCard />
            </Col>
            <Col md={3}>
              <RailButtons />
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{ marginTop: '40px', marginBottom: '-10px' }}>
                <TopHorizontalLine lineLabel='SOLUTIONS' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={9}></Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;

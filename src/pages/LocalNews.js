import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';

import NewsCard from '../components/Content/ContentCards/NewsCard';
import BreakingNewsCard from '../components/Content/ContentCards/BreakingNewsCard';
import SortByLocal from '../components/Filters/SortByLocal';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import OpinionBoard from '../components/Content/ContentBoards/ContentBoard';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';

const Home = () => {
  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation | Local News</title>
        </Helmet>
        <Container className='container' fluid>
          <br />

          <Row>
            <Col md={9}>
              <SortByLocal />
              <br />
              <NewsCard />
              <br />
              <Row>
                <Col>
                  <BreakingNewsCard />
                </Col>
                <Col>
                  <BreakingNewsCard />
                </Col>
                <Col>
                  <BreakingNewsCard />
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              <RailButtons />

              <div
                style={{
                  marginLeft: '0em',
                  marginTop: '40px',
                  marginBottom: '-10px',
                }}
              >
                <TopHorizontalLine lineLabel='OPINIONS' />
              </div>
              <br />
              <BreakingNewsCard />
              <br />
              <Row>
                <GlobalButton
                  className='global-btn'
                  padding='0.5em 1em'
                  margin='2em'
                  fontWeight='700'
                  label='SEE MORE OPINIONS'
                />
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <br />
            <Col></Col>
            <Col>
              <GlobalButton
                className='global-btn'
                padding='7px 57.5px'
                fontWeight='700'
                label='SEE MORE NEWS'
              />
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col>
              <div style={{ marginTop: '40px', marginBottom: '-10px' }}>
                <TopHorizontalLine lineLabel='SOLUTIONS' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={9}>
              {/* <OpinionBoard type={type.SOLUTION} data={data} /> */}
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;

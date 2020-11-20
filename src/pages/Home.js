import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Solution from '../components/Content/ContentBoards/SolutionBoard';
import SignupModalComponent from '../components/Authentication/SignupModalButtonAndComponent';
import LoginModalComponent from '../components/Authentication/LoginModalButtonAndComponent';
import GlobalButton from '../components/Misc/GlobalButton';
import News from '../components/Content/ContentBoards/NewsBoard';
import NewsCard from '../components/Content/ContentCards/NewsCard';
import TagLine from '../components/Content/ContentCards/TagLines';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';
import RailButtons from '../components/Misc/RailButtons';

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
            <Col>
              <TopHorizontalLine lineLabel='TOP STORIES' />
            </Col>
          </Row>

          <Row>
            <Col md={9}>
              <div
                style={{
                  width: '104%',
                  //   width: '106.5%',
                  marginLeft: '-15px',
                }}
              >
                <NewsCard />
              </div>
            </Col>
            <Col md={3}>
              <div id='rail-group'>
                <RailButtons />
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={9}>
              <div
                style={{
                  width: '104%',
                  //   width: '106.5%',
                  //   marginLeft: '-15px',
                  padding: 'auto',
                }}
              >
                <News />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{ marginTop: '40px' }}>
                <TopHorizontalLine lineLabel='SOLUTIONS' />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <Solution />
              <div style={{ textAlign: 'center' }}>
                <GlobalButton label='SEE MORE SOLUTIONS' />
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>

          <SignupModalComponent />
          <LoginModalComponent />
        </Container>
      </div>
    </Fragment>
  );
};

export default Home;

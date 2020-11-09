import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Solution from '../layout/ContentBoards/SolutionBoard';
import SignupModalComponent from '../layout/SignupModalButtonAndComponent';
import LoginModalComponent from '../layout/LoginModalButtonAndComponent';
import GlobalButton from '../layout/GlobalButton';
import News from '../layout/ContentBoards/NewsBoard';
import NewsCard from '../layout/ContentCards/NewsCard';

const Home = () => {
  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation</title>
        </Helmet>
        <Container className='container' fluid>
          <div>
            <h1>Home</h1>
            <Row>
              <Col md={12}>
                <Button
                  style={{
                    margin: '10px',
                  }}
                  variant='success'
                  href='/'
                >
                  Home
                </Button>
                <div
                  className='flexbox-container'
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <SignupModalComponent />
                  {/* <Signup2ModalComponent /> */}
                  <LoginModalComponent />
                  {/* <Login2ModalComponent /> */}
                </div>
                <Button
                  style={{
                    margin: '10px',
                  }}
                  variant='success'
                  href='/contact'
                >
                  Contact
                </Button>
                <GlobalButton
                  link='/'
                  label='Small Button'
                  width='auto'
                  padding='4px 8px'
                  fontSize='12px'
                />
                <br />
                <GlobalButton link='/' label='Large Button' />
                <br />
                <GlobalButton
                  link='/contact'
                  label='BLOCK LEVEL BUTTON'
                  width='100%'
                />
                <br /> <br />
                <p>Dummy home page.</p>
                <p>
                  Whoever works on the home page can go ahead and get ride of
                  all this code and use this file for the home page.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <NewsCard />
      <News />
      <Solution />
    </Fragment>
  );
};

export default Home;

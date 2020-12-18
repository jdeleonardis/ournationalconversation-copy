import React, { Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Solution from '../components/Content/ContentBoards/ContentBoard';

import GlobalButton from '../components/Misc/GlobalButton';
import News from '../components/Content/ContentBoards/NewsBoard';
import NewsCard from '../components/Content/ContentCards/NewsCard';
import TopHorizontalLine from '../components/Misc/TopHorizontalLine';
import RailButtons from '../components/Misc/RailButtons';
import data from '../data/cardTempData/solution.json';
import '../styles/TempLandingPage.css';
import bookCover from '../img/book-cover.jpg';

const TempLandingPage = () => {

  const watchOurVideo = () => {
    alert("watch video")
  }

  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation</title>
        </Helmet>
        <Container className='container' fluid>
          <br />
          <Row>
            <Col md={6}>
                <Container>
                    <div id='comingSoon'>
                        COMING SOON
                    </div>                    
                    <div id='joinONC'>
                        Join ONC.com, a non-partisan news, opinion, and solution platform.
                    </div>
                    <br></br>
                    <Button
                        id='submitArticle-btn'
                        onClick={watchOurVideo}
                    >
                        WATCH OUR VIDEO
                    </Button>                    
                    <div id='ourBlog'>
                        Our Blog
                    </div>                    

                </Container>
              <div
                // style={{
                //   width: '104%',
                //   marginLeft: '-15px',
                // }}
              >
                <NewsCard />
              </div>
            </Col>
            <Col md={6}>
                <Container>
                    <div id='checkOutBook'>
                        Check Out Our Book
                    </div>
                    <img src={bookCover} 
                        style={{
                        width: '100%',
                        padding: '20px 100px 20px'}}/>
                    <Button
                        id='submitArticle-btn'
                        onClick={watchOurVideo}
                    >
                        BUY IT ON AMAZON
                    </Button>
                </Container>
            </Col>
          </Row>          
        </Container>
      </div>
    </Fragment>
  );
};

export default TempLandingPage;

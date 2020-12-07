import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import NewsCard from '../components/Content/ContentCards/NewsCard';
import NewsletterBarButtonNoSort from '../components/Filters/NewsletterBarButtonNoSort';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import TopHorizontalLineSmall from '../components/Misc/TopHorizontalLineSmall';
import OpinionBoard from '../components/Content/ContentBoards/ContentBoard';
import FeaturedArticleCard from '../components/Content/ContentCards/FeaturedArticleCard';
import data from '../data/cardTempData/opinion.json';

const Newsletter = () => {

  const style = {
      textAlign: 'center',
      width: '104%',
  };

  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation | Newsletter</title>
        </Helmet>
        <Container className='container' fluid>
          <br />

          <Row>
            <Col md={9}>
              <NewsletterBarButtonNoSort 
                pageName="Today's Newsletter"
                pageTitle="TODAY'S NEWSLETTER"
                horizLineTextLeft='Daily Top 10 Stories'
              />
              <br />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <br />
              <div
                style={style}
              >
                <GlobalButton
                    className='global-btn'
                    padding='7px 55px'
                    label='SEE MORE TOP STORIES'
                />
              </div>
              <div style={{ marginTop: '40px', marginLeft: '10px', marginBottom: '-10px' }}>
                <TopHorizontalLineSmall horizLineTextLeft='Daily Top Opinions' />
              </div>             

              <div
                  style={{
                    width: '100%',
                    marginLeft: '-15px',
                    marginTop: '20px',
                  }}
                >
                  <OpinionBoard type={type.OPINION} data={data} />
              </div>
              <br />
              <div
                style={style}
              >
                <GlobalButton
                    className='global-btn'
                    padding='7px 55px'
                    label='SEE MORE OPINIONS'
                />
              </div>  
              <br />            

            </Col>
            <Col md={3}>
              <RailButtons />
              <br />
              <FeaturedArticleCard />
              <br />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    </Fragment>
  );
};

export default Newsletter;
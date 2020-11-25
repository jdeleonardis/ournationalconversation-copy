import React from 'react';
import { Card, Image, Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../ContentCards/ContentCard';
import NewsCard from '../ContentCards/NewsCard';
import BreakingNews from '../ContentCards/BreakingNewsCard';
import GlobalButton from '../../Misc/GlobalButton';
import '../../../styles/NewsBoard.css';

function News() {
  return (
    <div>
      <Container>
        <Row>
          <div className='news-card'>
            <Col>
              <NewsCard vertical={true} />
            </Col>
          </div>
          <div className='news-card'>
            <Col>
              <NewsCard vertical={true} />
            </Col>
          </div>
          <div className='news-card'>
            <Col>
              <BreakingNews />
            </Col>
          </div>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <br />
          <GlobalButton
            className='global-btn'
            padding='7px 57.5px'
            fontWeight='700'
            label='SEE MORE NEWS'
          />
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default News;

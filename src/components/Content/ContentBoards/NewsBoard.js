import React from 'react';
import { Card, Image, Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../ContentCards/ContentCard';
import NewsCard from '../ContentCards/NewsCard';
import BreakingNews from '../ContentCards/BreakingNewsCard';
import GlobalButton from '../../Misc/GlobalButton';

function News() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <NewsCard vertical={true} />
          </Col>

          <Col>
            <NewsCard vertical={true} />
          </Col>

          <Col>
            <BreakingNews />
          </Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <br />
          <GlobalButton
            className='global-btn'
            padding='7px 55px'
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

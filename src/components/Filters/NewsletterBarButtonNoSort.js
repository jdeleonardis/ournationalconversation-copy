import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TopHorizontalLineSmall from '../Misc/TopHorizontalLineSmall'
import NewsletterOverlay from './Overlay/NewsletterOverlay'

const NewsletterBarButtonNoSort = (props) => {
  return (
    <div className='main'>
      <Row>
        <Col md={6}>
          <h2 className='page-title'>
            <strong>{props.pageTitle}</strong>
          </h2>
        </Col>
        <Col md={6}>
          <div
            style={{
              width: '100%',
              marginLeft: '-15px'}}
          >
          <NewsletterOverlay />
          </div>
        </Col>
      </Row>
      <TopHorizontalLineSmall 
        horizLineTextLeft={props.horizLineTextLeft}
      />
    </div>
  );
};

export default NewsletterBarButtonNoSort;

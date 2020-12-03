import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GlobalButton from '../Misc/GlobalButton'
import TopHorizontalLineSmall from '../Misc/TopHorizontalLineSmall'

const CustomBarButtonNoSort = (props) => {
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
            <GlobalButton
              padding='7px 12px'
              fontWeight='700'
              float='right'
              label={props.buttonLabel}
              />
          </div>
        </Col>
      </Row>
      <TopHorizontalLineSmall 
        horizLineTextLeft={props.horizLineTextLeft}
      />
    </div>
  );
};

export default CustomBarButtonNoSort;

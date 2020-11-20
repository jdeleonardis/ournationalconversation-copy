import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../styles/TopHorizontalLine.css';

const TopHorizontalLine = (props) => (
  <div>
    <Row>
      <Col md={9}>
        <div className='textdiv' style={{ width: '102%' }}>
          <div id='main-label'>{props.lineLabel}&nbsp;&nbsp;</div>
          <div className='divider-line'></div> &nbsp;&nbsp;&nbsp;
        </div>
      </Col>
      <Col md={3}></Col>
    </Row>
  </div>
);

export default TopHorizontalLine;

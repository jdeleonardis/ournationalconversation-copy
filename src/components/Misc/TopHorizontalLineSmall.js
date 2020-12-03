import React from 'react';
import { Col, Row } from 'react-bootstrap';

const TopHorizontalLineSmall = (props) => (
    <Row>
        <Col>
        <div
            className='textdiv'
            style={{ width: '98.6%', marginBottom: '-25px'}}
        >
            <div className='texttitle'>
            {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
            </div>
            <div className='divider'></div>&nbsp;
        </div>
        </Col>
    </Row>
);

export default TopHorizontalLineSmall;
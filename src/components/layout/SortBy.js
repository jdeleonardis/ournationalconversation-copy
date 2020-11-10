import React from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import '../../App.css';

const SortBy = (props) => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <p>Search Opinions:</p>
          <Form inline>
            <FormControl
              id='small-search'
              type='text'
              placeholder='ENTER KEYWORDS'
              className='mr-sm-2'
            ></FormControl>
            <i class='fas fa-search'></i>
          </Form>
        </Col>

        <Col md={5}>
          <h2>
            <strong>OPINIONS</strong>
          </h2>
          <p>
            Newly Arrived&nbsp;&nbsp;&nbsp;
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            <i className='fas fa-minus'> </i>
            &nbsp;&nbsp;&nbsp;Sort by: DEFAULT
            <i class='fas fa-caret-down'></i>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default SortBy;

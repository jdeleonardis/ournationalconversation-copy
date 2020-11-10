import React from 'react';
import { Row, Col, Form, FormControl } from 'react-bootstrap';
import '../../App.css';

const SortBy = (props) => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div id='search-div'>
            <p id='small-search-text'>Search {props.pageName}:</p>
            {/* <Form inline>
            <FormControl
              id='small-search'
              type='text'
              placeholder='ENTER KEYWORDS'
              className='mr-sm-2'
            ></FormControl>
            <i class='fas fa-search'></i>
          </Form> */}
            <input
              id='small-search-field'
              type='text'
              placeholder='ENTER KEYWORDS'
            />
            <i id='searchsubmit' className='fa fa-search'></i>
          </div>
        </Col>

        <Col md={6}>
          <h2 className='page-title'>
            <strong>{props.pageTitle}</strong>
          </h2>
          {/* <p>
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
          </p> */}

          <div class='textdiv'>
            <div class='texttitle'>
              {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
            </div>
            <div class='divider'></div> &nbsp;&nbsp;&nbsp;
            <span id='sort-by'>Sort by: DEFAULT</span>&nbsp;&nbsp;
            <i class='fas fa-caret-down'></i>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SortBy;

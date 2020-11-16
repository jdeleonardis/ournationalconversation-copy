import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/sort-by.css';
import '../styles/searchBar.css';

const SearchBox = (props) => {
  return (
    <div>
      {/* <Row>
        <Col md={3}> */}
          <div id='search-div'>
            <p id='small-search-text'>Search {props.pageName}:</p>
            <input
              id='small-search-field'
              type='text'
              placeholder='ENTER KEYWORDS'
            />
            <i id='searchsubmit' className='fa fa-search'></i>
          </div>
        {/* </Col>
        <Col md={6}>
          <h2 className='page-title'>
            <strong>{props.pageTitle}</strong>
          </h2>
          <div class='textdiv'>
            <div className='texttitle'>
              {props.horizLineTextLeft} &nbsp;&nbsp;&nbsp;
            </div>
            <div className='divider'></div> &nbsp;&nbsp;&nbsp;
            <span id='sort-by'>Sort by: DEFAULT</span>&nbsp;&nbsp;
            <i class='fas fa-caret-down'></i>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default SearchBox;
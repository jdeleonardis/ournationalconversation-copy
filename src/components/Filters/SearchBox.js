import React from 'react';
import { Form, Button, Row, Col, Image, Card } from 'react-bootstrap';
import '../../styles/sort-by.css';
import '../../styles/searchbox.css';

const SearchBox = (props) => {
  return (
    <div className='search-box'>
      <div id='search-div'>
        <p style={{ marginBottom: '5px' }} id='small-search-text'>
          Search {props.pageName}:
        </p>
        <input
          id='small-search-field'
          type='text'
          placeholder='ENTER KEYWORDS{props.searchInput}'
        ></input>
        <i id='searchsubmit' className='fa fa-search'></i>
      </div>
      <div>
        <Button className='save-search' variant=''>
          <i class='fas fa-plus'></i>
          <span className='save-search'>
            {' '}
            Save "{props.searchInput}" to My Searches
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/sort-by.css';
import '../styles/searchBar.css';

const SearchBox = (props) => {
  return (
    <div className='search-box' id='search-div '>
        <p className='search-title' id='small-search-text'>Search {props.pageName}:</p>
        <input
          className='search-input'
          id='small-search-field'
          type='text'
          placeholder='ENTER KEYWORDS'
        />
        <i className='search-box-i fa fa-search' id=''></i>
    </div>
  );
};

export default SearchBox;

import React from 'react';
import '../../styles/sort-by.css';
import '../../styles/searchBar.css';

const SearchBox = (props) => {
  return (
    <div className="search-box">
          <div id='search-div'>
            <p id='small-search-text'>Search {props.pageName}:</p>
            <input
              id='small-search-field'
              type='text'
              placeholder='ENTER KEYWORDS'
            />
            <i id='searchsubmit' className='fa fa-search'></i>
          </div>
    </div>
  );
};

export default SearchBox;
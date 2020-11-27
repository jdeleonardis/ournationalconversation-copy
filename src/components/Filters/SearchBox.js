import React from 'react';
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
          placeholder='ENTER KEYWORDS'
        />
        <i id='searchsubmit' className='fa fa-search'></i>
      </div>
      <div>
        <button className='save-search' >
          <i class='fas fa-plus'> Save "Covid" to My Searches</i>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

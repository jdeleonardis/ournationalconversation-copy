import React from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/store-filter.css';
import '../../styles/filter-bar.css';

// Icon Toggle
function handleStoreChevron() {
  document.querySelector('.store-chev').classList.toggle('fa-chevron-down');
  document.querySelector('.store-chev').classList.toggle('fa-chevron-up');
}

// Filter Effect
function handleBooks() {
  let a, books, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  books = document.querySelectorAll('.books');
  for (i = 0; i < books.length; i++) {
    books[i].style.display = 'block';
  }
}

function handleTops() {
  let a, tops, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  tops = document.querySelectorAll('.tops');
  for (i = 0; i < tops.length; i++) {
    tops[i].style.display = 'block';
  }
}

function handleBottoms() {
  let a, bottoms, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  bottoms = document.querySelectorAll('.bottoms');
  for (i = 0; i < bottoms.length; i++) {
    bottoms[i].style.display = 'block';
  }
}

function handleAccessories() {
  let a, acc, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  acc = document.querySelectorAll('.accessories');
  for (i = 0; i < acc.length; i++) {
    acc[i].style.display = 'block';
  }
}

function handleGiveaways() {
  let a, give, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  give = document.querySelectorAll('.giveaways');
  for (i = 0; i < give.length; i++) {
    give[i].style.display = 'block';
  }
}

// Clear all radio buttons to deselected state
function handleDeselectAll() {
  var el = document.getElementsByName('formHorizontalRadios');
  for (var i = 0; i < el.length; i++) {
    el[i].checked = false;
  }
}

// function handleSelectAll() {
//   let all, i;
//   all = document.querySelectorAll('.article');
//   for (i = 0; i < all.length; i++) {
//     all[i].style.display = 'block';
//   }
// }

const FilterBarStore = () => {
  return (
    <div className='main-filter-div'>
      <h2 id='filter-by'>Filter by:</h2>
      <div id='store-div'>
        <span className='clear' onClick={handleDeselectAll}>
          CLEAR
        </span>
        <a
          onClick={handleStoreChevron}
          id='store-topic'
          href='#demo2'
          data-toggle='collapse'
        >
          <i class='store-chev fas fa-chevron-down'></i>&nbsp;&nbsp;CATEGORY
        </a>

        <div
          style={{ marginTop: '10px', marginLeft: '20px' }}
          id='demo2'
          className='collapse'
        >
          <Form>
            {['radio'].map((type) => (
              <div key={`custom-${type}`} className='mb-3'>
                <Form.Check
                  onClick={handleBooks}
                  custom
                  type='radio'
                  label='Books'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios13'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleTops}
                  custom
                  type='radio'
                  label='Tops'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios14'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleBottoms}
                  custom
                  type='radio'
                  label='Bottoms'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios15'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleAccessories}
                  custom
                  type='radio'
                  label='Accessories'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios16'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleGiveaways}
                  custom
                  type='radio'
                  label='Giveaways'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios17'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />

                {/* <Form.Check
                  onClick={handleSelectAll}
                  custom
                  type='radio'
                  label='Select All'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios23'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                /> */}
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};

// }

export default FilterBarStore;

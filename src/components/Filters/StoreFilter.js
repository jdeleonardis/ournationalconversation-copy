import React from 'react';
import { Form } from 'react-bootstrap';
import '../../styles/searchBar.css';
import '../../styles/store-filter.css';

// Icon Toggle
function handleChevron() {
  document.querySelector('.chev').classList.toggle('fa-chevron-down');
  document.querySelector('.chev').classList.toggle('fa-chevron-up');
}

// Filter Effect
function handleBooks() {
  let a, b, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  b = document.querySelectorAll('.books');
  for (i = 0; i < b.length; i++) {
    b[i].style.display = 'block';
  }
}

function handleTops() {
  let a, t, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  t = document.querySelectorAll('.tops');
  for (i = 0; i < t.length; i++) {
    t[i].style.display = 'block';
  }
}

function handleBottoms() {
  let a, b, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  b = document.querySelectorAll('.bottoms');
  for (i = 0; i < b.length; i++) {
    b[i].style.display = 'block';
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
  let a, g, i;
  a = document.querySelectorAll('.category');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  g = document.querySelectorAll('.giveaways');
  for (i = 0; i < g.length; i++) {
    g[i].style.display = 'block';
  }
}

// function handleSelectAll() {
//   let all, i;
//   all = document.querySelectorAll('.article');
//   for (i = 0; i < all.length; i++) {
//     all[i].style.display = 'block';
//   }
// }

const StoreFilter = () => {
  return (
    <div className='main-filter-div'>
      <h2 id='filter-by'>Filter by:</h2>
      <div id='filter-div'>
        <a
          onClick={handleChevron}
          id='topic'
          href='#demo'
          data-toggle='collapse'
        >
          <i class='chev fas fa-chevron-down'></i>&nbsp;&nbsp;TOPIC
        </a>

        <div
          style={{ marginTop: '10px', marginLeft: '20px' }}
          id='demo'
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
                  id='formHorizontalRadios1'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleTops}
                  custom
                  type='radio'
                  label='Tops'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios2'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleBottoms}
                  custom
                  type='radio'
                  label='Bottoms'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios3'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleAccessories}
                  custom
                  type='radio'
                  label='Accessories'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios4'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleGiveaways}
                  custom
                  type='radio'
                  label='Giveaways'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios5'
                  className='filter-dropdown-text'
                  // className={`custom-${type}`}
                />

                {/* <Form.Check
                  onClick={handleSelectAll}
                  custom
                  type='radio'
                  label='Select All'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios12'
                  className='filter-dropdown-text'
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

export default StoreFilter;

import React from 'react';
import { Form } from 'react-bootstrap';

function handleSourceChevron() {
  document.querySelector('.source-chev').classList.toggle('fa-chevron-down');
  document.querySelector('.source-chev').classList.toggle('fa-chevron-up');
}

function handleNYT() {
  let a, nyt, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  nyt = document.querySelectorAll('.nyt');
  for (i = 0; i < nyt.length; i++) {
    nyt[i].style.display = 'block';
  }
}

function handleFox() {
  let a, fox, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  fox = document.querySelectorAll('.fox');
  for (i = 0; i < fox.length; i++) {
    fox[i].style.display = 'block';
  }
}

function handleWPost() {
  let a, wp, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  wp = document.querySelectorAll('.wpost');
  for (i = 0; i < wp.length; i++) {
    wp[i].style.display = 'block';
  }
}

function handleBBC() {
  let a, bbc, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  bbc = document.querySelectorAll('.bbc');
  for (i = 0; i < bbc.length; i++) {
    bbc[i].style.display = 'block';
  }
}

function handleAlJazeera() {
  let a, aj, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  aj = document.querySelectorAll('.al-jazeera');
  for (i = 0; i < aj.length; i++) {
    aj[i].style.display = 'block';
  }
}

function handleLATimes() {
  let a, la, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  la = document.querySelectorAll('.la-times');
  for (i = 0; i < la.length; i++) {
    la[i].style.display = 'block';
  }
}

function handleHuff() {
  let a, hp, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  hp = document.querySelectorAll('.huff');
  for (i = 0; i < hp.length; i++) {
    hp[i].style.display = 'block';
  }
}

function handleBlaze() {
  let a, b, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  b = document.querySelectorAll('.blaze');
  for (i = 0; i < b.length; i++) {
    b[i].style.display = 'block';
  }
}

function handleCNN() {
  let a, cnn, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  cnn = document.querySelectorAll('.cnn');
  for (i = 0; i < cnn.length; i++) {
    cnn[i].style.display = 'block';
  }
}

function handleMySources() {
  let a, my, i;
  a = document.querySelectorAll('.article');
  for (i = 0; i < a.length; i++) {
    a[i].style.display = 'none';
  }
  my = document.querySelectorAll('.my-sources');
  for (i = 0; i < my.length; i++) {
    my[i].style.display = 'block';
  }
}

function handleSelectAll() {
  let all, i;
  all = document.querySelectorAll('.article');
  for (i = 0; i < all.length; i++) {
    all[i].style.display = 'block';
  }
}

const SearchFilterBar = () => {
  return (
    <div>
      <h2>Filter by:</h2>
      <div>
        <a
          onClick={handleSourceChevron}
          id='source-topic'
          href='#demo'
          data-toggle='collapse'
        >
          <i class='source-chev fas fa-chevron-down'></i>&nbsp;&nbsp;SOURCE
        </a>

        <div
          style={{ marginTop: '10px', marginLeft: '20px' }}
          //   id='demo'
          className='collapse'
        >
          <Form>
            {['radio'].map((type) => (
              <div key={`custom-${type}`} className='mb-3'>
                <Form.Check
                  onClick={handleNYT}
                  custom
                  type='radio'
                  label='New York Times'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios1'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleFox}
                  custom
                  type='radio'
                  label='Fox News'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios2'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleWPost}
                  custom
                  type='radio'
                  label='Washington Post'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios3'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleBBC}
                  custom
                  type='radio'
                  label='BBC'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios4'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleAlJazeera}
                  custom
                  type='radio'
                  label='Al Jazeera'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios5'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleLATimes}
                  custom
                  type='radio'
                  label='LA Times'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios6'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleHuff}
                  custom
                  type='radio'
                  label='Huffington Post'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios7'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleBlaze}
                  custom
                  type='radio'
                  label='The Blaze'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios8'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleCNN}
                  custom
                  type='radio'
                  label='CNN'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios9'
                  className='filter-dropdown-text custom-radio'
                />
                <Form.Check
                  onClick={handleMySources}
                  custom
                  type='radio'
                  label='My Sources'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios10'
                  className='filter-dropdown-text custom-radio'
                />

                <Form.Check
                  onClick={handleSelectAll}
                  custom
                  type='radio'
                  label='Select All'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios11'
                  className='filter-dropdown-text custom-radio'

                />
              </div>
            ))}
          </Form>
        </div>
      </div>

    </div>
  );
};

export default SearchFilterBar;

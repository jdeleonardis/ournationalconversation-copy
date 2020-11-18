import React, { Component } from 'react';
import {
  Button,
  DropdownButton,
  ButtonGroup,
  InputGroup,
  Container,
  Col,
  Row,
  Form
} from 'react-bootstrap';
import '../../styles/filter.css';
import '../../styles/filter-bar.css';


// Icon Toggle
function handleChevron() {
  document.querySelector(".chev").classList.toggle("fa-chevron-down");
  document.querySelector(".chev").classList.toggle("fa-chevron-up");
}

// Filter Effect
function handleUS() {
  let a, u, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  u = document.querySelectorAll(".us");
  for (i = 0; i < u.length; i++) {
    u[i].style.display = "block";
  }
}

function handlePolitics() {
  let a, p, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  p = document.querySelectorAll(".politics");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "block";
  }
}

function handleWorld() {
  let a, w, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  w = document.querySelectorAll(".world");
  for (i = 0; i < w.length; i++) {
    w[i].style.display = "block";
  }
}

function handleBusiness() {
  let a, b, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  b = document.querySelectorAll(".business");
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "block";
  }
}

function handleTech() {
  let a, t, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  t = document.querySelectorAll(".tech");
  for (i = 0; i < t.length; i++) {
    t[i].style.display = "block";
  }
}

function handleHealth() {
  let a, h, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  h = document.querySelectorAll(".health");
  for (i = 0; i < h.length; i++) {
    h[i].style.display = "block";
  }
}

function handleSciEnv() {
  let a, s, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  s = document.querySelectorAll(".sci-env");
  for (i = 0; i < s.length; i++) {
    s[i].style.display = "block";
  }
}

function handleMedia() {
  let a, m, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  m = document.querySelectorAll(".media");
  for (i = 0; i < m.length; i++) {
    m[i].style.display = "block";
  }
}

function handlePolls() {
  let a, ps, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  ps = document.querySelectorAll(".polls");
  for (i = 0; i < ps.length; i++) {
    ps[i].style.display = "block";
  }
}

function handleFaith() {
  let a, fs, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  fs = document.querySelectorAll(".faith-spirituality");
  for (i = 0; i < fs.length; i++) {
    fs[i].style.display = "block";
  }
}

function handleFactCheck() {
  let a, fc, i;
  a = document.querySelectorAll(".article");
  for (i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  fc = document.querySelectorAll(".fact-check");
  for (i = 0; i < fc.length; i++) {
    fc[i].style.display = "block";
  }
}

function handleSelectAll() {
  let all, i;
  all = document.querySelectorAll(".article");
  for (i = 0; i < all.length; i++) {
    all[i].style.display = "block";
  }
}

const FilterBar = () => {
  return (
    <div>
      <h2 id="filter-by">Filter by:</h2>
      <div>
        <a
          onClick={handleChevron}
          id="topic"
          href="#demo"
          data-toggle="collapse"
        >
          <i class="chev fas fa-chevron-down"></i>
          &nbsp;&nbsp;TOPIC 
          {/* <span className='clear'>CLEAR</span> */}
        </a>

        <div
          style={{ marginTop: "10px", marginLeft: "20px" }}
          id="demo"
          className="collapse"
        >
          <Form>
            {["radio"].map((type) => (
              <div key={`custom-${type}`} className="mb-3">
                <Form.Check
                  onClick={handleUS}
                  custom
                  type="radio"
                  label="US"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleWorld}
                  custom
                  type="radio"
                  label="World"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handlePolitics}
                  custom
                  type="radio"
                  label="Politics"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleBusiness}
                  custom
                  type="radio"
                  label="Business"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios4"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleTech}
                  custom
                  type="radio"
                  label="Tech"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios5"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleHealth}
                  custom
                  type="radio"
                  label="Health"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios6"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleSciEnv}
                  custom
                  type="radio"
                  label="Science & Environment"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios7"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleMedia}
                  custom
                  type="radio"
                  label="Media"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios8"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handlePolls}
                  custom
                  type="radio"
                  label="Polls"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios9"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleFaith}
                  custom
                  type="radio"
                  label="Faith / Spirituality"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios10"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleFactCheck}
                  custom
                  type="radio"
                  label="Fact Check"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios11"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
                <Form.Check
                  onClick={handleSelectAll}
                  custom
                  type="radio"
                  label="Select All"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios12"
                  className="filter-dropdown-text"
                  // className={`custom-${type}`}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
    </div>
  );
};
// }

export default FilterBar;
// class FilterBar extends Component {
//   render() {
//     return (
//       <Container>
//         <Form>
//           <h2>Filter by:</h2>
//           <p className='filter'><i class="fas fa-chevron-up"></i> 
//           TOPIC
//           CLEAR
//           </p>
//   {[ 'radio'].map((type) => (
//     <div key={`custom-${type}`} className="mb-3">
//       <Form.Check
//         custom
//         type='radio'
//         label='US'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='World'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Politics'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Business'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Tech'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Health'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Science & Environment'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Media'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Polls'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Faith / Spirituality'
//         className={`custom-${type}`}
//       />
//       <Form.Check
//         custom
//         type='radio'
//         label='Fact Check'
//         className={`custom-${type}`}
//       />
//     </div>
//   ))}
// </Form>

//       </Container>
//     );
//   }
// }

// export default FilterBar;

import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Col
} from 'react-bootstrap';
import '../styles/searchBar.css';


const SearchBar = (props) => {
  return (
    <div>
      <Navbar className='search-bar' variant=''>
        <Col className='mb-2' xs lg='9'>
          <Nav className='group-68 mr-auto '>
            <button className='news-filters-btn' href='#'>
              NEWS FILTERS<i class='fas fa-chevron-down news-filters-btn' />
            </button>
            <Nav.Link className='hot-topics' href='#'>
              HOT TOPICS: 
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              COVID-19 Alert{props.hotTopics}
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              Biden VP Pick{props.hotTopics}
            </Nav.Link>
            <Nav.Link className='search-bar-text' href='#'>
              School Reopenings{props.hotTopics}
            </Nav.Link>
          </Nav>
        </Col>
        <Col lg='3' md='3'>
          <input className='search' type='text' placeholder='SEARCH' />
          <i className='fa fa-search search-i' />
        </Col>
      </Navbar>
      <hr/>
    </div>
  )
}

// class SearchBar extends Component {
//   render() {
//     return (

//       <Navbar className='search-bar' variant=''>
//         <Col className='mb-2' xs lg='9'>
//           <Nav className='group-68 mr-auto '>
//             <button className='news-filters-btn' href='#'>
//               NEWS FILTERS <i class='fas fa-chevron-down news-filters-btn' />
//             </button>
//             <Nav.Link href='#'>
//               <span className='hot-topics'>HOT TOPICS: </span>
//             </Nav.Link>
//             <Nav.Link className='search-bar-text' href='#'>
//               COVID-19 Alert
//             </Nav.Link>
//             <Nav.Link className='search-bar-text' href='#'>
//               Biden VP Pick
//             </Nav.Link>
//             <Nav.Link className='search-bar-text' href='#'>
//               School Reopenings
//             </Nav.Link>
//           </Nav>
//         </Col>
//         <Col lg='3' md='auto'>
//           <input className='search' type='text' placeholder='SEARCH' />
//           <i className='fa fa-search search-i' />
//         </Col>
//       </Navbar>

//     );
//   }
// }

export default SearchBar;

import React, { Component } from 'react';
import {
  FormControl,
  Navbar,
  Nav,
  Form,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import '../../styles/searchBar.css';

const SearchBar =(props) => {
  return (
    <>
      <Navbar className='search-bar' variant=''>
        <Col className='mb-2' xs lg='9'>
          <Nav className='group-68 mr-auto '>
            <div class='dropdown'>
              <button
                className='news-filters-btn '
                type='button'
                id='dropdownMenu2'
                // data-toggle='dropdown'
                // aria-haspopup='true'
                aria-expanded='false'
                data-toggle='collapse'
                data-target='#collapseExample'
                aria-controls='collapseExample'
                href='#'
              >
                NEWS FILTERS <i class='fas fa-chevron-down news-filters-btn' />
              </button>
              {/* <div class='collapse' id='collapseExample'>
                <div class='card card-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div> */}
              <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>
                <button class='dropdown-item' type='button'>
                  TOP STORIES
                </button>
                <button class='dropdown-item' type='button'>
                  LOCAL STORIES
                </button>
                <button class='dropdown-item' type='button'>
                  MY SAVED SEARCHES
                </button>
                <button class='dropdown-item' type='button'>
                  MY SAVED NEWS
                </button>
              </div>
            </div>
            <Nav.Link href='#'>
              <span className='hot-topics'>HOT TOPICS: </span>
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
        <Col lg='3' md='auto'>
          <input className='search' type='text' placeholder='SEARCH' />
          <i className='fa fa-search search-i' />
        </Col>
      </Navbar>
      <hr />
    </>
  );
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
//               COVID-19 Alert{props.hotTopics}
//             </Nav.Link>
//             <Nav.Link className='search-bar-text' href='#'>
//               Biden VP Pick{props.hotTopics}
//             </Nav.Link>
//             <Nav.Link className='search-bar-text' href='#'>
//               School Reopenings{props.hotTopics}
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

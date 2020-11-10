import React, { Component } from 'react';
import {
  FormControl,
  Navbar,
  Nav,
  Form,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import '../styles/searchBar.css';

import FilterBar from './FilterBar';
import '../../App.css';

class Subheader extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Navbar bg='light' variant='' fixed='top'>
            <Col className='mb-2' xs lg='2'></Col>
            <Col md='auto'>
              <Nav className='mr-auto'>
                <Button href='#'>
                  NEWS FILTERS <i class='fas fa-caret-down'></i>
                </Button>
                <Nav.Link href='#'>HOT TOPICS: </Nav.Link>
                <Nav.Link href='#'>COVID-19 Alert</Nav.Link>
                <Nav.Link href='#'>Biden VP Pick</Nav.Link>
                <Nav.Link href='#'>School Reopenings</Nav.Link>
                <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                  />
                  <i class='fas fa-search'></i>
                </Form>
              </Nav>
            </Col>
            <Col xs lg='2'></Col>
          </Navbar>
        </Row>
        <Row>
          <Navbar>
            <Col md='auto'>
              <p>Search Opinions:</p>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='ENTER KEYWORDS'
                  className='mr-sm-2'
                ></FormControl>
                <i class='fas fa-search'></i>
              </Form>
            </Col>
            <hr />

            <Col md='auto'>
              <h2>OPINIONS</h2>
              <p>
                Newly Arrived
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                <i className='fas fa-minus'> </i>
                Sort by: DEFAULT
                <i class='fas fa-caret-down'></i>
                <i class='fas fa-search'>
                  <input
                    type='search'
                    className='search'
                    placeholder='SEARCH'
                  />
                </i>
              </p>
            </Col>
          </Navbar>
        </Row>
        <FilterBar />
      </Container>
    );
  }
}

export default Subheader;

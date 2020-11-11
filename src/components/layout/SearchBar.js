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
import '../styles/searchBar.css';


class SearchBar extends Component {
  render() {
    return (
      // <Container>
          <Navbar variant='' >
            <Col className='mb-2' xs lg='9'>
              <Nav className='mr-auto'>
                <Button href='#'>
                  NEWS FILTERS <i class='chev fas fa-chevron-down'/>
                </Button>
                <Nav.Link href='#'>HOT TOPICS: </Nav.Link>
                <Nav.Link href='#'>COVID-19 Alert</Nav.Link>
                <Nav.Link href='#'>Biden VP Pick</Nav.Link>
                <Nav.Link href='#'>School Reopenings</Nav.Link>
              </Nav>
            </Col>
            <Col lg='3' md='auto'>
              <Form inline>
                  <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                  ></FormControl>
                  <i class='fas fa-search'></i>
                </Form>
            </Col>
          </Navbar>
      // </Container>
    );
  } 
}

export default SearchBar;

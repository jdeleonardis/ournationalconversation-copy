import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Navbar,
  Nav,
  Form
} from 'react-bootstrap';

class SearchFilter extends Component {
  render() {
    return (
      
        <Navbar bg='light' variant='' fixed='top'>
          <Navbar.Brand href='#home'>NEWSFILERS</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>HOT TOPICS: </Nav.Link>
            <Nav.Link href='#features'>COVID-19 Alert</Nav.Link>
            <Nav.Link href='#pricing'>Biden VP Pick</Nav.Link>
            <Nav.Link href='#pricing'>School Reopenings</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          </Form>
        </Navbar>
    );
  }
}

export default Search;
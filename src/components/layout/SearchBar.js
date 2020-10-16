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
  Col
} from 'react-bootstrap';
import '../styles/searchBar.css';
class SearchBar extends Component {
  render() {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Navbar bg='light' variant='' fixed='top'>
            <Col className='mb-2' xs lg='2'>
              <Navbar.Brand href='#home'>
                <DropdownButton
                  id='dropdown-basic-button'
                  title='NEWS FILTERS'
                ></DropdownButton>
              </Navbar.Brand>
            </Col>
            <Col md='auto'>
              <Nav className='mr-auto'>
                <Nav.Link href='#'>HOT TOPICS: </Nav.Link>
                <Nav.Link href='#'>COVID-19 Alert</Nav.Link>
                <Nav.Link href='#'>Biden VP Pick</Nav.Link>
                <Nav.Link href='#'>School Reopenings</Nav.Link>
              </Nav>
            </Col>
            <Col xs lg='2'>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
              </Form>
            </Col>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default SearchBar;

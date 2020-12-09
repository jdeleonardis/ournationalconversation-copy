import React from 'react';
import {
  Navbar,
  Nav,
  Image,
  Col,
  Row,
  Button,
  FormControl,
  Form,
  ButtonGroup,
  DropdownButton
} from 'react-bootstrap';
import NewFiltersExpanded from './Expended/NewFiltersExpanded';
import CustomButton from './Expended/CustomButton';
import logo from '../../img/Logo_Shorthand.png';

import '../../styles/HeaderCombine.css';

const HeaderCombine = (props) => {
  return (
    <>
      <Navbar className=' search-bar'>
        <Col xs={3} md={2}>
          <Nav.Item>
            <Nav.Link
              href='/'
              // className='header-logo'
            >
              <Image src={logo} roundedCircle />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col>
          <Nav className='justify-content-end' activeKey=''>
            <Col xs={6} md={8}>
              <Nav.Item>
                <Nav.Link className='header-title' eventKey='disabled' disabled>
                  OUR NATIONAL CONVERSATION
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={3} md={4}>
              <Nav.Item>
                <Button variant='' className='log-in'>
                  LOG IN
                </Button>
                <Button variant='' className='sign-up' active>
                  SIGN UP
                </Button>
                {/* <Nav.Link eventKey='link-1'>Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
        <Nav.Link eventKey='link-2'>Link</Nav.Link> */}
              </Nav.Item>
            </Col>
          </Nav>
          <hr className='rectangle-92' />

          <Nav className=' group-66' activeKey=''>
            <Nav.Item>
              <Nav.Link className='header-news' href='/news'>
                News
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='header-opinions' eventKey='/opinions'>
                Opinions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='header-solutions' eventKey='/solutions'>
                Solutions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Navbar>
      {/* <p className='text-center mt-4 mb-4'>Or right-aligned</p>
      <Nav className='justify-content-center' activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/news'>News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/opinions'>Opinions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='/solutions'>Solutions</Nav.Link>
        </Nav.Item>
      </Nav> */}
      {/* <Navbar
        className='search-bar'
        variant='
      '
      >
        <Col className='mb-2'>
        <Nav className='group-68'>
          <CustomButton />
          <DropdownButton
            className='news-filters-dp '
            as={ButtonGroup}
            title='NEWS FILTERS'
            menuAlign={{ lg: 'left' }}
            variant='purple'
          >
            <NewFiltersExpanded
              style={{ padding: '100', margin: '100', border: 'none' }}
            />
          </DropdownButton>

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
        <Form inline>
          <FormControl
            type='text'
            placeholder='Search'
            className='mr-sm-2'
            style={{
              marginRight: '5em',
              marginLeft: '3em',
              paddingRight: '5em',
              width: '100%'
            }}
          />
          <i className='fa fa-search search-i' />
        </Form>
      </Navbar>
      <hr /> */}
    </>
  );
};

export default HeaderCombine;

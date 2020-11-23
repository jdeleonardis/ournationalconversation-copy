import React from 'react';
import {
  Dropdown,
  Row,
  Col,
  DropdownButton,
  ButtonGroup
} from 'react-bootstrap';
import searchBar from '../../styles/searchBar.css';
const NewFiltersExpanded = () => {
  return (
    <div className='news-filter-dropdown '>
      {/* <Row>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
          <Col xs={6} md={4}>
            .col-xs-6 .col-md-4
          </Col>
        </Row> */}
      <div className='mb-2 '>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant='purple'
          title={` TOP STORIES `}
          active
        >
          <div className='news-filter-dropdown '>
            <Row>
              <Col className="news-topics">
                <h5 className='news-topics-headline'>NEWS TOPICS</h5>
                <ul>US</ul>
                <ul>WORLD</ul>
                <ul>POLITICS</ul>
                <ul>BUSINESS</ul>
                <ul>TECH</ul>
                <ul>HEALTH</ul>
                <ul>SCIENCE & ENVIRONMENT</ul>
                <ul>MEDIA</ul>
                <ul>POLLS</ul>
                <ul>FAITH / SPIRITUALITY</ul>
                <ul>FACT CHECK</ul>
                <ul>MEDIA</ul>
                <ul>US</ul>
              </Col>
              <Col className='policy-topics'>
                <h5 className='news-topics-headline'>POLICY TOPICS</h5>
                <ul>GOVERNANCE</ul>
                <ul>SOCIAL ISSUES</ul>
                <ul>THE ECONOMY</ul>
                <ul>FOREIGN POLICY & DEFENCE</ul>
                <ul>INFASTRUCTURE</ul>
                <ul>SIENCE,CLIMATE & TECHNOLOGY</ul>
                <ul>PUBLIC SAFETY</ul>
                <ul>HEALTHCARE</ul>
                <ul>THE FUTURE</ul>
              </Col>
            </Row>
          </div>
          {/* <Row>
            <Col xs={6} md={6}>
              .col-xs-6 .col-md-4
            </Col>
            <Col xs={6} md={6}>
              .col-xs-6 .col-md-4
            </Col>
            
          </Row> */}
        </DropdownButton>
      </div>
      <div className='mb-2'>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={` LOCAL STORIES `}
          active
        >
          {/* <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
        </DropdownButton>
      </div>
      <div className='mb-2'>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={` MY SAVED SEARCHES `}
          active
        >
          {/* <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
        </DropdownButton>
      </div>
      <div className='mb-2'>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={`MY SAVED NEWS`}
          active
        >
          {/* <Dropdown.Item eventKey='1'>Action</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
        </DropdownButton>
      </div>
      {/* <Dropdown.Item
          class='full-width-tinted'
          eventKey='1'
          variant='pills'
          defaultActiveKey='/home'
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
        <Dropdown.Item eventKey='3'>Active Item</Dropdown.Item>
        <Dropdown.Item eventKey='4'>Separated link</Dropdown.Item> */}
      {/* <div class='dropdown-menu' aria-labelledby='dropdownMenu2'>
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
        </div> */}
    </div>
  );
};

export default NewFiltersExpanded;

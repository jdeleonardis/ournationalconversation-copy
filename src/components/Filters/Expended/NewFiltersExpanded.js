import React from 'react';
import { Row, Col, DropdownButton, ButtonGroup } from 'react-bootstrap';

import '../../../styles/newfiltersexpanded.css';

const NewFiltersExpanded = () => {
  return (
    <div className='news-filter-dropdown '>
      <div className=' '>
        <DropdownButton
          as={ButtonGroup}
          // className='dropdown-button'
          // key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant='purple'
          title={` TOP STORIES `}
          active
        >
          <div className='news-filter-dropdown '>
            <Row>
              <Col className='news-topics'>
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
        </DropdownButton>
      </div>
      <div className=''>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={` LOCAL STORIES `}
        ></DropdownButton>
      </div>
      <div className=''>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={` MY SAVED SEARCHES `}
        ></DropdownButton>
      </div>
      <div className=''>
        <DropdownButton
          as={ButtonGroup}
          key={'right'}
          id={`dropdown-button-drop-right`}
          drop={'right'}
          variant=''
          title={`MY SAVED NEWS`}
        ></DropdownButton>
      </div>
    </div>
  );
};

export default NewFiltersExpanded;

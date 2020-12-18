import React from 'react';
import {
  Row,
  Col,
  DropdownButton,
  ButtonGroup,
  Tab,
  Nav,
  Sonnet
} from 'react-bootstrap';

import CustomButton from './CustomButton';

import '../../../styles/newfiltersexpanded.css';

const NewFiltersExpanded = () => {
  return (
    <div className='news-filter-dropdown '>
      <div className=' '>
        <CustomButton />
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row className='news-filters-tabs'>
            <Col sm={3}>
              <Nav variant='tabs' className='flex-column '>
                <Nav.Item>
                  <Nav.Link className='tabs' eventKey='first'>
                    TOP STORIES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link className='tabs' eventKey='second'>
                    LOCAL STORIES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link className='tabs' eventKey='third'>
                    MY SAVED SEARCHES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link className='tabs' eventKey='fourth'>
                    MY SAVED NEWS
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <div className='news-filter-dropdown '>
                    <Row>
                      <Col className='news-topics'>
                        <h5 className='news-topics-headline'>NEWS TOPICS:</h5>
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
                        <h5 className='news-topics-headline'>POLICY TOPICS:</h5>
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
                </Tab.Pane>
                <Tab.Pane eventKey='second'>{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey='third'>{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey='fourth'>{/* <Sonnet /> */}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default NewFiltersExpanded;

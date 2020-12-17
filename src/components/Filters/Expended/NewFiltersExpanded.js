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
import ListGroup from 'react-bootstrap/ListGroup';
import CustomButton from './CustomButton';
import '../../../styles/newfiltersexpanded.css';

const NewFiltersExpanded = () => {
  return (
    <div className='news-filter-dropdown '>
      <div className=' '>
        <CustomButton />
        {/* <Tab.Container
          className='news-filters-tab'
          // id='list-group-tabs-exampl'
          defaultActiveKey='#link1'
        >
          <Row>
            <Col sm={3}>
              <ListGroup variant='purple' className='news-filters-tab'>
                <ListGroup.Item variant='dark' action href='#link0'>
                  Dark
                </ListGroup.Item>
                <ListGroup.Item variant='secondary' action href='#link0'>
                  Secondary
                </ListGroup.Item>
                <ListGroup.Item variant='purple' action href='#link1'>
                  TOP STORIES
                </ListGroup.Item>
                <ListGroup.Item action href='#link2'>
                  LOCAL STORIES
                </ListGroup.Item>
                <ListGroup.Item action href='#link3'>
                  MY SAVED SEARCHES
                </ListGroup.Item>
                <ListGroup.Item action href='#link4'>
                  MY SAVED NEWS
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane className='news-filters-tab' eventKey='#link1'>
                  <div className='news-filter-dropdown '>
                    <Row>
                      <Col className='news-topics'>
                        <h2 className='news-topics-headline'>NEWS TOPICS:</h2>
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
                        <h2 className='news-topics-headline'>POLICY TOPICS:</h2>
                        <ul>GOVERNANCE</ul>
                        <ul>SOCIAL ISSUES</ul>
                        <ul>THE ECONOMY</ul>
                        <ul>FOREIGN POLICY & DEFENCE</ul>
                        <ul>INFASTRUCTURE</ul>
                        <ul>SIENCE, CLIMATE, & TECHNOLOGY</ul>
                        <ul>PUBLIC SAFETY</ul>
                        <ul>HEALTHCARE</ul>
                        <ul>THE FUTURE</ul>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='#link2'></Tab.Pane>
                <Tab.Pane eventKey='#link3'></Tab.Pane>
                <Tab.Pane eventKey='#link4'></Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container> */}
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row className='news-filters-tabs'>
            <Col sm={3}>
              <Nav variant='tabs' className='flex-column tabs'>
                <Nav.Item className=''>
                  <Nav.Link eventKey='first'>TOP STORIES</Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link eventKey='second'>LOCAL STORIES</Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link eventKey='third'>MY SAVED SEARCHES</Nav.Link>
                </Nav.Item>
                <Nav.Item className=''>
                  <Nav.Link eventKey='fourth'>MY SAVED NEWS</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
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
                </Tab.Pane>
                <Tab.Pane eventKey='second'>{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey='third'>{/* <Sonnet /> */}</Tab.Pane>
                <Tab.Pane eventKey='fourth'>{/* <Sonnet /> */}</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* <DropdownButton
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
        ></DropdownButton> */}
      </div>
    </div>
  );
};

export default NewFiltersExpanded;

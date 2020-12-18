import React from 'react';
import { Navbar, Nav, Image, Col, Row, Button } from 'react-bootstrap';
import LoginModalButtonAndComponent from '../Authentication/LoginModalButtonAndComponent';
import SignupModalButtonAndComponent from '../Authentication/SignupModalButtonAndComponent';
import oncLogo from '../../img/onc-logo.png';

import '../../styles/HeaderReact.css';

const HeaderReact = (props) => {
  return (
    <div className='onc-header '>
      <Navbar className=''>
        <Col xs={3} md={2}>
          <Nav.Item>
            <Nav.Link href='/'>
              <Image className='onc-logo' src={oncLogo} roundedCircle />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={9} md={10}>
          <Nav className='justify-content-end' activeKey=''>
            <Col xs={9} md={9}>
              <Nav.Item>
                <Nav.Link className='header-title' eventKey='disabled' disabled>
                  OUR NATIONAL CONVERSATION
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={3} md={3} className='btn-group'>
              <Nav.Item className='btn-toolbar'>
                <LoginModalButtonAndComponent />
                <SignupModalButtonAndComponent />
              </Nav.Item>
            </Col>
          </Nav>
          <Col>
            <hr className='rectangle-92' />
          </Col>
          <Nav>
            <Col xs={1} md={1}></Col>
            <Col xs={6} md={7}>
              <Nav className=' group-66' activeKey=''>
                <Nav.Item>
                  <Nav.Link className='header-news' href='/news'>
                    News
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='header-opinions' href='/opinions'>
                    Opinions
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='header-solutions' href='/solutions'>
                    Solutions
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Nav>
        </Col>
      </Navbar>
    </div>
  );
};

export default HeaderReact;

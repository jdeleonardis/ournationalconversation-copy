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
import HeaderLogin from '../Authentication/HeaderLogin';
import HeaderSignup from '../Authentication/HeaderSignup';
import SignupModalComponent from '../../components/Authentication/SignupModalButtonAndComponent';
import LoginModalComponent from '../../components/Authentication/LoginModalButtonAndComponent';
import logo from '../../img/Logo_Shorthand.png';

import '../../styles/HeaderReact.css';

const HeaderReact = (props) => {
  return (
    <div className='onc-header '>
      <Navbar className=''>
        <Col xs={3} md={2}>
          <Nav.Item>
            <Nav.Link href='/'>
              <Image className='onc-logo' src={logo} roundedCircle />
            </Nav.Link>
          </Nav.Item>
        </Col>
        <Col xs={9} md={10}>
          <Nav className='justify-content-end' activeKey=''>
            <Col xs={6} md={9}>
              <Nav.Item>
                <Nav.Link className='header-title' eventKey='disabled' disabled>
                  OUR NATIONAL CONVERSATION
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={3} md={3} className='btn-group'>
              <Nav.Item>
                <HeaderLogin />
                <HeaderSignup />
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
          </Nav>
        </Col>
      </Navbar>
    </div>
  );
};

export default HeaderReact;

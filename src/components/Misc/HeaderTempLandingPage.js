import React from 'react';
import { Navbar, Nav, Image, Col} from 'react-bootstrap';
import logo from '../../img/Logo_Shorthand.png';

import '../../styles/HeaderTempLandingPage.css';

//Header for temporary landing page. Remove at some point
const HeaderTempLandingPage = (props) => {
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
          <Nav activeKey=''>
            <Col xs={6} md={9}>
              <Nav.Item>
                <Nav.Link className='header-title' eventKey='disabled' disabled>
                  OUR NATIONAL CONVERSATION
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
          <Col>
            <hr className='rectangle-92' />
          </Col>
          <Col xs={6} md={9}>
              <Nav.Item>
                <Nav.Link className='header-sub-title' eventKey='disabled' disabled>
                  Let's Get America Talking Again!
                </Nav.Link>
              </Nav.Item>
            </Col>          
        </Col>
      </Navbar>
    </div>
  );
};

export default HeaderTempLandingPage;

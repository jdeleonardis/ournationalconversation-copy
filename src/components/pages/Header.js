import React from 'react';
import '../styles/Header.css';
import { MenuItems } from '../layout/MenuItems';
import '../styles/footer.css';
import { Button } from '../layout/Button';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Row className='NavbarItems'>
        <a href='/' className='header-logo'>
          <img src='/images/Logo_Shorthand.png'></img>
        </a>
        <Col className='new nav'>
          <div className='menu-title'>
            <p>OUR NATIONAL CONVERSATION</p>
          </div>
        </Col>
        <div className='menu-icon' onClick={this.handleClick}></div>

        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={MenuItems.cName} href={MenuItems.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          
        </ul>
        <Button>LOG IN</Button>
        <Button>SIGN UP</Button>
        
      </Row>
      
    );
  }
}

export default Header;

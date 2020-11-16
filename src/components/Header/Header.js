import React from 'react';
import '../../styles/Header.css';
import { MenuItems } from './MenuItems';
import '../../styles/footer.css';
import { Button } from './Button';

class Header extends React.Component {
  render() {
    return (
      <div className='NavbarItems'>
        <a href='/' className='header-logo'>
          <img src='/images/Logo_Shorthand.png'></img>
        </a>
        {/*<nav className='new nav'> */}
          <div className='top'>
            <p id="title">OUR NATIONAL CONVERSATION</p>
            <div id="header-button">
            <Button>LOG IN</Button>
            <Button>SIGN UP</Button>
            </div>
          </div>
        {/*</nav> */}
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
      </div>
      
    );
  }
}

export default Header;
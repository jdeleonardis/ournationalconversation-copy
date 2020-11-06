import React from 'react';
import '../styles/Header.css';
import { MenuItems } from '../layout/MenuItems';
import '../styles/footer.css';
import { Button } from '../layout/Button';

class Header extends React.Component {
  render() {
    return (
      <nav className='NavbarItems'>
        <a href = "/" className = "header-logo"><img src = "/images/Logo_Shorthand.png"></img></a>
        <h1 className = "menu-title">One National Conversation</h1>
        <div className = "menu-icon" onClick = {this.handleClick}></div>

        <ul className = "nav-menu">
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
      </nav>
    );
  }
}

export default Header;

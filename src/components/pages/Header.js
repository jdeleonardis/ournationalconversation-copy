import React from 'react';
// import { MenuItems } from './MenuItems';
// import './Header.css';
import { MenuItems } from '../layout/MenuItems';
import '../styles/footer.css';

class Header extends React.Component {
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>
          ONC<i class Name='fab fa-react'></i>
        </h1>
        <div className='menu-icon'></div>

        <ul>
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
      </nav>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DropdownItems extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <Button
          variant='purple'
          size=''
          className='nf-btn'
          onClick={this.showMenu}
        >
          NEWS FILTERS{}
          <i class='fas fa-chevron-down'></i>
        </Button>

        {this.state.showMenu ? (
          <div
            className='menu '
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <button className='nf-dd-btn1'> Menu item 1 </button>

            <button className='nf-dd-btn2'> Menu item 2 </button>

            <button className='nf-dd-btn3'> Menu item 3 </button>

            <button className='nf-dd-btn4'> Menu item 4 </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropdownItems;

import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col,Form } from 'react-bootstrap';

import '../../../styles/ShippingMethod.css';

class ShippingMethod extends Component {
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
      <div className='shipping-method'>
        <Button variant='' size='' className='nf-btn' onClick={this.showMenu}>
          <span className='payment-title'>
            {' '}
            2.&nbsp;SHIPPING METHOD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <hr className='Rectangle-125' />
          </span>
        </Button>

        {this.state.showMenu ? (
          <div
            className='shipping-method-menu '
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
           
              <Form className='shipping-method-form'>
                <Form.Check className='shipping-method-box' type='radio' id=''>
                  <Form.Check.Input type='radio' isValid />
                  <Form.Check.Label>
                    <span className='shipping-method-title'>
                      Standard US Shipping
                    </span>{' '}
                    <span className='shipping-method-price'>$5.99</span>
                  </Form.Check.Label>
                </Form.Check>
                <Form.Check className='shipping-method-box' type='radio' id=''>
                  <Form.Check.Input type='radio' isValid />
                  <Form.Check.Label>
                    <span className='shipping-method-title'>
                      Express US Shipping
                    </span>{' '}
                    <span className='shipping-method-price'>$11.99</span>
                  </Form.Check.Label>
                </Form.Check>
              </Form>
    
            
              <Button className='cont-pmt' variant='purple'>
                CONTINUE TO PAYMENT
              </Button>
           
            {/* <InputGroup className='mb-2 shipping-method-placeholder'>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
              </InputGroup.Prepend>
              <FormControl
                // className='shipping-method-placeholder'
                placeholder='Same as shipping address'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <InputGroup className='mb-3 billing-placeholder'>
              <InputGroup.Prepend>
                <InputGroup.Radio
                  placeholder='Standard US Shipping'
                  aria-label='Radio button for following text input'
                />

              </InputGroup.Prepend>
              <FormControl
                className=''
                placeholder='Use a different address'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <InputGroup className=' '>
              <Button className='cont-pmt' variant='purple'>
                CONTINUE TO PAYMENT
              </Button>
            </InputGroup> */}
          </div>
        ) : null}
      </div>
    );
  }
}

export default ShippingMethod;

import React, { Component } from 'react';
import { Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

import '../../../styles/paymentcard.css';

class PaymentCard extends Component {
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
      <div className='payment'>
        <Button variant='' size='' className='nf-btn' onClick={this.showMenu}>
          <span className='payment-title'>
            {' '}
            3.&nbsp;PAYMENT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <hr className='Rectangle-125' />
          </span>
        </Button>

        {this.state.showMenu ? (
          <div
            className='payment-menu '
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <h5 className='payment-method mb-3 '>PAYMENT METHOD</h5>
            <InputGroup className='mb-2' variant=''>
              <InputGroup.Radio aria-label='Radio button for following text input' />

              <FormControl
                className='credit-card-placeholder'
                placeholder='Credit Card'
                aria-label='Text input with radio button'
                active
              />

              <InputGroup.Text id='basic-addon1' size='lg'>
                <i className='credit-card-i' class='fab fa-cc-visa'></i>
                <i className='credit-card-i' class='fab fa-cc-mastercard'></i>
                <i className='credit-card-i' class='fab fa-cc-discover'></i>
                <i className='credit-card-i' class='fab fa-cc-amex'></i>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className='mb-2 credit-card-info' variant=''>
              <FormControl
                className='name-placeholder'
                placeholder='NAME ON CARD'
                aria-label='NAME ON CARD'
                aria-describedby='basic-addon2'
              />
            </InputGroup>
            <InputGroup className='mb-2 credit-card-info'>
              <FormControl
                className='payment-placeholder'
                placeholder='CARD NUMBER'
                aria-label='CARD NUMBER'
                aria-describedby='basic-addon2'
              />
              <InputGroup.Text id='basic-addon1'>
                <i class='fas fa-lock'></i>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className='mb-2'>
              <FormControl
                className='payment-placeholder credit-card-info'
                placeholder='EXPRIATION DATE(MM/YY)'
                aria-label='EXPRIATION DATE(MM/YY)'
                aria-describedby='basic-addon2'
              />

              <FormControl
                className='payment-placeholder credit-card-info'
                placeholder='SECURITY CODE'
                aria-label='SECURITY CODE'
                aria-describedby='basic-addon2'
              />
            </InputGroup>
            <InputGroup className='mb-2'>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
                <InputGroup.Text id='basic-addon2' size='lg'>
                  <i class='fab fa-paypal'></i>
                  <i class='fab fa-cc-paypal'></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className='payment-placeholder'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
                <InputGroup.Text id='basic-addon2' size='lg'>
                  <i class='fab fa-amazon'></i>
                  <i class='fab fa-amazon-pay'></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                className='payment-placeholder'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <h5 className='billing-address'>BILLING ADDRESS</h5>
            <InputGroup className='mb-2 billing-placeholder'>
              <InputGroup.Radio aria-label='Radio button for following text input' />

              <FormControl
                className='payment-placeholder'
                placeholder='Same as shipping address'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <InputGroup className='mb-3 billing-placeholder'>
              <InputGroup.Radio
                placeholder='Same as shipping address'
                aria-label='Radio button for following text input'
              />

              <FormControl
                className=''
                placeholder='Use a different address'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <InputGroup className=' '>
              <Button className='pay-now' variant='purple'>
                PAY NOW
              </Button>
            </InputGroup>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PaymentCard;

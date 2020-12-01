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
          <span className='payment-title'> 3.PAYMENT </span>
          <hr className='Rectangle-125' />
        </Button>

        {this.state.showMenu ? (
          <div
            className='payment-menu '
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <h5 className='payment-method '>PAYMENT METHOD</h5>
            <InputGroup variant=''>
              <InputGroup.Radio aria-label='Radio button for following text input' />

              <FormControl
                className='credit-card'
                placeholder='Credit Card'
                aria-label='Text input with radio button'
                active
              />

              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>
                  <i class='fab fa-cc-visa'></i>
                  <i class='fab fa-cc-mastercard'></i>
                  <i class='fab fa-cc-discover'></i>
                  <i class='fab fa-cc-amex'></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup variant=''>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'> </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='NAME ON CARD'
                aria-label='NAME ON CARD'
                aria-describedby='basic-addon2'
              />

              <FormControl
                placeholder='CARD NUMBER'
                aria-label='CARD NUMBER'
                aria-describedby='basic-addon2'
              />
              <i class='fas fa-lock'></i>

              <FormControl
                placeholder='EXPRIATION DATE(MM/YY)'
                aria-label='EXPRIATION DATE(MM/YY)'
                aria-describedby='basic-addon2'
              />

              <FormControl
                placeholder='SECURITY CODE'
                aria-label='SECURITY CODE'
                aria-describedby='basic-addon2'
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
                <i class='fab fa-paypal'></i>
                <i class='fab fa-cc-paypal'></i>
              </InputGroup.Prepend>
              <FormControl aria-label='Text input with radio button' />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
                <i class='fab fa-amazon'></i>
                <i class='fab fa-amazon-pay'></i>
              </InputGroup.Prepend>
              <FormControl aria-label='Text input with radio button' />
            </InputGroup>
            <h5>BILLING ADDRESS</h5>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio aria-label='Radio button for following text input' />
              </InputGroup.Prepend>
              <FormControl aria-label='Text input with radio button' />
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Radio
                  placeholder='Same as shipping address'
                  aria-label='Radio button for following text input'
                />
              </InputGroup.Prepend>
              <FormControl
                placeholder='Use a different address'
                aria-label='Text input with radio button'
              />
            </InputGroup>
            <Button variant='purple'>PAY NOW</Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PaymentCard;

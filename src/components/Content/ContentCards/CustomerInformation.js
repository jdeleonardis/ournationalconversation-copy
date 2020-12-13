import React, { Component } from 'react';
import {
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
  Form
} from 'react-bootstrap';

import '../../../styles/CustomerInformation.css';

class CustomerInformation extends Component {
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
      <div className='customer-info'>
        <Button variant=''  className='nf-btn ' onClick={this.showMenu}>
          <span className='customer-info-title'>
            1.&nbsp;CUSTOMER INFORMATION
          </span>
          <hr className='cs-Rectangle-125' />
        </Button>

        {this.state.showMenu ? (
          <div
            className='customer-info-menu '
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
            <Form>
              <Form.Group>
                <Form.Label className='payment-method mb-3 '>EMAIL</Form.Label>
                <Form.Control
                  className='credit-card-placeholder mb-2'
                  type='email'
                  placeholder='EMAIL ADDRESS'
                />
              </Form.Group>

              <Form.Group id='formGridCheckbox'>
                <Form.Check type='checkbox' className='subscribe' id=''>
                  <Form.Check.Input
                    className='subscribe-radio'
                    type='checkbox'
                  />
                  <Form.Check.Label>
                    <span className=''>Subscribe to our newsletter</span>
                  </Form.Check.Label>
                </Form.Check>
              </Form.Group>
              <Form.Group className='' controlId='formGridAddress1'>
                <Form.Label className='payment-method mb-3 '>
                  SHIPPING ADDRESS
                </Form.Label>
                <Form.Row>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='FIRST NAME'
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='LAST NAME'
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='ADDRESS'
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='APT/SUITE'
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='CITY'
                    />
                  </Col>
                </Form.Row>

                <Form.Row>
                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='COUNTRY'
                      as='select'
                      defaultValue='Choose...'
                    >
                      <option>COUNTRY</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='STATE'
                      as='select'
                      defaultValue='Choose...'
                    >
                      <option>STATE</option>
                      <option>...</option>
                    </Form.Control>
                  </Col>

                  <Col>
                    <Form.Control
                      className='credit-card-placeholder mb-2'
                      placeholder='ZIP CODE'
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>

            <InputGroup className=' '>
              <Button className='cont-shipping-method' variant='purple'>
                CONTINUE TO SHIPPING METHOD
              </Button>
            </InputGroup>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CustomerInformation;

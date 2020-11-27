import React, { Component, Fragment } from 'react';
import {
  Container,
  Row,
  Col
  // Form,
  // Button,
  // Card,
  // Dropdown,
  // DropdownButton,
} from 'react-bootstrap';
import SignupComponent from '../layout/SignupComponent';

import { Helmet } from 'react-helmet';

const initialState = {
  userName: '',
  email: '',
  emailError: '',
  passwordError: '',
  password: '',
  userNameError: '',
  password2: '',
  password2Error: '',
  country: '',
  countryError: ''
};

export class Signup extends Component {
  state = initialState;

  // Handle change of the inputs
  handleChange = (event) => {
    const isCheckbox = event.target.type === 'checkbox';
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let userNameError = '';
    let emailError = '';
    let passwordError = '';
    let password2Error = '';
    const userNameRegex = /^[a-z0-9_-]{3,15}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // General Email Regex (RFC 5322 Official Standard)
    // /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (!this.state.userName) {
      userNameError = 'Username cannot be blank';
    }

    //--------------------------------------------------------------------------
    // TIMEOUT for ERROR MESSAGE (if using, add an ID to 'userNameError' div below called 'fade')
    // VERSION 1:
    // setTimeout(function () {
    //   document.getElementById('fade').style.display = 'none';
    // }, 3000);

    // VERSION 2:
    // setTimeout(function () {
    //   // start a delay
    //   var fade = document.getElementById('fade'); // get required element
    //   fade.style.opacity = 1; // set opacity for the element to 1
    //   fade.style.innerHTML = '';
    //   var timerId = setInterval(function () {
    //     // start interval loop
    //     var opacity = fade.style.opacity; // get current opacity
    //     if (opacity === 0) {
    //       // check if its 0 yet
    //       clearInterval(timerId); // if so, exit from interval loop
    //     } else {
    //       fade.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
    //     }
    //   }, 100); // run every 0.1 second
    // }, 1000); // wait to run after 5 seconds

    //--------------------------------------------------------------------------

    // USERNAME VALIDATION
    // Username RegEx: Username must be any lowercase character, digit, or the symbols "_" and "-", having a length of 3 to 16 characters.
    if (!this.state.userName.match(userNameRegex)) {
      userNameError = 'Please enter a valid username.';
    } else {
      userNameError = '';
      console.log('Username is valid');
    }

    console.log(this.state.userName);

    if (!this.state.userName) {
      userNameError = 'Username cannot be blank.';
    }

    if (userNameError) {
      this.setState({ userNameError });
      return false;
    }

    // Email validation: basic version
    // if (!this.state.email.includes('@')) {
    //   emailError = 'Please enter a valid email.';
    // }

    // EMAIL VALIDATION
    // Email RegEx version
    if (!this.state.email.match(emailRegex)) {
      emailError = 'Please enter a valid email.';
    } else {
      console.log('Email is valid');
    }

    if (!this.state.email) {
      emailError = 'Email cannot be blank.';
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    // PASSWORD VALIDATION
    // Password RegEx: Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter
    if (!this.state.password.match(passwordRegex)) {
      passwordError = 'Please enter a valid password.';
    } else {
      console.log(
        'Password is valid (between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter)'
      );
    }

    if (!this.state.password) {
      passwordError = 'Password is required.';
    }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }

    // PASSWORD CONFIRMATION VALIDATION
    // Password Confirmation RegEx (same as password): Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter

    // if (!this.state.password2.match(passwordRegex)) {
    //   password2Error = 'Please enter a valid password.';
    // } else {
    //   console.log('Password confirmation matches password');
    // }

    if (this.state.password2 === this.state.password) {
      console.log('Password confirmation matches password');
    }

    if (this.state.password2 !== this.state.password) {
      console.error('Passwords do not match.');
      password2Error = 'Passwords do not match.';
    }

    if (!this.state.password2) {
      password2Error = 'Please confirm your password.';
    }

    // if (this.state.password2 !== this.state.password) {
    //   // if (this.state.password2.match(!this.state.password)) {
    //   passwordError = 'Passwords do not match.';
    // }

    if (password2Error) {
      this.setState({ password2Error });
      return false;
    }

    // PASSWORD CONFIRMATION VALIDATION
    // Password Confirmation RegEx (same as password): Password must be between 6 to 20 characters, and contain at least one numeric digit, one uppercase and one lowercase letter

    // if (!this.state.password2.match(passwordRegex)) {
    //   password2Error = 'Please enter a valid password.';
    // } else {
    //   console.log('Password confirmation matches password');
    // }

    if (this.state.password2 === this.state.password) {
      console.log('Password confirmation matches password');
    }

    if (this.state.password2 !== this.state.password) {
      console.log('Passwords do not match.');
      password2Error = 'Passwords do not match.';
    }

    if (!this.state.password2) {
      password2Error = 'Please confirm your password.';
    }

    if (password2Error) {
      this.setState({ password2Error });
      return false;
    }

    return true;
  };

  // Dropdown Menu Function
  // singleSelectChangeText() {
  //   //Getting Value
  //   var selObj = document.getElementById('singleSelectTextDDJS');
  //   var selValue = selObj.options[selObj.selectedIndex].text;

  //   //Setting Value
  //   document.getElementById('textFieldTextJS').value = selValue;
  //   console.log(selValue);
  // }

  // Submit the state
  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.table(this.state);

      // Clear form if submission is valid
      this.setState(initialState);
    }
  };

  render() {
    // const { country, region } = this.state; // use this if including region in dropdown
    // const { country } = this.state;

    // const handleSelect = (e) => {
    //   console.log(e);
    // };

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Sign Up</title>
          </Helmet>
          <Container className='container' fluid>
            <br />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <div>
                  <SignupComponent />
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Signup;

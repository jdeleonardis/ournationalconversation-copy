import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
export class CustomButton extends Component {
  render() {
    return (
      <>
        <style type='text/css'>
          {`
            .btn-purple {
              background-color: #2c1c59 ;
              color: white;
            }

            .btn-xxl {
              padding: 0.35rem 1.35rem;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              font-size: 1rem;
              line-height: 2.2em;
              letter-spacing: 0.0025em;
              text-align: center;
            }
            `}
        </style>

        <Button variant='purple' size='xxl'>
          purple button
        </Button>
      </>
    );
  }
}

export default CustomButton

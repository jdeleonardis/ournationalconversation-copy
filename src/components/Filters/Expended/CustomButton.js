import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
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
              padding: 0.5rem 2rem;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 0.0025em;

            }
            `}
        </style>

        <Button variant='' size=''>

        </Button>
      </>
      
    );
  }
}

export default CustomButton

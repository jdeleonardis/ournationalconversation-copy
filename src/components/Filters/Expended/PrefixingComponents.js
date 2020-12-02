import React, { Component } from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';
export class PrefixingComponents extends Component {
  render() {
    return (
      <>
        {/* <style type='text/css'>
          {`
            .btn-purple-outline {
              background-color: white ;
              color: #2c1c59;
            }

            .btn-xxxl {
              padding: 1.5rem 2rem;
              font-family: Montserrat;
              font-style: normal;
              font-weight: 500;
              letter-spacing: 0.0025em;

            }
            `}
        </style> */}
        {/* Hint: inspect the markup to see how the classes differ */}
        <ThemeProvider prefixes={{ btn: 'my-btn' }}>
          <Button variant='primary'>My Button</Button>
        </ThemeProvider>{' '}
        <Button bsPrefix='super-btn' variant='purple-outline' size='xxxl'>
          Super button
        </Button>
      </>
    );
  }
}

export default PrefixingComponents

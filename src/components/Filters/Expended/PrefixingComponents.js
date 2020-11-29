import React, { Component } from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';
export class PrefixingComponents extends Component {
  render() {
    return (
      <>
        {/* Hint: inspect the markup to see how the classes differ */}
        <ThemeProvider prefixes={{ btn: 'my-btn' }}>
          <Button variant='primary'>My Button</Button>
        </ThemeProvider>{' '}
        <Button bsPrefix='super-btn' variant='primary'>
          Super button
        </Button>
      </>
    );
  }
}

export default PrefixingComponents

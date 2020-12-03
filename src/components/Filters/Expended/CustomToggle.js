import React, { Component , useState } from 'react';

import {Dropdown,
FormControl} from 'react-bootstrap';




function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <button
      type='button'
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Example() {
  return (
    <Accordion defaultActiveKey='0'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='0'>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey='1'>Click me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey='1'>
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

render(<Example />);


export default CustomToggle;
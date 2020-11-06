import React from 'react';
import { Button } from 'react-bootstrap';
import '../../App.css';

const GlobalButton = (props) => {
  return (
    <div>
      <Button
        className='global-btn '
        href={props.link}
        style={{
          width: `${props.width}`,
          fontSize: `${props.fontSize}`,
          padding: `${props.padding}`,
        }}
        variant='outline-primary'
      >
        {props.label}
      </Button>
    </div>
  );
};

export default GlobalButton;

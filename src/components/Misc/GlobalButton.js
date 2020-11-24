import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/global-btn.css';

const GlobalButton = (props) => {
  return (
    <div>
      <Button
        className='global-btn '
        href={props.link}
        style={{
          width: `${props.width}`,
          fontSize: `${props.fontSize}`,
          margin: `${props.margin}`,
          padding: `${props.padding}`,
          float: `${props.float}`,
        }}
        variant='outline-primary'
      >
        {props.label}
      </Button>
    </div>
  );
};

export default GlobalButton;

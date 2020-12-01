import React from 'react';
import { Card, Button} from 'react-bootstrap';
import Chicago from '../../../img/Chicago.jpg';
import Denver from '../../../img/Denver.jpg';
import Detroit from '../../../img/Detroit.jpg';
import Houston from '../../../img/Houston.jpg';
import Nashville from '../../../img/Nashville.jpg';
import Portland from '../../../img/Portland.jpg';

import '../../../styles/LocationOverlay.css';


function AddLocationCard(props) {
  return (
    <>
      <Card className='location-card'>
        <Card.Img
          className='local-pic'
          variant=''
          // src='{props.local}/100px180?text={props.local}'
        >
          {props.local}
        </Card.Img>

        <Card.Body className='local-name' variant=''>
          <Card.Title>Local{props.local}</Card.Title>

          <Button className='local-add' variant=''>
            ADD <i class='fas fa-plus' />
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddLocationCard;

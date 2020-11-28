import React from 'react';
import { Card, Button} from 'react-bootstrap';
import '../../../styles/LocationOverlay.css';


function AddLocationCard(props) {
  return (
    <>
      <Card className='location-card'>
        <Card.Img
          className='local-pic'
          variant=''
          src='../../../../img/book-cover.jpg'
        >
          {props.local}
        </Card.Img>

        <Card.Body className='local-name' variant=''>
          <Card.Title>Local{props.local}</Card.Title>

          <Button className='local-add' variant=''>
            ADD <i class='fas fa-plus'/>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default AddLocationCard;

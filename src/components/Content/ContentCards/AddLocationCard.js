import React from 'react';
import { Card, Button,Col} from 'react-bootstrap';

import Nashville from '../../../img/Nashville.jpg';
import Houston from '../../../img/Houston.jpg';
import Detroit from '../../../img/Detroit.jpg';
import Chicago from '../../../img/Chicago.jpg';
import Denver from '../../../img/Denver.jpg';
import Portland from '../../../img/Portland.jpg';
import bookCover from '../../../img/book-cover.jpg';

import '../../../styles/LocationOverlay.css';


function AddLocationCard(props) {
  return (
    <>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Nashville}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>
              Nashville{props.local}
            </Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Houston}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>
              Houston{props.local}
            </Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Detroit}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>
              Detroit{props.local}
            </Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Chicago}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>
              Chicago{props.local}
            </Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Denver}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>Denver{props.local}</Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={6} md={4}>
        <Card className='location-card'>
          <Card.Img className='local-pic' variant='' src='{Portland}'>
            {props.local}
          </Card.Img>
          <Card.Body className='local-name' variant=''>
            <Card.Title className='local-title'>
              Portland{props.local}
            </Card.Title>
            <Button className='local-add' variant=''>
              ADD <i class='fas fa-plus' />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default AddLocationCard;

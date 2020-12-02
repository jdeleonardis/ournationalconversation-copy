import React from 'react';
import { Card, Button,Col,Row,Image} from 'react-bootstrap';

import Nashville from '../../../img/Nashville.jpg';
import Houston from '../../../img/Houston.jpg';
import Detroit from '../../../img/Detroit.jpg';
import Chicago from '../../../img/Chicago.jpg';
import Denver from '../../../img/Denver.jpg';
import Portland from '../../../img/Portland.jpg';


import '../../../styles/LocationOverlay.css';


function AddLocationCard(props) {
  return (
    <>
      {/*       
        <Col xs={6} md={4}>
          <Image src='holder.js/171x180' rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src='holder.js/171x180' roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src='holder.js/171x180' thumbnail />
        </Col>
   */}

      <Col xs={6} md={4}>
        <Card className='location-card'>
          <div className="frontground"></div>
          <Card.Img
            className='local-pic'
            variant=''
            src={Nashville}
            // width='100'
            // height='75'
            // alt='Nashville [100%x75]
            // '
          >
            {/* <Card.Img
            className='local-pic'
            variant=''
            src='/img/Nashville.jpg'
           alt='Nashville[100%x75]'
          > */}
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
          <Card.Img
            className='local-pic'
            variant=''
            src={Houston}
            width='100'
            height='75'
          >
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
          <Card.Img
            className='local-pic'
            variant=''
            src={Detroit}
            width='100'
            height='75'
          >
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
          <Card.Img
            className='local-pic'
            variant=''
            src={Chicago}
            width='100'
            height='75'
          >
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
          <Card.Img
            className='local-pic'
            variant=''
            src={Denver}
            width='100'
            height='75'
          >
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
          <Card.Img
            className='local-pic'
            variant=''
            src={Portland}
            width='100'
            height='75'
          >
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

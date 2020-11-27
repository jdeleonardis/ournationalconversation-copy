import React from 'react';
import { Card, Button, Image, Col, Row, Container } from 'react-bootstrap';
import './styles/comments.css';
import CardBody from './CardBody';
import TagLine from './TagLines';
import ShareSvg from './styles/shareSvg';
import SaveSvg from './styles/saveSvg';
import ClockSvg from './styles/clockSvg';

function AddLocationCard(props) {
  return (
    <>
      <Container>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='' src='../../img/{props.title}' />
          <Card.Body>
  <Card.Title>Card Title{props.title}</Card.Title>

            <Button variant=''>
              ADD <i class='fas fa-plus'> </i>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default AddLocationCard;

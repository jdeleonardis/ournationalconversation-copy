import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import GlobalButton from '../../Misc/GlobalButton';
import '../../../styles/StoreCards.css';

function StoreCards() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Card style={{ width: '15rem', float: 'left' }}>
              <Card.Img
                className='book-image'
                variant='top'
                src='https://redshelf-images.s3-external-1.amazonaws.com/item_image/default_item_image.jpg'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <GlobalButton label='ADD TO CART' />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: '15rem', float: 'right' }}>
              <Card.Img
                className='book-image'
                variant='top'
                src='https://redshelf-images.s3-external-1.amazonaws.com/item_image/default_item_image.jpg'
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <GlobalButton label='ADD TO CART' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreCards;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GlobalButton from '../../Misc/GlobalButton';
import '../../../styles/StoreCards.css';
import bookCover from '../../../img/book-cover.jpg';
import Star from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';

function StoreCards() {
  const star = {
    marginBottom: '3px',
    fontSize: '15px',
  };

  const filledStar = {
    color: '#ffb400',
    marginBottom: '3px',
    fontSize: '15px',
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <Card className='book-card'>
              <Card.Img className='book-image' variant='top' src={bookCover} />
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted item-category'>
                  BOOK <span className='book-price'>$13.95</span>
                </Card.Subtitle>
                <Card.Title className='book-title-text'>
                  Let's Fix America
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  <div className='rating-stars'>
                    <Star style={filledStar} />
                    <Star style={filledStar} />
                    <Star style={filledStar} />
                    <StarHalf style={filledStar} />
                    <Star style={star} />
                    &nbsp;&nbsp;
                    <span className='rating'>5.00</span>
                  </div>
                </Card.Subtitle>
                <Card.Text className='book-caption'>
                  Our book, filled with 41 nonpartisan policy proposals + 8
                  moonshot teasers.
                </Card.Text>
                <GlobalButton float='right' label='ADD TO CART' />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='book-card'>
              <Card.Img className='book-image' variant='top' src={bookCover} />
              <Card.Body>
                <Card.Subtitle className='mb-2 text-muted item-category'>
                  BOOK <span className='book-price'>$13.95</span>
                </Card.Subtitle>
                <Card.Title className='book-title-text'>
                  Let's Fix America
                </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  <div className='rating-stars'>
                    <Star style={filledStar} />
                    <Star style={filledStar} />
                    <Star style={filledStar} />
                    <StarHalf style={filledStar} />
                    <Star style={star} />
                    &nbsp;&nbsp;
                    <span className='rating'>5.00</span>
                  </div>
                </Card.Subtitle>
                <Card.Text className='book-caption'>
                  Our book, filled with 41 nonpartisan policy proposals + 8
                  moonshot teasers.
                </Card.Text>
                <GlobalButton float='right' label='ADD TO CART' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StoreCards;

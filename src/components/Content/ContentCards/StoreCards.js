import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GlobalButton from '../../Misc/GlobalButton';
import '../../../styles/StoreCards.css';
import StarRatingComponent from 'react-star-rating-component';
import bookCover from '../../../img/book-cover.jpg';

function StoreCards() {
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
                  {/* <div className='rating-stars'>
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className='rating'>5.00</span>
                  </div> */}
                  <div style={{ marginLeft: '10px' }}>
                    <StarRatingComponent
                      name='rate2'
                      editing={false}
                      emptyStarColor={'#929292'}
                      renderStarIcon={() => (
                        <span style={{ margin: '0 5px', fontSize: '10px' }}>
                          <i class='fas fa-star'></i>
                        </span>
                      )}
                      starCount={5}
                      value={4}
                    />
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
                    <i style={{ color: '#ffb400' }} class='fas fa-star'></i>
                    &nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>&nbsp;&nbsp;
                    <i class='fas fa-star'></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className='rating'>5.00</span>
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

import React from 'react'
import {
  Modal,
  Button,
  Table,
  Container,
  Row,
  Col,
  Card,
  Image

} from 'react-bootstrap'

import GlobalButton from '../../Misc/GlobalButton';
import '../../../styles/StoreCards.css';
import bookCover from '../../../img/book-cover.jpg';

const ShoppingCartOverlay = () => {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart (1{})</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={7}>
                ITEM
              </Col>
              <Col xs={6} md={3}>
                QUANTITY
              </Col>
              <Col xs={6} md={2}>
                PRICE
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={4} md={2}>
                <Image
                  className='book-image'
                  variant='top'
                  src={bookCover}
                  fluid
                ></Image>
              </Col>
              <Col xs={6} md={5}>
                Rethinking America: Rethinking the World
              </Col>
              <Col xs={4} md={3}>
                <i class='fas fa-minus' />
                <span>1</span>
                <i class='fas fa-plus' />
              </Col>
              <Col xs={4} md={2}>
                <span className='book-price'>$13.95</span>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={4} md={10}>
                SUBTOTAL
              </Col>

              <Col xs={6} md={2}>
                <span className='book-price'>$13.95</span>
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={7}>
                SHIPPING
              </Col>

              <Col xs={6} md={5}>
                <p>Shipping calculated at checkout</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Button variant='purple'>CHECKOUT</Button>
        <p>OR</p>
        <Modal.Footer>
          <a>CONITUE SHOPPING</a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ShoppingCartOverlay

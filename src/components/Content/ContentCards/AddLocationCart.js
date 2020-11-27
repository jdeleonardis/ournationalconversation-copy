import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import './styles/comments.css';
import CardBody from './CardBody';
import TagLine from './TagLines';
import ShareSvg from './styles/shareSvg';
import SaveSvg from './styles/saveSvg';
import ClockSvg from './styles/clockSvg';

function AddLocationCard(props) {
  return (
    <div>
      <Container>
        <Card>
          <Container>
            <Row>
              <Col md={props.vertical ? 12 : 2} sm={12}>
                <span
                  style={{
                    fontWeight: 'bold',
                    color: 'rgb(48 31 97)',
                    fontSize: '25px'
                  }}
                >
                  {' '}
                  Sources{' '}
                </span>
              </Col>

              <Col md={props.vertical ? 12 : 10} sm={12}>
                <TagLine />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className='passive'> NEWS | POLITICS</div>
              </Col>
              <Col md={12}>
                <h1
                  className='titleName'
                  style={
                    !props.vertical
                      ? { fontSize: '25px' }
                      : { fontSize: '20px' }
                  }
                >
                  A New Clash Over Mail Voting: The Cost of Postage
                </h1>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={props.vertical ? 12 : 4}>
                <Card.Img
                  src='https://c.ndtvimg.com/2020-10/el6r9e5c_xi-jinping-afp_625x300_31_October_20.jpg'
                  alt='Card image'
                />
              </Col>
              <Col xs={12} sm={12} md={props.vertical ? 12 : 8}>
                <Card.Body>
                  <Row>
                    <p className='AddLocationCardText'>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <span>
                  <ClockSvg />
                </span>
                <span className='actionBtnTexts'> 4 min ago</span>
              </Col>
              <Col className='text-right'>
                <span style={{ marginRight: '5%' }}>
                  <ShareSvg />
                </span>
                <span style={{ marginRight: '2%' }}>
                  <SaveSvg />
                </span>
                <br />
              </Col>
            </Row>
            <br />
          </Container>
        </Card>
      </Container>
    </div>
  );
}

export default AddLocationCard;

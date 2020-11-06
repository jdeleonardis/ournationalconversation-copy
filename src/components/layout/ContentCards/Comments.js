import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import '../ContentCards/syles/comments.css';
import CommentSvg from './syles/commentSvg';
import HeartSvg from './syles/heartSvg';
import DotSvg from './syles/dotSvg';
import SaveSvg from './syles/saveSvg';
import ShareSvg from './syles/shareSvg';

function Comment() {
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col className='text-left'>
                <span className='sectionHeader'>Solution</span>
                <span className='sectionSubHeader'>
                  {' '}
                  | Science {'&'} Technology
                </span>
              </Col>
            </Row>
            <Row>
              <Col className='text-left header'>ONC Releases a New Website</Col>
            </Row>
            <Row>
              <Col md={1}>
                <Image
                  src='https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4'
                  roundedCircle
                  style={{ height: '50px' }}
                />
              </Col>
              <Col md={11}>
                <Row className='titleName'>Lebron James</Row>
                <Row className='location'>
                  Los Angeles, California, United States
                </Row>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                Now here you go again You say you want your freedom Well, who am
                I to keep you down It's only right that you should Play the way
                you feel it But listen carefully To the sound of your loneliness
                Like a heartbeat drives you mad In the stillness of remembering
                what you had And what you lost And what you had And what you
                lost
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <span className='dateTitle'>Nov 3, 2020</span>{' '}
                <span style={{ marginLeft: '1rem' }}>
                  <CommentSvg />
                  133 <DotSvg /> <HeartSvg /> 422
                </span>
              </Col>
              <Col md={9} className='text-right'>
                <span>
                  <ShareSvg />
                </span>
                <span style={{ marginLeft: '1rem' }}>
                  <HeartSvg hw={'20 '} />
                </span>
                <span style={{ marginLeft: '1rem' }}>
                  <SaveSvg />
                </span>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Comment;

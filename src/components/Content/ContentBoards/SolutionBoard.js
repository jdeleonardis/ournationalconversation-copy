import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ContentCard from '../ContentCards/ContentCard';
import * as type from '../ContentCards/constants/cardConstants';

const ColoredLine = ({ color }) => (
  <div>
    <Row>
      <Col
        md={2}
        style={{ fontWeight: 'bold', fontFamily: 'Calibri', fontSize: '20px' }}
      >
        Newly Arrived
      </Col>

      <Col md={10}>
        <hr
          style={{
            backgroundColor: '#491542',
            height: 10,
          }}
        />
      </Col>
    </Row>
  </div>
);

function Solutions() {
  return (
    <div>
      <Container>
        <ColoredLine />
        <br />
        <ContentCard type={type.OPINION} />
        <br />
        <ContentCard type={type.PODCAST} />
        <br />
        <ContentCard type={type.WEBISODE} />
        <br />
        <ContentCard type={type.SOLUTION} />
        <br />
        <div className='text-center'>
          <Button variant='light'>SEE MORE PODCASTS</Button>
        </div>
      </Container>
    </div>
  );
}

export default Solutions;

import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ContentCard from '../ContentCards/ContentCard';
import * as type from '../ContentCards/constants/cardConstants';

function Solutions() {
  return (
    <div>
      <Container>
        <br />
        <ContentCard type={type.OPINION} />
        <br />
        <ContentCard type={type.PODCAST} />
        <br />
        <ContentCard type={type.WEBISODE} />
        <br />
        <ContentCard type={type.SOLUTION} />
        <br />
      </Container>
    </div>
  );
}

export default Solutions;

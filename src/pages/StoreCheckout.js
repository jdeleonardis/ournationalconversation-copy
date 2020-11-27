import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../components/Filters/SortBy';
import FilterBarStoreCheckout from '../components/Filters/FilterBarStore';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';
import StoreCards from '../components/Content/ContentCards/StoreCards';
import '../styles/Pages.css';

export class StoreCheckout extends Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '104%'
    };

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | ONC StoreCheckout</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col md={6}>
                <SortBy pageName='StoreCheckout' horizLineTextLeft='CHECKOUT' />
                <br />
              </Col>
              <Col md={6}></Col>
            </Row>

            <Row>
              <Col md={6}></Col>
              <Col md={6}></Col>
              <Col md={6}></Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default StoreCheckout;

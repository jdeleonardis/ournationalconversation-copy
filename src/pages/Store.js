import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import SortBy from '../components/Filters/SortBy';
import FilterBar from '../components/Filters/StoreFilter';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import ContentCard from '../components/Content/ContentCards/ContentCard';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';
import StoreCards from '../components/Content/ContentCards/StoreCards';
import '../styles/Pages.css';

export class Store extends Component {
  render() {
    const style = {
      textAlign: 'center',
      width: '104%',
    };

    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Store</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col md={3}>
                <SearchBox pageName='Store' />
              </Col>
              <Col md={6}>
                <SortBy
                  pageName='Store'
                  pageTitle='ONC STORE'
                  horizLineTextLeft='All Items'
                />
                <br />
              </Col>
              <Col md={3}></Col>
            </Row>

            <Row>
              <Col md={3}>
                <FilterBar />
              </Col>
              <Col md={6}>
                <div
                  style={{
                    width: '111%',
                    marginLeft: '-20px',
                  }}
                >
                  <StoreCards />
                </div>
                <br />
                <div style={style}>
                  <GlobalButton
                    className='global-btn'
                    padding='7px 55px'
                    fontWeight='700'
                    label='SEE MORE ITEMS'
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className='rail-group' style={{ marginTop: '-88px' }}>
                  <RailButtons />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default Store;

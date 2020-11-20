import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';
import FilterBar from '../components/Filters/FilterBar';
import NewsCard from '../components/Content/ContentCards/NewsCard';
import { Container, Row, Col } from 'react-bootstrap';
import SortBy from '../components/Filters/SortBy';
import * as type from '../components/Content/ContentCards/constants/cardConstants';
import ContentCard from '../components/Content/ContentCards/ContentCard';
import RailButtons from '../components/Misc/RailButtons';
import GlobalButton from '../components/Misc/GlobalButton';
import SearchBox from '../components/Filters/SearchBox';


class News extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | News</title>
          </Helmet>

          <Container className='Newscontainer' fluid>
            <br />
            <Row>
              <Col md={3}>
                <SearchBox pageName='News' />
              </Col>
              <Col md={6}>
                <SortBy
                  pageName='News'
                  pageTitle='NEWS'
                  horizLineTextLeft='Todays Top Stories'
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
                    marginLeft: '-30px',
                  }}
                >
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  
                  
                </div>
                <br />
                <div>
                  <GlobalButton
                    padding='7px 55px'
                    fontWeight='700'
                    label='SEE MORE NEWS'
                  />
                </div>
              </Col>
              <Col md={3}>
                <div style={{ marginTop: '-90px' }}>
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

export default News;

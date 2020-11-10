import React, { Component, Fragment } from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

import FilterBar from '../layout/FilterBar';

import SourceFilterBar from '../layout/SourceFilterBar';

export class MockArticles extends Component {
  // const mockarticles = (props) => {
  render() {
    return (
      <Fragment>
        <div>
          <Container className='container' fluid>
            <br />

            <Row>
              <Col md={3}>
                <FilterBar />

                <SourceFilterBar />
              </Col>

              <Col md={9}>
                <Card
                  style={{ marginBottom: '20px' }}
                  className='article politics'
                >
                  <Card.Body>
                    <Card.Title>
                      The crucial Trump voting bloc that drifted to Biden
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Politics
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ marginBottom: '20px' }} className='article us'>
                  <Card.Body>
                    <Card.Title>
                      Biden defeats Trump to become 46th president
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      US
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article polls'
                >
                  <Card.Body>
                    <Card.Title>
                      Election 2020: Live coverage, updates and results
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Polls
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article politics'
                >
                  <Card.Body>
                    <Card.Title>
                      Jared Kushner's Company Reportedly Moves To Evict Hundreds
                      As Pandemic Rages
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Politics
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article world'
                >
                  <Card.Body>
                    <Card.Title>
                      A Nigerian prince says he rented out an entire NYC
                      restaurant for his first date with his now-wife, who had
                      no idea he was a royal
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      World
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article business'
                >
                  <Card.Body>
                    <Card.Title>
                      Kohl’s made ‘unimaginable decisions’ to get through
                      COVID-19 pandemic: CEO
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Business
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ marginBottom: '20px' }} className='article tech'>
                  <Card.Body>
                    <Card.Title>
                      Crypto Impact Unclear After Joe Biden Unseats Donald Trump
                      as Next US President
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Tech
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card style={{ marginBottom: '20px' }} className='article tech'>
                  <Card.Body>
                    <Card.Title>
                      Bitcoin hits $16,000 on US election unrest
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Tech
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article health'
                >
                  <Card.Body>
                    <Card.Title>
                      COVID-19 in Florida: 4,452 new infections, test positivity
                      highest in three months
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Health
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article sci-env'
                >
                  <Card.Body>
                    <Card.Title>
                      A blue-green glow adds to platypuses’ long list of bizarre
                      features
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Science & Environment
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article media'
                >
                  <Card.Body>
                    <Card.Title>
                      No social media is safe: How election misinformation
                      spread on LinkedIn, Pinterest and Nextdoor
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Media
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article faith-spirituality'
                >
                  <Card.Body>
                    <Card.Title>
                      What Is Spirituality? Exploring Spirituality For Beginners
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Faith & Spirituality
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article fact-check'
                >
                  <Card.Body>
                    <Card.Title>
                      Trump’s Bogus Claim of ‘Election Interference’ and More
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Fact Check
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article fact-check'
                >
                  <Card.Body>
                    <Card.Title>
                      Trump’s Wild, Baseless Claims of Illegal Voting
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Fact Check
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  style={{ marginBottom: '20px' }}
                  className='article fact-check'
                >
                  <Card.Body>
                    <Card.Title>
                      Trump Tweets Flagged by Twitter for Misinformation
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      Fact Check
                    </Card.Subtitle>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default MockArticles;

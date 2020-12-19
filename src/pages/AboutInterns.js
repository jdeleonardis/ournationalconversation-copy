import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import RailButtons from '../components/Misc/RailButtons';
import AboutMemberCard from '../components/Content/ContentCards/AboutTeamCard';
import data from '../data/cardTempData/aboutteam.json';
import GlobalButton from '../components/Misc/GlobalButton';
import '../styles/aboutpage.css';

export class AboutInterns extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Helmet>
            <title>Our National Conversation | Meet Our Interns</title>
          </Helmet>

          <Container className='container' fluid>
            <br />
            <Row>
              <Col md={9}>
                <Row>
                  &nbsp;&nbsp;&nbsp;
                  <div className='texttitle'>MEET OUR INTERNS</div>
                  &nbsp;&nbsp;
                  <div className='dividerAbout'></div>&nbsp;&nbsp;&nbsp;
                </Row>
                <Row>
                  {data.map((data) => (
                    <Col md={4}>
                      <AboutMemberCard data={data} />
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col md={3}>
                <div className='rail-group'>
                  <RailButtons />
                </div>
              </Col>
            </Row>
            <Row></Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default AboutInterns;

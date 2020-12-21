import React, { useState, Fragment } from 'react';
import { Row, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import TemporaryLandingPageLeftColumn from '../components/TermporaryLandingPage/TemporaryLandingPageLeftColumn'
import TemporaryLandingPageRightColumn from '../components/TermporaryLandingPage/TemporaryLandingPageRightColumn'


const TempLandingPage = () => {

  const [emailAddress, setEmailAddress] = useState('');

  const submitSubscription = () => {
    alert(emailAddress)
  }    

  const changeHandler = (e) => {    
    setEmailAddress(e.target.value)
  }   

  return (
    <Fragment>
      <div>
        <Helmet>
          <title>Our National Conversation</title>
        </Helmet>
        <Container className='container' fluid>
          <br />
          <Row>
            <TemporaryLandingPageLeftColumn />
            <TemporaryLandingPageRightColumn 
              changeHandler={changeHandler}
              submitSubscription={submitSubscription}
            />
          </Row>          
        </Container>
      </div>
    </Fragment>
  );
};

export default TempLandingPage;

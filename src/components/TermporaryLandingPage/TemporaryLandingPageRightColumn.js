import React from 'react';
import { Col, Container, Button, Form } from 'react-bootstrap';
import GlobalButton from '../../components/Misc/GlobalButton';
import '../../styles/TempLandingPage.css';
import bookCover from '../../img/book-cover.jpg';


function TemporaryLandingPageRightColumn(props) {  
    return (  
        <Col>
            <Container>
                <div id='checkOutBook'>
                    Check Out Our Book
                </div>
                <img src={bookCover} 
                    style={{
                    width: '100%',
                    padding: '20px 100px 20px'}}/>
                <div
                    style={{
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '20px'}}>
                    <Button
                        id='tempLanding-btn'
                        href="https://www.amazon.com/" 
                        target='_blank'
                    >
                        BUY IT ON AMAZON
                    </Button>
                </div>
                <div className='secondaryHeaderLandingPage'>
                    Stay Updated About
                </div>                    
                <div 
                className='secondaryHeaderLandingPage'
                style={{
                    marginTop: '0px'}}
                >                      
                    Our National Conversation!
                </div>    
                <div id='emailParagraph'>
                    Enter your email below and we'll update you on the progress of the website and any other information regarding the website's launch.
                </div>       
                <Form onSubmit={props.submitSubscription}>  
                    <Form.Label id='tertiaryHeaderLandingPage'>EMAIL ADDRESS</Form.Label>                
                    <Form.Row>
                        <Col xs={7} sm={7} lg={8}>
                        <Form.Control 
                            type='email'
                            id='enterEmailLandingPage'
                            name='emailaddress'
                            placeholder='ENTER EMAIL ADDRESS'                             
                            onChange={props.changeHandler}
                            required />                      
                        </Col>
                        <Col xs={5} sm={5} lg={4}>
                            <Button
                                id='tempLandingSubscribe-btn'
                                type='submit'>
                                SUBSCRIBE
                            </Button>                                      
                        </Col>                      
                    </Form.Row>
                    <div 
                        style={{
                        marginTop: '25px'}}
                    >
                        <span id='tertiaryHeaderLandingPage'>CONTACT US:</span><span id='joinONCEmail'>&nbsp;&nbsp;info@JoinONC.com</span>
                    </div>                           
                </Form>
        </Container>
    </Col>
    )
  
};

export default TemporaryLandingPageRightColumn;
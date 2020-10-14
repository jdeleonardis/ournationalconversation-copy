import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import "../styles/footer.css"

function Footer(){
    return(
        <footer className="footer">
        <Container>
            <div className="mt-5">        
            <br/>
            <Row>
            <Col className="text-left" >
              <a>About Us</a> <br/>
              <a>Contact Us</a> <br/>
              <a>Buy Our Book Us</a> <br/>
            </Col>
        <Col className="text-left">
              <a>News</a> <br/>
              <a>Opinions</a> <br/>
              <a>Solutions</a> <br/>
        </Col>

        <Col className="text-left">
              <a>Become A Writer</a> <br/>
              <a>Donator/Investors</a> <br/>
              <a>Advertisers</a> <br/>
        </Col>

        <Col className="text-left">
              <a>Terms of Service</a> <br/>
              <a>Privacy</a> <br/>
        </Col>
        <Col className="text-left">
              <a>Terms of Service</a> <br/>
              <a>Privacy</a> <br/>
        </Col>
        </Row>
        <br/>
  </div>

</Container>
        </footer>
    )
}

export default Footer;


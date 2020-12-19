import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import GlobalButton from '../components/Misc/GlobalButton';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Our National Conversation | Error</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
        />
        <style type='text/css'>{`
        body {
          background-color: #2c1c59;
        }

        .container {
          max-width: 100%;
          height: 100%;
          margin: auto;
          overflow: hidden;
          padding: 0;
        }
        
        hr,
        .onc-header,
        .navbar,
        .footer {
          display: none;
        }

        h2,
        p {
          color: #ffffff;
        }

        h2 {
          letter-spacing: 1.5px;
        }

        p {
          font-size: 20px;
        }

        #error-msg {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #four-o-four {
          font-family: 'Montserrat', sans-serif;
          font-size: 75px;
          letter-spacing: 5.5px;
        }

        #oops {
          font-family: 'Montserrat', sans-serif;
          letter-spacing: 1.5px;
        }

        #pnf {
          font-family: 'Roboto', sans-serif;
          letter-spacing: 2px;
        }

        #back-div {
          text-align: center;
        }

        #error-btn {
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-weight: 500;
          background: #ffffff;
          border-color: #ffffff;
          color: #2c1c59;
          margin-right: 5px;
          margin-bottom: 40px;
          padding: 3px 12px 7px 12px;
        }

        #error-btn:hover {
            background-color: #2c1c59;
            color: #ffffff !important;
            outline: none !important;
            box-shadow: none !important;
          }
          
          /* remove default border when clicking on button */
          #error-btn:active {
            background-color: #ffffff;
            color: #2c1c59 !important;
            outline: none !important;
            box-shadow: none !important;
          }
          
          #error-btn:focus {
            outline: none !important;
            box-shadow: none !important;
          }
    `}</style>
      </Helmet>
      <Container fluid>
        <Row>
          <Col md={12}>
            <div id='error-msg'>
              <h2 className='text-center animate__animated animate__fadeInDown'>
                <strong>
                  <span id='four-o-four'>404</span>
                </strong>
              </h2>
              <h2 className='text-center animate__animated animate__delay-1s animate__slower animate__hinge'>
                <strong>
                  <span id='oops'>Oops!</span>
                </strong>
              </h2>
              <br />
              <p className='text-center'>
                {/* <span id='pnf'>404 Page Not Found.</span> */}
                <span id='pnf'>Sorry, we couldn't find this page.</span>
              </p>
              <br />
              <div id='back-div'>
                <a class='btn btn-primary btn-sm' id='error-btn' href='/'>
                  <i className='fa fa-home fa-lg'></i> Take Me Home
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;

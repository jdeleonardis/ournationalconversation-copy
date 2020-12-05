import React, { useState} from 'react';
import { Modal, Button, Container, Form } from 'react-bootstrap';
import '../../../styles/NewsletterOverlay.css';

function NewsletterOverlay() {
  const [show, setShow] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subData, setSubData] = useState({
    emailaddress: '',
    top10: true,
    opinions: true,
    breaking: true,
    phonenumber: ''
  });

  const changeHandler = (event) => {
    switch (event.target.name) {
      case "emailaddress":
      case "phonenumber":
        setSubData({...subData, [event.target.name]: event.target.value})
        break;
      default:
        setSubData({...subData, [event.target.name]: event.target.checked})
    }

  }

  const submitSubscription = (e) => {    
    e.preventDefault();     
    setShow(false)
    setSubscribed(true)
    setSubData({
      emailaddress: '',
      top10: true,
      opinions: true,
      breaking: true,
      phonenumber: ''
    });
  }    

  return (
    <>
      {subscribed === false
       ?
      <Button        
        id='add-newsletter-sub'
        onClick={() => setShow(true)}
      >
        SIGN UP FOR OUR NEWSLETTER
      </Button>
      :
        <div id='subscribedToNewsletter'>
          SUBSCRIBED TO NEWSLETTER!
        </div>
      }

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        className='newsletter-overlay'
      >
        <Modal.Header
          className='newsletter-overlay-close'
          closeButton
        ></Modal.Header>
        <Modal.Body className='newsletter-overlay-contents '>
          <Container fluid>
            
            <p className='newsletter-overlay-title'>Sign Up For Our Newsletter!</p>
            <p className='newsletter-overlay-paragraph'>Enter your email below and let us know which stories you'd like to receive.  All
            newsletters are sent in the morning and afternoon Monday-Friday, then once daily on Saturday and Sunday.</p>

            <Form>  
              <Form.Group controlId='formBasicHeadline'>
                <Form.Label style={{fontSize: 'small', color: '#808182'}}>EMAIL ADDRESS</Form.Label>
                <Form.Control 
                  type='email'
                  name='emailaddress'
                  style={{fontSize: 'small'}}
                  placeholder='ENTER EMAIL ADDRESS'                  
                  onChange={changeHandler}
                  required />
              </Form.Group>
              <Form.Group>
                <Form.Check className="subCheckboxes" type="checkbox" label="Daily Top Ten Political News Updates" name="top10" checked={subData.top10} onChange={changeHandler}/>
                <Form.Check className="subCheckboxes" type="checkbox" label="Top Opinions" name="opinions" checked={subData.opinions} onChange={changeHandler}/>
                <Form.Check className="subCheckboxes" type="checkbox" label="Breaking News Texts (message and data rates apply)" name="breaking" checked={subData.breaking} onChange={changeHandler}/>
                <Form.Control 
                  id="subPhoneNumber"
                  type='text'                  
                  name='phonenumber'
                  style={{fontSize: 'small'}}
                  onChange={changeHandler}
                  placeholder='ENTER PHONE NUMBER' />
              </Form.Group>

              <Button        
                id='add-newsletter-sub'
                onClick={submitSubscription}
              >
                SUBSCRIBE
              </Button> 
            </Form>
          </Container> 
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewsletterOverlay;

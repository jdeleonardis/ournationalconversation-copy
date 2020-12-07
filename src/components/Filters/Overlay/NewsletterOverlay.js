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
  const [validation, setValidation] = useState({
    error: false,
    issue: ''
  })

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

  const validateSubscription = () => {
    console.log(subData)
    if (subData.top10 === false && subData.opinions === false && subData.breaking === false) {
      setValidation ({error: true, issue:'Please select at least one story type.'})
      return false
    }
    else if (subData.breaking === true && subData.phonenumber === '') {
      setValidation ({error: true, issue:'Please enter a phone number.'})
      return false
    }
    else
    {
      return true
    }    
  }

  const submitSubscription = (e) => {    
    e.preventDefault();         
    if (validateSubscription()) {
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
  }    

  return (
    <>          
      <div
        style={{
        width: '100%',
        marginLeft: '-15px'}}
      >
        {subscribed === false
        ?
          <Button        
            id='signUpForNewsletter'
            onClick={() => setShow(true)}
          >
            SIGN UP FOR OUR NEWSLETTER
          </Button>
        :
          <div id='subscribedToNewsletter'>
            SUBSCRIBED TO NEWSLETTER!
          </div>
        }
      </div>

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

            <Form onSubmit={submitSubscription}>  
              <Form.Group controlId='formEmailAddress'>
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
                  <div className={validation.error ? '' : 'invisible'}>                  
                    <Form.Label style={{fontSize: 'small', color: 'red'}}>{validation.issue}</Form.Label>
                  </div>
              </Form.Group>

              <Button        
                id='add-newsletter-sub'  
                type='submit'              
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

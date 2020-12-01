import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Form, Row, Col } from "react-bootstrap";

function NewsTopicRadioButtons(props) {  

    return (  
        <>
        {/* this should be verified. if opinion, enable/show the news topics? */}
        <div style={props.articleCategory==="Opinion" ? {} : {pointerEvents: "none", opacity: "0.4"}}>
            <Form.Label style={{fontSize: 'small', color: '#808182'}}>NEWS TOPIC</Form.Label>
            <Row> 
                <Col md={3}>
                    <ButtonGroup vertical name="newsTopic">   
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="us" name="newsTopic" value="US" onClick={props.changeHandler} checked={props.active === 'US'} /> US</label>            
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="world" name="newsTopic" value="World" onClick={props.changeHandler} checked={props.active === 'World'}/> World</label>
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="politics" name="newsTopic" value="Politics" onClick={props.changeHandler} checked={props.active === 'Politics'}/> Politics</label>            
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="business" name="newsTopic" value="Business" onClick={props.changeHandler} checked={props.active === 'Business'}/> Business</label>            
                    </ButtonGroup>
                </Col>
                <Col md={3}>
                <ButtonGroup vertical name="newsTopic">   
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="tech" name="newsTopic" value="Tech" onClick={props.changeHandler} checked={props.active === 'Tech'}/> Tech</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="health" name="newsTopic" value="Health" onClick={props.changeHandler} checked={props.active === 'Health'}/> Health</label>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="science" name="newsTopic" value="Science" onClick={props.changeHandler} checked={props.active === 'Science'}/> Science & Environment</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="media" name="newsTopic" value="Media" onClick={props.changeHandler} checked={props.active === 'Media'}/> Media</label>            
                </ButtonGroup>
                </Col>
                <Col md={3}>
                <ButtonGroup vertical name="newsTopic">   
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="polls" name="newsTopic" value="Polls" onClick={props.changeHandler} checked={props.active === 'Polls'}/> Polls</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="faith" name="newsTopic" value="Faith" onClick={props.changeHandler} checked={props.active === 'Faith'}/> Faith / Spirituality</label>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="fact" name="newsTopic" value="Fact" onClick={props.changeHandler} checked={props.active === 'Fact'}/> Fact Check</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="other" name="newsTopic" value="Other" onClick={props.changeHandler} checked={props.active === 'Other'}/> Other (Specify Below)</label>            
                </ButtonGroup>  
                <Form.Group controlId='formOtherNews'>                          
                    <Form.Control
                    type='text'                            
                    name='otherNewsTopic'
                    placeholder='Enter Other Topic'
                    onChange={props.changeHandler}/>
                </Form.Group>
                </Col>      
            </Row> 
            <div className={props.validationError && props.validationIssue.indexOf('newstopic') >= 0 ? '' : 'height0 invisible'}>
                <Form.Label style={{fontSize: 'small', color: 'red'}}>Please select a news topic.</Form.Label>
            </div>
            <div className={props.validationError && props.validationIssue.indexOf('othernewstopic') >= 0 ? '' : 'height0 invisible'}>
                <Form.Label style={{fontSize: 'small', color: 'red'}}>Please enter a topic for 'Other'.</Form.Label>
            </div>            
        </div>
        </>
    )
  
};

export default NewsTopicRadioButtons;
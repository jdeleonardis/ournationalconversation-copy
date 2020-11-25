import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Form, Row, Col } from "react-bootstrap";

function PolicyTopicRadioButtons(props) {  

    return (  
        <>
        {/* this should be verified. if solution, enable/show the policy topics? */}
        <div style={props.articleCategory==="Solution" ? {} : {pointerEvents: "none", opacity: "0.4"}}>
        <Form.Label style={{fontSize: 'small', color: '#808182'}}>POLICY TOPIC</Form.Label>
            <Row> 
                <Col md={3}>
                    <ButtonGroup vertical name="policyTopic">   
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="governance" name="policyTopic" value="Governance" onClick={props.changeHandler} active={props.active === 'Governance'}/> Governance</label>            
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="socialIssues" name="policyTopic" value="Social" onClick={props.changeHandler} active={props.active === 'Social'}/> Social Issues</label>
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="economy" name="policyTopic" value="Economy" onClick={props.changeHandler} active={props.active === 'Economy'}/> The Economy</label>            
                        <label className="newsLabel"><input className="newsRadio" type="radio" id="foreignPolicy" name="policyTopic" value="Foreign Policy" onClick={props.changeHandler} active={props.active === 'Foreign Policy'}/> Foreign Policy & Defense</label>            
                    </ButtonGroup>
                </Col>
                <Col md={3}>
                <ButtonGroup vertical name="policyTopic">   
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="infrastructure" name="policyTopic" value="Infrastructure" onClick={props.changeHandler} active={props.active === 'Infrastructure'}/> Infrastructure</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="science" name="policyTopic" value="Science" onClick={props.changeHandler} active={props.active === 'Science'}/> Science, Climate, & Technology</label>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="publicSafety" name="policyTopic" value="Safety" onClick={props.changeHandler} active={props.active === 'Safety'}/> Public Safety</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="healthcare" name="policyTopic" value="Healthcare" onClick={props.changeHandler} active={props.active === 'Healthcare'}/> Healthcare</label>            
                </ButtonGroup>
                </Col>
                <Col md={3}>
                <ButtonGroup vertical name="policyTopic">   
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="future" name="policyTopic" value="Future" onClick={props.changeHandler} active={props.active === 'Future'}/> The Future</label>            
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="other" name="policyTopic" value="Other" onClick={props.changeHandler} active={props.active === 'Other'}/> Other (Specify Below)</label>            
                </ButtonGroup>  
                <Form.Group controlId='formOtherPolicy'>                          
                    <Form.Control
                    type='text'                            
                    name='otherPolicyTopic'
                    placeholder='Enter Other Topic'
                    onChange={props.changeHandler}/>
                </Form.Group>
                </Col>      
            </Row>
        </div>
        </>
    )
  
};

export default PolicyTopicRadioButtons;
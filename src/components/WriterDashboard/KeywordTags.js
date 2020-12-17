import React from "react";
import { Form, Row, Col, Button, ListGroup } from "react-bootstrap";

function KeywordTags(props) {  

    return (  
        <>
        <br />
        <div style={props.state.articleCategory!=="" ? {} : {pointerEvents: "none", opacity: "0.4"}}>
            <p style={{display: 'block', marginBottom: '12px'}}>
                <span className='sectionHeaders'> KEYWORD TAGS</span>
                <span className='sectionSubHeaders' style={{margin: '0', display: 'block'}}> Enter up to three, in order of priority</span>
           </p>
 
            
            <Row> 
                <Col md={5}>
                    <Form.Control 
                        type='text'  
                        id='tagEntry'  
                        name='newTag'
                        value={props.state.newTag}
                        onChange={props.changeHandler}/>
                    <div className={props.state.validationError && props.state.validationIssue.indexOf('tag') >= 0 ? '' : 'height0 invisible'}>
                        <Form.Label className="errorText">Please enter a tag.</Form.Label>
                    </div>
                </Col>
                <Col md={2}>
                    {props.state.tagList.length < 3 
                    ? 
                        <Button
                            id='addTag-btn'
                            onClick={props.addTag}
                        >
                        ADD TAG
                        </Button>
                    :
                        <Button disabled
                            id='addTag-btn'
                            onClick={props.addTag}
                        >
                        ADD TAG
                        </Button>}

                </Col>                
            </Row>
            
            <Row> 
                <Col md={12}>
                    <ListGroup horizontal>
                        {props.state.tagList.map((currentTag,i) => (     
                            <ListGroup.Item className="individualTag" key={i} action onClick={(e) => props.removeTag(currentTag,e)}>{currentTag}<span className="close purpleX">&nbsp;&nbsp;&times;</span></ListGroup.Item>    
                        ))}
                    </ListGroup>
                </Col>          
            </Row>
        </div>
        </>
    )
  
};

export default KeywordTags;
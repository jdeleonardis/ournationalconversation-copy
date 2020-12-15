import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function ArticleCategoryRadioButtons(props) {  

    return (  
        <>
            <Form.Label style={{fontSize: 'small', color: '#808182'}}>ARTICLE CATEGORY</Form.Label>
            <br />
            <Row> 
                <Col md={2}>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="opinion" name="articleCategory" value="Opinion" onClick={props.changeHandler} active={props.state.active === 'Opinion'}/> Opinion</label>
                </Col>
                <Col md={3}>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="solution" name="articleCategory" value="Solution" onClick={props.changeHandler} active={props.state.active === 'Solution'}/> Solution (Policy Proposal)</label>      
                </Col>                
            </Row>
            <div className={props.state.validationError && props.state.validationIssue.indexOf('articlecategory') >= 0 ? '' : 'height0 invisible'}>
                <Form.Label style={{fontSize: 'small', color: 'red'}}>Please select an article category.</Form.Label>
            </div>
        </>
    )
  
};

export default ArticleCategoryRadioButtons;
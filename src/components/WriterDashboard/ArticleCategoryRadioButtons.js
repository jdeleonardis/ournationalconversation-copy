import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function ArticleCategoryRadioButtons(props) {  

    return (  
        <>
            <Form.Label style={{fontSize: 'small', color: '#808182'}}>ARTICLE CATEGORY</Form.Label>
            <br />
            <Row> 
                <Col md={2}>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="opinion" name="articleCategory" value="Opinion" onClick={props.changeHandler} active={props.active === 'Opinion'}/> Opinion</label>
                </Col>
                <Col md={3}>
                    <label className="newsLabel"><input className="newsRadio" type="radio" id="solution" name="articleCategory" value="Solution" onClick={props.changeHandler} active={props.active === 'Solution'}/> Solution (Policy Proposal)</label>      
                </Col>
            </Row>
        </>
    )
  
};

export default ArticleCategoryRadioButtons;
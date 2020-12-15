import React from "react";
import {Row, Col, Button } from "react-bootstrap";

function WriterDashboardSubmitButtons(props) {  

    return (  
        <>
            <Row> 
                <Col md={12}>
                    <div className="buttonRight">
                        <Button
                            id='saveDraft-btn'
                            onClick={props.saveDraft}
                        >
                            SAVE DRAFT
                        </Button>                    
                        <Button
                            id='submitArticle-btn'
                            onClick={props.submitArticle}
                        >
                            SUBMIT FOR REVIEW
                        </Button>
                    </div>
                </Col>
            </Row>
        </>
    )
  
};

export default WriterDashboardSubmitButtons;
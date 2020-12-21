import React from "react";
import {Row, Col, Button } from "react-bootstrap";
import GlobalButtonReverse from '../Misc/GlobalButtonReverse'
import GlobalButton from '../Misc/GlobalButton'

function WriterDashboardSubmitButtons(props) {  

    return (  
        <>
            <Row> 
                <Col md={12}>
                    <div className="buttonRight">
                        {/* <Button
                            id='saveDraft-btn'
                            onClick={props.saveDraft}
                        >
                            SAVE DRAFT                            
                        </Button>      */}
                        <GlobalButton 
                            fontSize='16px'
                            margin= '0px 15px 12px 0px'
                            method={props.saveDraft}
                            label="SAVE DRAFT"
                        />                                       
                        {/* <Button
                            id='submitArticle-btn'
                            onClick={props.submitArticle}
                        >
                            SUBMIT FOR REVIEW
                        </Button> */}
                        <GlobalButtonReverse 
                            fontSize='16px'
                            margin= '0px 0px 12px 0px'
                            method={props.submitArticle}
                            label="SUBMIT FOR REVIEW"
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
  
};

export default WriterDashboardSubmitButtons;
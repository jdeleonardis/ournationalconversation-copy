import React from "react";
import { Row, Col } from "react-bootstrap";

function WriterDashboardHeader() {  

    return (  
        <>
            <Row>
                <Col>
                    <h2 className='page-title'>
                    <strong>WRITER DASHBOARD</strong>
                    </h2>
                </Col>
                <Col>
                    <div className='loggedIn'>
                    You are writing as <a href='Jane Doe'> Jane Doe</a>
                    <div id='anotherAccount'>
                        <a href="Log in to another account"><u>Log in to another account</u></a>
                    </div>
                    </div>
                </Col>
            </Row>
        </>
    )
  
};

export default WriterDashboardHeader;
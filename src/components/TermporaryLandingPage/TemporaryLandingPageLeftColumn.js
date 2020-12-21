import React from 'react';
import { Col, Container, Button } from 'react-bootstrap';
import data from '../../data/cardTempData/blog.json';
import BlogBoard from '../../components/Content/ContentBoards/ContentBoard';
import '../../styles/TempLandingPage.css';
import * as type from '../../components/Content/ContentCards/constants/cardConstants';


function TemporaryLandingPageLeftColumn() {  

    return (              
        <Col>
            <Container>
                <div id='comingSoon'>
                    COMING SOON
                </div>                    
                <div id='joinONC'>
                    JoinONC.com, a nonpartisan news, opinion, and solution platform.
                </div>
                <br></br>
                <Button
                    id='tempLanding-btn'                        
                    href="https://www.youtube.com/watch?v=5Wb7HYEX0Jk" 
                    target='_blank'
                >
                    WATCH OUR VIDEO
                </Button>                    
                <div className='secondaryHeaderLandingPage addBottomMargin'>
                    Our Blog
                </div>      

                <div
                    style={{
                    height: '585px',
                    filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15))',
                    overflow: 'auto'
                    }}
                >
                    <BlogBoard type={type.BLOG} data={data} />
                </div>                                  

            </Container>

        </Col>            
    )
  
};

export default TemporaryLandingPageLeftColumn;
import React from 'react';
import { Card, Container } from 'react-bootstrap';

function FeaturedArticleCard(props) {
    
	return (
		<div as='a' onClick={props.featuredArticleClicked}>
            <Card >
                <Card.Body style={{ backgroundColor:"#f3f2f2"}}>

                    <h5 style={{fontSize: 'small', color: '#808182'}}>
                        FEATURED ARTICLE
                    </h5>
                    
                    <h1 className="titleName">
                        {props.data[0].title}
                    </h1>                        

                    <p className="cardText">
                        {props.data[0].text}
                    </p>

                </Card.Body>
            </Card>
		</div>
	);
}

export default FeaturedArticleCard;
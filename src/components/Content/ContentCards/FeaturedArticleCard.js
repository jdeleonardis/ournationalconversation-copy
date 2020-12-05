import React from 'react';
import { Card } from 'react-bootstrap';
import featuredArticleData from '../../../data/cardTempData/featuredarticle.json'

function FeaturedArticleCard(props) {
    
    const featuredArticleClicked = () => {
        alert("process featured clicked")
    }

	return (
        <Card as='a' style={{ cursor:"pointer"}} onClick={featuredArticleClicked}>
            <Card.Body style={{ backgroundColor:"#f3f2f2"}}>

                <h5 style={{fontSize: 'small', color: '#808182'}}>
                    FEATURED ARTICLE
                </h5>
                
                <h1 className="titleName">
                    {featuredArticleData[0].title}
                </h1>                        

                <p className="cardText">
                    {featuredArticleData[0].text}
                </p>

            </Card.Body>
        </Card>        

	);
}

export default FeaturedArticleCard;
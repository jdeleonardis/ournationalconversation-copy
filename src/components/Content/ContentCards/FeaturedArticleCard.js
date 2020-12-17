import React from 'react';
import { Card } from 'react-bootstrap';
import featuredArticleData from '../../../data/cardTempData/featuredarticle.json'
import '../ContentCards/styles/featuredarticle.css'

function FeaturedArticleCard(props) {
    
    const featuredArticleClicked = () => {
        alert("process featured clicked")
    }

	return (
        <Card as='a' style={{ cursor:"pointer"}} onClick={featuredArticleClicked}>
            <Card.Body style={{ backgroundColor:"#f3f2f2"}}>

                <h5 className="featuredArticleHeader">
                    FEATURED ARTICLE
                </h5>
                
                <h1 className="featuredArticleTitle">
                    {featuredArticleData[0].title}
                </h1>                        

                <p className="featuredArticleText">
                    {featuredArticleData[0].text}
                </p>

            </Card.Body>
        </Card>        

	);
}

export default FeaturedArticleCard;
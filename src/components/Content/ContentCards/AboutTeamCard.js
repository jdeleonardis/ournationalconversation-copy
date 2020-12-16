import React from 'react';
import { Card } from 'react-bootstrap';

function AboutTeamCard(props) {
	return (
		<Card style={{ borderStyle: 'none' }}>
			<Card.Img
				src={props.data.img}
				alt="Card image"
				style={{ height: '250px', marginRight: '1rem' }}
				variant="top"
			/>
			<Card.Body>
				<h5>{props.data.name}</h5>
				<p>{props.data.about}</p>
			</Card.Body>
		</Card>
	);
}

export default AboutTeamCard;

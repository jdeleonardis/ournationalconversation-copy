import React from 'react';
import { Card } from 'react-bootstrap';

function AboutTeamCard(props) {
	return (
		<Card>
			<Card.Img
				src="https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4"
				alt="Card image"
				style={{ height: '250px', marginRight: '1rem' }}
				variant="top"
			/>
			<Card.Body>
				<h5>Name</h5>
				<p>yeetname</p>
			</Card.Body>
		</Card>
	);
}

export default AboutTeamCard;

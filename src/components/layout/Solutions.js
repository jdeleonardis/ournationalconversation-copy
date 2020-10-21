import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comments';
import '../styles/comments.css';
const ColoredLine = ({ color }) => (
	<hr
		style={{
			backgroundColor: 'red',
			height: 10,
		}}
	/>
);

function Solutions() {
	return (
		<div>
			<Card>
				<Container>
					<div>Newly Arrived</div> <ColoredLine />
					<Comment />
					<br />
					<Comment />
					<br />
					<Comment />
				</Container>
			</Card>
		</div>
	);
}

export default Solutions;

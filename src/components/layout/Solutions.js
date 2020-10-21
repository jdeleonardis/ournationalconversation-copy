import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comments';
import '../styles/comments.css';
const ColoredLine = ({ color }) => (
	<div>
		<Row>
			<Col
				md={2}
				style={{ fontWeight: 'bold', fontFamily: 'Calibri', fontSize: '20px' }}
			>
				Newly Arrived
			</Col>

			<Col md={10}>
				<hr
					style={{
						backgroundColor: '#491542',
						height: 10,
					}}
				/>
			</Col>
		</Row>
	</div>
);

function Solutions() {
	return (
		<div>
			<Container>
				<ColoredLine />
				<Comment />
				<br />
				<Comment />
				<br />
				<Comment />
			</Container>
		</div>
	);
}

export default Solutions;

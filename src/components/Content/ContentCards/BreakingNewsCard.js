import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import CardBody from './CardBody';
import './styles/comments.css';

function BreakingNews() {
	return (
		<div>
			<Container>
				<Card>
					<Container>
						<h1 className="titleName">BREAKING NEWS</h1>
						<CardBody withText={true} />
						<hr />
						<CardBody />
					</Container>
				</Card>
			</Container>
		</div>
	);
}

export default BreakingNews;

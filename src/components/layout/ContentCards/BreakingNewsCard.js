import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import CardBody from './CardBody';

function BreakingNews() {
	return (
		<div>
			<Container>
				<Card>
					<Container>
						<div className="title">BREAKING NEWS</div>
						<CardBody />
						<CardBody />
						<CardBody />
					</Container>
				</Card>
			</Container>
		</div>
	);
}

export default BreakingNews;

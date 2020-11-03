import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './syles/verticalcard.css';
import ShareSvg from './syles/sharesvg';

function CardBody() {
	return (
		<Card.Body>
			<Row>
				<div className="passive"> POLITICS</div>
			</Row>
			<Row className="text-left">
				<h1 className="title">
					A New Clash Over Mail Voting: The Cost of Postage
				</h1>
			</Row>

			<Row>
				<div className="passive">Source: BBC</div>
			</Row>

			<Row>
				<Col>
					<div>
						<FontAwesomeIcon icon={faClock} />4 minutes ago Read Source{' '}
						<ShareSvg />
					</div>
				</Col>
			</Row>
		</Card.Body>
	);
}

function BreakingNews() {
	return (
		<div>
			<Container>
				<Card style={{ height: '750px' }}>
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

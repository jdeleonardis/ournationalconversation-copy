import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import CardBody from './CardBody';
import './syles/verticalcard.css';
import ShareSvg from './syles/openSrc';

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

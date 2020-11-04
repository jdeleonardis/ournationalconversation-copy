import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './syles/verticalcard.css';
import ShareSvg from './syles/sharesvg';

function CardBody(props) {
	return props.withText ? (
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
				<div className="passive">Source: Reuters</div>
			</Row>
			<Row>
				<div className="cardText">
					Once upon a time there was a lovely princess. But she had an
					enchantment upon her of a fearful sort which could only be broken by
					love's first kiss. She was locked away... Read Source{'   '}
					<ShareSvg />
				</div>
			</Row>

			<Row>
				<Col>
					<div>
						<FontAwesomeIcon icon={faClock} />4 minutes ago
					</div>
				</Col>
				<Col>
					<div>
						<div>
							<FontAwesomeIcon icon={faShare} />
							share
							<FontAwesomeIcon icon={faPlus} />
							save
						</div>
					</div>
				</Col>
			</Row>
		</Card.Body>
	) : (
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

export default CardBody;

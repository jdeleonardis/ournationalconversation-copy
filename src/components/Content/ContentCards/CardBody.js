import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/verticalcard.css';
import OpenPage from './styles/openSrc';
import ShareSvg from './styles/shareSvg';
import SaveSvg from './styles/saveSvg';
import ClockSvg from './styles/clockSvg';

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
				<p className="cardText">
					Once upon a time there was a lovely princess. But she had an
					enchantment upon her of a fearful sort which could only be broken by
					love's first kiss. She was locked away {'   '}
				</p>
			</Row>
			<br />

			<Row>
				<Col>
					<div>
						<span>
							<ClockSvg />
						</span>
						<span className="actionBtnTexts"> 4 min ago</span>
					</div>
				</Col>

				<Col>
					<Row>
						<Col>
							<Row>
								<Col className="text-right">
									<span style={{ marginRight: '5%' }}>
										<ShareSvg />
									</span>
									<span style={{ marginRight: '2%' }}>
										<SaveSvg />
									</span>
									<br />
									<span className="actionBtnTexts">share save</span>
								</Col>
							</Row>
						</Col>
					</Row>
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
					<span>
						<ClockSvg />
					</span>
					<span className="actionBtnTexts"> 4 min ago</span>
				</Col>
				<Col className="text-left">
					<OpenPage />
				</Col>
			</Row>
		</Card.Body>
	);
}

export default CardBody;

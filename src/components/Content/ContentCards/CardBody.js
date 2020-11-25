import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles/cardbody.css';
import OpenPage from './styles/openSrc';
import ShareSvg from './styles/shareSvg';
import SaveSvg from './styles/saveSvg';
import ClockSvg from './styles/clockSvg';

function CardBody(props) {
	return props.withText ? (
		<Card.Body>
			<Row>
				<div
					className="passive"
					style={{ color: '#2c1d59	', fontWeight: 'bold', fontSize: '20px' }}
				>
					Source: BBC
				</div>
			</Row>
			<Row>
				<div className="passive">
					{' '}
					<h1 style={{ fontSize: '15px' }}> NEWS | POLITICS </h1>
				</div>
			</Row>
			<Row className="text-left">
				<h1 className="titleName">
					A New Clash Over Mail Voting: The Cost of Postage
				</h1>
			</Row>

			<Row>
				<p className="cardText">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.{'   '}
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
				<div
					className="passive"
					style={{ color: '#2c1d59	', fontWeight: 'bold', fontSize: '20px' }}
				>
					Source: BBC
				</div>
			</Row>
			<Row>
				<div className="passive">
					{' '}
					<h1 style={{ fontSize: '15px' }}> NEWS | POLITICS </h1>
				</div>
			</Row>
			<Row className="text-left">
				<h1 className="titleName">
					A New Clash Over Mail Voting: The Cost of Postage
				</h1>
			</Row>

			<Row>
				<span>
					<ClockSvg />
				</span>
				<span style={{ marginLeft: '0.5rem' }} className="actionBtnTexts">
					<p style={{ fontSize: '15px' }}>4 mins ago</p>
				</span>
				<span style={{ marginLeft: '3rem' }} className="actionBtnTexts">
					read source <OpenPage />
				</span>
			</Row>
		</Card.Body>
	);
}

export default CardBody;

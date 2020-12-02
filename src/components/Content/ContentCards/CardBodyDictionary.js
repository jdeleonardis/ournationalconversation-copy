import React from 'react';
import * as library from './constants/cardConstants';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
debugger;
function BodyType(props) {
	return props.type === 'PODCAST' || props.type === 'WEBISODE' ? (
		<div style={{ marginTop: '1rem' }}>
			<Row>
				<Col>
					<Image src={props.data.imgsrc} className="boxImage" />
					<div className="sectionSubHeader">Source: {props.data.source}</div>
					<div className="cardText">
						{props.data
							? props.data.text
							: 'I got the horses in the back Horse tack is attached Hat is matte black Got the boots thats black to match Ridin on a horse, ha You can whip your Porsche'}
					</div>
				</Col>
			</Row>
			<br />
		</div>
	) : props.type === 'OPINION' ? (
		<div>
			<Row>
				<Col>
					<Image
						src={props.data.imgsrc}
						roundedCircle
						style={{ height: '50px', marginRight: '1rem', float: 'left' }}
					/>
					<div>
						{' '}
						<div className="titleName">OPINION</div>
						<div className="location">{props.data.location}</div>
					</div>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<div className="cardText">{props.data.text} </div>
				</Col>
			</Row>
		</div>
	) : props.type === 'SOLUTION' ? (
		<div>
			<Row>
				<Col>
					<Image
						src={props.data.imgsrc}
						roundedCircle
						style={{ height: '50px', marginRight: '1rem', float: 'left' }}
					/>
					<div>
						{' '}
						<div className="titleName">SOLUTION</div>
						<div className="location">{props.data.location}</div>
					</div>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<div className="cardText">{props.data.text} </div>
				</Col>
			</Row>
		</div>
	) : (
		<div>d </div>
	);
}

export default BodyType;

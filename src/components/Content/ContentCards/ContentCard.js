import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './styles/comments.css';
import CommentSvg from './styles/commentSvg';
import HeartSvg from './styles/heartSvg';
import DotSvg from './styles/dotSvg';
import SaveSvg from './styles/saveSvg';
import ShareSvg from './styles/shareSvg';
import bodymap from '../ContentCards/CardBodyDictionary';
import './styles/cardbody.css';

function BodyType(props) {
	return (
		bodymap.get(props.type) || (
			<div style={{ marginTop: '1rem' }}>
				<Row>
					<Col>
						<Image
							src="https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4"
							className="boxImage"
						/>
						<div className="sectionSubHeader">Source: {props.source}</div>
						<div className="cardText">
							{props.text
								? props.text
								: 'I got the horses in the back Horse tack is attached Hat is matte black Got the boots thats black to match Ridin on a horse, ha You can whip your Porsche'}
						</div>
					</Col>
				</Row>
				<br />
			</div>
		)
	);
}

debugger;

function ContentCard(props) {
	return (
		<div>
			<Container>
				<Card>
					<Card.Body>
						<Row>
							<Col className="text-left">
								<span className="sectionHeader">
									{props.type != null
										? props.type
										: 'Pass in name please as type'}
								</span>
								<span className="sectionSubHeader">
									{' '}
									| "{props.data ? props.data.section : 'I Like ONC'}"
								</span>
							</Col>
						</Row>
						<Row>
							<Col className="text-left header">
								{props.data ? props.data.title : 'Header Tingz'}
							</Col>
						</Row>
						<BodyType type={props.type ? props.type : 'kanye eazssy'} />
						<Row>
							<Col md={8}>
								<span className="dateTitle">
									{props.data ? props.data.date : 'Nov 03, 2020'}
								</span>{' '}
								<span style={{ marginLeft: '2rem' }}>
									<CommentSvg />
									{props.data ? props.data.comments : '17'} <DotSvg />{' '}
									<HeartSvg /> {props.data ? props.data.likes : '38'}
								</span>
							</Col>
							<Col md={4} className="text-right">
								<span>
									<ShareSvg />
								</span>
								<span style={{ marginLeft: '1rem' }}>
									<HeartSvg hw={'20 '} />
								</span>
								<span style={{ marginLeft: '1rem' }}>
									<SaveSvg />
								</span>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default ContentCard;

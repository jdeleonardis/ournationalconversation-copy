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
						<div className="cardText">{props.text}</div>
					</Col>
				</Row>
				<br />
			</div>
		)
	);
}

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
									| {props.data.section}
								</span>
							</Col>
						</Row>
						<Row>
							<Col className="text-left header">{props.data.title}</Col>
						</Row>
						<BodyType
							type={props.data.type ? props.data.type : 'kanye eazssy'}
							source={props.data.source}
							text={props.data.text}
						/>
						<Row>
							<Col md={8}>
								<span className="dateTitle">{props.data.date}</span>{' '}
								<span style={{ marginLeft: '2rem' }}>
									<CommentSvg />
									{props.data.comments} <DotSvg /> <HeartSvg />{' '}
									{props.data.likes}
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

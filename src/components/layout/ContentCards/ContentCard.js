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
						<div className="sectionSubHeader">Source: ONC</div>
						<div>
							Now here you go again You say you want your freedom Well, who am I
							to keep you down It's only right that you should Play the way you
							feel it But listen carefully To the sound of your loneliness Like
							a heartbeat drives you mad In the stillness of remembering what
						</div>
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
									| Science {'&'} Technology
								</span>
							</Col>
						</Row>
						<Row>
							<Col className="text-left header">ONC Releases a New Website</Col>
						</Row>
						<BodyType type={props.type ? props.type : 'kanye eazssy'} />
						<Row>
							<Col md={8}>
								<span className="dateTitle">Nov 3, 2020</span>{' '}
								<span style={{ marginLeft: '2rem' }}>
									<CommentSvg />
									133 <DotSvg /> <HeartSvg /> 422
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

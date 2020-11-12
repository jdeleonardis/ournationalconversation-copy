import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import '../ContentCards/syles/comments.css';
import CardBody from './CardBody';
import TagLine from './TagLines';

function NewsCard(props) {
	return (
		<div>
			<Container>
				<Card>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={props.mdwidth ? props.mdwidth : 6}>
								<Card.Img
									src="https://c.ndtvimg.com/2020-10/el6r9e5c_xi-jinping-afp_625x300_31_October_20.jpg"
									alt="Card image"
								/>
							</Col>
							<Col xs={12} sm={12} md={props.mdwidth ? props.mdwidth : 6}>
								<CardBody withText={true} />
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="addiContent">Additional Sources</div>
							</Col>
						</Row>

						<TagLine />
					</Container>
				</Card>
			</Container>
		</div>
	);
}

export default NewsCard;

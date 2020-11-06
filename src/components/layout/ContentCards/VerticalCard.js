import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faShare, faPlus } from '@fortawesome/free-solid-svg-icons';
import './syles/verticalcard.css';
import ShareSvg from './syles/openSrc';
import CardBody from './CardBody';
import TagLine from './TagLines';
function VerticalCard() {
	return (
		<div>
			<Container>
				<Card>
					<Container>
						<Row>
							<Col xs={12} sm={12} md={12}>
								<Card.Img
									src="https://c.ndtvimg.com/2020-10/el6r9e5c_xi-jinping-afp_625x300_31_October_20.jpg"
									alt="Card image"
								/>
							</Col>
							<Col xs={12} sm={12} md={12}>
								<CardBody withText={true} />
							</Col>
						</Row>
						<Row>
							<Col>
								<div className="addiContentVert">Additional Sources</div>
							</Col>
						</Row>
						<Row style={{ marginBottom: '15px' }}></Row>
					</Container>
				</Card>
			</Container>
		</div>
	);
}

export default VerticalCard;

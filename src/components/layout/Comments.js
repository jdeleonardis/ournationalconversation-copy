import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import '../styles/comments.css';

function Comment() {
	return (
		<div>
			<Container>
				<Card>
					<Card.Body>
						<Row>
							<Col md={2}>
								<Image
									src="https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4"
									roundedCircle
									style={{ height: '150px' }}
								/>
							</Col>
							<Col md={10}>
								<Row className="text-center header">
									ONC Releases a New Website
								</Row>
								<Row style={{ color: 'rgb(148 148 148)' }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Curabitur ac elementum orci. Suspendisse bibendum pharetra
									neque, a fringilla dui efficitur sodales. Vivamus a ex elit.
									Vestibulum vehicula nunc ut ipsum lobortis vulputate et in
									est. Ut quis quam condimentum, tempus quam id, viverra leo.
									Vivamus lobortis auctor maximus. Cras euismod, lorem vitae
									auctor blandit, ligula purus varius odio, nec porta eros arcu
									sit amet sapien. Nullam tincidunt cursus lorem, quis lacinia
									lacus maximus eu. Nam lobortis leo in varius consectetur...
								</Row>

								<Row>
									<div style={{ fontWeight: 'bold' }}>RJ Varona</div>
									<Col className="text-right">eer</Col>
								</Row>
								<Row>Los Angeles, California</Row>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default Comment;

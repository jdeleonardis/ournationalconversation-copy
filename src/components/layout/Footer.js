import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';

function Footer() {
	return (
		<footer className="footer">
			<Container>
				<div className="mt-5">
					<br />
					<Row>
						<Col className="text-left">
							<a>About Us</a> <br />
							<a>Contact Us</a> <br />
							<a>Buy Our Book Us</a> <br />
						</Col>
						<Col className="text-left">
							<a>News</a> <br />
							<a>Opinions</a> <br />
							<a>Solutions</a> <br />
						</Col>

						<Col className="text-left">
							<a>Become A Writer</a> <br />
							<a>Donator/Investors</a> <br />
							<a>Advertisers</a> <br />
						</Col>

						<Col className="text-left">
							<a>Terms of Service</a> <br />
							<a>Privacy</a> <br />
						</Col>
						<Col className="text-center">
							<a style={{ fontSize: '50px' }}>ONC</a>
							<hr
								style={{
									backgroundColor: 'white',
									height: 2,
									marginTop: 0,
									marginBottom: 0,
								}}
							/>
							<a style={{ fontSize: '20px' }}>joinONC.com</a> <br />
						</Col>
					</Row>
					<br />
				</div>
				<hr
					style={{
						backgroundColor: 'white',
						height: 2,
						marginTop: 0,
						marginBottom: 0,
					}}
				/>
			</Container>
			<Row>
				<Col> © Our National Conversation | All rights reserved</Col>

				<Col> Follow ONC</Col>
			</Row>
		</footer>
	);
}

export default Footer;

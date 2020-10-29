import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';

function Footer() {
	return (
		<footer className="footer">
			<div class="footer-container">
				<div className="mt-5 footerStyle">
					<br />
					<Row>
						<Col className="text-left " style={{ color: 'white' }}>
							<a>About Us</a> <br />
							<a>Contact</a> <br />
							<a>Become a Writer</a> <br />
							<a>Press</a> <br />
						</Col>
						<Col className="text-left">
							<a>Home</a> <br />
							<a>News</a> <br />
							<a>Opinions</a> <br />
							<a>Solutions</a> <br />
						</Col>

						<Col className="text-left">
							<a>ONC Newsletters</a> <br />
							<a>ONC Webisodes</a> <br />
							<a>ONC Podcasts</a> <br />
							<a>ONC Store</a> <br />
						</Col>

						<Col className="text-left">
							<a>Donator/Investors</a> <br />
							<a>Advertisers</a> <br />
							<a>Terms of Use</a> <br />
							<a>Privacy</a> <br />
						</Col>
						<Col></Col>
						<Col>
							<p
								style={{
									fontSize: '50px',
									fontWeight: '900',
									lineHeight: '80%',
									letterSpacing: '1px',
								}}
							>
								ONC
							</p>
							<hr
								style={{
									backgroundColor: 'white',
									height: 2,
									marginTop: 0,
									width: '9rem',
									marginBottom: 0,
								}}
							/>
							<a style={{ fontSize: '18px' }}>JoinONC.com</a>
							<br />
						</Col>
					</Row>
					<br />
				</div>
				<hr
					style={{
						backgroundColor: 'white',
						height: 1,
					}}
				/>
				<Row style={{ fontSize: '20px' }}>
					<Col className="text-left">
						{' '}
						© Our National Conversation | All rights reserved
					</Col>

					<Col className="text-right">
						<span className="footer-followONC">FOLLOW ONC</span>|{' '}
						<span className="footer-icons">
							<i class="fab fa-instagram"></i>
							{'    '}
						</span>
						<span className="footer-icons">
							<i class="fab fa-twitter"></i>{' '}
						</span>
						<span className="footer-icons">
							<i class="fab fa-facebook"></i>
						</span>
					</Col>
				</Row>
			</div>

			<br />
		</footer>
	);
}

export default Footer;

import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import './styles/comments.css';
import CardBody from './CardBody';
import TagLine from './TagLines';
import ShareSvg from './styles/shareSvg';
import SaveSvg from './styles/saveSvg';
import ClockSvg from './styles/clockSvg';

function NewsCard(props) {
	return (
		<div>
			<Container>
				<Card>
					<Container>
						<TagLine />
						<Row>
							<Col md={12}>
								<div className="passive"> POLITICS</div>
							</Col>
							<Col md={12}>
								<h1 className="title">
									A New Clash Over Mail Voting: The Cost of Postage
								</h1>
							</Col>
							<Col md={12}>
								<div className="passive">Source: Reuters</div>
							</Col>
						</Row>

						<Row>
							<Col xs={12} sm={12} md={props.vertical ? 12 : 6}>
								<Card.Img
									src="https://c.ndtvimg.com/2020-10/el6r9e5c_xi-jinping-afp_625x300_31_October_20.jpg"
									alt="Card image"
								/>
							</Col>
							<Col xs={12} sm={12} md={props.vertical ? 12 : 6}>
								<Card.Body>
									<Row>
										<p className="cardText">
											Once upon a time there was a lovely princess. But she had
											an enchantment upon her of a fearful sort which could only
											be broken by love's first kiss. She was locked away{' '}
											{'   '}
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
															<span className="actionBtnTexts">share save</span>
														</Col>
													</Row>
												</Col>
											</Row>
										</Col>
									</Row>
								</Card.Body>
							</Col>
						</Row>
						<br />
					</Container>
				</Card>
			</Container>
		</div>
	);
}

export default NewsCard;

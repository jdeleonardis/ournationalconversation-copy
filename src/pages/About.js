import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import RailButtons from '../components/Misc/RailButtons';
import AboutMemberCard from '../components/Content/ContentCards/AboutTeamCard';
import data from '../data/cardTempData/aboutteam.json';
import GlobalButton from '../components/Misc/GlobalButton';

import '../styles/aboutpage.css';
debugger;
export class AboutPage extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<title>Our National Conversation | about</title>
					</Helmet>

					<Container className="container" fluid>
						<br />
						<Row>
							<Col md={9}>
								<div class="theBox">
									<div style={{ marginRight: '3rem', marginLeft: '3rem' }}>
										<br />
										<br />
										<br />
										<h1>ABOUT US</h1>
										<h2 style={{ fontWeight: 'bold' }}>LOREM IPSUM YEET</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Nam a congue erat. Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices posuere cubilia curae;
											Nullam porta fringilla odio, a mattis arcu gravida ac.
											Vivamus orci sapien, dignissim sit amet luctus sit amet,
											pellentesque lobortis nisl. Donec eu magna tincidunt metus
											ornare maximus quis in tortor. In a dapibus quam.
											Suspendisse porta libero a libero commodo, nec porta arcu
											laoreet. Maecenas vitae molestie turpis. Suspendisse
											auctor elementum nisl, in mollis nisl venenatis sit amet.
											In non massa eget urna posuere sagittis sed id massa.
											Etiam imperdiet nibh vel elit ornare, in tincidunt purus
											aliquet. Ut venenatis, velit et ornare sagittis, nunc
											mauris ullamcorper ligula, ut vehicula sapien dui vitae
											purus. Sed fringilla velit semper lectus gravida, sed
											interdum dolor ultrices. Donec vel magna eget nibh finibus
											maximus et vel quam. Curabitur congue elementum mattis.
											Pellentesque vitae aliquet arcu. Proin cursus diam nulla,
											id finibus nisi dictum vitae. Proin a rhoncus sem.
											Interdum et malesuada fames ac ante ipsum primis in
											faucibus. Praesent finibus hendrerit tincidunt. Integer
											sed varius massa. Vestibulum facilisis ligula sapien,
											facilisis ullamcorper dui sodales sed. Phasellus vitae
											viverra sem, in pretium dui. Aenean auctor, sem ut
											scelerisque mollis, purus tellus rhoncus leo, at consequat
											justo lorem sit amet sem.
										</p>
										<br />
										<br />
										<br />
									</div>
								</div>
							</Col>
							<Col md={3}>
								<div className="rail-group">
									<RailButtons />
								</div>
							</Col>
							<div>
								<Col md={9}>
									<Row>
										&nbsp;&nbsp;&nbsp;
										<div className="texttitle">MEET OUR MANAGEMENT TEAM</div>
										&nbsp;&nbsp;
										<div className="dividerAbout"></div>&nbsp;&nbsp;&nbsp;
									</Row>
									<Row>
										{data.map(data => (
											<Col md={4}>
												<AboutMemberCard data={data} />
											</Col>
										))}
									</Row>

									<div style={{ textAlign: 'center' }}>
										<GlobalButton
											className="global-btn"
											margin="25px 0"
											padding="7px 55px"
											fontWeight="700"
											label="MEET OUR INTERNS"
											link="/aboutInterns"
										/>
									</div>
								</Col>
							</div>
						</Row>
						<Row></Row>
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default AboutPage;

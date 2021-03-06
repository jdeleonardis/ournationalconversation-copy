import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import RailButtons from '../components/Misc/RailButtons';
import FeaturedArticleCard from '../components/Content/ContentCards/FeaturedArticleCard';
import '../styles/SimplePages.css';

export class Privacy extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<title>Our National Conversation | Privacy</title>
					</Helmet>

					<Container className="container" fluid>
						<br />
						<Row>
							<Col md={9}>
								<div class="genericBox">
									<h2>PRIVACY</h2>
									<br></br>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
										a congue erat. Vestibulum ante ipsum primis in faucibus orci
										luctus et ultrices posuere cubilia curae; Nullam porta
										fringilla odio, a mattis arcu gravida ac. Vivamus orci
										sapien, dignissim sit amet luctus sit amet, pellentesque
										lobortis nisl. Donec eu magna tincidunt metus ornare maximus
										quis in tortor. In a dapibus quam. Suspendisse porta libero
										a libero commodo, nec porta arcu laoreet. Maecenas vitae
										molestie turpis. Suspendisse auctor elementum nisl, in
										mollis nisl venenatis sit amet. In non massa eget urna
										posuere sagittis sed id massa. Etiam imperdiet nibh vel elit
										ornare, in tincidunt purus aliquet. Ut venenatis, velit et
										ornare sagittis, nunc mauris ullamcorper ligula, ut vehicula
										sapien dui vitae purus. Sed fringilla velit semper lectus
										gravida, sed interdum dolor ultrices. Donec vel magna eget
										nibh finibus maximus et vel quam. Curabitur congue elementum
										mattis. Pellentesque vitae aliquet arcu. Proin cursus diam
										nulla, id finibus nisi dictum vitae. Proin a rhoncus sem.
										Interdum et malesuada fames ac ante ipsum primis in
										faucibus. Praesent finibus hendrerit tincidunt. Integer sed
										varius massa. Vestibulum facilisis ligula sapien, facilisis
										ullamcorper dui sodales sed. Phasellus vitae viverra sem, in
										pretium dui. Aenean auctor, sem ut scelerisque mollis, purus
										tellus rhoncus leo, at consequat justo lorem sit amet sem. 
                                        Ut venenatis, velit et, mauris ullamcorper ligula, ut vehicula
										sapien dui vitae purus. Sed fringilla velit semper lectus
										gravida, sed interdum dolor ultrices. Donec vel magna eget
										nibh finibus maximus et vel quam. Curabitur congue elementum
										mattis. Pellentesque vitae aliquet arcu. Proin cursus diam
										nulla, id finibus nisi dictum vitae. Proin a rhoncus sem.
										Interdum et malesuada fames ac ante ipsum primis in
										faucibus. Praesent finibus hendrerit tincidunt. Integer sed
										varius massa. Vestibulum facilisis ligula sapien, facilisis
										ullamcorper dui sodales sed. Phasellus vitae viverra sem, in
										pretium dui. Aenean auctor, sem ut scelerisque mollis, purus
										tellus rhoncus leo, at consequat justo lorem sit amet sem.
                                        Mollis nisl venenatis sit amet. In non massa eget urna
										posuere sagittis sed id massa. Etiam imperdiet nibh vel elit
										ornare, in tincidunt purus aliquet. Ut venenatis, velit et
										ornare sagittis, nunc mauris ullamcorper ligula, ut vehicula
										sapien dui vitae purus. Sed fringilla velit semper lectus.
                                        Dapien, dignissim sit amet luctus sit amet, pellentesque
										lobortis nisl. Donec eu magna tincidunt metus ornare maximus
										quis in tortor. In a dapibus quam. Suspendisse porta libero
										a libero commodo, nec porta arcu laoreet. Maecenas vitae
										molestie turpis. Suspendisse auctor elementum nisl, in
										mollis nisl venenatis sit amet. In non massa eget urna
										posuere sagittis sed id massa. Etiam imperdiet nibh vel elit
										ornare, in tincidunt purus aliquet. Ut venenatis, velit et
										ornare sagittis, nunc mauris ullamcorper ligula, ut vehicula
										sapien dui vitae purus. Sed fringilla velit semper lectus
										gravida, sed interdum dolor ultrices. Donec vel magna eget
										nibh finibus maximus et vel quam. Curabitur congue elementum
										mattis. Pellentesque vitae aliquet arcu. Proin cursus diam
										nulla, id finibus nisi dictum vitae. Proin a rhoncus sem.
									</p>
								</div>
							</Col>
							<Col md={3}>
								<div className="rail-group">
									<RailButtons />
                                    <br />
                                    <FeaturedArticleCard />
                                    <br />
								</div>
							</Col>
						</Row>						
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default Privacy;

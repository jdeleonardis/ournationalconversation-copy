import { AlternateEmail } from '@material-ui/icons';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import RailButtons from '../components/Misc/RailButtons';
import '../styles/SimplePages.css';

export class Advertisers extends Component {
    
    handleViewRates = () => {
        alert("view rates clicked")
    };

	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<title>Our National Conversation | Terms Of Use</title>
					</Helmet>

					<Container className="container" fluid>
						<br />
						<Row>
							<Col md={9}>
								<div class="genericBox">
									<h2>ADVERTISERS</h2>
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
										posuere sagittis sed id massa. 
									</p>
                                    <Button
                                        id='viewRates-btn'
                                        onClick={this.handleViewRates}
                                    >
                                        VIEW RATES
                                    </Button>
								</div>
							</Col>
							<Col md={3}>
								<div className="rail-group">
									<RailButtons />
								</div>
							</Col>
						</Row>						
					</Container>
				</div>
			</Fragment>
		);
	}
}

export default Advertisers;

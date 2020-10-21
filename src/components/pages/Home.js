import React, { Component, Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Solution from '../layout/Solutions';

export class Home extends Component {
	render() {
		return (
			<Fragment>
				<div>
					<Helmet>
						<title>Our National Conversation</title>
					</Helmet>
					<Container className="container" fluid>
						<div>
							<h1>Home</h1>
							<Button
								style={{
									margin: '10px',
								}}
								variant="success"
								href="/"
							>
								Home
							</Button>
							<Button
								style={{
									margin: '10px',
								}}
								variant="success"
								href="/signup"
							>
								Sign Up
							</Button>
							<Button
								style={{
									margin: '10px',
								}}
								variant="success"
								href="/login"
							>
								Login
							</Button>
							<Button
								style={{
									margin: '10px',
								}}
								variant="success"
								href="/contact"
							>
								Contact
							</Button>
							<br /> <br />
							<p>Dummy home page.</p>
							<p>
								Whoever works on the home page can go ahead and get ride of all
								this code and use this file for the home page.
							</p>
						</div>
					</Container>
				</div>
				<Solution />
			</Fragment>
		);
	}
}

export default Home;

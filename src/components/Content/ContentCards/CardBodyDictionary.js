import React from 'react';
import * as library from './constants/cardConstants';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';

let bodymap = new Map([
	[
		'OPINION',
		<div>
			<Row>
				<Col>
					<Image
						src="https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4"
						roundedCircle
						style={{ height: '50px', marginRight: '1rem', float: 'left' }}
					/>
					<div>
						{' '}
						<div className="titleName">OPINION</div>
						<div className="location">
							Los Angeles, California, United States
						</div>
					</div>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<div className="cardText">
						Now here you go again You say you want your freedom Well, who am I
						to keep you down It's only right that you should Play the way you
						feel it But listen carefully To the sound of your loneliness Like a
						heartbeat drives you mad In the stillness of remembering what you
						had And what you lost And what you had And what you lost
					</div>
				</Col>
			</Row>
		</div>,
	],
	[
		'SOLUTION',
		<div>
			<Row>
				<Col>
					<Image
						src="https://avatars3.githubusercontent.com/u/27324719?s=460&u=407b4f55702b082ae1e79b662ed96e0749a02a84&v=4"
						roundedCircle
						style={{ height: '50px', marginRight: '1rem', float: 'left' }}
					/>
					<div>
						{' '}
						<div className="titleName">SOLUTION</div>
						<div className="location">
							Los Angeles, California, United States
						</div>
					</div>
				</Col>
			</Row>
			<br />
			<Row>
				<Col>
					<div className="cardText">
						Now here you go again You say you want your freedom Well, who am I
						to keep you down It's only right that you should Play the way you
						feel it But listen carefully To the sound of your loneliness Like a
						heartbeat drives you mad In the stillness of remembering what you
						had And what you lost And what you had And what you lost
					</div>
				</Col>
			</Row>
		</div>,
	],
]);

export default bodymap;

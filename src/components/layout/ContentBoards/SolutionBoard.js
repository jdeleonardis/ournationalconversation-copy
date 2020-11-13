import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ContentCard from '../ContentCards/ContentCard';

const ColoredLine = ({ color }) => (
	<div>
		<Row>
			<Col
				md={2}
				style={{ fontWeight: 'bold', fontFamily: 'Calibri', fontSize: '20px' }}
			>
				Newly Arrived
			</Col>

			<Col md={10}>
				<hr
					style={{
						backgroundColor: '#491542',
						height: 10,
					}}
				/>
			</Col>
		</Row>
	</div>
);

function Solutions() {
	return (
		<div>
			<Container>
				<ColoredLine />
				<br />
				<ContentCard />
				<br />
				<ContentCard />
				<br />
				<div className="text-center">
					<Button variant="light">SEE MORE PODCASTS</Button>
				</div>
			</Container>
		</div>
	);
}

export default Solutions;

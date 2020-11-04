import React from 'react';
import { Card, Image, Col, Row, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from '../ContentCards/Comments';
import NewsCard from '../ContentCards/NewsCard';
import BreakingNews from '../ContentCards/BreakingNewsCard';
import VerticalCard from '../ContentCards/VerticalCard';
import GlobalButton from '../GlobalButton';

const ColoredLine = ({ color }) => (
	<div>
		<Row>
			<Col
				md={2}
				style={{ fontWeight: 'bold', fontFamily: 'Calibri', fontSize: '20px' }}
			>
				Top Stories
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

function News() {
	return (
		<div>
			<Container>
				<ColoredLine />
				<Row>
					<Col>
						<VerticalCard />
					</Col>

					<Col>
						<VerticalCard />
					</Col>

					<Col>
						<BreakingNews />
					</Col>
				</Row>
				<Row>
					{/**fix this later */}
					<Col></Col>
					<br />
					<GlobalButton label={'See More News'} />
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
}

export default News;

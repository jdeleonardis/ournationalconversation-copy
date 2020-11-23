import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ContentCard from '../ContentCards/ContentCard';

debugger;

const Solutions = props => {
	return (
		<div>
			<Container>
				{props.data.map(data => (
					<ContentCard type="solution" data={data} />
				))}
			</Container>
		</div>
	);
};

export default Solutions;

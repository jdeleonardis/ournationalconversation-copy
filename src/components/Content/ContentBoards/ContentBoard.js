import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import ContentCard from '../ContentCards/ContentCard';

debugger;

const Solutions = props => {
	return (
		<div>
			{props.type != 'BLOG' ? (
				<Container>
					{props.data.map(data => (
						<ContentCard type={props.type} data={data} />
					))}
				</Container>
			) : (
				<>
					{props.data.map(data => (
						<ContentCard type={props.type} data={data} />
					))}
				</>
			)}
		</div>
	);
};

export default Solutions;

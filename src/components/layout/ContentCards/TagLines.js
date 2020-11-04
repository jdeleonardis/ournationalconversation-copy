import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './syles/verticalcard.css';
import GlobalButton from '../GlobalButton';
//TagLine Carouselll......
function TagLine() {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<GlobalButton label={'NPR'} />
					</Col>
					<Col>
						<GlobalButton label={'FOX NEWS'} width={'120px'} />
					</Col>
					<Col>
						<GlobalButton label={'CNN'} />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default TagLine;

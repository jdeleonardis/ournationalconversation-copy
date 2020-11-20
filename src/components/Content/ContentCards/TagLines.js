import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import GlobalButton from '../../Misc/GlobalButton';
import '../ContentCards/styles/tagline.css';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 300, itemsToShow: 4, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 6 },
	{ width: 1200, itemsToShow: 8 },
];

function TagLine() {
	return (
		<div className="styling-example">
			<Carousel breakPoints={breakPoints}>
				<GlobalButton label={'CNN'} />
				<GlobalButton label={'YEET'} />
				<GlobalButton label={'NARUTO'} />
				<GlobalButton label={'ASTROWORLD'} />
				<GlobalButton label={'EGG'} />
				<GlobalButton label={'CNN'} />
			</Carousel>
		</div>
	);
}

export default TagLine;
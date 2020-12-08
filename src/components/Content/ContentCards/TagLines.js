import React from 'react';
import Carousel from 'react-elastic-carousel';
import GlobalButton from '../../Misc/GlobalButton';
import '../ContentCards/styles/tagline.css';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 300, itemsToShow: 5 },
	{ width: 768, itemsToShow: 5 },
	{ width: 1200, itemsToShow: 6 },
];

function TagLine() {
	return (
		<div className="styling-example">
			<Carousel breakPoints={breakPoints}>
				<GlobalButton
					label={'CNN'}
					fontSize={'12px'}
					justifyContent={'center'}
					alignItems={'center'}
					display={'flex'}
				/>
				<GlobalButton
					label={'YEET'}
					fontSize={'12px'}
					justifyContent={'center'}
					alignItems={'center'}
					width={'110%'}
				/>
				<GlobalButton
					label={'NARUTO'}
					fontSize={'12px'}
					justifyContent={'center'}
					alignItems={'center'}
					display={'flex'}
					height={'60%'}
					width={'90%'}
				/>
				<GlobalButton
					label={'NARUTO'}
					fontSize={'12px'}
					height={'80%'}
					justifyContent={'center'}
					alignItems={'center'}
					display={'flex'}
					width={'90%'}
				/>
				<GlobalButton
					label={'EGG'}
					fontSize={'12px'}
					justifyContent={'center'}
					alignItems={'center'}
					display={'flex'}
				/>
				<GlobalButton
					label={'CNN'}
					fontSize={'12px'}
					justifyContent={'center'}
					alignItems={'center'}
					display={'flex'}
					width={'110%'}
				/>
			</Carousel>
		</div>
	);
}

export default TagLine;

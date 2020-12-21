import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/global-btn-reverse.css';

const GlobalButtonReverse = props => {
	return (
		<Button
			className="global-btn-reverse "
			href={props.link}
			style={{
				justifyContent: `${props.justifyContent}`,
				alignItems: `${props.alignItems}`,
				display: `${props.display}`,
				width: `${props.width}`,
				fontSize: `${props.fontSize}`,
				height: `${props.height}`,
				margin: `${props.margin}`,
				padding: `${props.padding}`,
				float: `${props.float}`,
			}}
			variant="purple"
			onClick={props.method}
		>
			{props.label}
		</Button>
	);
};

export default GlobalButtonReverse;
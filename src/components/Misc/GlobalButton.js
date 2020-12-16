import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/global-btn.css';
debugger;
const GlobalButton = props => {
	return (
		<Button
			className="global-btn "
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
			variant="outline-primary"
			onClick={props.method}
		>
			{props.label}
		</Button>
	);
};

export default GlobalButton;

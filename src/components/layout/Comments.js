import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/footer.css';

function Comment() {
	return (
		<div>
			<Card>
				<Card.Header>Comment</Card.Header>
				<Card.Body>
					<blockquote className="blockquote mb-0">
						<p> Yessir whats upp??? . </p>
						<footer className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Comment;

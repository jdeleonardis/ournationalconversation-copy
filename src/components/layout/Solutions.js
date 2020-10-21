import React from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comments';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/comments.css';

function Solutions() {
	return (
		<div>
			<Comment />

			<Comment />

			<Comment />
		</div>
	);
}

export default Solutions;

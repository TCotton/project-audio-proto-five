import React from 'react';
import {connect} from 'react-redux';

const CommentList = (props) => {

	const comments = props.comments.map(value => {
		return <li key={value}>{value}</li>;
	});

	return (
		<div className="comment-list">
			{comments}
		</div>
	);

};

function mapStateToProps(state) {
	return {
		comments: state.comments
	}
}

export default connect(mapStateToProps)(CommentList);
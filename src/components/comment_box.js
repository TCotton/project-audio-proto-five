import React, {Component} from 'react';
import { saveComment } from '../actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class CommentBox extends Component {

	constructor() {
		super(...arguments);

		this.state = {
			comment: ''
		}

	}

	onHandleChange(event) {

		this.setState({comment: event.target.value});

	}

	onHandleSubmit(event) {

		this.props.saveComment(this.state.comment);
		this.setState({comment: ''});

		event.preventDefault();
	}

	render() {
		return (

			<form className="comment-box" onSubmit={this.onHandleSubmit.bind(this)}>
				<h4>Add a comment</h4>
				<label htmlFor="textarea"></label>
					<textarea
						id="textarea"
						name="formTextArea"
						onChange={this.onHandleChange.bind(this)}
						value={this.state.comment}
					/>
				<br />
				<button type="submit">Submit comment</button>
			</form>

		);
	}

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({saveComment}, dispatch);
}

export default connect(null, mapDispatchToProps)(CommentBox);
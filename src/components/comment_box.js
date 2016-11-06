import React, {Component} from 'react';

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

		this.setState({comment: ''});

		event.preventDefault();
	}

	render() {
		return (

			<form className="comment-box" onSubmit={this.onHandleSubmit.bind(this)}>
				<label htmlFor="textarea">Textarea</label>
					<textarea
						id="textarea"
						name="formTextArea"
						onChange={this.onHandleChange.bind(this)}
						value={this.state.comment}
					/>
				<button type="submit">Submit comment</button>
			</form>

		);
	}

}

export default CommentBox;
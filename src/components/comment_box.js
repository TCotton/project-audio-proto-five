import React, {Component} from 'react';

class CommentBox extends Component {

	render() {
		return (
			<div className="comment-box">
				<form>
					<label for="textarea">Textarea</label>
					<textarea id="textarea" name="formTextArea" />
					<button type="submit">Submit comment</button>
				</form>
			</div>
		);
	}

}

export default CommentBox;
import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('Testing CommentBox component', () => {

	let component;

	beforeEach(() => {
		// create an instance of CommentBox
		component = renderComponent(CommentBox);
	});

	it(' has the correct class', () => {

		expect(component).to.have.class('comment-box');

	});

	it(' has a text area', () => {

		expect(component.find('textarea')).to.exist;

	});

	it(' has a button', () => {

		expect(component.find('button')).to.exist;

	});

	describe('entering some text', () => {

		let text = 'new comment';

		beforeEach(() => {

			component.find('textarea').simulate('change', text);

		});

		it('shows when text is entered', () => {

			expect(component.find('textarea')).to.have.value(text);

		});

		it('when submitted, clears the input', () => {

			component.find('button').simulate('submit');

			expect(component.find('textarea')).to.have.value('');

		});

	});

});
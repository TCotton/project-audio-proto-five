import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Testing CommentList', () => {

	let component;

	beforeEach(() => {

		const props = { comments: [ 'New comment', 'Another comment' ] };

		component = renderComponent(CommentList, null, props);

	});

	it(' shows an LI for each comment', () => {

		expect(component.find('li').length).to.equal(2);

	});

	it('shows each comment is provided', () => {

		// expect(component).to.contain('New comment');

	});

});
import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment } from '../../src/actions'

describe('test actions', () => {

	describe('test saveComment', () => {

		it('has the correct type', () => {

			const action = saveComment();

			expect(action.type).to.equal(SAVE_COMMENT);

		});

		it('has the correct payload', () => {

			const actionComment = 'new comment';
			const action = saveComment(actionComment);

			expect(action.payload).to.equal(actionComment);

		});

	});

});
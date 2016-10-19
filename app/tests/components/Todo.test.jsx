var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect(Todo).toExist();
	});

	it('should call onToggle with id on click', () => {
		var todoData = {
			id: 199,
			text: 'Write todo.test.jsx test',
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDom.findDOMNode(todo));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);
	});
});
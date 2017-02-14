import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoItem from '../TodoItem';

const item = {
  text: 'Get to Las Palmas 🌴',
  checked: true,
};

it('should render a todo item as a checkbox with a label', () => {
	const tree = toJson(shallow(<TodoItem text={item.text} checked={item.checked} />));
	expect(tree).toMatchSnapshot();
});

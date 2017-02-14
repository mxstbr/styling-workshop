import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoList from '../TodoList';

const items = [{
  text: 'Get to Las Palmas 🌴',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Go surfing 🏄',
  checked: false,
}];

it('should render the passed-in items', () => {
	const tree = toJson(shallow(<TodoList items={items} />));
	expect(tree).toMatchSnapshot();
});

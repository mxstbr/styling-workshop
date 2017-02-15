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

it('should set the value of the TodoInput from the state', () => {
	const component = shallow(<TodoList items={items} />);
  component.setState({
    value: 'Test item'
  });
	expect(toJson(component)).toMatchSnapshot();
});

it('should change the value of the TodoInput from the TodoInput', () => {
	const component = shallow(<TodoList items={items} />);
  component.find('TodoInput').simulate('change', { target: { value: 'Changed input' }});
	expect(toJson(component)).toMatchSnapshot();
});

it('should add an item based on the value in the state', () => {
	const component = shallow(<TodoList items={items} />);
  const preventDefault = jest.fn();
  component.setState({
    value: 'Test item'
  });
  component.find('form').simulate('submit', { preventDefault });
	expect(toJson(component)).toMatchSnapshot();
  expect(preventDefault).toBeCalled();
});

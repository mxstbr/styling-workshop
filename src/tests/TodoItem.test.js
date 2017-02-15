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

it('should call props.onClick with the text of the item when clicked on', () => {
  const onClick = jest.fn();
	const component = shallow(<TodoItem text={item.text} checked={item.checked} onClick={onClick} />);
  component.find('input').simulate('click');
  expect(onClick).toBeCalledWith(item.text);
});

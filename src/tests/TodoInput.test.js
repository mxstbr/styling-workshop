import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TodoInput from '../TodoInput';

it('should render an input', () => {
	const tree = toJson(shallow(<TodoInput value="hello" onChange={() => {}} />));
	expect(tree).toMatchSnapshot();
});

it('should call props.onChange when the input changes', () => {
	const onChange = jest.fn();
	const component = shallow(<TodoInput value="hello" onChange={onChange} />);
	const evt = { target: { value: 'bla' } };
	component.find('input').simulate('change', evt)
	expect(onChange).toBeCalledWith(evt);
});

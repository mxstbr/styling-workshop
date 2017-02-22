import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Plot from '../Plot';

it('should render a plot with plotly', () => {
	const tree = toJson(mount(<Plot xData={[1, 2, 3, 4, 5]} yData={[1, 4, 9, 16, 25]} />));
	expect(tree).toMatchSnapshot();
});

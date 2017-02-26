import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Plot from '../Plot';

// Mock the Plotly module (it doesn't like being snapshotted)
jest.mock('plotly.js/dist/plotly.js')
const Plotly = require('plotly.js/dist/plotly.js')

// Before each test, reset the mock
beforeEach(() => {
	Plotly.newPlot = jest.fn()
})

// Fixtures
const xData = [1, 2, 3, 4, 5];
const yData = [1, 4, 9, 16, 25];

it('should render a div', () => {
	const tree = toJson(shallow(<Plot xData={[1, 2, 3, 4, 5]} yData={[1, 4, 9, 16, 25]} type="scatter" />));
	expect(tree).toMatchSnapshot();
});

it('should render a plot with Plotly', () => {
	mount(<Plot xData={xData} yData={yData} type="scatter" />);
	expect(Plotly.newPlot.mock.calls[0][1]).toEqual([{
		x: xData,
		y: yData,
		type: "scatter"
	}]);
});

it('should re-render the Plot when the data changes', () => {
	const newXData = [10, 11, 12];
	const newYData = [100, 121, 144];
	const comp = mount(<Plot xData={xData} yData={yData} type="scatter" />);
	comp.setProps({
		xData: newXData,
		yData: newYData,
	})
	expect(Plotly.newPlot).toHaveBeenCalledTimes(2);
	expect(Plotly.newPlot.mock.calls[1][1]).toEqual([{
		x: newXData,
		y: newYData,
		type: "scatter"
	}]);
})

it('should not re-render the Plot if the passed data is the same', () => {
	const comp = mount(<Plot xData={xData} yData={yData} type="scatter" />);
	comp.setProps({
		xData,
		yData,
	})
	expect(Plotly.newPlot).toHaveBeenCalledTimes(1);
})

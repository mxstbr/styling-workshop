// A plot
import React, { Component } from 'react';
import Plotly from 'plotly.js/dist/plotly.js';
import styled from 'styled-components';

class Plot extends Component {
	componentDidMount() {
		this.drawPlot();
	}

	componentDidUpdate() {
		this.drawPlot();
	}

	shouldComponentUpdate(nextProps) {
		return this.props.xData !== nextProps.xData || this.props.yData !== nextProps.yData;
	}

	drawPlot = () => {
		Plotly.newPlot(this.div, [{
			x: this.props.xData,
			y: this.props.yData,
			type: this.props.type,
		}], {
			margin: {
				t: 0, r: 0, l: 30
			},
			xaxis: {
				gridcolor: 'transparent'
			}
		}, {
			displayModeBar: false
		});
	}

	render() {
		return (
			<div>
				<div ref={comp => this.div = comp} />
			</div>
		)
	}
}

export default Plot;

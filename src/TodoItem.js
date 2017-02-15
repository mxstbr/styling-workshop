/**
 * This component should render a todo item as an <input type="checkbox" /> with a label
 */
import React, { Component } from 'react';

class TodoItem extends Component {
	render() {
		return (
			<label>
				<input type="checkbox" checked={this.props.checked} readOnly />
				{this.props.text}
			</label>
		)
	}
}

export default TodoItem;

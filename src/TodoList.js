/**
 * This component should manage the todo items, letting users check existing ones and add new ones
 */
import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item => (
					<li key={item.text}><TodoItem text={item.text} checked={item.checked} /></li>
				))}
			</ul>
		)
	}
}

export default TodoList;

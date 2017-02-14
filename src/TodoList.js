import React, { Component } from 'react';
import TodoItem from './TodoItem';

/**
 * This component should render the TodoItems inside a <li>
 */
class TodoList extends Component {
  render() {
    console.log(this.props.items)
    return (
      <ul>TodoList</ul>
    );
  }
}

export default TodoList;

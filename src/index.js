import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// The todo items
const items = [{
  text: 'Get to Las Palmas 🌴',
  checked: true,
}, {
  text: 'Learn the basics of React 👩‍🎓',
  checked: false,
}, {
  text: 'Go surfing 🏄',
  checked: false,
}]

ReactDOM.render(
  <TodoList items={items} />,
  document.getElementById('root')
);

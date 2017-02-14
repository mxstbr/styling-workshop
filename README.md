# Lab #1: React Basics

Your task in this lab is to create a simple todo list.

The items on that list are defined in the `items` variable in the `index.js` file and are passed into the `TodoList.js` component as `this.props.items`.

The `TodoList` should then render one `TodoItem.js` per item passed to it via `this.props.items`.

The `TodoItem` renders the item as an `<input type="checkbox" />` with a label that contains the text and that is either checked or unchecked.

```sh
index.js    # This ReactDOM.renders and passes the items to the TodoList
TodoList.js # This should render the TodoItems
TodoItem.js # This should render a todo item
```

## License

Copyright (C) 2017  Maximilian Stoiber & Nikolaus Graf. You may use this repo for non-commercial use under the GPLv3 license.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

(see [LICENSE.md](LICENSE.md) for the full license text)

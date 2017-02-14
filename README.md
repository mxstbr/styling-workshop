# Lab #1: React Basics

Your task in this lab is to create a simple todo list. This is what the finished app should look like:

![Three todo items](https://cloud.githubusercontent.com/assets/7525670/22934361/f813c728-f2ce-11e6-931f-68d4775a7541.png)

You need to fill out the `TodoList.js` and the `TodoItem.js` components. The items to be rendered are defined in the `items` variable in the `index.js` file and are passed into the `TodoList.js` component as `this.props.items`.

The `TodoList` should then render one `TodoItem.js` per item passed to it via `this.props.items`.

The `TodoItem` renders the item as an `<input type="checkbox" />` with a label that contains the text and that is either checked or unchecked.

```sh
index.js    # This ReactDOM.renders and passes the items to the TodoList
TodoList.js # This should render the TodoItems
TodoItem.js # This should render a todo item
```

## Testing

To make it easier for you to complete this task, we've added snapshot tests verifying that you've arrived at the correct app. This command will run the tests:

```sh
npm run test
```

If you haven't changed anything you should see two test failures showing you what exactly we expect the app to do.

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

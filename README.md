# Lab #3: Lifecycles and Performance

Your task in this lab is to render a graph from the weather data for Las Palmas with the `Plotly` library.

This is what the finished app should look like:

![A rendered graph showing what the weather is like in Las Palmas](https://cloud.githubusercontent.com/assets/7525670/23337289/cfb5696c-fbe8-11e6-962f-790e6f6c2c09.png)

You'll need to fill out the `Plot.js` component. The data for the weather is passed in from `index.js`. To find out how `Plotly` works see `public/index.html` for an example plot!

The important part of this lab is that your `Graph` component should be as performant as possible. This means re-rendering the graph every time the data changes, not more and not less. (yes there are tests for the expected behaviour)

## Testing

To make it easier for you to complete this task, we've (again) added tests verifying that you've arrived at the correct app. This command will run the tests:

```sh
npm run test
```

If you haven't changed anything you should see test failures showing you what exactly we expect the app to do. (or a "Component not found" for the `Plot` if you haven't created the Component yet)

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

# Styling React Applications Workshop

This is the excerise (lab) for the styling React workshop. You can see the finished styled app at https://styling-workshop.now.sh !

## Setup

Follow these steps to get the repo:

```sh
# Download the repo
git clone https://github.com/reactinflipflops/riff.git
# Go into the newly downloaded directory
cd riff
# Install all the dependencies (can also run yarn)
npm install
# Start the app
npm start
```

A browser window should open at `localhost:3000` (if not, try going to that URL manually) and you should see a weather app. If so, you're set up and ready to go!

Make sure you have [`git`](https://git-scm.com/) and the latest stable version of [Node.js](https://nodejs.org/en/) installed. If any of these commands fail, please reinstall the relevant binary.

## Task

Your task in this lab is to style our weather application in three different ways:

- Inline styles
- CSS Modules
- `styled-components`

We've built a React app and styled it with a global CSS file on this branch. (`public/global.css`) You have to move those styles to the new way and make sure it looks as close to the original as possible.

## Getting started

This lab is based on three branches (`inline-styles`, `css-modules`, `styled-components`) that have the same starting point. Get started with the `inline-styles` branch:

```
git checkout inline-styles
```

In case you aren't running it locally anymore, this is what the finished app looks like (and should look like after converting it to a different library):

![The finished app with styling](https://cloud.githubusercontent.com/assets/7525670/23343771/9145b31e-fc68-11e6-93e3-4002416b9608.png)
![The finished app as seen on a phone](https://cloud.githubusercontent.com/assets/7525670/23343772/914aad38-fc68-11e6-91c4-dd55dd0e875f.png)

> Note: There are no unit tests verifying the correct solution—if your app looks the same with the moved styles that's it! (note that a 1:1 move might not be possible)

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

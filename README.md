# LS Optimizely Experiment Repo

## Background

The Optimizely platform doesn't always play nice with ES6 - and a large number of our site users are still on older browser versions - thus it's advantageous to transpile everything to ES5 for good code coverage.

Webpack was a bit of overkill because we're just dealing with JS files so I went with ol' reliable, Gulp to automate Babel transpiling of files.

## Setup

Clone the repo and run `npm install`. Make sure to not install globally - I've included Babel-CLI and Gulp in the dev dependencies - any reference to those in npm scripts is configured to use the local version that will be installed in your `node_modules` folder.

The excellent `pre-commit` library should automatically install a precommit hook that will transpile your ES6 code to ES5. If you'd like to run this manually you can do `npm run build`

## Adding Experiments

New experiments are added in the `src` folder. Create a new folder with the prefix ESX and the experiment number exactly like this: `ESX425`. Naming of files inside the folder aren't important to the build script, but for good organization go with something like `ESX425.js` for the script, `ESX425.css` if there's an accompanying CSS file, etc.

## .gitsnaps?

(gitsnap)[https://www.npmjs.com/package/gitsnap] is a fun repo that takes a webcam photo every time you make a commit (runs post-commit). Fun fact - I'm looking down to the right because I always run a terminal on my right-hand screen.

## misc?

There's a misc folder with various odds and ends for experiment development. A coulple of relevant ones:

### `jqueryWaitLoop.js`

jQuery library load timing is a bit of a nightmare with our current setup. This is a simple loop that checks for jQuery that you can use to wait for load to run code - if jQuery code fires before load, you'll get an error, something similar to `$ is undefined`. Patience!

### `jquery goodies/kartKlear.js`

Sometimes you end up adding a bunch of stuff to your cart on our site. Once carts get huge (50+ items) they start to bog down the checkout flow. Removing items is tedious on the site and there's no way to remove multiple at once through the UI. `kartKlear.js` can be pasted into your console on the cart page and it will run a loop that removes each item from your cart.

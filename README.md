# React

<h2> Please read this before moving on with repo </h2>

<h2> Running React App </h2>

* Open up two terminals
* From the main directory of the project in both terminals:
	* run ```webpack -w```
		* this will update with changes on the ui & show if there's an error on the ui
		* If you make a change on the ui, it will not be picked up if you're not running your webpack
	* run ```npm start```
		* this will run your server, and you will open up your page on the local host and the port the server is running on, i.e. ```http://localhost:<PORT>```
* Be sure both terminals are showing no errors and are running the localhost & webpack

* In this package.json, you will see a different way of running everything in one terminal with the ```webpack-dev-server```: https://github.com/fizal619/redux-movie-search/blob/master/package.json

<h2> Installing Webpack </h2>

* Install webpack (globally & locally per project)
	* https://webpack.js.org/guides/installation/

<h2> When Cloning </h2>

* You might have conflicts with the bundle.js when cloning the repo and trying to run an app with the webpack and server. Just delete the bundle.js file and re-run your webpack (webpack -w). This will create a new bundle.js file.

<h2> No More jQuery </h2>

* There is no need to have separate jQuery files anymore, as the babel transpiler makes react's js files able to handle all of the functionality that jQuery can.
* So, like express handlebars, you can do javascript and html in the same file, but in react, it's a javascript file, not a handlebars file.

<h2> React Router </h2>

* There are 2 different usages of react router throughout the lessons/exercises
* One is a newer version that uses ```react-router-dom```, and an older version that uses ```react-router```
* You'll be able to see a lot of differences, but just look in the routes.js file and see if ```react-router-dom``` or ```react-router``` is imported.

<h2> .js vs .jsx </h2>

* You will see some apps with .js files and some with .jsx files
* React works with both, but people are moving towards .jsx
* JSX was created to fit the react format of having html and javascript work together in the same file
* Works with both file types. You really won't see much of a difference.
* Good read: https://github.com/airbnb/javascript/pull/985

<h2> Package.json Dependencies & Dev Dependencies </h2>

* You will see dependencies and dev dependencies in react package.jsons
* To save regular dependencies is ```npm i --save``` & devDependencies is ```npm i --save-dev```
* dev dependencies do not go to production, that's the main difference that I have seen.
* https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies
# React

<h2> Running React App </h2>

* Open up two terminals
* From the main directory of the project in both terminals:
	* run ```webpack -w```
		* this will update with changes on the ui & show if there's an error on the ui
		* If you make a change on the ui, it will not be picked up if you're not running your webpack
	* run ```npm start```
		* this will run your server, and you will open up your page on the local host and the port the server is running on, i.e. ```http://localhost:<PORT>```
* Be sure both terminals are showing no errors and are running the localhost & webpack

<h2> Installing Webpack </h2>

* Install webpack (globally & locally per project)
	* https://webpack.js.org/guides/installation/

<h2> When Cloning </h2>

* You will have conflicts with the bundle.js when cloning the repo and trying to run an app with the webpack and server. Just delete the bundle.js file and re-run your webpack (webpack -w). This will create a new bundle.js file.
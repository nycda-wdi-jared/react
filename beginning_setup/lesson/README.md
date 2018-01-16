# Example React App

<h2> Running this app </h2>

* Remember to open two terminals:
	* You can run ```npm start``` in one from anywhere in the directory
	* You have to run ```webpack -w``` from the main directory
		* Make sure you have webpack installed: https://webpack.js.org/guides/installation/

<h2> Routing </h2>

* https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
* As you see in the routes.js file, all of the front-end/ui routing is done from the client side
* This is where you define your routes that people will be able view and direct through the website
* The back-end routes are merely for sending and receiving data. We will get to that soon.

<h2> Installation </h2>

1. Look at how the dots connect through the folder structure
2. You see how we use ```import``` instead of ```require```, that's babel at work
	* https://babeljs.io/
	* With react, there is a different way of writing javascript
3. As you can see, we are able to write the javascript & html together
4. Another difference with React is the routes are declared on the client side, not the server side.
5. Look at the ```routes.js``` file, and then look at that route being imported into the ```app.js``` file. 
6. Look at this line in the app.js ```document.getElementById('app')```. This is connecting to the ```app class``` in the index.html file in the public folder.
7. As you can tell, you only need that line in the html for all of the react ui to work.
8. The bundle.js is automatically created through the webpack.
	* When your ui is updated, the bundle is updated.

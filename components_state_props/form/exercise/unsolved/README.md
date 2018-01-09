# React Form Component Exercise

Look at the comments in the Form.js & Home.js file

# Example React App

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

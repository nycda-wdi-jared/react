# React Portfolio Homework

* Please read this README before starting
* Create a Portfolio Using React
* You can reference this for an example portfolio project: https://github.com/nycda-wdi-jared/blog_express_app
* Dependencies: express, react, react-dom, react-router-dom
* Dev Dependencies: babel-core, babel-loader, babel-preset-es2015, babel-preset-react, babel-preset-stage-0
	* https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies
	* To save regular dependencies is ```npm i --save``` & devDependencies is ```npm i --save-dev```
* What is babel?
	* In human terms, it lets you write your javascript a little differently in regards to importing and exporting items and other functionality: https://babeljs.io/

<h2>Easier</h2>

* Create a front end portfolio application Using React & React Router
* Here are the pages that I used:
	* Home Page
	* Projects Page
	* About Me Page
* You can use whatever pages you want, it's your own custom portfolio
* Look at the 'easiest' video

Example Folder/File Structure:

![easier](./github_images/easier_architecture.png?raw=true "Easier")

<h2>Medium</h2>

* View the video called 'medium.mp4' for a reference
* Incorporate a blog page
* Create a form with an input and a textarea
* Use form onSubmit (built into react)
* Have messages as a state of an empty array, and concatanated the array with the name and message input
* Append that array to the dom
* Remove the value in the inputs after submit is done
* There is no database here, so when the page is reloaded, the messages will disappear
* If there are no messages in the array, give a message that relays that
* Bonus: Connect to a database and append information that way: https://github.com/nycda-wdi-jared/react_postgres/tree/master/post

<h2> Difficult </h2>

* View the video called 'difficult.mp4' for a reference
* Incorporate an email page
* Please view nodemailer on one of my projects, it will look very similar on your end: 
	* https://github.com/jjthom87/Monastir/blob/master/server/controllers/route-controller.js
	* https://github.com/jjthom87/Monastir/blob/master/server/server.js
* Set up a route in your server called /api/email
* Set up a fetch post route on your client side. It will be a regular form submit. Please use this example to see how forms are submitted from the client to the server in react: https://github.com/nycda-wdi-jared/react_postgres/tree/master/post
* When the form is submitted, console.log the different callbacks in nodemailer just to see how it works.
* When you get an email, that means it works

Example Folder/File Structure:

![difficult](./github_images/difficult_architecture.png?raw=true "Difficult")


<h2> Running React App </h2>

* Open up two terminals
* From the main directory of the project in both terminals:
	* run ```webpack -w```
		* this will update with changes on the ui & show if there's an error on the ui
		* If you make a change on the ui, it will not be picked up if you're not running your webpack
	* run ```npm start```
		* this will run your server, and you will open up your page on the local host and the port the server is running on, i.e. ```http://localhost:<PORT>```
* Be sure both terminals are showing no errors and are running the localhost & webpack
* Be sure to install webpack

<h2>Heroku</h2>

* In main directory of proejct
* Run ```heroku create```
* Run ```heroku addons:create heroku-postgresql:hobby-dev``` if you have a database
* Run ```heroku config``` to see the environment variable just added or set your own env variables through heroku config: 
	* https://devcenter.heroku.com/articles/config-vars
	* Im using that for my EMAIL & EMAIL_PASS
* Resource: https://devcenter.heroku.com/articles/heroku-postgresql
* This line in the config.json is how the database connections in production/heroku:

```"production": {```
    ```"use_env_variable": "DATABASE_URL"```
```}```

* My Portfolio on the web: https://glacial-crag-99511.herokuapp.com/
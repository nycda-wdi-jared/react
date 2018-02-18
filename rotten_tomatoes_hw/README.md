# React Rotten Tomato Homework

PLEASE READ BEFORE BEGINNING

<h2> Easier </h2>

<strong>Goal</strong>

* Append a table of movie titles to the page
* When a row is clicked on the table, it redirects you to a page that has information about the movie

<strong>Instructions</strong>

* Please watch the 'easiest' video in this repo
* For the table && table on click please view this example: https://github.com/nycda-wdi-jared/react/tree/master/itunes
* This should be using react.js with a babel transpiler
* You should have 3 components: 
	* Home - do what you want hear to explain your app
	* Movies - show the table of the movies
	* Movie - show information about the movie clicked from the table
* You should have a database pre-populated with movies & these columns:
	* title
	* year
	* imdbID
	* poster (poster url)
	* description
* You should have these routes:
	* Server Side
		* /api/movies
		* /api/add-movie for postman
	* Client Side
		* "/" - Home Component
		* "/movies" - Movies Component for movies table
		* "/movie/:title" - Movie component for information about movie
			* do Movie.findAll() on the server side, res.json all the movies
			* fetch /api/movies on the client side in the Movie component, and in that callback...
			* ...do a conditional to get that movie by comparing the params (this.props.params.title) against all the movie titles in the movie array
			* Store that movie in the state

<h2> Difficult </h2>

<strong>Goal</strong>

* Please watch the 'difficult' video in this repo
* Along with all of the functionality of the easiest:
	* Easier:
		* Simply have a thumbs up button under the movie poster that starts black, and when clicked on, turns blue, and then when clicked again, turns black
	* Difficult:
		* Implement passport.js into application
		* Have it where if the color of the button is based upon whether or not the user has liked the movie
		* Let me know if you get here and ill walk you through it

<h2> More Difficult </h2>

<strong>Goal</strong>

* Please watch the 'difficult' video in this repo
* This is more me just showing off, but if you want some of the functionality in here to be incorporated into your apps, or you're interested in doing this for the homework, please ask.

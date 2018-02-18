# Postgres React Update

* Figured out a problem using stack: https://stackoverflow.com/questions/46474481/reactjs-adding-ref-to-input-in-dynamic-element-render

<h2> componentWillMount() </h2>

* Look for this in the code. It's a method built into react. Called a lifecycle method
* https://reactjs.org/docs/react-component.html#componentwillmount
* Basically, you want to make your get calls in here. All the information that you want to send from the database to the client should be set up by fetch/axios calls to your server. This is the connection between the client & the server through react.
* Please pay close attention to the flow and console.logs
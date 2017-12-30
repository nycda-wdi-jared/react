// Include React
var React = require("react");

import AnimalItem from './AnimalItem';

export default class AnimalList extends React.Component {
  render() {
  	const { animals } = this.props;
  	const renderAnimals = () => {
  		return animals.map((animal, index) => {
  			return (
  				<AnimalItem
  					name={animal.name}
  					type={animal.type}
  					key={index}
  				/>
  			)
  		});
  	}
    return (
        <ol>
        	{renderAnimals()}
        </ol>
    );
  }
};
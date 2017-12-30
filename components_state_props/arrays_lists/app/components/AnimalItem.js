var React = require("react");

export default class AnimalItem extends React.Component {
  render() {
  	const { name, type } = this.props;
    return (
        <li>Animal: {name}, Type: {type}</li>
    );
  }
};
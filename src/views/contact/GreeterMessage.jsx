var
React     = require('react'),
PropTypes = require('prop-types');

var GreeterMessage = React.createClass({
	render: function(){
        var
        name    = this.props.name,
        message = this.props.message;
        
		return(
			<div>
				<h1>Hello {name}</h1>
				<p>{message}</p>
			</div>
		);
	}
});

module.exports = GreeterMessage;

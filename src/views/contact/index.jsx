var
React          = require('react'),
PropTypes      = require('prop-types'),
GreeterMessage = require('./GreeterMessage.jsx'),
GreeterForm    = require('./GreeterForm.jsx');

var Greeter = React.createClass({
	getDefaultProps: function(){
		return{
			name   : 'User',
			message: 'This is my default message'
		};
	},
	getInitialState: function(){
		return{
			name   : this.props.name,
            message: this.props.message
		};
	},
	handleNewData: function(updates){
		this.setState(updates);
	},
	render: function(){
		var
		name    = this.state.name,
		message = this.state.message;

		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

module.exports = Greeter;

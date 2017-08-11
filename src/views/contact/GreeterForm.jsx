var
React     = require('react'),
PropTypes = require('prop-types');

var GreeterForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        
        var
        updates = {},
        name    = this.refs.name.value,
        message = this.refs.message.value;
        
        if(name.length > 0){
            this.refs.name.value = '';
            updates.name         = name;
        }
        if(message.length > 0){
            this.refs.message.value = '';
            updates.message         = message;
        }
        
        this.props.onNewData(updates);
    },
	render: function(){
		return(
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" />
                <textarea ref="message" placeholder="Enter message"/>
				<button>Submit</button>
			</form>
		);
	}
});

module.exports = GreeterForm;

var
React     = require('react'),
PropTypes = require('prop-types');

const Test = props =>{
	var aa = function(){
		console.log('aa');
	}

return (
    <div className="form-input">
        <input 
			name      = { props.id }
			type      = { props.type }
			value     = { props.value } 
			onChange  = { event=> this.aa() }
			maxLength = "50"
			ref       = { props.ref }
        	required
        />
        <label htmlFor={ props.id }>{ props.children }</label>
    </div>
);
};


Test.propTypes = {
	children: PropTypes.string.isRequired,
	type    : PropTypes.string.isRequired,
	value   : PropTypes.any.isRequired,
	onChange: PropTypes.func,
};
Test.defaultProps = {
    children: '',
    type    : 'text',
	value   : ''
};

module.exports = Test;
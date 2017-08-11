var
React     = require('react'),
PropTypes = require('prop-types');

const Contact_input = props =>(
    <div className="form-input">
        <input 
			id        = { props.id }
			name      = { props.id }
			type      = { props.type }
			value     = { props.value } 
			onChange  = { props.onChange }
			maxLength = "50"
			ref       = { props.ref }
        	required
        />
        <label htmlFor={ props.id }>{ props.children }</label>
    </div>
);

<input ref='reference' onKeyPress={(e) => {(e.key === 'Enter' ? doSomething(this.refs.reference.value) : null)}} />


Contact_input.propTypes = {
	children: PropTypes.string.isRequired,
	type    : PropTypes.string.isRequired,
	id      : PropTypes.string.isRequired,
	value   : PropTypes.any.isRequired,
	onChange: PropTypes.func,
};
Contact_input.defaultProps = {
    children: '',
    type    : 'text',
	value   : ''
};

module.exports = Contact_input;
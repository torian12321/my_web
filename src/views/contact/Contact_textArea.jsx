var
React     = require('react'),
PropTypes = require('prop-types');

const Contact_textArea = props =>(
    <div className="form-input textArea">
	    <textarea id={ props.id } name={ props.id } required maxLength="500"></textarea>
	    <label    htmlFor={ props.id }>{ props.children }</label>
	</div>
);
Contact_textArea.propTypes = {
	children: PropTypes.string.isRequired,
	id      : PropTypes.string.isRequired
};
Contact_textArea.defaultProps = {
    children: ''
};

module.exports = Contact_textArea;
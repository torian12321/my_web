var
React     = require('react'),
PropTypes = require('prop-types');

const Contact_link = props =>(
	<a
	    target    = "_blank"
	    href      = { props.link }
	    className = { 'xs-4 sm-6 md-12 c-contact ' + props.type }>
	    { props.children }
	</a>
);
Contact_link.propTypes = {
	children: PropTypes.string.isRequired,
	type    : PropTypes.string.isRequired,
	link    : PropTypes.string.isRequired
};
Contact_link.defaultProps = {
    children: '',
    type    : 'text',
    link    : '#'
};

module.exports = Contact_link;
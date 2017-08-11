var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');

const Section = props => (
    <section id={ props.id } className={ props.className }>
    	{ props.title ? <h1>{ props.title }</h1> : null }
	    <div className="container">
	       { props.children }
	    </div>
    </section>
);

Section.propTypes = {
    children : PropTypes.any.isRequired,
    id       : PropTypes.string,
    title    : PropTypes.string,
    className: PropTypes.string
};

module.exports = Section;

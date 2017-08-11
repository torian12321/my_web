var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less'),
Icon      = require('Icon');

const Quote = props =>(
    <blockquote className="quote" cite={props.cite}>
        {props.text}
        {props.author ? <span className="author">{ props.author }</span> : null}
        <Icon className="icon-open"  name="quote" />
        <Icon className="icon-close" name="quote" rotate={180} />
    </blockquote>
);

Quote.propTypes = {
    text  : PropTypes.string.isRequired,
    author: PropTypes.string,
    cite  : PropTypes.string
};

module.exports = Quote;

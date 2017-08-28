var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Title = props => (
    <h1 className={classNames('title', props.className)}>
        { props.children }
    </h1> 
);

Title.propTypes = {
    children : PropTypes.string.isRequired,
    className: PropTypes.string
};

module.exports = Title;

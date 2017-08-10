// Wrapper for checkboxes and radioButtons
var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style-check.less');

const Wrapper = props => (
    <label className={classNames('wrapper-2', props.className)} htmlFor={props.id}>
        {props.children}
        <span>{props.label}</span>
    </label>
);


Wrapper.propTypes = {
    children : PropTypes.node.isRequired,
    label    : PropTypes.string,
    id       : PropTypes.string,
    className: PropTypes.string,
    type     : PropTypes.oneOf(['error', 'success', 'warning'])
};


module.exports = Wrapper;

var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Button = props => (
    <button
        className= {classNames(
            'btn',
            !props.flat ? 'btn-3D'             : null,
            props.large ? 'btn-large'          : null,
            props.color ? `btn-${props.color}` : null,
            props.type  ? `btn-${props.type}`  : null
        )}
        onClick  = {props.onClick}
        disabled = {props.disabled}
    >
        {props.children}
    </button>
);


Button.propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    flat    : PropTypes.bool,
    large   : PropTypes.bool,
    color   : PropTypes.oneOf(['main', 'sec', 'green', 'red', 'blue', 'white', 'grey', 'black']),
    type    : PropTypes.oneOf(['success', 'danger', 'warning']),
    onClick : PropTypes.func
};
Button.defaultProps = {
    children : 'Submit',
    disabled : false,
    large    : false,
    flat     : true
};

module.exports = Button;
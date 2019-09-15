var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Row = props => (
    <div  className={classNames(
        props.spacing ? 'row-spacing' : 'row',
        props.className
    )}>
        {props.children}
    </div>
);


Row.propTypes = {
    children : PropTypes.any.isRequired,
    spacing  : PropTypes.bool,
    className: PropTypes.string
};
Row.defaultProps = {
    spacing: true
};

module.exports = Row;

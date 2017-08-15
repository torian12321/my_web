var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames');

const Col = props => (
    <div  className={classNames(
        props.xs ? `xs-${props.xs}` : null,
        props.sm ? `sm-${props.sm}` : null,
        props.md ? `md-${props.md}` : null,
        props.lg ? `lg-${props.lg}` : null,
        props.className
    )}>
        {props.children}
    </div>
);

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Col.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string,
    xs       : PropTypes.oneOf(sizes),
    sm       : PropTypes.oneOf(sizes),
    md       : PropTypes.oneOf(sizes),
    lg       : PropTypes.oneOf(sizes),
};
Col.defaultProps = {
    xs: 12
};

module.exports = Col;

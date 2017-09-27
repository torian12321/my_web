import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';

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

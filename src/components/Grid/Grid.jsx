import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';

const Grid = props => (
    <div  className={classNames(
        props.fluid ? 'container-fluid' : 'container',
        props.className
    )}>
        {props.children}
    </div>
);


Grid.propTypes = {
    children : PropTypes.any.isRequired,
    fluid    : PropTypes.bool,
    className: PropTypes.string
};
Grid.defaultProps = {
    fluid: false
};

module.exports = Grid;

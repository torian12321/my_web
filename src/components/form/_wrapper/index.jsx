// Wrapper for text inputs and textAreas
import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';
import styles       from './_style';

const Wrapper = props => (
    <div className={classNames('styled-input', props.className)}>
        {props.children}
        {props.label &&
            <label htmlFor={props.id}>{props.label}</label>
        }        
        <span />
    </div>
);


Wrapper.propTypes = {
    children : PropTypes.node.isRequired,
    label    : PropTypes.string,
    id       : PropTypes.string,
    className: PropTypes.string,
    type     : PropTypes.oneOf(['error', 'success', 'warning'])
};


module.exports = Wrapper;

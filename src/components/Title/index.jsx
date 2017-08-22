import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_style';

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

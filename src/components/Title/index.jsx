import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';
import styles       from './_style';

const Title = props => (
    <h1 className="title">{ props.children }</h1> 
);

Title.propTypes = {
    children : PropTypes.string.isRequired
};

module.exports = Title;

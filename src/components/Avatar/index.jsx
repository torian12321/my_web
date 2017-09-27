import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';
import styles       from './_style';

const Avatar = props => (
    <div 
        style    ={{backgroundImage: `url(${props.src})`}}
        className={classNames('avatar', props.className)}
    />
);


Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    className: PropTypes.string
};
Avatar.defaultProps = {
    src: 'http://placeimg.com/200/200/people'
};

module.exports = Avatar;

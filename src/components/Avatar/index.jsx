var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Avatar = props => (
    <div 
        style    ={{backgroundImage: `url(${props.src})`}}
        className={classNames(
            'avatar',
            props.size,
            props.state,
            props.className
        )}
    />
);


Avatar.propTypes = {
    src      : PropTypes.string.isRequired,
    size     : PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    state    : PropTypes.oneOf(['main', 'sec', 'success', 'danger', 'warning', 'disable']),
    className: PropTypes.string
};
Avatar.defaultProps = {
    // src: 'http://lorempixel.com/200/200/people',
    src: 'http://placeimg.com/200/200/people'
};

module.exports = Avatar;

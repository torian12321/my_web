var
React     = require('react'),
PropTypes = require('prop-types');

const Img = props => (
    <img 
        src      = {props.src}
        className= {props.className}
        style    = {props.style}
        alt      = {props.alt}
        role     = {props.alt ? null : 'presentation'}
    />
);

Img.propTypes = {
    src      : PropTypes.string.isRequired,
    alt      : PropTypes.string,
    className: PropTypes.string,
    style    : PropTypes.string
};
Img.defaultProps = {
    //src: 'http://placehold.it/200x150',
    src: 'http://placeimg.com/200/150/nature'
};

module.exports = Img;

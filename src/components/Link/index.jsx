var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Link = props =>(
    <a 
        href     ={props.href}
        className={classNames(
            'link',
            {'preview': props.preview}
        )}
    >
        {props.children}
    </a>
);

Link.propTypes = {
    children : PropTypes.string.isRequired,
    href     : PropTypes.string,
    preview  : PropTypes.bool
};
Link.defaultProps = {
    href   : '#',
    preview: false
};

module.exports = Link;

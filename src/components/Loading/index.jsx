var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less');

const Loading = props => (
    <div className={classNames('loading', props.size)} />
);


Loading.propTypes = {
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg'])
};

module.exports = Loading;

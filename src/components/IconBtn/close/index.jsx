var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
styles    = require('./_style.less'),
Icon      = require('Icon');

const IconBtnClose = props =>(
    <div className={classNames('icon-btn', props.className)} onClick={props.onClick}>
        <Icon name='close'/>
    </div>  
);

IconBtnClose.propTypes = {
    className: PropTypes.string,
    onClick  : PropTypes.func
};
IconBtnClose.defaultProps = {
    onClick: function(){}
};

module.exports = IconBtnClose;

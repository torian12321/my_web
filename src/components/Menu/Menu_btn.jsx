import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';

const Menu_btn = props =>(
	<div
		className={classNames(
			'menu-opener',
			props.isOpen && ' active'
		)}
		onClick  = { props.onClick }
	>
	    <div></div>
	    <div></div>
	    <div></div>
	</div>
);


Menu_btn.propTypes = {
	isOpen : PropTypes.bool.isRequired,
    onClick: PropTypes.func
};
Menu_btn.defaultProps = {
    isOpen: false
};

module.exports = Menu_btn;
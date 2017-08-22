import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'Icon';

const Menu_panelOption = props =>(
	<li>
		<a href= { '#'+props.id } className= { props.name }>
			<Icon name={props.icon} /> { props.title }
		</a>
	</li>		
);

Menu_panelOption.propTypes = {
    id      : PropTypes.string.isRequired,
    icon    : PropTypes.string
};
Menu_panelOption.defaultProps = {
    id  : ''
};


module.exports = Menu_panelOption;
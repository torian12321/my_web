var
React     = require('react'),
PropTypes = require('prop-types');

const Menu_panelOption = props =>(
	<li>
		<a href= { '#'+props.id } className= { props.name }>
			{ props.title }
		</a>
	</li>		
);

Menu_panelOption.propTypes = {
	//children: PropTypes.string.isRequired,
    id      : PropTypes.string.isRequired,
    name    : PropTypes.string
};
Menu_panelOption.defaultProps = {
    id  : '',
    name: ''
};


module.exports = Menu_panelOption;
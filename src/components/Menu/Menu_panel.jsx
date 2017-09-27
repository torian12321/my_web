import React        	from 'react';
import PropTypes    	from 'prop-types';
import Menu_panelOption from './Menu_panelOption';
import BG_img       	from './menu_header.jpg';
		
const Menu_panel = props => (
    <div className={ 'menu-wrap ' + (props.isOpen ? 'active' : '') }>
	    <div className="menu-content">

	        <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
	        <ul>
	        	{ props.items.map((opt, i) => <Menu_panelOption {...opt} key={i}/> )}
	        </ul>
	        <div className="menu-footer">
	            Check the code on <a href="https://github.com/torian12321/my_web" className="link">GitHub</a>
	        </div>
	    
	    </div>
	</div>
);

Menu_panel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
	items : PropTypes.array.isRequired,
	img   : PropTypes.string,
};
Menu_panel.defaultProps = {
    isOpen: false,
	items : [],
	img   : BG_img
};

module.exports = Menu_panel;
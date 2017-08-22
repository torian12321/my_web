import React 		from 'react';
import PropTypes 	from 'prop-types';
import Section 		from 'Section';
import Icon 		from 'Icon';
import styles 		from './_style';

const data = require('data');

const Home = props =>(
	<Section id={props.sectionConf.id} className="section-main">
	
		<div className="title-main">
		    Aitor<br/>
		    Palomares
		    <span>Interactive resume</span>
		</div>

		{ props.gotoLink  ? <a href={"#" + props.gotoLink } className="goDown"><Icon name='down' /></a> : null }
    </Section>
);

Home.propTypes = {
	sectionConf : PropTypes.object,
	gotoLink    : PropTypes.string
};
Home.defaultProps = {
	sectionConf : data.menu.home,
    gotoLink    : data.menu.profile.id
};

module.exports = Home;
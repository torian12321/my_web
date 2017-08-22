import React 			from 'react';
import PropTypes 		from 'prop-types';
import Section 			from 'Section';
import { Column } 		from 'Grid';
import Portfolio_card   from './Portfolio_card';

const data = require('data');

const Portfolio = props =>(
	<Section { ...props.sectionConf }>
		{ props.proyects.map(proyect => <Column xs={12} sm={6} lg={4} key={proyect.title}><Portfolio_card {...proyect} /></Column> ) }
    </Section>
);


Portfolio.propTypes = {
	sectionConf: PropTypes.object,
	proyects   : PropTypes.array
};
Portfolio.defaultProps = {
	sectionConf: data.menu.portfolio,
    proyects   : data.portfolio
};

module.exports = Portfolio;
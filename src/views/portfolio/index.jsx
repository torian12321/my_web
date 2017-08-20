var
React          = require('react'),
PropTypes      = require('prop-types'),
Section        = require('Section'),
{ Column }     = require('Grid'),
data           = require('data'),
Portfolio_card = require('./Portfolio_card.jsx');

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
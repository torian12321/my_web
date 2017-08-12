var
React          = require('react'),
PropTypes      = require('prop-types'),
Section        = require('Section'),
data           = require('data'),
Portfolio_card = require('./Portfolio_card.jsx'),
{ Column }     = require('Grid');

const Portfolio = props =>(
	<Section { ...props.sectionConf }>
		{ data.portfolio.map((proyect, i) => <Column xs={12} sm={6} lg={4}><Portfolio_card {...proyect} key={i} /></Column> ) }
    </Section>
);


Portfolio.propTypes = {
	sectionConf : PropTypes.object
};

module.exports = Portfolio;
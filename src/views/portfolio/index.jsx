var
React          = require('react'),
PropTypes      = require('prop-types'),
Section        = require('Section'),
Portfolio_card = require('./Portfolio_card.jsx');

const Portfolio = props =>(
	<Section { ...props.sectionConf }>
		{ props.proyectsList.map((proyect, i) => <Portfolio_card {...proyect} key={i} /> ) }
    </Section>
);


Portfolio.propTypes = {
	sectionConf : PropTypes.object,
    proyectsList: PropTypes.array.isRequired
};
Portfolio.defaultProps = {
    proyectsList: []
};

module.exports = Portfolio;
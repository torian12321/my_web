var
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section'),
BioCard   = require('./Bio_card.jsx');

const ViewBio = props =>(
    <Section { ...props.sectionConf }>
    	{ props.bioList.map((bio, i) => <BioCard {...bio} key={i}>{bio.desc}</BioCard>) }
    </Section>
);


ViewBio.propTypes = {
	sectionConf: PropTypes.object,
    bioList    : PropTypes.array.isRequired
};
ViewBio.defaultProps = {
    bioList: []
};

module.exports = ViewBio;
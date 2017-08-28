var
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section'),
data      = require('data'),
BioCard   = require('./Bio_card.jsx'),
styles    = require('./_style.less');

const ViewBio = props =>(
    <Section { ...props.sectionConf }>
    	{ props.bioList.map((bio, i) => <BioCard {...bio} key={i}>{bio.desc}</BioCard>) }
    </Section>
);


ViewBio.propTypes = {
    sectionConf: PropTypes.object,
    bioList    : PropTypes.array
};
ViewBio.defaultProps = {
    sectionConf: data.menu.biography,
    bioList    : data.bio
};

module.exports = ViewBio;
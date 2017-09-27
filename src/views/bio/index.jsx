import React        from 'react';
import PropTypes    from 'prop-types';
import Section      from 'Section';
import BioCard      from './Bio_card';
import styles       from './_style';

const data = require('data');

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
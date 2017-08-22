import React 		from 'react';
import PropTypes 	from 'prop-types';
import Section 		from 'Section';
import Avatar 		from 'Avatar';
import {Column}     from 'Grid';
import styles 		from './_style';
import PrAttribute  from './Profile_attribute';
import AvatarImg    from './avatar.jpg';

const data = require('data');

const Profile = props =>(
	<Section { ...props.sectionConf } className='section-home'>

        <Column sm={5} lg={3} className='m-b-30'>
            <Avatar className="m-x-auto" src={AvatarImg} />
        </Column>

        <Column sm={7} lg={3} lg_push={6} className='p-b-30 details'>
            <h3 className="p-b-20">Details</h3>
            <PrAttribute label="Name">Aitor</PrAttribute>
            <PrAttribute label="Age">29</PrAttribute>
            <PrAttribute label="Location">Dublin, Ireland</PrAttribute>
        </Column>

        <Column lg={6} lg_pull={3} className='m-b-30'>
            <h3>Sumary</h3>
            <p>I am an allround web developer. I am a junior developer with good knowledge of front-end techniques. I love structure and order and I also stand for user friendly designs. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you will learn faster and more.</p>
        </Column>

    </Section>
);

Profile.propTypes = {
    sectionConf: PropTypes.object
};
Profile.defaultProps = {
	sectionConf: data.menu.profile
};

module.exports = Profile;
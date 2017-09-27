import React        from 'react';
import PropTypes    from 'prop-types';
import Section      from 'Section';
import {Column}     from 'Grid';
import BG  		    from './bg.jpg';
import styles       from './_style';
import Contact_link from './Contact_link';
import Contact_form from './Contact_form';

const data = require('data');

const ViewContact = props =>(
	<Section { ...props.sectionConf } className="section-contact" style={{backgroundImage: `url(${ BG })`}}>
        <Contact_form />

        <Column xs={12} md={6} md_pull={6} className="contact-chanels">
            { props.contacts.map((contact, i) => <Contact_link {...contact} key={i} /> ) }
        </Column>
	</Section>
);

ViewContact.propTypes = {
    sectionConf: PropTypes.object,
    contacts   : PropTypes.array
};
ViewContact.defaultProps = {
    sectionConf: data.menu.contact,
    contacts   : data.contacts
};

module.exports = ViewContact;
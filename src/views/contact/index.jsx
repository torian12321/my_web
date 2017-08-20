var 
React        = require('react'),
PropTypes    = require('prop-types'),
Section      = require('Section'),
{ Column }   = require('Grid'),
data         = require('data'),
Contact_link = require('./Contact_link'),
Contact_form = require('./Contact_form'),
BG           = require('./bg.jpg'),
style        = require('./_style');

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
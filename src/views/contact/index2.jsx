var 
React        = require('react'),
PropTypes    = require('prop-types'),
Section      = require('Section'),
Contact_link = require('./Contact_link.jsx'),
Contact_form = require('./Contact_form.jsx');

const Contact = props =>(
	<Section id="contact" title="Contact" className="parallax">
    	<div className="row-spacing">

            <Contact_form />

            <div className="contact-chanels xs-12 md-6 md-pull-6">
                <Contact_link type="linkedin" link="">Linkedin</Contact_link>
                <Contact_link type="doc" link="">Document</Contact_link>
                <label
                    htmlFor   = "#"
                    className = "xs-4 sm-6 md-12 c-contact mail">
                    mail
                </label>
                <Contact_link type="linkedin" link="git">Git Hub</Contact_link>
                <Contact_link type="linkedin" link="codepen">Codepen</Contact_link>
            </div>

    	</div>
	</Section>
);

module.exports = Contact;
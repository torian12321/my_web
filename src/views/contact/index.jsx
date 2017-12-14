import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import Section      from 'Section';
import {Column}     from 'Grid';
import BG  		      from './bg.jpg';
import styles       from './_style';
import Contact_link from './Contact_link';
import Contact_form from './Contact_form';

class ViewContact extends React.Component {
  render() {
    return (
      <Section { ...this.props.sectionConf } className="section-contact" style={{backgroundImage: `url(${ BG })`}}>
        <Contact_form />

        <Column md={6} md_pull={6} className="contact-chanels">
          { this.props.contacts.map((contact, i) =>
            <Contact_link {...contact} key={i} />)
          }
        </Column>
      </Section>
    )
  }
}

ViewContact.propTypes = {
  sectionConf: PropTypes.object,
  contacts   : PropTypes.array
};
function mapStateToProps(state) {
  return {
    sectionConf: state.sections.contact,
    contacts   : state.contacts
  }
}
  
export default connect(mapStateToProps)(ViewContact);

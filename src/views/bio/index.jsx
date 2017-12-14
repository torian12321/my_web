import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import Section      from 'Section';
import BioCard      from './Bio_card';
import styles       from './_style';

class ViewBio extends React.Component {
  render() {
    return (
      <Section { ...this.props.sectionConf }>
        { this.props.bioList.map((bio, i) =>
          <BioCard {...bio} key={i}>{bio.desc}</BioCard>)
        }
      </Section>
    )
  }
}

ViewBio.propTypes = {
  sectionConf: PropTypes.object,
  bioList    : PropTypes.array
};
function mapStateToProps(state) {
  return {
    sectionConf: state.sections.biography,
    bioList    : state.biography
  }
}
  
export default connect(mapStateToProps)(ViewBio);
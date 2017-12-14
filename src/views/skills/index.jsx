import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import Section      from 'Section';
import Row  		    from 'Grid';
import Skill  		  from './Skill';
import styles       from './_style';

class ViewSkills extends React.Component {
  render() {
    return (
      <Section { ...this.props.sectionConf }>
        { this.props.skillsList.map((skillGroup, i) =>
        <div className={`skills-list c_${i+1}`} key={i}>
          <h1>{ skillGroup.title }</h1>
          { skillGroup.skills.map((s, j) => 
            <Skill type={skillGroup.iconClass} val={s.level} key={j}>{s.name}</Skill>
          )}
        </div>
        )}
      </Section>
    );
  }
};

ViewSkills.propTypes = {
  sectionConf: PropTypes.object,
  skillsList : PropTypes.array
};
function mapStateToProps(state) {
  return {
    sectionConf: state.sections.skills,
    skillsList : state.skills
  }
}

export default connect(mapStateToProps)(ViewSkills);

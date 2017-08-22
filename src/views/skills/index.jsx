
import React 		from 'react';
import PropTypes 	from 'prop-types';
import Section 		from 'Section';
import { Row } 		from 'Grid';
import Skill 		from './Skill';
import styles 		from './_style';

const data = require('data');

const ViewSkills = props =>(
	<Section { ...props.sectionConf }>

        { props.skillsList.map((skillGroup, i) => 
            <div className={"skills-list c_" + (i+1)} key={i}>
                <h1>{ skillGroup.title }</h1>
                { skillGroup.skills.map((s, j) => 
                    <Skill type={skillGroup.iconClass} val={s.level} key={j}>{s.name}</Skill>
                )}
            </div>
        )}
		
    </Section>
);

ViewSkills.propTypes = {
    sectionConf: PropTypes.object,
    skillsList : PropTypes.array
};
ViewSkills.defaultProps = {
    sectionConf: data.menu.skills,
    skillsList : data.skills
};

module.exports = ViewSkills;
var 
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section'),
{ Row }   = require('Grid'),
Skill     = require('./Skill.jsx'),
styles    = require('./_style.less');

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
    skillsList : PropTypes.array.isRequired
};
ViewSkills.defaultProps = {
    skillsList: []
};

module.exports = ViewSkills;
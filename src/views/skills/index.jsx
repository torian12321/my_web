var 
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section'),
Skill     = require('./Skill.jsx');

const ViewSkills = props =>(
	<Section { ...props.sectionConf }>
		<div className="row">

        { props.skillsList.map((skillGroup, i) => 
            <div className={"skills-list c_" + (i+1)} key={i}>
                <h1>{ skillGroup.title }</h1>
                { skillGroup.skills.map((s, j) => 
                    <Skill type={skillGroup.iconClass} val={s.level} key={j}>{s.name}</Skill>
                )}
                <div className="clear"></div>
            </div>
        )}

		</div>
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
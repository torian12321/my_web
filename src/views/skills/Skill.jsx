import React 		from 'react';
import PropTypes 	from 'prop-types';
import Rating 		from 'Rating';
import { Column }   from 'Grid';

const Skill = props => (
    <Column xs={12} sm={6} className="skill">
        { props.children } <Rating val={props.val} icon={props.type} />
    </Column>
);


Skill.propTypes = {
    children: PropTypes.any.isRequired,
    type    : PropTypes.string,
    val     : PropTypes.number
};
Skill.defaultProps = {
	type: 'star',        // star | cog | lang
	val : 0
};

module.exports = Skill;
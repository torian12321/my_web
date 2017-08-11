var
React     = require('react'),
PropTypes = require('prop-types');

const Skill = props => (
    <div className="xs-12 sm-6 skill">
        { props.children }
	    <div className={ 'rating val_' + props.val + ' ' + props.type }></div>
    </div>
);


Skill.propTypes = {
    children: PropTypes.any.isRequired,
    type    : PropTypes.string.isRequired,
    val     : PropTypes.number.isRequired,
    val_max : PropTypes.number.isRequired
};
Skill.defaultProps = {
	type   : '',        // '' | circle | lang
	val    : 0,
	val_max: 5
};

module.exports = Skill;
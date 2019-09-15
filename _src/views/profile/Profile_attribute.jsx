var
React     = require('react'),
PropTypes = require('prop-types'),
{ Row }   = require('Grid');

const Profile_attribute = props =>(
    <Row>
        <h4   className="xs-4 lg-12">{ props.label }</h4>
        <span className="xs-8 lg-12 p-b-10">{props.children}</span>
    </Row>
);


Profile_attribute.propTypes = {
    children: PropTypes.string.isRequired,
    label   : PropTypes.string.isRequired
};

module.exports = Profile_attribute;
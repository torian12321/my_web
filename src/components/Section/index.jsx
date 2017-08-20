var
React      = require('react'),
PropTypes  = require('prop-types'),
classNames = require('classnames'),
Title      = require('Title'),
{Grid, Row}= require('Grid'),
styles     = require('./_style.less');

const Section = props => (
    <section id={ props.id } className={classNames('section', props.className)} style={props.style}>
    	{ props.title ? <Title>{ props.title }</Title> : null }
        <Grid>
            <Row>{ props.children }</Row>
	    </Grid>
    </section>
);

Section.propTypes = {
    children : PropTypes.any.isRequired,
    className: PropTypes.string,
    style    : PropTypes.object,
    id       : PropTypes.string,
    title    : PropTypes.string
};

module.exports = Section;

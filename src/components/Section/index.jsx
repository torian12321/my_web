var
React      = require('react'),
PropTypes  = require('prop-types'),
Title      = require('Title'),
styles     = require('./_style.less'),
{Grid, Row}= require('Grid');

const Section = props => (
    <section id={ props.id } className={ props.className }>
    	{ props.title ? <Title>{ props.title }</Title> : null }
        <Grid>
            <Row>{ props.children }</Row>
	    </Grid>
    </section>
);

Section.propTypes = {
    children : PropTypes.any.isRequired,
    id       : PropTypes.string,
    title    : PropTypes.string,
    className: PropTypes.string
};

module.exports = Section;

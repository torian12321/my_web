import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';
import Title        from '../Title';
import {Grid, Row}  from '../Grid';
import styles       from './_style';

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

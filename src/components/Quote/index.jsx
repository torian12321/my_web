import React      from 'react';
import PropTypes  from 'prop-types';
import styles     from './_style';
import Icon       from '../Icon';

const Quote = props =>(
    <section className="💬">
        <blockquote cite={props.cite}>
            {props.text}
            {props.author ? <span className="author">{ props.author }</span> : null}
            <Icon className="icon-open"  name="quote" />
            <Icon className="icon-close" name="quote" rotate={180} />
        </blockquote>
    </section>
);

Quote.propTypes = {
    text  : PropTypes.string.isRequired,
    author: PropTypes.string,
    cite  : PropTypes.string
};

module.exports = Quote;

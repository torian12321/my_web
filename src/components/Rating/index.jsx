var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
Icon      = require('Icon'),
styles    = require('./_style.less');

const Rating = props => {
    let
    rate  = (props.val > props.of) ? props.of : props.val,
    marks = [];

    for(let i=0, m=props.of; i < m; i++){
        marks.push(
            <Icon
                key      = {i}
                name     = {props.icon}
                color    = {(i+1) > rate ? null : props.color}
                className= {(i+1) > rate ? 'o'  : null}
            />
        );
    }

    return(
        <div className={classNames('rating', props.className)}>
            {marks}
        </div>
    );
};

Rating.propTypes = {
    /** If val>of, then val=of. */
    val  : PropTypes.number,
    of   : PropTypes.number,
    color: PropTypes.string,
    icon : PropTypes.oneOf(['star', 'chat', 'cog', 'heart', 'dollar'])
};
Rating.defaultProps = {
    val : 0,
    of  : 5,
    icon: 'star'
};

module.exports = Rating;

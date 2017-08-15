var
React     = require('react'),
PropTypes = require('prop-types'),
Ball      = require('./ball'),
styles    = require('./_style.less');

const BG = props => {
    let balls = [];

    for(let i=0; i < 20; i++){
        balls.push( <Ball /> );
    }

    return(
        <div className="BG">
            {balls}
        </div>
    );
};

module.exports = BG;

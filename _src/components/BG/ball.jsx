var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less');
//https://codepen.io/rglazebrook/pen/zLGxe?editors=0010
function rand(min,max,isInt) {
  var min = min || 0, 
      max = max || 1, 
      isInt = isInt || false,
      num = Math.random()*(max - min) + min;
  return (isInt) ? Math.round(num) : num;
}

const Ball = props => {
    var size = rand(props.minSize, props.maxSize);

    let styles = {
        width    : `${size}px`,
        height   : `${size}px`,
        'opacity': rand(.1,.8),
        'top'    : rand(0),
        'left'   : rand(0)
    };

    return(
        <div className='b' style={styles} />
    );
};

Ball.propTypes = {
    minSize: PropTypes.number,
    maxSize: PropTypes.number
}

Ball.defaultProps = {
    minSize: 40,
    maxSize: 125
}


module.exports = Ball;

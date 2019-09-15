var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
icons     = require('./icons');


const Icon = props => {
  const
  iconPaths = props.name ? icons[props.name] : props.paths,
  styles = {
      width    : `${props.width}em`,
      height   : props.height ? `${props.height}em` : null,
      fill     : props.color || null,
      transform: props.rotate ? `rotate(${props.rotate}deg)` : null,
      ...props.styles
  };

  return (
    <svg
      viewBox  ={`0 0 ${props.viewBox} ${props.viewBox}`}
      style    ={styles}
      className={classNames(
        'icon',
        props.className
      )}
    >
      <g>
        {iconPaths && iconPaths.map((pathProps, i) => <path {...pathProps} key={i} />)}
      </g>
    </svg>
  )
}

Icon.propTypes = {
  name     : PropTypes.string,
  className: PropTypes.string,
  color    : PropTypes.string,
  viewBox  : PropTypes.number,

  /** Size in ems */
  width: PropTypes.number,

  /** Size in ems */
  height: PropTypes.number,

  /** Angle in deg */
  rotate   : PropTypes.number,
  
  /** The paths of a custom icon */
  paths : PropTypes.array,

  /** Aditional Styles */
  styles : PropTypes.object
}

Icon.defaultProps = {
  name   : 'home',
  paths  : [],
  rotate : 0,
  width  : 1,
  viewBox: 32,
}

module.exports = Icon;
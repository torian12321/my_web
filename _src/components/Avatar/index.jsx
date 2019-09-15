var React = require("react"),
  PropTypes = require("prop-types"),
  classNames = require("classnames"),
  styles = require("./_style.less");

const Avatar = props => (
  <div
    style={{ backgroundImage: `url(${props.src})` }}
    className={classNames("avatar", props.className)}
  />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};
Avatar.defaultProps = {
  src: "http://placeimg.com/200/200/people"
};

module.exports = Avatar;

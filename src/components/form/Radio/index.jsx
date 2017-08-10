var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid');

function RadioOption(props) {
  return (
    <label>
      <input type="radio" value={props.value} name={props.name} />
      {props.label}
    </label>
  )
}

function renderChildren(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      name: props.name
    })
  })
}



function RadioGroup(props) {
  return (
    <div class="radio-group">
      {renderChildren(props)}
    </div>
  )
}

// function Radio() {
//   return (
//     <RadioGroup name="blizzard-games">
//       <RadioOption label="Warcraft 2"  value="wc2" />
//       <RadioOption label="Warcraft 3"  value="wc3" />
//       <RadioOption label="Starcraft 1" value="sc1" />
//       <RadioOption label="Starcraft 2" value="sc2" />
//     </RadioGroup>
//   )
// }

const Radio = props => (
    <label className="control control--radio">Disabled & checked
      <input
        type    = "radio"
        name    = "radio2"
        disabled= {props.disabled}
        checked = "checked"
    />
      <div className="control__indicator" />
    </label>
);

module.exports = Radio;
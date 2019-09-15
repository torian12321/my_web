var
React     = require('react'),
PropTypes = require('prop-types'),
styles    = require('./_style.less'),
uniqid    = require('uniqid'),
Wrapper   = require('../_wrapper');

class Input extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = {value: 1}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  increment() {
    this.setState(prevState => {value: ++prevState.value});
  }
  
  decrement() {
    this.setState(prevState => {value: prevState.value > 0? --prevState.value : 0});
  }
  
  render() {
      const id = this.props.id || uniqid('input_');
    
    return (
        <Wrapper
				id        = {id}
				className = "styled-input-number"
				label     = {this.props.placeholder}
			>


        <div className="quantity-input">
            <div className="quantity-input__modifier quantity-input__modifier--left" onClick={this.decrement}>&mdash;</div>
            <input className="quantity-input__screen" type="number" value={this.state.value} readOnly />
            <div className="quantity-input__modifier quantity-input__modifier--right" onClick={this.increment}>&#xff0b;</div>  
        </div>

        </Wrapper>
    );
  }
}


Input.propTypes = {
    id         : PropTypes.string,
    disabled   : PropTypes.bool,
    value      : PropTypes.number,
    step       : PropTypes.number,
    min        : PropTypes.number,
    max        : PropTypes.number,
    placeholder: PropTypes.string,
    onChange   : PropTypes.func,
    onFocusIn  : PropTypes.func,
    onFocusOut : PropTypes.func
};
Input.defaultProps = {
    disabled  : false,
    value     : 0,
    step      : 1,
    onChange  : function(){},
    onFocusIn : function(){},
    onFocusOut: function(){}
};

module.exports = Input;

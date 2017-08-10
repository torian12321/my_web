var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid'),
styles    = require('./_style.less');

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };

        this.handleChange  = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    handleChange(){
        this.props.onChange(this.state.checked);
    }
    render() {
        const
        id      = this.props.id || uniqid('select_'),
        options = this.props.options.map((opt) => (
            <option value={opt.value} key={opt.value}>
                {opt.label}
            </option>
        ));
        
        return (
            <select onChange={this.handleChange()}>
                {options}
            </select>
        );
    }
}


Select.propTypes = {
    options : PropTypes.array.isRequired,
    disabled: PropTypes.bool,
    value   : PropTypes.number,
    step    : PropTypes.number,
    min     : PropTypes.number,
    max     : PropTypes.number,
    texted  : PropTypes.bool,
    onChange: PropTypes.func
};
Select.defaultProps = {
    disabled: false,
    value   : 0,
    step    : 1,
    min     : 0,
    max     : 100,
    texted  : false,
    onChange: function(){}
};

module.exports = Select;
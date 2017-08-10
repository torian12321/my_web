var
React     = require('react'),
PropTypes = require('prop-types'),
uniqid    = require('uniqid'),
Wrapper   = require('../_wrapper/check');

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };

        this.handleChange  = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }
    handleChange(){
        this.setState({
			checked : !this.state.checked
		}, () => this.props.onChange(this.state.checked));
    }

    render() {
        const id = this.props.id || uniqid('checkBox_');

        return (
            <Wrapper
				id        = {id}
				className = {this.props.className}
				label     = {this.props.label}
			>
                <input
                    id      = {id}
                    type    = "checkbox"
                    checked = {this.state.checked}
                    disabled= {this.props.disabled}
                    onChange= {this.handleChange}
                />
            </Wrapper>
        );
    }
}


Checkbox.propTypes = {
    id       : PropTypes.string,
    label    : PropTypes.string,
    disabled : PropTypes.bool,
    checked  : PropTypes.bool,
    className: PropTypes.string,
    onChange : PropTypes.func
};
Checkbox.defaultProps = {
    disabled: false,
    checked : false,
    onChange: function(){}
};

module.exports = Checkbox;

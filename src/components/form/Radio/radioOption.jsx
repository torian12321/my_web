var
React     = require('react'),
PropTypes = require('prop-types'),
uniqid    = require('uniqid'),
Wrapper   = require('../_wrapper/check');

class RadioOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
        };        
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setState({ checked: nextProps.checked });
        }
    }

    handleClick(){
        this.setState({
            checked: !this.state.checked
        });
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
                    type    = "radio"
                    checked = {this.state.checked}
                    disabled= {this.props.disabled}
                />
            </Wrapper>
        );
    }
}


RadioOption.propTypes = {
    id       : PropTypes.string,
    label    : PropTypes.string,
    disabled : PropTypes.bool,
    checked  : PropTypes.bool,
    className: PropTypes.string
};
RadioOption.defaultProps = {
    disabled: false,
    checked : false
};

module.exports = RadioOption;

var
React     = require('react'),
PropTypes = require('prop-types'),
classNames= require('classnames'),
uniqid    = require('uniqid');

class Radio extends React.Component {
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
        const id = this.props.id || uniqid('radio_');

        return (
            <div className={classNames('form-radio', this.props.className)}>
                <input
                    id     = {id}
                    type   = "radio"
                    name   = {this.props.name}
                    checked= {this.state.checked ? 'checked' : null}
                />
                <label htmlFor={id}>
                    {this.props.children}
                </label>
            </div>
        );
    }
}


Radio.propTypes = {
    id       : PropTypes.string,
    children : PropTypes.string,
    name     : PropTypes.string.isRequired,
    checked  : PropTypes.bool.isRequired,
    className: PropTypes.string
};
Radio.defaultProps = {
    checked: false
};

module.exports = Radio;

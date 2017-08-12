var
React      = require('react'),
PropTypes  = require('prop-types'),
classNames = require('classnames'),
Menu_btn   = require('./Menu_btn'),
Menu_panel = require('./Menu_panel'),
styles     = require('./_style.less');

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.isHidden,
            isOpen   : this.props.isOpen            
        };
    }
    toggleSlide(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    toggleVisibility(){
        // Togle on scroll
        this.setState({
            isVisible: !this.state.isOpen,
        });
    }
    render() {
        return (
            <div
                className={classNames(
                    '🦄',
                    !this.state.isVisible ? ' hidden' : null,
                    this.state.isOpen     ? ' active' : null
                )}
            >
                <Menu_btn   isOpen={ this.state.isOpen } onClick={ this.toggleSlide.bind(this) } />
                <Menu_panel isOpen={ this.state.isOpen } items={this.props.items} img={this.props.img} />
            </div>
        );
    }
}

Menu.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    isOpen   : PropTypes.bool.isRequired,
    items    : PropTypes.array.isRequired,
    img      : PropTypes.any
};
Menu.defaultProps = {
    isVisible: true,
    isOpen   : false,
    items    : []
};

module.exports = Menu;

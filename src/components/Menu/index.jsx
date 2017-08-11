var
React      = require('react'),
PropTypes  = require('prop-types'),
Menu_btn   = require('./Menu_btn.jsx'),
Menu_panel = require('./Menu_panel.jsx'),
styles    = require('./_style.less');

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
            id = 'menu'
            className={
                'menu-' +
                !this.state.isVisible ? ' hiddenn' : ''  +
                this.state.isOpen     ? ' active' : ''
            }
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

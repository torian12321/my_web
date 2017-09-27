import React        from 'react';
import PropTypes    from 'prop-types';
import classNames   from 'classNames';
import Menu_btn     from './Menu_btn';
import Menu_panel   from './Menu_panel';
import styles       from './_style';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.isVisible,
            isOpen   : this.props.isOpen            
        };
    }
    toggleSlide(){
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <div
                className={classNames(
                    '🍔',
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

import React      from 'react';
import PropTypes  from 'prop-types';
import Icon       from 'Icon';
import {Column}   from 'Grid';

class Contact_link extends React.PureComponent {
  render() {
    return (
      <Column sm={6} md={12} className='c-contact'>
        <Wrapper link={this.props.link} htmlFor={this.props.htmlFor}>
          <div className='icon-wrapper'>
            <Icon name={this.props.icon} />
          </div>
          <span>{this.props.text}</span>
        </Wrapper>
      </Column>
    )
  }
}

class Wrapper extends React.PureComponent {
  render() {
    return this.props.link ?
      <a     href   ={this.props.link} target= "_blank" >{this.props.children}</a> :
      <label htmlFor={this.props.htmlFor}>{this.props.children}</label>
  }
}


Contact_link.propTypes = {
	text   : PropTypes.string.isRequired,
	icon   : PropTypes.string,
	link   : PropTypes.string,
	htmlFor: PropTypes.string
};
Contact_link.defaultProps = {
  icon   : 'mail',
  htmlFor: 'form-name'
};

module.exports = Contact_link;
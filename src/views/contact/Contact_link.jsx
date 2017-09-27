import React        from 'react';
import PropTypes    from 'prop-types';
import Icon         from 'Icon';
import Column  		from 'Grid';

const Contact_link = props =>(
	<Column xs={12} sm={6} md={12} className='c-contact'>
		<Wrapper link={props.link} htmlFor={props.htmlFor}>
			<div className='icon-wrapper'>
				<Icon name={props.icon} />
			</div>
			<span>{ props.text }</span>
		</Wrapper>
	</Column>
);

 
const Wrapper = props =>(
	props.link ?
		<a     href   ={props.link} target= "_blank" >{props.children}</a> :
		<label htmlFor={props.htmlFor}>{props.children}</label>
	
);


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
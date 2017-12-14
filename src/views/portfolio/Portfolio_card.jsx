import React        from 'react';
import PropTypes    from 'prop-types';
import Icon   		from 'Icon';
import styles       from './_style';

const Portfolio_card = props => {
	const divStyle = {
	  backgroundImage: `url(${ props.img })`
	};

	return(
	  <Wrapper 
      className= "c-product"
      style    = { divStyle }
      href     = { props.link }
    >
			{ props.link  && <div className="link"><Icon name="link" /></div> }
			{ props.title && <h1>{ props.title }</h1> }
			{ props.desc  && <span className="desc">{ props.desc }</span> }
		</Wrapper>
	);
};

const Wrapper = props => (
	props.href ?
	<a   {...props}>{props.children}</a> :
	<div {...props}>{props.children}</div>
);


Portfolio_card.propTypes = {
	desc : PropTypes.string,
	img  : PropTypes.string,
	link : PropTypes.string,
	title: PropTypes.string    
};
Portfolio_card.defaultProps = {
	img: ''
};

module.exports = Portfolio_card;

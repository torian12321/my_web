var
React     = require('react'),
PropTypes = require('prop-types'),
Icon      = require('Icon'),
styles    = require('./_style.less');

const Portfolio_card = props => {
	const divStyle = {
	  backgroundImage: 'url(' + props.img + ')',
	};

	return(
	    <Wrapper 
	    	className= "c-product"
	    	style    = { divStyle }
	    	href     = { props.link }
	    >
			{ props.link  ? <div className="link"><Icon name="pin" /></div> : null }
			{ props.title ? <h1>{ props.title }</h1> : null }
			{ props.desc  ? <span className="desc">{props.desc }</span> : null }
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

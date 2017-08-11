var
React     = require('react'),
PropTypes = require('prop-types');

const Bio_card = props => (
    <div className={ 'c-bio ' + props.type + ' ' + props.orientation }>
        <div className="details">
            <h4>{ props.name }</h4>
            <ul>
            	{ props.date 	 ? <li className="date">{ props.date }</li> : null }
            	{ props.location ? <li className="loc">{ props.location}</li> : null }
            	{ props.link 	 ? <li className="link"><a href="<?php echo $link; ?>" target="black">{ props.linkName }</a></li> : null }
            </ul>
        </div>

        <div className="icon"></div>

        <div className="content">
            <h4>{ props.title }</h4>
            <p>{ props.children }</p>
        </div>
    </div>
);


Bio_card.propTypes = {
	children   : PropTypes.any.isRequired,
	type       : PropTypes.string.isRequired,		// job  | formation | language | travel
	orientation: PropTypes.string,				// '' | reverse'
	name       : PropTypes.string,
	date       : PropTypes.string,
	location   : PropTypes.string,
	link       : PropTypes.string,
	linkName   : PropTypes.string,
	title      : PropTypes.string    
};
Bio_card.defaultProps = {
	type       : '',
	orientation: '',
	linkName   : Bio_card.link
};

module.exports = Bio_card;

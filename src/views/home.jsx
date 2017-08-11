var
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section');

const Home = props =>(
	<Section id={props.sectionConf.id}>
	
		<div className="title">
		    Aitor<br/>
		    Palomares
		    <span>Interactive resume</span>
		</div>

		{ props.gotoLink  ? <a href={"#" + props.gotoLink } className="goDown" /> : null }
    </Section>
);

Home.propTypes = {
	sectionConf : PropTypes.object,
	gotoLink    : PropTypes.string
};
Home.defaultProps = {
    gotoLink: 'profile'
};

module.exports = Home;
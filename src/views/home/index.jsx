var
React     = require('react'),
PropTypes = require('prop-types'),
Section   = require('Section'),
data      = require('data'),
styles    = require('./_style.less');

const Home = props =>(
	<Section id={props.sectionConf.id} className="section-main">
	
		<div className="title-main">
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
	sectionConf : data.menu.home,
    gotoLink    : data.menu.profile.id
};

module.exports = Home;
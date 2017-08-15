var
React             = require('react'),
PropTypes         = require('prop-types'),
Section           = require('Section'),
Avatar            = require('Avatar'),
{ Column }        = require('Grid'),
data              = require('data'),
AvatarImg         = require('./avatar.jpg'),
Profile_attribute = require('./Profile_attribute');

const Profile = props =>(
	<Section { ...props.sectionConf }>
    	<div className="row-spacing">

            <Column xs={12} sm={5} lg={3}>
                <Avatar className="m-x-auto" src={AvatarImg} size="lg"/>
            </Column>

            <div className="xs-12 sm-7 lg-3 lg-push-6 p-b-30 details">
                <h3 className="p-b-20">Details</h3>
                <Profile_attribute label="Name">Aitor</Profile_attribute>
                <Profile_attribute label="Age">29</Profile_attribute>
                <Profile_attribute label="Location">Dublin, Ireland</Profile_attribute>
            </div>

            <div className="xs-12 sm-12 lg-6 lg-pull-3 m-b-30">
                <h3>Sumary</h3>
                <p>I am an allround web developer. I am a junior developer with good knowledge of front-end techniques. I love structure and order and I also stand for user friendly designs. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you will learn faster and more.</p>
            </div>

    	</div>
    </Section>
);

Profile.propTypes = {
    sectionConf: PropTypes.object
};
Profile.defaultProps = {
	sectionConf: data.menu.profile
};

module.exports = Profile;
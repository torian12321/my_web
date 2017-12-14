import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import Icon   		  from 'Icon';
import Section		  from 'Section';
import styles       from './_style';

class Home extends React.Component {
  render() {
    return (
      <Section id={this.props.sectionConf.id} className="section-main">

        <div className="title-main">
          Aitor<br/>
          Palomares
          <span>Interactive resume</span>
        </div>

        { this.props.gotoLink &&
          <a href={`#${this.props.gotoLink}`} className="goDown"><Icon name='down' /></a>
        }
      </Section>
    );
  }
}

Home.propTypes = {
  sectionConf : PropTypes.object,
  gotoLink    : PropTypes.string
};
function mapStateToProps(state) {
  return {
    sectionConf: state.sections.home,
    gotoLink   : state.sections.profile.id
  }
}

export default connect(mapStateToProps)(Home);

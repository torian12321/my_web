import React            from 'react';
import PropTypes        from 'prop-types';
import { connect }      from 'react-redux';
import BG               from 'BG';
import Menu             from 'Menu';
import Quote            from 'Quote';
import ViewHome         from './home';
import ViewBio          from './bio';
import ViewContact      from './contact';
import ViewPortfolio    from './portfolio';
import ViewProfile      from './profile';
import ViewSkills       from './skills';

class Main extends React.Component {
  render() {
    return (
      <div>
        <BG />
        <Menu 
          items={[
            this.props.sections.home,
            this.props.sections.profile,
            this.props.sections.biography,
            this.props.sections.skills,
            this.props.sections.portfolio,
            this.props.sections.contact,
        ]}/>

        <ViewHome />
        <ViewProfile />

        <Quote {...this.props.quotes[0]} />
        <ViewBio />

        <Quote {...this.props.quotes[1]} />
        <ViewSkills />

        <Quote {...this.props.quotes[2]} />
        <ViewPortfolio />

        <Quote {...this.props.quotes[3]} />
        <ViewContact />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    sections: state.sections,
    quotes  : state.quotes
  }
}

export default connect(mapStateToProps)(Main);

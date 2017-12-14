import React        	from 'react';
import PropTypes    	from 'prop-types';
import { connect }    from 'react-redux';
import Section   		  from 'Section';
import { Column }		  from 'Grid';
import Portfolio_card	from './Portfolio_card';

class Portfolio extends React.Component {
  render() {
    return (
      <Section { ...this.props.sectionConf }>
        { this.props.proyects.map(proyect =>
          <Column xs={12} sm={6} lg={4} key={proyect.title}><Portfolio_card {...proyect} /></Column>
        )}
      </Section>
    );
  }
}

Portfolio.propTypes = {
	sectionConf: PropTypes.object,
	proyects   : PropTypes.array
};
function mapStateToProps(state) {
  return {
    sectionConf: state.sections.portfolio,
    proyects   : state.portfolio
  }
}

export default connect(mapStateToProps)(Portfolio);
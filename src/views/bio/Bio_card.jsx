import React        from 'react';
import PropTypes    from 'prop-types';
import Icon         from 'Icon';

class Bio_card extends React.PureComponent {
  render() {
    const props = this.props;

    return (
      <div className={ 'c-bio ' + props.type + ' ' + props.orientation }>
        <div className="details">
          <h4>{ props.name }</h4>
          <ul>
            { props.date 	    && <li><Icon name='calendar'/>{ props.date }</li> }
            { props.location  && <li><Icon name='pin'     />{ props.location}</li> }
            { props.link 	    && <li><Icon name='link'    /><a href={props.link} target="black">{ props.linkName }</a></li> }
          </ul>
        </div>

        <div className="icon-wrapp">
          <Icon name={props.icon}/>
        </div>
        
        <div className="content">
          <h4>{ props.title }</h4>
          <p>{ props.children }</p>
        </div>
      </div>
    )
  }
}


Bio_card.propTypes = {
  children   : PropTypes.any.isRequired,
  type       : PropTypes.string,    // job  | formation | language | travel
  icon       : PropTypes.string,    // job  | formation | language | travel
  orientation: PropTypes.string,    // ''   | reverse'
  name       : PropTypes.string,
  date       : PropTypes.string,
  location   : PropTypes.string,
  link       : PropTypes.string,
  linkName   : PropTypes.string,
  title      : PropTypes.string    
};
Bio_card.defaultProps = {
  icon       : 'cog',
  linkName   : Bio_card.link
};

module.exports = Bio_card;

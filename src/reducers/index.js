import { combineReducers } from 'redux';
import ContactsReducers from './_contacts';
import BiographyReducers from './_biography';
import SkillsReducers from './_skills';
import SectionsReducers from './_sections';
import QuotesReducers from './_quotes';
import PortfolioReducers from './_portfolio';

export default combineReducers({
  biography : BiographyReducers,
  contacts  : ContactsReducers,
  portfolio : PortfolioReducers,
  quotes    : QuotesReducers,
  skills    : SkillsReducers,
  sections  : SectionsReducers
});

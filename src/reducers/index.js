import { combineReducers } from 'redux';
import ReducerCountries from './reducer-countries';
import ReducerRates from './reducer-rates';

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries,
  ratesReducer: ReducerRates
});

export default rootReducer;

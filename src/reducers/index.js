import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import equipes from './equipe/reducer-equipe';

export const rootReducer = combineReducers({
  form: formReducer,
  equipes

});

export default rootReducer;

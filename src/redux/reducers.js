import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import classesReducer from './classes/classes.reducer';

const appReducers = combineReducers({
  user: userReducer,
  classes: classesReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;

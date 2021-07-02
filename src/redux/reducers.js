import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import classesReducer from './classes/classes.reducer';
import hotTopicReducer from './hot_topic/HotTopic.reducer';
import childrenReducer from './children/children.reducer';

const appReducers = combineReducers({
  user: userReducer,
  classes: classesReducer,
  hotTopic: hotTopicReducer,
  children: childrenReducer,
});

const rootReducers = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }

  return appReducers(state, action);
};

export default rootReducers;

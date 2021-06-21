import {all} from 'redux-saga/effects';
import userSaga from './user/user.saga';
import hotTopicSaga from '@app/redux/hot_topic/HotTopic.saga';

export default function* rootSaga() {
  yield all([userSaga(), hotTopicSaga()]);
}

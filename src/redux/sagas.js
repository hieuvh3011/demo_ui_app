import {all} from 'redux-saga/effects';
import userSaga from './user/user.saga';
import hotTopicSaga from '@app/redux/hot_topic/HotTopic.saga';
import childrenSaga from "@app/redux/children/children.saga";

export default function* rootSaga() {
  yield all([userSaga(), hotTopicSaga(), childrenSaga()]);
}

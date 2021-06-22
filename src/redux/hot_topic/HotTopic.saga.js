import {put, all, takeLatest} from 'redux-saga/effects';
import {PRESS_LIKE_ARTICLE} from '@app/redux/hot_topic/HotTopic.type';
import {initialState} from '@app/redux/hot_topic/HotTopic.reducer';
import {
  changeListArticle,
  selectArticle,
} from '@app/redux/hot_topic/HotTopic.action';

function* likeArticle(action) {
  const selectedArticle = action.payload.data;
  const changedArticle = {...selectedArticle, isLike: !selectedArticle.isLike};
  const changedList = [];
  initialState.articleList.map((item, index) => {
    if (item.id === selectedArticle.id) {
      changedList.push(changedArticle);
    } else {
      changedList.push(item);
    }
  });
  yield put(selectArticle(changedArticle));
  yield put(changeListArticle(changedList));
}

function* actionWatcher() {
  yield takeLatest(PRESS_LIKE_ARTICLE, likeArticle);
}

export default function* hotTopicSaga() {
  yield all([actionWatcher()]);
}

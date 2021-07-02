import {put, all, takeLatest} from 'redux-saga/effects';

import {
  ADD_CHILD,
  FETCH_LIST_CHILDREN,
  ON_PRESS_ADD_CHILD,
  UPDATE_CHILD_LIST,
  UPDATE_CURRENT_CHILD_TO_LIST,
} from '@app/redux/children/children.action';
import {initialState} from '@app/redux/children/children.reducer';

function* fetchListChildren(action) {}

function* addChild() {
  const blankItem = initialState.selectedChild;
  yield put({type: ADD_CHILD, payload: {data: blankItem}});
}

function* updateCurrentChildToList(action) {
  const child = action.payload.data;

  const updatedList = [];
  initialState.childrenProfile.map((item, index) => {
    if (item.id === child.id) {
      updatedList.push(child);
      console.log('child = ', child);
    } else {
      updatedList.push(item);
      console.log('other item = ', item);
    }
  });
  yield put({type: UPDATE_CHILD_LIST, payload: {data: updatedList}});
}

function* actionWatcher() {
  yield takeLatest(FETCH_LIST_CHILDREN, fetchListChildren);
  yield takeLatest(ON_PRESS_ADD_CHILD, addChild);
  // yield takeLatest(UPDATE_CURRENT_CHILD_TO_LIST, updateCurrentChildToList);
}

export default function* childrenSaga() {
  yield all([actionWatcher()]);
}

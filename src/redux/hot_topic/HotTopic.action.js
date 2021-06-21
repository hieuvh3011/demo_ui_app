import {
  CHANGE_LIST_ARTICLE,
  PRESS_LIKE_ARTICLE,
  SELECT_ARTICLE,
  SELECT_TOPIC,
} from '@app/redux/hot_topic/HotTopic.type';

export const selectTopic = selectedTopic => {
  return {
    type: SELECT_TOPIC,
    payload: {data: selectedTopic},
  };
};

export const selectArticle = selectedArticle => ({
  type: SELECT_ARTICLE,
  payload: {data: selectedArticle},
});

export const pressLikeArticle = selectedArticle => ({
  type: PRESS_LIKE_ARTICLE,
  payload: {data: selectedArticle},
});

export const changeListArticle = list => ({
  type: CHANGE_LIST_ARTICLE,
  payload: {data: list},
});

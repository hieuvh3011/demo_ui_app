import {SELECT_ARTICLE, SELECT_TOPIC} from '@app/redux/hot_topic/HotTopic.type';

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

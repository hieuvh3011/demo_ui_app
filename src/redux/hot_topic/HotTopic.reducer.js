import * as types from './HotTopic.type';

const initialState = {
  topicList: [
    {id: 1, text: 'Topic 1', isUpdated: true},
    {id: 2, text: 'Topic 2', isUpdated: true},
    {id: 3, text: 'Topic 3', isUpdated: true},
    {id: 4, text: 'Topic 4'},
    {id: 5, text: 'Topic 5'},
    {id: 6, text: 'Topic 6'},
    {id: 7, text: 'Topic 7'},
    {id: 8, text: 'Topic 8'},
    {id: 9, text: 'Topic 9'},
    {id: 10, text: 'Topic 10'},
    {id: 11, text: 'Topic 11'},
    {id: 12, text: 'Topic 12'},
    {id: 13, text: 'Topic 13'},
  ],
  selectedTopic: {},
  articleList: [
    {
      id: 1,
      title: 'Article 1',
      description: 'Description 1',
      likes: 12,
      isLike: true,
    },
    {
      id: 2,
      title: 'Article 2',
      description: 'Description 2',
      likes: 44,
      isLike: false,
    },
    {
      id: 3,
      title: 'Article 3',
      description: 'Description 3',
      likes: 56,
      isLike: false,
    },
    {
      id: 4,
      title: 'Article 4',
      description: 'Description 4',
      likes: 128,
      isLike: false,
    },
    {
      id: 5,
      title: 'Article 5',
      description: 'Description 5',
      likes: 256,
      isLike: true,
    },
    {
      id: 6,
      title: 'Article 6',
      description: 'Description 6',
      likes: 1,
      isLike: false,
    },
    {
      id: 7,
      title: 'Article 7',
      description: 'Description 7',
      likes: 13,
      isLike: true,
    },
    {
      id: 8,
      title: 'Article 8',
      description: 'Description 8',
      likes: 15,
      isLike: false,
    },
    {
      id: 9,
      title: 'Article 9',
      description: 'Description 9',
      likes: 22,
      isLike: false,
    },
    {
      id: 10,
      title: 'Article 10',
      description: 'Description 10',
      likes: 26,
      isLike: true,
    },
    {
      id: 11,
      title: 'Article 11',
      description: 'Description 11',
      likes: 3,
      isLike: true,
    },
    {
      id: 12,
      title: 'Article 12',
      description: 'Description 12',
      likes: 89,
      isLike: true,
    },
    {
      id: 13,
      title: 'Article 13',
      description: 'Description 13',
      likes: 111,
      isLike: false,
    },
    {
      id: 14,
      title: 'Article 14',
      description: 'Description 14',
      likes: 122,
      isLike: false,
    },
    {
      id: 15,
      title: 'Article 15',
      description: 'Description 15',
      likes: 36,
      isLike: false,
    },
    {
      id: 16,
      title: 'Article 16',
      description: 'Description 16',
      likes: 38,
      isLike: false,
    },
  ],
  selectedArticle: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.SELECT_TOPIC:
      return {
        ...state,
        selectedTopic: payload.data,
      };
    case types.SELECT_ARTICLE:
      return {
        ...state,
        selectedArticle: payload.data,
      };
    default:
      return state;
  }
};

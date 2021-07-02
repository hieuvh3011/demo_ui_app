import I18n from '@app/i18n/i18n';
import {placeholderImage} from '@app/assets/images';
import {
  ADD_CHILD,
  ADD_CURRENT_CHILD_TO_LIST,
  CHANGE_WEIGHT_AND_HEIGHT_DIARY,
  SELECT_BIRTHDAY,
  SELECT_CHILD,
  SELECT_GENDER,
  TYPE_FIRST_NAME,
  TYPE_LAST_NAME,
  UPDATE_CHILD_LIST,
} from '@app/redux/children/children.action';

export const initialState = {
  genderList: [
    {id: 1, text: I18n.t('profile.male')},
    {id: 2, text: I18n.t('profile.female')},
    {id: 3, text: I18n.t('profile.other')},
  ],
  childrenProfile: [],
  selectedChild: {
    id: 0,
    firstName: '',
    lastName: '',
    birthday: new Date(),
    gender: {},
    weightAndHeightDiary: [],
  },
  mode: 'add',
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_CHILD:
      return {
        ...state,
        selectedChild: payload.data,
        mode: 'add',
      };
    case SELECT_CHILD:
      return {
        ...state,
        selectedChild: payload.data,
        mode: 'edit',
      };
    case TYPE_FIRST_NAME:
      return {
        ...state,
        selectedChild: {
          ...state.selectedChild,
          firstName: payload.data,
        },
      };
    case TYPE_LAST_NAME:
      return {
        ...state,
        selectedChild: {
          ...state.selectedChild,
          lastName: payload.data,
        },
      };
    case SELECT_GENDER:
      return {
        ...state,
        selectedChild: {
          ...state.selectedChild,
          gender: payload.data,
        },
      };
    case SELECT_BIRTHDAY:
      return {
        ...state,
        selectedChild: {
          ...state.selectedChild,
          birthday: payload.data,
        },
      };
    case CHANGE_WEIGHT_AND_HEIGHT_DIARY:
      return {
        ...state,
        selectedChild: {
          ...state.selectedChild,
          weightAndHeightDiary: payload.data,
        },
      };
    case ADD_CURRENT_CHILD_TO_LIST:
      return {
        ...state,
        childrenProfile: [...state.childrenProfile, payload.data],
      };
    case UPDATE_CHILD_LIST:
      return {
        ...state,
        childrenProfile: payload.data,
      };
    default:
      return state;
  }
};

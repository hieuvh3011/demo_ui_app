import * as types from './user.type';
import I18n from '@app/i18n/i18n';

export const initialState = {
  profile: {},
  language: 'en',
  token: '',
  genderList: [
    {id: 1, text: I18n.t('profile.male'), isSelect: false},
    {id: 2, text: I18n.t('profile.female'), isSelect: false},
    {id: 3, text: I18n.t('profile.other'), isSelect: false},
  ],
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case types.GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        profile: payload,
      };
    case types.DELETE_INFO_SUCCESS:
      return {
        ...state,
        token: '',
        profile: {},
      };
    case types.STORE_USER_INFO:
      return {
        ...state,
        profile: payload,
      };
    case types.DELETE_USER_INFO:
      return {
        ...state,
        profile: {},
        token: '',
      };
    case types.RESTORE_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case types.SELECT_GENDER:
      return {
        ...state,
        genderList: payload.data,
      };
    default:
      return state;
  }
};

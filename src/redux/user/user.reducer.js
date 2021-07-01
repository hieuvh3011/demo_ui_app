import * as types from './user.type';
import I18n from '@app/i18n/i18n';
import {min, min2} from '@app/assets/images';

export const initialState = {
  profile: {},
  language: 'en',
  token: '',
  genderList: [
    {id: 1, text: I18n.t('profile.male')},
    {id: 2, text: I18n.t('profile.female')},
    {id: 3, text: I18n.t('profile.other')},
  ],
  myProfile: {
    firstName: '',
    lastName: '',
    genderList: [
      {id: 1, text: I18n.t('profile.male'), isSelect: false},
      {id: 2, text: I18n.t('profile.female'), isSelect: false},
      {id: 3, text: I18n.t('profile.other'), isSelect: false},
    ],
    photoUri: '',
  },
  spousalProfile: {
    firstName: '',
    lastName: '',
    genderList: [
      {id: 1, text: I18n.t('profile.male'), isSelect: false},
      {id: 2, text: I18n.t('profile.female'), isSelect: false},
      {id: 3, text: I18n.t('profile.other'), isSelect: false},
    ],
    photoUri: '',
  },
  childrenProfile: [
    {
      id: 1,
      firstName: 'Vũ',
      lastName: 'Minnnn',
      age: 2,
      weight: '3kg',
      height: '12cm',
      gender: {},
      imageUrl: min2,
    },
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
    case types.TYPE_MY_FIRST_NAME:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          firstName: payload.data,
        },
      };
    case types.TYPE_MY_LAST_NAME:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          lastName: payload.data,
        },
      };
    case types.SELECT_MY_GENDER:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          genderList: payload.data,
        },
      };
    case types.SELECT_MY_PHOTO:
      return {
        ...state,
        myProfile: {
          ...state.myProfile,
          photoUri: payload.data,
        },
      };
    case types.TYPE_SPOUSAL_FIRST_NAME:
      return {
        ...state,
        spousalProfile: {
          ...state.spousalProfile,
          firstName: payload.data,
        },
      };
    case types.TYPE_SPOUSAL_LAST_NAME:
      return {
        ...state,
        spousalProfile: {
          ...state.spousalProfile,
          lastName: payload.data,
        },
      };
    case types.SELECT_SPOUSAL_GENDER:
      return {
        ...state,
        spousalProfile: {
          ...state.spousalProfile,
          genderList: payload.data,
        },
      };
    case types.SELECT_SPOUSAL_PHOTO:
      return {
        ...state,
        spousalProfile: {
          ...state.spousalProfile,
          photoUri: payload.data,
        },
      };
    case types.ADD_CHILD:
      return {
        ...state,
        childrenProfile: [...state.childrenProfile, payload.data],
      };
    default:
      return state;
  }
};

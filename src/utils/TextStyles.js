import Colors from '@app/utils/colors';
import {scale} from 'react-native-size-matters';

export const Fonts = {
  defaultRegular: {
    fontFamily: 'NotoSansHKRounded-Regular',
  },
  defaultMedium: {
    fontFamily: 'NotoSansHKRounded-Medium',
  },
  defaultBold: {
    fontFamily: 'NotoSansHKRounded-Bold',
  },
  defaultSemiBold: {
    fontFamily: 'NotoSansHKRounded-Regular',
    fontWeight: '700',
  },
  defaultLight: {
    fontFamily: 'NotoSansHKRounded-Light',
  },
  defaultLightItalic: {
    fontFamily: 'NotoSansHKRounded-Light',
    fontStyle: 'italic',
  },
  defaultItalic: {
    fontFamily: 'NotoSansHKRounded-Medium',
    fontStyle: 'italic',
  },
  defaultBoldItalic: {
    fontFamily: 'NotoSansHKRounded-Bold',
    fontStyle: 'italic',
  },
};

export const textStyle = {
  sm_primary: {
    ...Fonts.defaultSemiBold,
    color: Colors.primary,
    fontSize: '11@ms',
  },
  sm_black: {
    ...Fonts.defaultSemiBold,
    color: Colors.text,
    fontSize: '11@ms',
  },
  md_primary: {
    ...Fonts.defaultSemiBold,
    color: Colors.primary,
    fontSize: '14@ms',
  },
  md_black: {
    ...Fonts.defaultSemiBold,
    color: Colors.text,
    fontSize: '14@ms',
  },
  md_bold: {
    ...Fonts.defaultBold,
    color: Colors.text,
    fontSize: '14@ms',
  },
  md_bold_italic: {
    ...Fonts.defaultBoldItalic,
    color: Colors.text,
    fontSize: '14@ms',
  },
  h1_primary: {
    ...Fonts.defaultBold,
    color: Colors.primary,
    fontSize: '28@ms',
  },
  h2_primary: {
    ...Fonts.defaultBold,
    color: Colors.primary,
    fontSize: '24@ms',
  },
  h2_black: {
    ...Fonts.defaultBold,
    color: Colors.text,
    fontSize: '24@ms',
  },
  h3_primary: {
    ...Fonts.defaultSemiBold,
    color: Colors.primary,
    fontSize: '20@ms',
  },
  h3_black: {
    ...Fonts.defaultSemiBold,
    color: Colors.text,
    fontSize: '20@ms',
  },
  h5_black: {
    ...Fonts.defaultBold,
    color: Colors.text,
    fontSize: '15@ms',
  },
};

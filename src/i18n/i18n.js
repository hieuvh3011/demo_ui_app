import I18n from 'react-native-i18n';
import en from './locales/en';
import cn from './locales/cn';

I18n.defaultLocale = 'cn';
I18n.locale = 'cn';
I18n.fallbacks = true;

I18n.translations = {
  cn,
  en,
};

export default I18n;

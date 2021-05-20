module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '@app',
        rootPathSuffix: 'src',
        extensions: ['.android.js', '.ios.js', '.js', '.json', '.native'],
      },
    ],
  ],
};

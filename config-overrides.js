const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@types': path.resolve(__dirname, 'types.ts'),
      '@src': path.resolve(__dirname, 'src'),
      '@hooks': path.resolve(__dirname, 'src/hooks/*')
    },
  };
return config;
};
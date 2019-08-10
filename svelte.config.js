const path = require('path');
const preprocess = require('svelte-preprocess');

module.exports = {
  emitCss: false,
  hotReload: true,
  preprocess: preprocess({
    scss: {
      includePaths: [path.resolve(__dirname, 'src/scss')],
      data: '@import "abstracts";',
      sourceMap: false,
    },
  }),
};

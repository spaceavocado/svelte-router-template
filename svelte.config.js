const path = require('path');
const preprocess = require('svelte-preprocess');

/**
 * Svelte config
 * @param {boolean} development flag
 * @return {object}
 */
module.exports = function(development) {
  return {
    emitCss: false,
    hotReload: true,
    preprocess: preprocess({
      scss: {
        includePaths: [path.resolve(__dirname, 'src/scss')],
        data: '@import "abstracts";',
        sourceMap: development,
      },
    }),
  };
};

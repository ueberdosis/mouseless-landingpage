module.exports = {
  devServer: {
    port: 3000,
    overlay: {
      warnings: false,
      errors: false,
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/variables.scss";',
      },
    },
  },
}

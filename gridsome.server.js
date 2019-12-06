// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const globby = require('globby')

const apps = globby.sync('./src/apps/**/*.js')
  .map(path => require(path))
  .filter(app => !app.debug)
  .map(app => ({
    ...app,
    path: `/${app.id}-keyboard-shortcuts`,
  }))

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    const appCollection = addCollection({ typeName: 'App' })

    apps.forEach(app => {
      appCollection.addNode(app)
    })
  })

  api.createPages(({ createPage }) => {
    apps.forEach(app => {
      createPage({
        path: app.path,
        component: './src/templates/App/index.vue',
        context: {
          app,
        },
      })
    })
  })
}

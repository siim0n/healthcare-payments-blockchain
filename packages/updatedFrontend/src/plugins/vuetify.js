import app from '../main.js'
(async () => {
  const Vuetify = await import('vuetify').default

  app.use(Vuetify)

  mopdule.exports = new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
  })
})()
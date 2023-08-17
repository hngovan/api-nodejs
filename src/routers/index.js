import auth from './auth.router'
import user from './user.router'

const initRoutes = app => {
  app.use('/api/v1/auth', auth)
  app.use('/api/v1/user', user)

  return app.use('/', (_, res) => {
    return res.send('Sever Common')
  })
}

module.exports = initRoutes

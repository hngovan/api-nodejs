const Sequelize = require('sequelize')
const sequelize = new Sequelize('store', 'root', '123456789', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(error => {
    console.error('Unable to connect to the database: ', error)
  })

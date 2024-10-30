const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgresql://demo:oJHn5BrWR78Zx17Mim8pqE9fPC5XTGrW@dpg-csgvgd9u0jms73elq8ng-a.frankfurt-postgres.render.com/users_db_yimi', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize

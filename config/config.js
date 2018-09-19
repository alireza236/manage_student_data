module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'db_kelola_siswa',
    host: '127.0.0.1',
    dialect: 'mysql',
    seederStorageTableName: "sequelize_data",
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000
    },
    define: {
      underscored: true
     }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql',
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000
    },
    define: {
      underscored: true
     }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql',
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000
    },
    define: {
      underscored: true
     }
  }
}
module.exports = {
  port: 8082,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.host || 'dbserver',
      storage: './tabtracker.sqlite'
    }
  }
}

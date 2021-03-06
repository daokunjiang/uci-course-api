var config = {
  development: {
    database: "uci_course_development",
    username: "",
    password: "",
    host: "localhost",
    dialect: "postgres"
  },
  test: {
    database: "uci_course__test",
    username: "root",
    password: null,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    database: process.env.DATABASE_URL
  }
}

module.exports = config;
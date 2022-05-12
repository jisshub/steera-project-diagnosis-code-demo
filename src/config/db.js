var EntitySchema = require("../entity/Diagnosis")

module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "shenron",
    database: "gessit",
    synchronize: false,
    logging: false,
   entities: [ EntitySchema ]
}
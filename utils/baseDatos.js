const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    host : 'mysql-sixtocabrera.alwaysdata.net',
    port: 3306,
    password: '37471572',
    user: '258126_sixto',
    database: 'sixtocabrera_company',
    connectionLimit:10
})

pool.query = util.promisify(pool.query);
module.exports = pool;
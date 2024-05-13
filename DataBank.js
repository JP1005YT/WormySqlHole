import mysql from "mysql";

export default class DataBank {
    constructor(host, user, password, database) {
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
        this.con = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }
    async execute(string){
        const splitCommand = string.split(' ')
        const commandToExecute = splitCommand[0]
        commandToExecute === 'select' ? this.select() : ""
        commandToExecute === 'insert' ? this.insert() : ""
        commandToExecute === 'delete' ? this.delete() : ""
        commandToExecute === 'update' ? this.update() : ""
    }
    // async select(what, where) {
    //     let sql = `SELECT ${what} FROM ${where}`;
    //     return new Promise((resolve, reject) => {
    //         this.con.query(sql, function (err, result, fields) {
    //             if (err) {
    //                 reject(err); // Se ocorrer um erro na consulta, rejeita a Promise com o erro
    //             } else {
    //                 resolve(result[0]); // Se a consulta for bem-sucedida, resolve a Promise com o resultado
    //             }
    //         });
    //     });
    // }
    async select(sqlString){
    }
}

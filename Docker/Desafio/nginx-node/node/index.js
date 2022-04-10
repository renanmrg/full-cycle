const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Renan')`
connection.query(sql);
// connection.end()

app.get('/', (req,res) => {
    let resultado = [];
    let output = "";
    connection.query("SELECT name FROM people order by id desc limit 1", function (err, result, fields) {
        if (err) 
            throw err;
        console.log(result[0].name);
        res.send('<h1>Full Cycle Rocks!</h1><br>'+result[0].name);
    });
    // resultado.forEach((obj)=>{
    //     output += obj.name+"<br>";
    // })
    
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

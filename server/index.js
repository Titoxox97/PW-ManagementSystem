const express = require ('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Glevy97!",
    database: "PasswordManagementSystem",

});

// Retrieves passwords from the front end and stores them
app.post('/addpassword', (req, res) => {
    const {password, title} = req.body

    db.query("INSERT INTO passwords (password, title) VALUES (?,?)", 
    [password, title],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            req.setEncoding("Success");
        }
    });
});



app.listen(PORT, ()=> {
    console.log('Server is running');
});
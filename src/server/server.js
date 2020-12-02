const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

/*
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'python_courses'
});
*/

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'python_courses'
});

/*
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
});

connection.end();
*/


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.get('/api/courses', (req, res) => {
    // connection.connect()
    pool.query('SELECT * FROM courses', function (err, results, fields) {
        if (err) throw err;
        console.log('The solution is: ', results, fields);
        res.json({ courses: results });
        // connection.end()
    });
});

app.get('/api/courses/:id', (req, res) => {
    pool.query('SELECT * FROM courses WHERE id = ?', [req.params.id], function (err, results, fields) {
        if (err) throw err;
        console.log('The query sql is: ', results, fields);
        res.json({ course: results });
    });
});

// https://blog.csdn.net/wopelo/article/details/79810785

// app.post('/api/post-course', (req, res, next) => {
app.post('/api/post-course', (req, res) => {
    console.log('posted.......', req.body, typeof req.body);
    /*
        let data = ''
        req.on('data', chunk => {
            data += chunk
        })
        req.on('end', () => {
            console.log(data)
            data = JSON.parse(data)
            res.send(data)
        })
        // console.log(req.body);
    */
    let course = req.body;
    pool.query('INSERT INTO courses SET ?', course, function (err, results, fields) {
        if (err) throw err;
        console.log('The query sql is: ', results, fields);
        res.json({ course: results });
    });
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port} ...`);
});

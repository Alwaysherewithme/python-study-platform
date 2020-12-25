const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'database-1.caqhpapiz7d2.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'admin123',
    database: 'python_courses'
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(session({
    secret: 'keyboard cat',
    name: 'my_session_cookie_name',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60,
        secure: false
    },
    rolling: true
}))

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


app.get('/logout', (req, res) => {
    req.session.destroy(/* err => {} */)
    res.send('logout...')
})

app.post('/api/sign-in', (req, res) => {
    pool.query('SELECT * FROM person WHERE Name = ?',
        req.body.name, function (err, results, fields) {
            if (err) throw err;
            req.session.userName = results[0].Name;
            req.session.userId = results[0].ID;
            res.json({ signinUser: results });
        });
})

function getResult(sql) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

app.get('/api/getAllCurriculums', (req, res) => {
    // connection.connect()
    pool.query('SELECT * FROM curriculum', function (err, results, fields) {
        if (err) throw err;
        res.json({ allCurriculums: results });
        // connection.end()
    });
});

app.get('/api/getMyCurriculums/:personId', async (req, res) => {
    if (req.params.Person_id == req.session.userId) {
        // pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.params.personId], async function (err, results, fields) {
        pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.session.userId], async function (err, results, fields) {
            if (err) throw err;
            let associatedCurriculumIds = [];
            for (let i = 0; i < results.length; i++) {
                associatedCurriculumIds.push(results[i].Associated_Curriculum_id);
            }
            let sql = `SELECT * FROM curriculum WHERE id IN (${associatedCurriculumIds.join(',')})`;
            let result = await getResult(sql);
            res.json({ myCurriculums: result });
        })
    }
});

app.post('/api/postMyCurriculums', (req, res) => {
    pool.query('INSERT INTO person_study SET ?',
        {
            ...req.body,
            Person_id: req.session.userId
        }, function (err, results, fields) {
            if (err) throw err;
            res.json({ myCurriculums: results });
        });
});

app.get('/api/getAllCurriculumCourses/:curriculumId', async (req, res) => {
    let sql = `SELECT * FROM curriculumcourse WHERE Associated_Curriculum_id = ${req.params.curriculumId}`;
    let result = await getResult(sql);
    let associatedCourseIds = [];
    for (let i = 0; i < result.length; i++) {
        associatedCourseIds.push(result[i].Associated_Course_id);
    }
    let sql2 = `SELECT * FROM course WHERE id IN (${associatedCourseIds.join(',')})`;
    let result2 = await getResult(sql2);
    res.json({ allCurriculumCourses: result2 });
});

app.get('/api/courses/:id', (req, res) => {
    pool.query('SELECT * FROM courses WHERE id = ?', [req.params.id], function (err, results, fields) {
        if (err) throw err;
        console.log('The query sql is: ', results, fields);
        res.json({ course: results });
    });
});

app.get('/api/getAllCourseSections/:courseId', async (req, res) => {
    let sql = `SELECT * FROM coursesection WHERE Associated_Course_id = ${req.params.courseId}`;
    let result = await getResult(sql);
    res.json({ allCourseSections: result });
});

app.get('/api/getCourseSections/:courseId', async (req, res) => {
    let sql = `SELECT * FROM coursesection WHERE Associated_Course_id = ${req.params.courseId}`;
    let result = await getResult(sql);
    res.json({ allCourseSections: result });
});

app.post('/api/postMySectionAnswers', async (req, res) => {
    let sql = `SELECT * FROM coursesection WHERE Section_ID = (${req.body.Associated_Section_id})`;
    let result = await getResult(sql);
    let trueAnswers = result[0].Answer.split(',')
    let personAnswers = req.body.Answer_Person.split(',')
    let mark = 0;
    for (let i = 0; i < trueAnswers.length; i++) {
        if (trueAnswers[i] == personAnswers[i]) {
            mark++
        }
    }
    let studyData = {
        ...req.body,
        Section_Score: (mark / trueAnswers.length).toFixed(2) * 100
        // Person_id: req.session.userId
    }
    let sql2 = `SELECT max(id) AS maxId FROM person_study WHERE Person_id = ${req.body.Person_id} AND Associated_Section_id = ${req.body.Associated_Section_id}`;
    let result2 = await getResult(sql2);
    if (result2[0].maxId) {
        pool.query('UPDATE person_study SET ? WHERE id=?', [studyData, result2[0].maxId], async function (err, results, fields) {
            if (err) throw err;
            res.json({ mySectionAnswers: results });
        });
    } else {
        pool.query('INSERT INTO person_study SET ?', studyData, async function (err, results, fields) {
            if (err) throw err;
            res.json({ mySectionAnswers: results });
        });
    }
});

app.get('/api/getMyStudy/:personId', async (req, res) => {
    console.log("/api/getMyStudy ... ", req.session.userName)
    let sql = `SELECT * FROM person_study WHERE Person_id = ${req.params.personId}`;
    let result = await getResult(sql);
    let myStudy = {};
    if (result.length > 0) {
        // for (let i = 0; i < data3.length; i++) {
        //     if ((data3[i].Associated_Section_id + '') in Object.keys(myStudy)) {
        //         continue
        //     } else {
        //         myStudy[data3[i].Associated_Section_id] = data3[i]
        //     }
        // }
        result.forEach((item, idx) => {
            !myStudy[item.Associated_Section_id] && (myStudy[item.Associated_Section_id] = item)

        })
        res.json({ myStudy: myStudy });
    }

});


const port = 5000;

app.listen(port, () => {
    console.log(`Node server starts on port ${port} ...`);
});

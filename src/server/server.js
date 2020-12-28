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

/*
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'python_courses'
});
*/

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

async function getCurriculumsByUser(personId) {
    let sql = `SELECT DISTINCT Associated_Curriculum_id FROM curriculum_person WHERE Person_id = ${personId}`;
    let result = await getResult(sql);
    console.log(" -------  getCruByUser -------", result)
    let associatedCurriculumIds = new Set();
    for (let i = 0; i < result.length; i++) {
        if(result[i].Associated_Curriculum_id) {
            associatedCurriculumIds.add(result[i].Associated_Curriculum_id);
        }
    }
    return [...associatedCurriculumIds];
}


app.get('/api/getMyCurriculums/:personId', async (req, res) => {
    /*
    // if (req.params.Person_id == req.session.userId) {
        pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.params.personId], async function (err, results, fields) {
        // pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.session.userId], async function (err, results, fields) {
            if (err) throw err;
            const associatedCurriculumIds = new Set();
            for (let i = 0; i < results.length; i++) {
                associatedCurriculumIds.add(results[i].Associated_Curriculum_id);
            }
            // let sql = `SELECT * FROM curriculum WHERE id IN (${associatedCurriculumIds.join(',')})`;
            let sql = `SELECT * FROM curriculum WHERE id IN (${[...associatedCurriculumIds].toString()})`;
            let result = await getResult(sql);
            res.json({ myCurriculums: result });
        })
    // }
    */
    let associatedCurriculumIds = await getCurriculumsByUser(req.params.personId);
    console.log("----- getMyCurri -----", associatedCurriculumIds, req.params, associatedCurriculumIds.length);
    console.log("-----",associatedCurriculumIds.length > 0 ? associatedCurriculumIds.toString() : '');
    let myCurriculums = null;
    if(associatedCurriculumIds.length > 0) {
        let sql = `SELECT * FROM curriculum WHERE id IN (${associatedCurriculumIds.toString()})`;
        console.log('------ sql -------', sql);
        let result = await getResult(sql);
        console.log("----- get -----", sql, result);
        myCurriculums = result;
    }
    res.json({ myCurriculums: myCurriculums });
    //}
});

app.post('/api/postMyCurriculum', async (req, res) => {
    let associatedCurriculumIds = await getCurriculumsByUser(req.body.Person_id);
    console.log("------ postMyCurriculum ------", associatedCurriculumIds, req.body);
    if(associatedCurriculumIds.indexOf(req.body.Associated_Curriculum_id) === -1) {
        pool.query('INSERT INTO curriculum_person SET ?', //req.body
            {
                ...req.body
            }, function (err, results, fields) {
                if (err) throw err;
                res.json({ myCurriculum: results });
            });
    } else {
        res.json({ msg: "大纲已经加过啦！" })
    }
});

app.get('/api/getAllCurriculumCourses/:curriculumId', async (req, res) => {
    let sql = `SELECT * FROM curriculumcourse WHERE Associated_Curriculum_id = ${req.params.curriculumId}`;
    let result = await getResult(sql);
    let associatedCourseIds = new Set();
    for (let i = 0; i < result.length; i++) {
        associatedCourseIds.add(result[i].Associated_Course_id);
    }
    let allCurriculumCourses = null;
    console.log("----- getAllCurriCourse -----", associatedCourseIds, [...associatedCourseIds])
    if([...associatedCourseIds].length > 0) {
        let sql2 = `SELECT * FROM course WHERE id IN (${[...associatedCourseIds].toString()})`;
        console.log("------ ", sql2)
        allCurriculumCourses = await getResult(sql2);
    }
    console.log('----- allCurCour -----', allCurriculumCourses);
    res.json({ allCurriculumCourses: allCurriculumCourses });
});

app.get('/api/courses/:id', (req, res) => {
    pool.query('SELECT * FROM courses WHERE id = ?', [req.params.id], function (err, results, fields) {
        if (err) throw err;
        console.log('The query sql is: ', results, fields);
        res.json({ course: results });
    });
});

app.get('/api/getCourseCurriculum/:courseId', async (req, res) => {
    let sql = `SELECT * FROM curriculumcourse WHERE Associated_Course_id = ${req.params.courseId}`;
    let result = await getResult(sql);
    res.json({ courseCurriculum: result });
});

app.get('/api/getCourseSections/:courseId', async (req, res) => {
    let sql = `SELECT * FROM coursesection WHERE Associated_Course_id = ${req.params.courseId}`;
    let result = await getResult(sql);
    res.json({ allCourseSections: result });
});

app.post('/api/postMySectionAnswers', async (req, res) => {
    let sql = `SELECT * FROM coursesection WHERE Section_ID = (${req.body.Associated_Section_id})`;
    let result = await getResult(sql);
    if(result.length > 0) {
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
        }
        let sql2 = `SELECT max(id) AS maxId FROM person_study WHERE Person_id = ${req.body.Person_id} AND Associated_Section_id = ${req.body.Associated_Section_id}`;
        let result2 = await getResult(sql2);
        if(result2.length > 0) {
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
        }
    }
});

app.get('/api/getMyStudy/:personId', async (req, res) => {
    console.log("/api/getMyStudy ... ", req.session.userName)
    let sql = `SELECT * FROM person_study WHERE Person_id = ${req.params.personId}`;
    let result = await getResult(sql);
    console.log(" ---- getMyStudy ----", result)
    let myStudy = {};
    if (result.length > 0) {
        // for (let i = 0; i < data3.length; i++) {
        //     if ((data3[i].Associated_Section_id + '') in Object.keys(myStudy)) {
        //         continue
        //     } else {
        //         myStudy[data3[i].Associated_Section_id] = data3[i]
        //     }
        // }
        result.forEach((item) => {
            !myStudy[item.Associated_Section_id] && (myStudy[item.Associated_Section_id] = item)
        })
    }
    console.log('--------', myStudy)
    res.json({ myStudy: myStudy });

});


const port = 5000;

app.listen(port, () => {
    console.log(`Node server starts on port ${port} ...`);
});

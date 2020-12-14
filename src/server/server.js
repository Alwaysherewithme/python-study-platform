const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session')

const router = express.Router();

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


// 3. 设置官方文档提供的中间件
app.use(session({
    secret: 'keyboard cat',   // 服务器端生成session的签名
    name: 'my_session_cookie_name',   // 修改session对应cookie的名称
    resave: true,   // 强制保存session，即使它并没有变化
    saveUninitialized: true,   // 强制将未初始化的session存储
    cookie: {
        maxAge: 1000 * 60,
        secure: false   // 设置为true时，只有HTTPS协议才能访问cookie
    },
    rolling: true   // 在每次请求时强制设置cookie，这将重置cookie过期时间（默认false）
}))

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

// 4. 使用
// 设置值：req.session.username = 'Robert'
// 获取值：req.session.username
// 销毁：1) req.session.cookie.maxAge = 0;   2) req.session['session_name']='';   3) req.session.destroy((err) => {})
// app.get('/', (req, res) => {
//     if(req.session.username || req.session.age) {
//         res.send(req.session.username + ' - ' + req.session.age + ' is signed in.')
//     } else {
//         res.send('unsigned...')
//     }
// })

// app.get('/login', (req, res) => {
//     req.session.username = 'Robert'
//     req.session.age = 18
//     res.send('login...')
// })

app.get('/logout', (req, res) => {
    // 设置session过期时间（会把所有session都销毁）
    // req.session.cookie.maxAge = 0

    // 销毁指定session
    // req.session.cookie.username = ''

    req.session.destroy(/* err => {} */)
    res.send('logout...')
})

app.post('/api/sign-in', (req, res) => {
    console.log("req.boby.name : ", req.body)
    pool.query('SELECT * FROM person WHERE Name = ?',
        req.body.name, function (err, results, fields) {
            if (err) throw err;
            console.log('----- The sign in user: ', results, fields);
            // req.session.userName = results[0].Name;
            // req.session.userId = results[0].ID;
            console.log("/api/sign-in... ", req.session)
            res.json({ signinUser: results });
            // res.json({
            //     data: results
            // })
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
        console.log('The solution is: ', results, fields);
        res.json({ allCurriculums: results });
        // connection.end()
    });
});

app.get('/api/getMyCurriculums/:personId', async (req, res) => {
    console.log("/api/getMyCurri ... ", req.session)
    if (req.params.Person_id == req.session.userId) {
        // pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.params.personId], async function (err, results, fields) {
        pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.session.userId], async function (err, results, fields) {
            if (err) throw err;
            console.log('Associated_Curriculumn_id ... The solution is: ', results);
            let associatedCurriculumIds = [];
            for (let i = 0; i < results.length; i++) {
                associatedCurriculumIds.push(results[i].Associated_Curriculum_id);
            }
            let sql2 = `SELECT * FROM curriculum WHERE id IN (${associatedCurriculumIds.join(',')})`;
            let data = await getResult(sql2);
            console.log('curriculum ... The solution is: ', data);
            res.json({ myCurriculums: data });
        })
        /*
            let sql1 = `SELECT * FROM person_study WHERE Person_id = ${req.params.personId}`;
            pool.query(sql1, async function(err, result) {
                if (err) throw err;
                for (var i = 0; i < result.length; i++) {
                  var db_name = result[i].db_name;
                    console.log('db_name ...', db_name);
                    var sql = sql2.replace("{0}",db_name)
                    var res = await getResult(sql)
                    console.log(db_name+','+res[0].solution); //Here db_name is showed only the last one.
                };
                pool.end()
              });
              */
    }
});

app.post('/api/postMyCurriculums', (req, res) => {
    pool.query('INSERT INTO person_study SET ?',
        // let data = 
        // {
        //     Associated_Curriculum_id: '',
        //     Associated_Course_id: '',
        //     Associated_Section_id: ''
        // }
        {
            ...req.body,
            Person_id: req.session.userId
        }, function (err, results, fields) {
            if (err) throw err;
            console.log('The solution is: ', results, fields);
            res.json({ myCurriculums: results });
        });
});

app.get('/api/getAllCurriculumCourses/:curriculumId', async (req, res) => {
    let sql1 = `SELECT * FROM curriculumcourse WHERE Associated_Curriculum_id = ${req.params.curriculumId}`;
    let data1 = await getResult(sql1);
    console.log('');
    let associatedCourseIds = [];
    for (let i = 0; i < data1.length; i++) {
        associatedCourseIds.push(data1[i].Associated_Course_id);
    }
    let sql2 = `SELECT * FROM course WHERE id IN (${associatedCourseIds.join(',')})`;
    let data2 = await getResult(sql2);
    console.log('curriculum ... The solution is: ', data2);
    res.json({ allCurriculumCourses: data2 });
});

app.get('/api/courses/:id', (req, res) => {
    pool.query('SELECT * FROM courses WHERE id = ?', [req.params.id], function (err, results, fields) {
        if (err) throw err;
        console.log('The query sql is: ', results, fields);
        res.json({ course: results });
    });
});

app.get('/api/getAllCourseSections/:courseId', async (req, res) => {
    let sql1 = `SELECT * FROM coursesection WHERE Associated_Course_id = ${req.params.courseId}`;
    let data1 = await getResult(sql1);
    res.json({ allCourseSections: data1 });
});

app.get('/api/getCourseSections/:courseId', async (req, res) => {
    let sql1 = `SELECT * FROM coursesection WHERE Associated_Course_id = ${req.params.courseId}`;
    let data1 = await getResult(sql1);
    res.json({ allCourseSections: data1 });
});

app.post('/api/postMySectionAnswers', async (req, res) => {
    console.log("/api/postMySectionAnswers...", req.body)
    let sql2 = `SELECT * FROM coursesection WHERE Section_ID = (${req.body.Associated_Section_id})`;
    let data = await getResult(sql2);
    let trueAnswers = data[0].Answer.split(',')
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
    console.log("study data -------", studyData)
    let sql3 = `SELECT max(id) AS maxId FROM person_study WHERE Person_id = ${req.body.Person_id} AND Associated_Section_id = ${req.body.Associated_Section_id}`;
    let data3 = await getResult(sql3);
    console.log("person_study .... ", sql3, data3, data3[0].maxId)
    if (data3[0].maxId) {
        pool.query('UPDATE person_study SET ? WHERE id=?', [studyData, data3[0].maxId], async function (err, results, fields) {
            if (err) throw err;
            console.log('The solution is: ', results, fields);
            res.json({ mySectionAnswers: results });
        });
    } else {
        pool.query('INSERT INTO person_study SET ?', studyData, async function (err, results, fields) {
            if (err) throw err;
            console.log('The solution is: ', results, fields);
            res.json({ mySectionAnswers: results });
        });
    }
});

app.get('/api/getMyStudy/:personId', async (req, res) => {
    console.log("/api/getMyStudy ... ", req.session)
    // pool.query('SELECT * FROM person_study WHERE Person_id = ?', [req.params.personId], async function (err, results, fields) {
    let sql3 = `SELECT * FROM person_study WHERE Person_id = ${req.params.personId}`;
    let data3 = await getResult(sql3);
    // data3[0].Person_id
    console.log("Person Study .... ", data3)
    let myStudy = {};
    for (let i = 0; i < data3.length; i++) {
        if (data3[i].Associated_Section_id + '' in Object.keys(myStudy)) {
            continue
        } else {
            myStudy[data3[i].Associated_Section_id] = data3[i]
        }
    }
    console.log("Person Study Associated ... ", myStudy)
    res.json({ myStudy: myStudy });

    /*
        let sql1 = `SELECT * FROM person_study WHERE Person_id = ${req.params.personId}`;
        pool.query(sql1, async function(err, result) {
            if (err) throw err;
            for (var i = 0; i < result.length; i++) {
              var db_name = result[i].db_name;
                console.log('db_name ...', db_name);
                var sql = sql2.replace("{0}",db_name)
                var res = await getResult(sql)
                console.log(db_name+','+res[0].solution); //Here db_name is showed only the last one.
            };
            pool.end()
          });
          */
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

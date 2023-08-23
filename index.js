var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');


mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_project"
})

// express is used as a middleware function 
var app = express();
// puts the app in the static path
app.use(express.static('public'));
// the session gets a key-value object with the session secret inside
app.use(session({secret:"secret"}));
/* Sets the first key to the second value.
 After the view engine is set,
 you don’t have to specify the engine or load the template engine module in your app; 
 Express loads the module internally.
*/
app.set('view engine','ejs')

app.listen(3000);
// this middle ware encodes and parses the requests before you need to handle it.
app.use(bodyParser.urlencoded({extended: true}));
// handler for get requests for '/' path
app.get('/', function(req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "node_project"
    })
    con.query("SELECT * FROM cat", (err, result) => {
        res.render('pages/index', {result: result})
    })

})

app.post()
app.get('/cart', function(req, res){
    res.render('pages/cart')
})


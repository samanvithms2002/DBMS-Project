const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

//EJS and APP Config
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


//routes
app.get('/', require('./routes/index'));
app.use('/', require('./routes/index_routes'));
// app.use('/',require('./routes/authentication'))



let port = process.env.PORT;
if (port == null || port == '') {
    port = 8080;
}
app.listen(port, console.log(`Server started on port ${port}`));
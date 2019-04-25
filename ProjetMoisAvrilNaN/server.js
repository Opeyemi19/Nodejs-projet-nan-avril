require('babel-register');
let express = require('express');
let morgan = require('morgan');
let path = require('path');
let bodyParser = require('body-parser');
let twig = require('twig');
let ExpressValidator = require('express-validator');
let flash = require('connect-flash');
let session = require('express-session');
let MyqlStore = require('express-mysql-session');
let passport = require('passport');

let { database } = require('./config');
require('./lib/passport');

let app = express();

//Parametres
app.set('port', process.env.PORT || 3040);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.twig');

//Middleware

app.use(session({
    secret: 'mysqlnodesession',
    resave: false,
    saveUninitialized: false,
    store: new MyqlStore(database)
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(ExpressValidator());
app.use(flash());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Variables Globales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
})


//Routes
app.use(require('./controllers/index'));
app.use('/Sign', require('./controllers/authentification'));
app.use('/admins', require('./controllers/admin/admin'));
app.use('/admins', require('./controllers/admin/adminConstructeur/adminCostructeu'));
app.use('/admins', require('./controllers/admin/adminModel/adminModel'));
// app.use(require('./controllers/authentification'));


//Dossier public
app.use(express.static(path.join(__dirname, 'public')));

// demarrer Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
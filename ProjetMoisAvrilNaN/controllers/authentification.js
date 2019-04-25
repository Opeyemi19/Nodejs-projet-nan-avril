let express = require('express');
let db = require('../db');
let { isLoggedIn, isNotLoggedIn } = require('../lib/routsecurity');

let router = express.Router();

const passport = require('passport');
// const db = require('../database');
// const { isLoggedIn, isNotLoggedIn } = require('../lib/authenfction');

//Cette route permet d afficher le formulaire de creaction de compte
router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('Connexion/Signup');
});

//Route pour crer son compte et se connecter
router.post('/signup', isNotLoggedIn, passport.authenticate('local.Sign.signup', {
    successRedirect:  '/Sign/signin',
    failureRedirect: '/Sign/signup',
    failureFlash: true
}));

//Cette route permet de faire le Login
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('Connexion/signin');
});

//Cette route permet de faire le Login
router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.Sign.signin', {
        successRedirect: '/',
        failureRedirect: '/Sign/signin',
        failureFlash: true
    })(req, res, next);
});



//Route pour se deconnecter
router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/');
});


module.exports = router;
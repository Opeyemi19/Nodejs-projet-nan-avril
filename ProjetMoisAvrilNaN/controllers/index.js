let express = require('express');
let db = require('../db');
let { isLoggedIn } = require('../lib/routsecurity');
let router = express.Router();

// Route index
router.get('/', (req, res) => {
    res.render('index',{
        Title: 'Home'
    });
});

// Route Constructeur
router.get('/constructeur', async(req, res) => {
    let condb = await db.query('SELECT * FROM `constructeur_maison` ORDER BY `constructeur_maison`.`imageConstr1` DESC');
    res.render('constructeur/indexconstruc',{
        condb,
        Title: 'Constructeur'
    });
});

router.get('/constructeur/formulairconstruteu/:id', isLoggedIn, (req, res) => {
        // let id = req.params;
        res.render('formulairconstruteu',{
        Title: 'Contact Constructeur',
        // succes: req.session.succes,
        // errors: req.session.errors
    });
    // req.session.errors = null;
});

router.post('/constructeur/formulairconstruteu/:id', isLoggedIn, async(req, res) => {
    
    // let id = req.params; //Quand j utilise celui la on met une Erreur SQL  de Clé Etrangere d ou on ne peux pas utiliser 
    // le (req.params) dans ce cas Mais si c etait pour modifier les elements dans ntre BD la on va afficher les Elements et recuperer ID
    // la le (req.params) a l est marche.
    // D'ou ici Ce qui j ai fais est de modifier l' URL du bouton Contacter un constructeur qui va afficher id de l element en question ou on clique le bouton 
    // et on recupere son "id" pour l' afficher dans notre URL de formulaire et recuperer maitenant "id" de l' element grace á (req.params.id)
    // et maintenant faire le POST de notre Element pour mettre dans notre BD (contact_constructeur);


    let id = req.params.id;
    let { FullName, Telephone, Email, Localisation_Projet, Question_Poser } = req.body;
    let contaProje = { FullName, Telephone, Email, Localisation_Projet, Question_Poser, constructeur_id: id, user_id: req.user.id }
    // let contaProje = { FullName, Telephone, Email, Localisation_Projet, Question_Poser };
    // console.log(contaProje)
    req.check('FullName', 'Ce champ Nom et Prenom est vide').not().isEmpty();
    req.check('Telephone', 'Ce champ telephone est vide').not().isEmpty();
    req.check('Email', 'Ce champ Email est vide').not().isEmpty().isEmail();
    req.check('Localisation_Projet', 'Le champ Localisation est vide').not().isEmpty();
    req.check('Question_Poser', 'Ce champ Preoccupation est vide').not().isEmpty();
    
    let errors = req.validationErrors();
    if (errors) {
        // req.session.errors = errors;
        // req.session.succes = false;
        // res.redirect('/constructeur/formulairconstruteu');
        res.render('formulairconstruteu',{
            errors:errors,
            contaProje: contaProje
        })
    } else {
        // req.session.succes = true;      
        await db.query('INSERT INTO contact_constructeur set ?', [contaProje]);
        // await db.query('INSERT INTO constructeur_maison set ?', [newAdd]);
        req.flash('success', "Merci d'avoir Remplir le formulaire !!!");
        res.redirect('/constructeur');
    }
});


// Route Model
router.get('/modele', async(req, res) => {
    let ModAffich = await db.query('SELECT * FROM model_maison ORDER BY created_at DESC');
    res.render('model/indexmodel',{
        condb: ModAffich,
        Title: 'Modele de Maison'
    });
});

router.get('/modele/formulaimodel/:id', isLoggedIn, (req, res) => {
    res.render('formulaimodel',{
    Title: 'Infos Modeles',
    // succes: req.session.succes,
    // errors: req.session.errors
    });
// req.session.errors = null;
});

router.post('/modele/formulaimodel/:id', isLoggedIn, async(req, res) => {
let id = req.params.id;
let { FullName, Telephone, Email, Lieu_habitation } = req.body;
let inmodel = { FullName, Telephone, Email, Lieu_habitation, modele_id: id, User_id: req.user.id }


// let contaProje = { FullName, Telephone, Email, Localisation_Projet, Question_Poser };
// console.log(contaProje)
req.check('FullName', 'Ce champ Nom et Prenom est vide').not().isEmpty();
req.check('Telephone', 'Ce champ telephone est vide').not().isEmpty();
req.check('Email', 'Ce champ Email est vide').not().isEmpty().isEmail();
req.check('Lieu_habitation', 'Le champ Habitation est vide').not().isEmpty();

let errors = req.validationErrors();
if (errors) {
    // req.session.errors = errors;
    // req.session.succes = false;
    // res.redirect('/modele/formulaimodel');
    res.render('formulaimodel',{
        errors: errors,
        inmodel: inmodel
    })
} else {
    // req.session.succes = true;      
    await db.query('INSERT INTO infos_model set ?', [inmodel]);
    req.flash('success', "Merci d'avoir Remplir le formulaire !!!");
    res.redirect('/modele');
}
});



// Route Construction
router.get('/construction', (req, res) => {
    res.render('construction/construction',{
        Title: 'Construction de Maison'
    });
});

// Route financement
router.get('/financier', (req, res) => {
    res.render('financement/indexfinance',{
        Title: 'Financier'
    });
});

// Route Projet
router.get('/projet', isLoggedIn, (req, res) => {
    res.render('projet',{
        Title: 'Projet',
    });
});

router.post('/projet', isLoggedIn, async(req,res) =>{
    let Addproj = { FullName, Email, phoneNumber, ville_projet, commune_projet, quartier_projet } = req.body;
    // console.log(req.body);
    req.check('FullName',"Le champ Nom et Prénom est vide").not().isEmpty();
    req.check('Email',"Le champ Email est vide ou n est pas un email").not().isEmpty().isEmail();
    req.check('phoneNumber',"Le champ télephone est vide").not().isEmpty();
    req.check('ville_projet',"Le champ Ville est vide").not().isEmpty();
    req.check('commune_projet',"Le champ commune est vide").not().isEmpty();
    req.check('quartier_projet',"Le champ quartier est vide").not().isEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('projet',{
            error: errors,
            Addpro: Addproj
        });
    } else {
        await db.query('insert into projet_const set ?', [Addproj]);
        req.flash('success', "Merci d'avoir remplir le formulaire pour votre projet et a bientôt !!!")
        res.redirect('/');
    }

});


module.exports = router;
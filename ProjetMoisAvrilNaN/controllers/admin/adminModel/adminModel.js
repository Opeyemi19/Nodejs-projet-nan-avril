let express = require('express');
let db = require('../../../db');
let upload = require('../../../lib/uploadimage');
let { isLoggedIn, isNotLoggedIn } = require('../../../lib/routsecurity');

let router = express.Router();

// Affichage et Poster les donnees dans la BD 
router.get('/modele/addModele', isLoggedIn, (req, res) =>{
    res.render('Admin/adminmodele/addModel',{
        Title: 'Modeles',
        // succes: req.session.succes,
        // errors: req.session.errors
    });
    // req.session.errors = null;
});

router.post('/modele/addModele', upload.any(), isLoggedIn, async(req, res) =>{
    let { Nom_maison, Superficie_maison, Nbre_chambres, Description, Prix } = req.body;
    let AddModel = { Nom_maison, Superficie_maison, Nbre_chambres, Image1: req.files[0].filename, Image2: req.files[1].filename, Image3: req.files[2].filename, Description, Prix }
    
    req.check('Nom_maison', "Verifier le champ Nom Maison").not().isEmpty();
    req.check('Superficie_maison', "Verifier le champ Superficie").not().isEmpty();
    req.check('Nbre_chambres', "Verifier le champ Nombre de Chambre").not().isEmpty();
    req.check('Description', "Verifier le champ description").not().isEmpty();
    req.check('Prix', "Verifier le champ prix").not().isEmpty();

    let errors = req.validationErrors();
    if (errors) {
        // req.session.errors = errors;
        // req.session.succes = false;
        // res.redirect('/Admins/modele/addModele');
        res.render('Admin/adminmodele/addModel',{
            errors:errors,
            AddModel: AddModel
        });
    } else {
        // req.session.succes = true;
        await db.query('INSERT INTO model_maison set ?', [AddModel]);
        req.flash('success', "Merci d'avoir Ajouter un Model de maison");
        res.redirect('/Admins/modele');
    }

});

//Route Affichage des elements enregistre dans la table Model
router.get('/modele', isLoggedIn, async(req, res) =>{
   let Modmaison = await db.query('SELECT * FROM model_maison');
    res.render('Admin/adminmodele/listModel',{
        Modmaison,
        Title: 'Ajouter Modele'
    });
});
        // Editer de la BD
router.get('/modele/editModel/:id', isLoggedIn, async(req, res) =>{
    let { id } = req.params;
    let maison = await db.query('SELECT * FROM model_maison WHERE id = ?', [id]);
     res.render('Admin/adminmodele/editModel',{
         maison: maison[0],
         Title: 'Modifier Modele'
     });
});

router.post('/modele/editModel/:id', isLoggedIn, async(req, res) =>{
    let { id } = req.params;
    let EditModel = { Nom_maison, Superficie_maison, Nbre_chambres, Description, Prix } = req.body;
    // console.log(EditModel);
    req.check('Nom_maison', "Verifier le champ Nom Maison").not().isEmpty();
    req.check('Superficie_maison', "Verifier le champ Superficie").not().isEmpty();
    req.check('Nbre_chambres', "Verifier le champ Nombre de Chambre").not().isEmpty();
    req.check('Description', "Verifier le champ description").not().isEmpty();
    req.check('Prix', "Verifier le champ prix").not().isEmpty();

    let errors = req.validationErrors();
    if (errors) {
        req.session.errors = errors;
        req.session.succes = false;
        // res.redirect('/Admins/modele/editModel');
        res.render('Admin/adminmodele/editModel',{
            // EditModel:EditModel
        });
    } else {
        req.session.succes = true;
        await db.query('UPDATE model_maison set ? WHERE id = ?', [EditModel, id]);
        req.flash('success', "Merci d'avoir Modifier un Model de maison");
        res.redirect('/Admins/modele');
    }

});

    //Pour supprimer un element ds la BD
    router.get('/modele/delete/:id', isLoggedIn, async (req, res) => {
        let { id } = req.params;
        await db.query(`DELETE FROM model_maison WHERE id = ?`, [id]);
        req.flash('success', "L' élement a été supprime avec succes !!!");
        res.redirect('/Admins/modele');
    
    });
    


module.exports = router;
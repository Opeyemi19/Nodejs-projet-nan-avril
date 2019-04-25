let express = require('express');
let db = require('../../../db')
let upload = require('../../../lib/uploadimage');
// let swal = require('sweetalert');
let swal = require('sweetalert2')
let { isLoggedIn, isNotLoggedIn } = require('../../../lib/routsecurity');

let router = express.Router();

router.get('/constructeur/addConstruc', isLoggedIn, (req, res) => {
    res.render('Admin/adminconstruteur/addConstruc', {
        Title: 'Ajout Constructeur',
        // succes: req.session.succes,
        // errors: req.session.errors
    });
    // req.session.errors = null;
});

router.post('/constructeur/addConstruc',  upload.any(), isLoggedIn, async(req, res) => {
    // console.log(req.files[0].filename)
    let { Nom_constructeur, Localisation, description, date_Creat_Constr, Nbre_Agence } = req.body;
    let newAdd = { Nom_constructeur, Localisation, description, LogoConstr1:req.files[0].filename, date_Creat_Constr, Nbre_Agence, imageConstr1:req.files[1].filename, imageConstr2:req.files[2].filename, imageConstr3:req.files[3].filename }
    
    req.check('Nom_constructeur', 'Ce champ Nom est vide').not().isEmpty();
    req.check('Localisation', 'Ce champ localisation est vide').not().isEmpty();
    req.check('description', 'Ce champ Description est vide').not().isEmpty();
    req.check('date_Creat_Constr', 'Le champ Date est vide').not().isEmpty();
    req.check('Nbre_Agence', 'Ce champ Nombre Agence est vide ou n est pas un nombre').not().isEmpty();
    
    var errors = req.validationErrors();
    if (errors) {
        // req.session.errors = errors;
        // req.session.succes = false;
        // res.redirect('/Admins/constructeur/addConstruc');
        res.render('Admin/adminconstruteur/addConstruc',{
            errors:errors,
            newAdd: newAdd
        });
    } else {
        // req.session.succes = true;      
    await db.query('INSERT INTO constructeur_maison set ?', [newAdd]);
    req.flash('success', 'Enregistrement effectué avec succes');
    res.redirect('/Admins/constructeur');
    }
});

//Route pour l'affichage des donnees a partir de la BD ds ntre page 'indexConstruction'
router.get('/constructeur', isLoggedIn, async (req, res) => {
    let condb = await db.query('SELECT * FROM `constructeur_maison` ORDER BY `constructeur_maison`.`imageConstr1` DESC');
    // console.log(condb);
    res.render('Admin/adminconstruteur/indexConstruc', { 
        condb, 
        Title: 'Constructeur' 
    });
});

//Pour modifier un element ds la BD
    //1er partie
    router.get('/constructeur/editConstru/:id', isLoggedIn, async (req, res) => {
        const { id } = req.params;
        const link = await db.query('SELECT * FROM constructeur_maison WHERE id = ?', [id]);
        res.render('Admin/adminconstruteur/editConstruc', {lin: link[0]});
            
            //test 
        // console.log(id);
        // res.send('Editer');
    });

//Pour modifier un element ds la BD
    //2eme partie
    router.post('/constructeur/editConstru/:id',  upload.any(), isLoggedIn, async(req, res) => {
        let { id } = req.params;
        let { Nom_constructeur, Localisation, description, date_Creat_Constr, Nbre_Agence } = req.body;
        let newAdd = { Nom_constructeur, Localisation, description, date_Creat_Constr, Nbre_Agence }
        
        req.check('Nom_constructeur', 'Ce champ Nom est vide').not().isEmpty();
        req.check('Localisation', 'Ce champ localisation est vide').not().isEmpty();
        req.check('description', 'Ce champ Description est vide').not().isEmpty();
        req.check('date_Creat_Constr', 'Le champ Date est vide').not().isEmpty();
        req.check('Nbre_Agence', 'Ce champ Nombre Agence est vide ou n est pas un nombre').not().isEmpty();
        
        var errors = req.validationErrors();
        if (errors) {
            // req.session.errors = errors;
            // req.session.succes = false;
            // res.redirect('/Admins/constructeur/editConstru');
            res.render('Admin/adminconstruteur/editConstruc',{
                errors: errors,
                newAdd: newAdd
            });
        } else {
            // req.session.succes = true;      
            await db.query('UPDATE constructeur_maison set ? WHERE id = ?', [newAdd, id]);
            req.flash('success', "Merci d'avoir modifier l'element !!!");
            res.redirect('/Admins/constructeur');
        }
    });


    //Pour supprimer un element ds la BD
router.get('/constructeur/delete/:id', isLoggedIn, async (req, res) => {
    let { id } = req.params;
    await db.query(`DELETE FROM constructeur_maison WHERE id = ?`, [id]);
    req.flash('success', "L' élement a été supprime avec succes !!!");
    res.redirect('/Admins/constructeur');
});


module.exports = router;



    // const willDelete = swal({
    //     title: "Are you sure?",
    //     text: "Are you sure that you want to delete this file?",
    //     icon: "warning",
    //     buttons: ["annuller", true],
    //     dangerMode: true,
    //   });
       
    //   if (willDelete) {
    //     // let { id } = req.params
    //     await db.query('DELETE FROM constructeur_maison WHERE id = ?', [id]);
    //     swal("Deleted!", "Your imaginary file has been deleted!", "success");
    //     res.redirect('/Admins/constructeur');
    //   }
    //   else{
    //     swal("Cette operation a été annuler!",{icon: "warning",});
    //     // res.redirect('/Admins/constructeur');
    //   }
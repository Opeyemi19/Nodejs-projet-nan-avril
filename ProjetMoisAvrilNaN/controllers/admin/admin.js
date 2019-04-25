let express = require('express');
let db = require('../../db');
let { isLoggedIn, isNotLoggedIn } = require('../../lib/routsecurity');

let router = express.Router();

// Route index d' Admin
// router.get('/', isLoggedIn, (req, res) => {
//     res.render('Admin/homeadmin', {
//         Title: 'Admin'
//     });
// });


// SELECT * FROM contact_constructeur ORDER BY contact_constructeur.created_at DESC
// Route Contact construction
router.get('/ContactConstructeu', isLoggedIn, async(req, res) => {
    let contact = await db.query('SELECT con.id, con.`FullName`,con.`Telephone`,con.`Email`,con.`Localisation_Projet`,con.`Question_Poser`,con.`Created_at`,cm.`Nom_constructeur`,cm.`LogoConstr1` FROM contact_constructeur AS con JOIN constructeur_maison AS cm ON con.constructeur_id = cm.id ORDER BY con.Created_at DESC');
    res.render('Admin/contactconstructeur',{
        contact,
        Title: 'Contact Constructeur'
    });
});

router.get('/ContactConstructeu/delete/:id', isLoggedIn, async(req, res) => {
    let { id } = req.params;
    // console.log(id)
    await db.query('DELETE FROM contact_constructeur WHERE id = ?', [id]);
    req.flash('success',"Le client a ete supprimee avec succes");
    res.redirect('/Admins/ContactConstructeu');
});



// Route Infos Model
    // SELECT * FROM infos_model ORDER BY infos_model.created_at DESC
router.get('/infos', isLoggedIn, async(req, res) => {
    let infos = await db.query('SELECT im.id, im.`FullName`,im.`Telephone`,im.`Email`,im.`Lieu_habitation`,mm.Nom_maison,im.`created_at` FROM `infos_model` AS im JOIN model_maison AS mm ON im.`modele_id` = mm.id ORDER BY im.`created_at` DESC');
    res.render('Admin/infosmodele',{
        infos: infos,
        Title: 'Liste Infos'
    });
});

router.get('/infos/delete/:id', isLoggedIn, async(req,res) =>{
    let { id } = req.params;
    await db.query('delete from infos_model where id=?',[id]);
    req.flash('success',"Le client a ete supprimee avec succes");
    res.redirect('/Admins/infos');
});



// Route Projet construction
router.get('/ProjetConst', isLoggedIn, async(req, res) => {
    let recuproj = await db.query('select * from projet_const');
    res.render('Admin/projetconstruction',{
        Title: 'Liste Projet',
        recuproj: recuproj
    });
});

router.get('/ProjetConst/delete/:id', isLoggedIn, async(req, res) => {
    let { id } = req.params;
    await db.query('delete from projet_const where id=?',[id]);
    res.redirect('/Admins/ProjetConst');
});

module.exports = router;
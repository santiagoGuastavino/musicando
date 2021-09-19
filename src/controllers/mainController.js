// -------------------------------------------------------------------------- //
// REQUIRE NEEDED HELPERS OR OTHER MODULES, IF THERE ARE
// -------------------------------------------------------------------------- //
// let controller = { };
// -------------------------------------------------------------------------- //
// CREATE
// create should look like this:
// create: (req,res) => {
// let product = {
//      id: lastId(arrayOfThingsWithId) + 1,
//      ...req.body,        --> spread operator on body
// }};
// -------------------------------------------------------------------------- //
// HOW TO MODULARIZE CONTROLLER FOR PRODUCTS
// 1 GET: show all items
// 2 GET: show product <form>
// 3 GET: show product detail
// 4 POST: store product <form> fields
// 5 GET: show <form> with current product data
// 6 POST: submit changes to existing product
// 7 DELETE: remove entry
// -------------------------------------------------------------------------- //
// EXPRESS VALIDATOR
// let { validationResult } = require('express.validator');
// controller = {
// function that stores user (associated with POST)
//  store: (req,res) => {
//      let validations = validationResult(req);
//      if (validations.errors.length > 0) {
//          res.render('register-view', { 'errors':validations.mapped() } );
//      } else {
//          "NORMAL FLOW"
//          let user = { ...req.body };
//          res.redirect('/home');
//      };
//  },
// };
// NOW WE'RE ONLY MISSING, IN THE VIEW:
// <% if (locals.errors && locals.errors.fieldname) { %>
//  <%= locals.errors.fieldname.msg %> F'ING HELL OF A HACK
// <% } %>
// HOW TO "CREATE" SIMILAR ERRORS
// res.render('view', {
//  errors: {
//      fieldName: {
//          msg: { 'Password does not match (etc etc)' }
//      }
//  }
// })
// -------------------------------------------------------------------------- //
// HOW TO KEEP OLD DATA FROM <body> WHEN RENDERING VIEW w/ VALIDATION ERRORS
// here:
// if (validations.errors.length > 0) {
//  let oldData = req.body;
//  render => view + errors + oldData
// };
// IN THE VIEW:
// <input value="<%= locals.oldData ? oldData.fieldName : null %>"
// -------------------------------------------------------------------------- //
// SESSION
// let user = {
//  ...req.body
// };
// req.session.user = user;
// USING A DB
// let users = readJson('users.json');
// let userToLog;
// users.forEach(user => {
//  if (user.email == req.body.email) {
//      return userToLog = user;
//  };
// });
//  if (userToLog) {
//      if (bcrypt.compareSync(req.body.password, userToLog.password)) {
//          delete UserToLog.password;
//          req.session.loggedUser = userToLog;
//          return res.redirect('/');
//      };
//  };
// -------------------------------------------------------------------------- //
// COOKIE
// if i meet the requeriments to store a user into session,
// i can store user's info in a cookie like this:
// if (req.body.rememberMe) {
//  res.cookie('cookieName', cookieValue, { maxAge: (1000 * 60) * 5 } );
// };
// to implement a remember-me checkbox, look up session &:
// when i find both matches: e-mail & passwords, and i'm about to store in session
// req.session.loggedUser = userToLog;
// if (req.body.remember) { // that means the dude clicked the checkbox
//  res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 30 });
// };
// like that, i've stored a reference of the user in a cookie.
// i'll continue using it on a global middleware.
// -------------------------------------------------------------------------- //
// HASH USER PASSWORD
// npm i bcrypt
// let bcrypt = require('bcrypt');
// let user = {
//  ...req.body,
//  password: bcrypt.hashsync(req.body.password, 10)
// };
// let validation = bcrypt.compareSync(req.body.password, user.password);
// compareSync returns //true //false
// -------------------------------------------------------------------------- //
// HOW TO DELOG & DESTROY COOKIE
// delog: (req,res) => {
//  req.session.destroy();
//  res.clearCookie('userEmail');
//  res.redirect('/');
// },
// && router:
// router.get('/delog', controller.delog);
// -------------------------------------------------------------------------- //
// HOW TO SEQUELIZE
// having my models ready, I have to work with promises:
// first, I have to store my Database (through my created models) in a variable
// let db = require('../../database/models);
// if I'd need to make some operations, like in a MySQL query, i have to call upon
// let Op = db.Sequelize.Op; -> thy. this has all the operators. see example below
// let mainController = {
//     list: (req,res) => {
//         db.Product.findAll({
//             include: ['genre'], // this is an associated model
//             where: {    // this is one example of usage of WHERE w/ Sequelize.Op
//                 title: {
//                     [Op.Like]: '%Harry%'
//                 }
//             },
//             where: {    // this is a most simple one
//                 id: 3
//             },
//             where: {    // gt = greater than
//                 rating: {
//                     [Op.gt]: 6
//                 }
//             },
//             order: ['title','ASC'],  // example of ORDER BY
//             limit: 5,
//             offset: 10
//         })
//             .then(products => {
//                 res.render('index', {
//                     title: 'Product list',
//                     products
//                 });
//             })
//             .catch(err => {
//                 res.send(err);
//             });
//     },
//     store: (req,res) => {
//         db.Product.create({
//             title: req.body.title,
//             rating: parseFloat(req.body.rating),
//             awards: parseInt(req.body.awards),
//             releaseDate: req.body.releaseDate,
//             length: parseInt(req.body.length),
//             genreId: req.body.genre
//         });
//     }
// };
// STORE ONE ITEM W/ ONE OF IT'S PIVOT TABLES' DATA
// store: (req,res) => {
//     db.Game.create({
//         title: req.body.title.toUpperCase(),
//         img: req.file.filename,
//         price: parseFloat(req.body.price),
//         discount: numberOrNull(req.body.discount),
//         description: stringOrNull(req.body.description)
//     })
//         .then((creation) => {
//             let categories = req.body.categories.map(addOne);
                // the addOne F takes n and returns n++ //
                // remember that id starts in 1, and array in 0 //
//             categories.forEach(category => {                    
//                 db.CategoryGame.create({
//                     gameId: creation.id,
//                     categoryId: category
//                 });
//             });
//         })
//         .then(() => {
//             res.redirect('/products');
//         })
//         .catch(err => {
//             res.status(500).render('error', {
//                 status: 500,
//                 title: 'ERROR',
//                 errorDetail: err
//             });
//         });
// },
// -------------------------------------------------------------------------- //
// MANIPULATE SEQUELIZE ASSOCIATIONS
// albumList: function (req, res) {
//     db.Album.findAll({
//         attributes: [ 'nombre' ],
//         include: {
//             model: db.Cancion,
//             as: 'canciones',
//             attributes: [ 'titulo' ]
//         }
//     })
//     .then(albumes => {
//         res.status(200).json({
//             status: 200,
//             albumes
//         });
//     }).catch(err => {
//         res.status(500).json(err)
//     });
// }
// -------------------------------------------------------------------------- //
// export controller
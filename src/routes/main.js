// require express
// let router = express.Router()
// require local controller
// require local middlwares
// -------------------------------------------------------------------------- //
// router.get('/subroute',controller.module)
// -------------------------------------------------------------------------- //
// ROUTER LEVEL MIDDLEWARES GO IN BETWEEN THE SUBROUTE AND THE CONTROLLER
// router.post('subroute',logMiddlware,controller.module);
// -------------------------------------------------------------------------- //
// HOW TO MODULARIZE ROUTES FOR PRODUCTS
// 1 INDEX: show all items   --> GET
// 2 CREATE: show product <form>   --> GET
// 3 SHOW: show product detail   --> GET
// 4 STORE: store product <form> fields   --> POST
// 5 EDIT: show <form> with current product data   --> GET
// 6 UPDATE: submit changes to existing product   --> PUT
// 7 DESTROY: remove entry   --> DELETE
// -------------------------------------------------------------------------- //
// export router
const {Router} = require("express")
const {deleteAll} = require('../controller/deleteController')

const deleteRouter = Router();
deleteRouter.get("/", deleteAll);

module.exports = deleteRouter;
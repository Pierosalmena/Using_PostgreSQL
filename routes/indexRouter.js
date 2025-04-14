const {Router} = require("express");
const {getUsernames} = require('../controller/indexController')


const indexRouter = Router();

indexRouter.get("/", getUsernames)

// indexRouter.get("/?search=sup", )



module.exports = indexRouter;
const {Router} = require("express");
const {newResponse,
    createUsernameGet,
    createUsernamePost, responseForm} = require("../controller/newController.js")

const newRouter = Router();

newRouter.get("/", responseForm)
newRouter.post("/", createUsernamePost)



module.exports = newRouter;
const {Router} = require("express");
const {getUsernames} = require('../controller/indexController')
const {search} = require('../controller/indexController')

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    if (req.query.search) {
      search(req, res); // Call the search controller if there's a search query
    } else {
      getUsernames(req, res); // Call the function to display all usernames otherwise
    }
  });


module.exports = indexRouter;
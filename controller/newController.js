const db = require("../db/queries");

async function responseForm (req, res){
    res.render("index");
} 

async function createUsernamePost(req, res) {
    const {username} = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

const newResponse = (req, res) => res.send(console.log("username to be saved: ", req.body.username))

module.exports = {
    newResponse,
    createUsernamePost,
    responseForm
};

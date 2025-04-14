const db = require("../db/queries");


async function deleteAll(req, res) {
    await db.deleteUsername()
    await db.getAllUsernames();
    res.redirect("/");}
module.exports = {deleteAll}
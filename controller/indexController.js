const db = require("../db/queries");

// const response = (req, res) => res.send(console.log("usernames will be logged here - wip"));

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}
module.exports = {getUsernames };

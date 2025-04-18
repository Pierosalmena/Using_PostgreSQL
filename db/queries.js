const pool = require("./pool");

async function getAllUsernames() {
    const {rows} = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteUsername(username) {
    await pool.query("DELETE FROM usernames")
}

async function searchUser(searchWord){
    const wildcard = `%${searchWord}%`
    const {rows} = await pool.query("SELECT * FROM usernames WHERE username LIKE $1", [wildcard])
    return rows
}


module.exports = {
    getAllUsernames,
    insertUsername,
    deleteUsername,
    searchUser
};
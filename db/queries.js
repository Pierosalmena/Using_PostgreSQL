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
    await pool.query("SELECT * FROM usernames WHERE username='searchWord'")
}

module.exports = {
    getAllUsernames,
    insertUsername,
    deleteUsername
};
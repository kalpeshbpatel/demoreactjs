const db = require('../../../config/db');

const users = function () { };

users.users = async function (req, result) {
    let params = req.params;

    let General_User = db.collection('General_User');
    let findRecord = {};
    if (params.id !== undefined) {
        findRecord = await General_User.find({ id: params.id }).toArray();
    } else {
        findRecord = await General_User.find({}).toArray();
    }
    result(null, findRecord);
}

users.addUser = async function (req, result) {
    let General_User = db.collection('General_User');
    await General_User.insertOne(req, function (err, res) {
        if (err) throw err;
    });
    result(null, { 'status': 'success', 'message': 'User added successfully' });
}

users.updateUser = async function (req, result) {

    // let General_User = db.collection('General_User');
    // await General_User.insertOne(req, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    // });
    result(null, { 'status': 'success', 'message': 'User updated successfully' });
}

users.deleteUser = async function (req, result) {
    console.log(req.body);


    // let General_User = db.collection('General_User');
    // await General_User.insertOne(req, function (err, res) {
    //     if (err) throw err;
    //     console.log("1 document inserted");
    // });
    result(null, { 'status': 'success', 'message': 'User deleted successfully' });
}


module.exports = users
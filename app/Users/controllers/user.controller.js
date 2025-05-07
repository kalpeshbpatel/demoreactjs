const userModules = require('../models/user.model');

exports.users = (req, res) => {
    userModules.users(req, (err, data) => {

        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
        } else {
            res.status(200).send(data);
        }
    });
}

exports.addUser = (req, res) => {
    userModules.addUser(req.body, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
        } else {
            res.status(200).send(data);
        }
    });
}

exports.updateUser = (req, res) => {
    userModules.updateUser(req, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
        } else {
            res.status(200).send(data);
        }
    });
}

exports.deleteUser = (req, res) => {
    userModules.deleteUser(req, (err, data) => {
        if (err) {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving users." });
        } else {
            res.status(200).send(data);
        }
    });
}

exports.test = function () {
    return 12;
}
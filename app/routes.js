module.exports = app => {
    const users = require("./Users/controllers/user.controller");
    var router = require("express").Router();

    //User module
    router.get("/users/:id", users.users);
    router.get("/users", users.users);
    router.post("/users", users.addUser);
    router.put("/users", users.updateUser);
    router.delete("/users", users.deleteUser);


    app.use('/v1', router);
}
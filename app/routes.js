module.exports = app => {
    const users = require("./Users/controllers/user.controller");
    var router = require("express").Router();

    //User module
    // router.get("/users", users.users);
    // router.post("/addUser", users.addUser);
    // router.put("/updateUser", users.updateUser);
    // router.delete("/deleteUser", users.deleteUser);

    // Other Ways to add routes

    router.get("/users", users.users);
    router.post("/users", users.addUser);
    router.put("/users", users.updateUser);
    router.delete("/users", users.deleteUser);


    app.use('/v1', router);
}
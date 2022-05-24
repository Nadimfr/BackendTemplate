const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.get("/", userController.getUsers);
router.post("/", userController.createUser);

<<<<<<< HEAD
module.exports = router;
=======
router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
>>>>>>> c516a26c7716cf654217a4a5be24e3fefa4c0ed5

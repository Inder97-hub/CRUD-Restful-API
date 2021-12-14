const express = require("express");
const router = express.Router();
const userController = require('../controller');

router.post('/create', userController.userCreate );
router.get('/list', userController.userList );
router.post('/read/:id', userController.userRead );
router.patch('/update/:id', userController.userUpdate );
router.delete('/delete/:id', userController.userDelete );







module.exports = router;
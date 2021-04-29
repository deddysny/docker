const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
router.get('/', userController.get_all);
router.post('/create', userController.create_data);
router.put('/update/:id', userController.update_data);
router.post('/delete/:id', userController.delete_data);
module.exports = router;
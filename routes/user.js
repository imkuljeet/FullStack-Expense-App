const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/add-expense',userController.addExpense);
  
  router.get('/get-expense',userController.getExpense);
  
  router.delete('/delete-expense/:id',userController.deleteExpense);

  module.exports = router;
const User = require('../models/User');

const addExpense = async (req,res,next)=>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
  
    const data = await User.create({
      amount:amount,
      description:description,
      category:category
    });
    res.status(201).json({newUserDetail: data});
  }

  const getExpense = async (req, res, next) => {
    try {
      const users = await User.findAll(); 
      res.status(200).json({ allUsers: users });
    } catch (error) {
      res.status(500).json({error: error})
      console.log('Get user not working for debug',JSON.stringify(error));
    }
  }

  const deleteExpense = async (req, res,next) => {
    try {
      if (!req.params.id) {
        console.log("Id is missing");
        return res.status(400).json({ err: 'Id is missing' }); // Return a response and exit the function
      }
      
      const uId = req.params.id;
      await User.destroy({ where: { id: uId } });
  
      res.status(200).json({ message: 'User deleted successfully' }); // Sending a success response
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  module.exports = {
    addExpense,
    getExpense,
    deleteExpense
  };
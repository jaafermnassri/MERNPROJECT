const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcrypt");
// const isAuth = require('../middlewares/isAuth')
const jwt = require("jsonwebtoken");
const isAuth = require('../middlewares/isAuth');

//register
router.post('/register', async (req,res)=>{
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exists" });
    }
        const newUser = new User(req.body)
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword;
        
        await newUser.save()
        res.send({msg:"registred successfully", newUser})
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message)
    }
})

//login
router.post('/login',async (req,res)=>{
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({email});
        if (!existUser){ return res.status(400).send({ msg: "You are not registered yet" });}
        const isMatched = await bcrypt.compare(password, existUser.password);
        if (!isMatched){ return res.status(400).send({ msg: "You are not registered yet,password" });}
        const payload = { id: existUser._id };
    const token = await jwt.sign(payload, "secret");
    res.send({ user: existUser, token });
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message)
    }
})


//get current user
router.get("/current", isAuth(), async (req, res) => {
    res.send(req.user);
  });

//get all users
router.get('/', isAuth(),async (req,res)=>{
    const role = req.query.role;
    if(req.user.role === 'admin'){
    try {
      if (role == "all") {
        const users = await User.find({});
        
        return res.send(users);
      }
      const users = await User.find({ role:{$regex:role} });
      res.send(users);
    } catch (error) {
      res.status(400).send(error);
      console.log(error);
    }
  }
    else{res.status(401).send({msg:"Only admins are allowed"});}
});


//delete user
router.delete("/:idDelete",isAuth(),async (req,res)=>{
    if(req.user.role === 'admin'){
    try {
        const deleted = await User.deleteOne({_id:req.params.idDelete});
        (deleted.deletedCount)? res.send({msg:'User deleted successfully'}):res.send({msg:"User is already deleted"})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error);
    }
}
    else{res.status(401).send({msg:"Only admins are allowed"});}
})

// UPDATE USER  
router.put('/:idUpdate',isAuth(),async (req,res)=>{
    try {
        const updating = await User.updateOne({_id:req.params.idUpdate},{...req.body});
        const updated = await User.findOne({_id:req.params.idUpdate}) 
        res.send({msg:"updated successfully",updated})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error); 
    }
})
module.exports = router;

//get one user details
router.get("/:id", async (req, res) => {
    try {
      const findOneUser = await User.findOne({ _id: req.params.id });
      res.send(findOneUser);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  });
module.exports = router;